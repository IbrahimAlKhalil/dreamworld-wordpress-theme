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
            return new \WP_REST_Response(['message' => 'Not Found!', 'status' => 404], 404, [
                'Content-Type' => 'application/json'
            ]);
        }


        // Get child organizations
        global $wpdb;

        $query = $wpdb->prepare("select post_id from {$wpdb->postmeta} where meta_key = 'parent' and meta_value = %d", $posts[0]->ID);
        $result = $wpdb->get_results($query, ARRAY_A);
        $children = get_posts([
            'post__in' => array_map(function ($child) {
                return $child['post_id'];
            }, $result),
            'post_type' => 'organization',
            'post_status' => 'publish',
        ]);

        return ['content' => apply_filters('the_content', $posts[0]->post_content), 'children' => array_map(function (\WP_Post $organization) {
            return [
                'title' => $organization->post_title,
                'slug' => $organization->post_name,
                'logo' => get_field('logo', $organization->ID)
            ];
        }, $children)];
    }
}
