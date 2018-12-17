<?php

namespace App;

class ACF
{
    public function __construct()
    {
        $this->configure();
    }

    public function configure()
    {
        add_filter('acf/settings/path', function () {
            return get_theme_file_path('app/Inc/acf/');
        });


        add_filter('acf/settings/dir', function () {
            return get_theme_file_uri('app/Inc/acf/');
        });
    }
}