<?php

namespace App;

class Kirki extends \Kirki
{
    public function __construct()
    {
        parent::__construct();

        static::add_config('saharait-business', [
            'capability' => 'edit_theme_options',
            'option_type' => 'theme_mod',
        ]);
    }

    /**
     * @param array $args
     * @param string $configId
     */
    public static function add_field($args = [], $configId = 'saharait-business')
    {
        parent::add_field($configId, $args);
    }
}