<?php

namespace App\Routes;


use WP_REST_Controller;

class ThemeMod extends WP_REST_Controller
{
    public function register_routes()
    {
        register_rest_route('sahara', '/theme-mod/(?P<name>(sahara-slider|sahara-welcome))', [
            'methods' => 'GET',
            'callback' => [$this, 'get_item']
        ]);
    }

    public function get_item($request)
    {
        return get_theme_mod($request->get_param('name'));
    }
}