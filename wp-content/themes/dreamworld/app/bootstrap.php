<?php
if (is_admin()) {
    new \App\TGMPA();
}

new \App\Theme();

if (class_exists('Kirki')) {
    new \App\Customizer\Customizer();
}

// Bootstrap acf
new \App\ACF();


// Register routes

$routes = [
    \App\Routes\Menu::class,
    \App\Routes\Sister::class,
    \App\Routes\ThemeMod::class,
    \App\Routes\Page::class
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