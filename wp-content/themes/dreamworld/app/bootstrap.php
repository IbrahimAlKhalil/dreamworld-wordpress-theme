<?php

if (is_admin()) {
    new \App\TGMPA();
    new \App\Theme();

    if (class_exists('Kirki')) {
        new \App\Customizer();
    }
}