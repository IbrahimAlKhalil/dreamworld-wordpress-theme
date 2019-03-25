<?php

namespace App;

class TGMPA
{
    public $config = [
        'is_automatic' => true
    ];

    public $plugins = [
        [
            'name' => 'Kirki',
            'slug' => 'kirki',
            'required' => true,
            'force_activation' => true,
            'force_deactivation' => true
        ]
    ];

    public function __construct()
    {
        tgmpa($this->plugins, $this->config);
    }
}