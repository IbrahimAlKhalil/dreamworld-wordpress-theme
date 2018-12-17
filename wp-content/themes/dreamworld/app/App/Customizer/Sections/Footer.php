<?php
/**
 * Created by PhpStorm.
 * User: ibrahim
 * Date: 12/17/18
 * Time: 5:52 PM
 */

namespace App\Customizer\Sections;


use Kirki;
use WP_Customize_Manager;

class Footer
{
    public $id = 'sahara-footer';

    public function __construct()
    {
        $this->settings();
        $this->section();
        $this->addFieldDescription();
        $this->addFieldCopyright();
    }

    public function section()
    {
        Kirki::add_section($this->id, array(
            'title' => 'Footer',
            'description' => 'Add/Remove images in slider',
            'priority' => 30,
        ));
    }

    public function settings()
    {
        add_action('customize_register', function (WP_Customize_Manager $customizer) {
            $customizer->add_setting('sahara-footer-copyright', array(
                'type' => 'theme_mod',
                'capability' => 'edit_theme_options',
                'transport' => 'postMessage'
            ));

            $customizer->add_setting('sahara-footer-description', array(
                'type' => 'theme_mod',
                'capability' => 'edit_theme_options',
                'transport' => 'postMessage'
            ));
        });
    }

    public function addFieldCopyright()
    {
        Kirki::add_field('saharait-business', [
            'type' => 'textarea',
            'settings' => 'sahara-footer-copyright',
            'label' => 'Copyright Info',
            'section' => $this->id,
            'default' => 'Copyright © 2018 SaharaIT | Powered by React and Wordpress',
            'priority' => 15,
            'partial_refresh' => [
                'sahara-footer-copyright' => [
                    'selector' => '#small-footer small',
                    'container_inclusive' => true,
                    'render_callback' => function () {
                        return '<small>' . get_theme_mod('sahara-footer-copyright') . '</small>';
                    }
                ]
            ]
        ]);
    }

    public function addFieldDescription()
    {
        Kirki::add_field('saharait-business', [
            'type' => 'textarea',
            'settings' => 'sahara-footer-description',
            'label' => 'Description',
            'section' => $this->id,
            'default' => 'Lorem ipsum dolor sit amet, mattis consectetuer adipiscing suspendisse et justo. Praesent mattis ugue.',
            'priority' => 10,
            'partial_refresh' => [
                'sahara-footer-description' => [
                    'selector' => '#big-footer .description',
                    'container_inclusive' => true,
                    'render_callback' => function () {
                        return '<div class="row description">' . get_theme_mod('sahara-footer-description') . '</div>';
                    }
                ]
            ]
        ]);
    }
}