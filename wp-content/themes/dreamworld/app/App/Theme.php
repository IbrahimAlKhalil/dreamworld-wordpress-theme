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
            'Footer' => 'Footer Menu',
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
