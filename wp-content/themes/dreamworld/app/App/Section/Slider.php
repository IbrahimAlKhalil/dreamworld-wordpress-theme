<?php

namespace App\Section;

use Kirki;
use WP_Customize_Manager;

class Slider
{
    public $id = 'sahara-slider';

    public function __construct()
    {
        $this->settings();
        $this->section();
        $this->fieldRepeater();
    }

    public function section()
    {
        Kirki::add_section($this->id, array(
            'title' => 'Slider',
            'description' => 'Add/Remove images in slider',
            'priority' => 30,
        ));
    }

    public function settings()
    {
        add_action('customize_register', function (WP_Customize_Manager $customizer) {
            $customizer->add_setting('sahara-slider', array(
                'type' => 'theme_mod',
                'capability' => 'edit_theme_options',
                'transport' => 'refresh'
            ));
        });
    }

    public function fieldRepeater()
    {
        Kirki::add_field('saharait-business', [
            'type' => 'repeater',
            'label' => 'Images',
            'section' => $this->id,
            'priority' => 10,
            'row_label' => [
                'type' => 'text',
                'value' => 'Slide',
            ],
            'settings' => 'sahara-slider',
            'default' => [
                [
                    'image' => getImage('slider-1.jpg'),
                    'description' => '',
                ],
                [
                    'image' => getImage('slider-2.jpg'),
                    'description' => '',
                ],
                [
                    'image' => getImage('slider-3.jpg'),
                    'description' => '',
                ]
            ],
            'fields' => [
                'image' => [
                    'type' => 'image',
                    'label' => 'Image',
                    'default' => '',
                ],
                'description' => [
                    'type' => 'textarea',
                    'label' => 'Description',
                    'default' => '',
                ],
            ]
        ]);
    }
}