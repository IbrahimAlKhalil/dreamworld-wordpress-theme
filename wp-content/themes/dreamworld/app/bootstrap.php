<?php
session_start();

if (is_admin()) {
    new \App\TGMPA;
}

if (class_exists('Kirki')) {
    new \App\Customizer\Customizer();
}

// Theme features
new \App\Theme;

// acf
new \App\ACF;

// admin ajax

new \App\AdminAjax;


// Register routes

$routes = [
    \App\Routes\Menu::class,
    \App\Routes\Sister::class,
    \App\Routes\ThemeMod::class,
    \App\Routes\Page::class,
    \App\Routes\Contact::class
];

add_action('rest_api_init', function () use (&$routes) {
    foreach ($routes as $route) {
        $controller = new $route;
        $controller->register_routes();
    }
});


// Register post types

$postTypes = [
    \App\PostTypes\Sister::class
];

foreach ($postTypes as $postType) {
    new $postType;
}