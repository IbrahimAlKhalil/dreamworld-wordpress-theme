<?php

namespace App\PostTypes;

class Sister
{
    public function __construct()
    {
        $this->register();
        $this->fieldLogo();
    }

    public function register()
    {

        add_action('init', function () {

            register_post_type("sister", [
                "label" => "Sister Concerns",
                "labels" => [
                    "name" => "Sister Concerns",
                    "singular_name" => "Sister Concern",
                ],
                "description" => "",
                "public" => true,
                "publicly_queryable" => true,
                "show_ui" => true,
                "delete_with_user" => false,
                "rest_base" => "",
                "has_archive" => false,
                "show_in_menu" => true,
                "show_in_nav_menus" => true,
                "exclude_from_search" => false,
                "capability_type" => "post",
                "map_meta_cap" => true,
                "hierarchical" => false,
                "rewrite" => ["slug" => "sister", "with_front" => true],
                "query_var" => true,
                "menu_icon" => "dashicons-image-filter",
                "supports" => ["title", "editor"],
            ]);

        });
    }

    public function fieldLogo()
    {
        if (function_exists('acf_add_local_field_group')):

            acf_add_local_field_group([
                'key' => 'group_5c11ef2053b1a',
                'title' => 'Logo',
                'fields' => [
                    [
                        'key' => 'field_5c11ef72d684f',
                        'label' => 'Select Image',
                        'name' => 'logo',
                        'type' => 'image',
                        'instructions' => '',
                        'required' => 1,
                        'conditional_logic' => 0,
                        'wrapper' => [
                            'width' => '',
                            'class' => '',
                            'id' => '',
                        ],
                        'return_format' => 'array',
                        'preview_size' => 'medium',
                        'library' => 'all',
                        'min_width' => '',
                        'min_height' => '',
                        'min_size' => '',
                        'max_width' => '',
                        'max_height' => '',
                        'max_size' => '',
                        'mime_types' => '',
                    ],
                ],
                'location' => [
                    [
                        [
                            'param' => 'post_type',
                            'operator' => '==',
                            'value' => 'sister',
                        ],
                    ],
                ],
                'menu_order' => 0,
                'position' => 'side',
                'style' => 'default',
                'label_placement' => 'top',
                'instruction_placement' => 'label',
                'hide_on_screen' => [
                    0 => 'excerpt',
                    1 => 'discussion',
                    2 => 'comments',
                    3 => 'revisions',
                    4 => 'page_attributes',
                    5 => 'categories',
                ],
                'active' => 1,
                'description' => '',
            ]);

        endif;
    }
}
