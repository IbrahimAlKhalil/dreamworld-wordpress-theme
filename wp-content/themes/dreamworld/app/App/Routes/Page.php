<?php

namespace App\Routes;

use WP_Error;
use WP_REST_Controller;

class Page extends WP_REST_Controller
{
    public function register_routes()
    {
        register_rest_route('sahara', '/page/(?P<slug>.*)', [
            'methods' => 'GET',
            'callback' => [$this, 'get_item']
        ]);
    }

    public function get_item($request)
    {
        $page = get_page_by_path($request->get_param('slug'));

        if (!$page) {
            return new WP_Error(404, 'Not found!');
        }

        $content = apply_filters('the_content', $page->post_content);
        return $content;
    }
}