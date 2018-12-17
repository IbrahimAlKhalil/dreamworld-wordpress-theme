<?php

namespace App\Routes;

use DOMNode;
use DOMDocument;
use WP_REST_Controller;

class Menu extends WP_REST_Controller
{
    public function register_routes()
    {
        register_rest_route('sahara', '/menu/(?P<menu>.*)', [
            'methods' => 'GET',
            'callback' => [$this, 'get_items']
        ]);
    }

    public function get_items($request)
    {
        $dom = new DOMDocument;
        $dom->loadHTML(wp_nav_menu([
            'menu' => $request->get_param('menu'),
            'echo' => false
        ]));

        $menu = [];
        $this->parseMenu($dom->getElementsByTagName('ul')[0], $menu);
        return $menu;
    }

    public function parseMenu(DOMNode $ul, array &$menu)
    {
        $url = get_home_url();
        foreach ($ul->childNodes as $li) {
            if (XML_ELEMENT_NODE == $li->nodeType) {
                $a = $li->firstChild;
                $subMenu = $li->lastChild;
                $item = [
                    'link' => str_replace($url, '', $a->attributes['href']->nodeValue),
                    'title' => $a->nodeValue
                ];

                if (1 < $li->childNodes->count()) {
                    $item['children'] = [];
                    $this->parseMenu($subMenu, $item['children']);
                }

                array_push($menu, $item);
            }
        }
    }
}