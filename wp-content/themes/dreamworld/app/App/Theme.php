<?php

namespace App;

class Theme
{
    public function __construct()
    {
        $this->registerNavs();
    }

    protected function registerNavs()
    {
        add_action('after_setup_theme', function () {
            register_nav_menu('Header', 'Main Menu');
        });
    }
}