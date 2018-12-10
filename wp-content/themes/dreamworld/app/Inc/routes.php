<?php

add_action('rest_api_init', function () {
    register_rest_route('sahara', '/slider', [
        'methods' => 'GET',
        'callback' => function () {
            return get_theme_mod('sahara-slider');
        }
    ]);
});