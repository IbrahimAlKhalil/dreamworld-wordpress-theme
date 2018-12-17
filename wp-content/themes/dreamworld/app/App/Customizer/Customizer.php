<?php

namespace App\Customizer;

use App\Customizer\Sections\Footer;
use App\Customizer\Sections\Slider;
use App\Customizer\Sections\Welcome;
use Kirki;

class Customizer
{

    public function __construct()
    {
        // Config

        $this->setPath();
        $this->addConfig();

        // Customizer Sections
        $sections = [
            Slider::class,
            Welcome::class,
            Footer::class
        ];
        foreach ($sections as $section) {
            new $section;
        }
    }

    public function setPath()
    {
        add_filter('kirki/config', function () {
            return ['url_path' => get_theme_file_uri('Inc/kirki/')];
        });
    }

    public function addConfig()
    {
        Kirki::add_config('saharait-business', [
            'capability' => 'edit_theme_options',
            'option_type' => 'theme_mod',
        ]);
    }
}