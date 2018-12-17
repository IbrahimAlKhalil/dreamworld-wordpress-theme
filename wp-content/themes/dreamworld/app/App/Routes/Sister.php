<?php

namespace App\Routes;


use WP_Error;
use WP_Query;
use WP_REST_Controller;

class Sister extends WP_REST_Controller
{
    public function register_routes()
    {
        register_rest_route('sahara', '/sisters(?:/(?P<slug>.*))?', [
            'methods' => 'GET',
            'callback' => [$this, 'get_items']
        ]);
    }

    public function get_items($request)
    {

        if ($request->get_param('slug')) {
            return $this->get_item($request);
        }

        $sisters = [];

        $query = new WP_Query([
            'post_type' => 'sister'
        ]);

        while ($query->have_posts()) {
            $query->the_post();
            global $post;

            array_push($sisters, [
                'title' => get_the_title(),
                'slug' => $post->post_name,
                'logo' => get_field('logo')['sizes']['medium']
            ]);
        }

        wp_reset_query();

        return $sisters;
    }

    public function get_item($request)
    {
        $posts = get_posts([
            'name' => $request->get_param('slug'),
            'post_type' => 'sister',
            'post_status' => 'publish',
            'numberposts' => 1
        ]);

        if (!$posts) {
            return new WP_Error(404, 'Not found!');
        }

        return apply_filters('the_content', $posts[0]->post_content);
    }
}