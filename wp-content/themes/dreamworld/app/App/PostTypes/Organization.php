<?php

namespace App\PostTypes;

class Organization
{
    public function __construct()
    {
        $this->register();
        $this->registerFields();
    }

    public function register()
    {
        add_action('init', function () {

            register_post_type("organization", array(
                "label" => "Organizations",
                "labels" => array(
                    "name" => "Organizations",
                    "singular_name" =>  "Organization",
                ),
                "description" => "",
                "public" => true,
                "publicly_queryable" => true,
                "show_ui" => true,
                "delete_with_user" => false,
                "show_in_rest" => false,
                "rest_base" => "",
                "rest_controller_class" => "WP_REST_Posts_Controller",
                "has_archive" => false,
                "show_in_menu" => true,
                "show_in_nav_menus" => true,
                "exclude_from_search" => false,
                "capability_type" => "post",
                "map_meta_cap" => true,
                "hierarchical" => false,
                "rewrite" => array( "slug" => "organization", "with_front" => true ),
                "query_var" => true,
                "menu_icon" => "dashicons-networking",
                "supports" => array( "title", "editor", "thumbnail" ),
            ));

        });
    }

    public function registerFields()
    {
        if( function_exists('acf_add_local_field_group') ):

            acf_add_local_field_group(array(
                'key' => 'group_5ca438f79dabd',
                'title' => 'Logo',
                'fields' => array(
                    array(
                        'key' => 'field_5ca4390fee263',
                        'label' => 'Select Image',
                        'name' => 'logo',
                        'type' => 'image',
                        'instructions' => 'Select Image',
                        'required' => 1,
                        'conditional_logic' => 0,
                        'wrapper' => array(
                            'width' => '',
                            'class' => '',
                            'id' => '',
                        ),
                        'return_format' => 'url',
                        'preview_size' => 'medium',
                        'library' => 'all',
                        'min_width' => '',
                        'min_height' => '',
                        'min_size' => '',
                        'max_width' => '',
                        'max_height' => '',
                        'max_size' => '',
                        'mime_types' => '',
                    ),
                ),
                'location' => array(
                    array(
                        array(
                            'param' => 'post_type',
                            'operator' => '==',
                            'value' => 'organization',
                        ),
                    ),
                ),
                'menu_order' => 0,
                'position' => 'normal',
                'style' => 'default',
                'label_placement' => 'top',
                'instruction_placement' => 'label',
                'hide_on_screen' => '',
                'active' => 1,
                'description' => '',
            ));

            acf_add_local_field_group(array(
                'key' => 'group_5ca439a066451',
                'title' => 'Parent',
                'fields' => array(
                    array(
                        'key' => 'field_5ca439a764086',
                        'label' => 'Parent Organization',
                        'name' => 'parent',
                        'type' => 'post_object',
                        'instructions' => 'Select Parent Organization',
                        'required' => 0,
                        'conditional_logic' => 0,
                        'wrapper' => array(
                            'width' => '',
                            'class' => '',
                            'id' => '',
                        ),
                        'post_type' => array(
                            0 => 'sister',
                        ),
                        'taxonomy' => '',
                        'allow_null' => 1,
                        'multiple' => 0,
                        'return_format' => 'object',
                        'ui' => 1,
                    ),
                ),
                'location' => array(
                    array(
                        array(
                            'param' => 'post_type',
                            'operator' => '==',
                            'value' => 'organization',
                        ),
                    ),
                ),
                'menu_order' => 0,
                'position' => 'normal',
                'style' => 'default',
                'label_placement' => 'top',
                'instruction_placement' => 'label',
                'hide_on_screen' => '',
                'active' => 1,
                'description' => '',
            ));

        endif;
    }
}
