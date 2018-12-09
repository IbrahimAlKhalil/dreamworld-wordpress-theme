<?php

new \App\Theme();

add_filter('kirki/config', function () {
    return ['url_path' => get_theme_file_uri('Inc/kirki/')];
});