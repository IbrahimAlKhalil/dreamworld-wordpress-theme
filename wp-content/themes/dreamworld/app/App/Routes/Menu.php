<?php

namespace App\Routes;

use WP_REST_Controller;

class Menu extends WP_REST_Controller
{
    public function register_routes()
    {
        register_rest_route('sahara', '/menu/(?P<menu>.*)', [
            'methods' => 'GET',
            'callback' => [$this, 'get_items']
        ]);
    }

    public function get_items($request)
    {
        return getMenuArray($request->get_param('menu'));
    }
}
