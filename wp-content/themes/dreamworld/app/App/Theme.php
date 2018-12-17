<?php

namespace App;

class Theme
{
    public function __construct()
    {
        add_action('after_setup_theme', function () {
            $this->registerNavs();
            $this->addFeatureLogo();
            $this->addFeatureHeader();
        });
    }

    public function registerNavs()
    {
        register_nav_menus([
            'Header' => 'Main Menu',
            'Footer Left' => 'Footer Menu Left',
            'Footer Right' => 'Footer Menu Right'
        ]);
    }

    public function addFeatureLogo()
    {
        add_theme_support('logo');
    }

    public function addFeatureHeader()
    {
        add_theme_support('custom-header', [
            'default-image' => getImage('logo.png')
        ]);
    }
}