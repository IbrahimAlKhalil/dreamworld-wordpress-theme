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


/**
 * @param string $str
 * @param string $hash
 * @return bool
 */

function sha256Check($str, $hash)
{
    return hash('sha256', $str) == $hash;
}




/**
 * @param string $menuName
 * @return array|false
 */

function getMenuItems($menuName)
{
    if (($locations = get_nav_menu_locations()) && isset($locations[$menuName])) {
        $menu = wp_get_nav_menu_object($locations[$menuName]);
        $items = wp_get_nav_menu_items($menu->term_id);


        return array_map(function ($item) {
            return [
                'id' => $item->ID,
                'parent' => $item->menu_item_parent,
                'title' => $item->title,
                'link' => str_replace(get_home_url(), '', $item->url)
            ];
        }, $items ? $items : []);
    }

    return [];
}


/**
 * @param array $elements
 * @param int $parentId
 * @return array
 */

function buildTree(&$elements, $parentId = 0)
{

    $branch = [];

    foreach ($elements as &$element) {
        if ($element['parent'] == $parentId) {
            $children = buildTree($elements, $element['id']);
            if ($children) {
                $element['children'] = $children;
            }

            array_push($branch, $element);
            unset($element);
        }
    }
    return $branch;
}


function getMenuArray($menuName)
{
    return buildTree(getMenuItems($menuName));
}
