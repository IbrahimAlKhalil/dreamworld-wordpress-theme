<?php

/**
 * @param string $file
 * @return string
 *
 * Alias for get_theme_file_url
 */

function getAsset($file)
{
    return get_theme_file_uri('assets/build/' . $file);
}

/**
 * @param string $file
 * @return void
 *
 * Echos getAsset
 */

function asset($file)
{
    echo getAsset($file);
}


/**
 * @param string $file
 * @return string
 *
 * Returns image url from assets/src/images
 */
function getImage($file)
{
    return get_theme_file_uri('assets/src/images/' . $file);
}

/**
 * @param string $file
 * @return void
 *
 * Echos image url from assets/src/images
 */
function image($file)
{
    echo getImage($file);
}