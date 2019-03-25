<?php

namespace App;


use Gregwar\Captcha\CaptchaBuilder;

class AdminAjax
{
    public function __construct()
    {
        add_action('wp_ajax_getCaptcha', [$this, 'getCaptcha']);
        add_action('wp_ajax_nopriv_getCaptcha', [$this, 'getCaptcha']);
    }

    public function getCaptcha()
    {
        $builder = new CaptchaBuilder;
        $builder->build();
        $_SESSION['captcha'] = hash('sha256', $builder->getPhrase());

        header('Content-Type: text/plain');
        echo $builder->inline();
        wp_die();
    }
}