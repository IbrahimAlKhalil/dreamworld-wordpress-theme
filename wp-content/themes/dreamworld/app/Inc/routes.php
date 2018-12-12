<?php

add_action('rest_api_init', function () {
    function parseMenu(DOMNode $ul, array &$menu)
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
                    parseMenu($subMenu, $item['children']);
                }

                array_push($menu, $item);
            }
        }
    }


    register_rest_route('sahara', '/slider', [
        'methods' => 'GET',
        'callback' => function () {
            return get_theme_mod('sahara-slider');
        }
    ]);


    register_rest_route('sahara', '/menu/(?P<menu>.*)', [
        'methods' => 'GET',
        'callback' => function (WP_REST_Request $request) {
            $dom = new DOMDocument;
            $dom->loadHTML(wp_nav_menu([
                'menu' => $request->get_param('menu'),
                'echo' => false
            ]));

            $menu = [];
            parseMenu($dom->getElementsByTagName('ul')[0], $menu);
            return $menu;
        }
    ]);
});