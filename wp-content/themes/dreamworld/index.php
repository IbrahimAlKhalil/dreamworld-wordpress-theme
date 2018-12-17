<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php bloginfo('name') ?> - <?php bloginfo('description') ?></title>

    <!-- TODO: Add favicon -->

    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">

    <!-- This variable contains route urls -->
    <script>
        var saharaRoutes = {
            slider: '<?php echo get_rest_url(null, 'sahara/theme-mod/sahara-slider') ?>',
            menu: '<?php echo get_rest_url(null, 'sahara/menu') ?>',
            sisters: '<?php echo get_rest_url(null, 'sahara/sisters') ?>',
            welcome: '<?php echo get_rest_url(null, 'sahara/theme-mod/sahara-welcome') ?>',
            page: '<?php echo get_rest_url(null, 'sahara/page') ?>'
        };

        var saharaData = {
            logo: '<?php header_image() ?>',
            description: '<?php bloginfo('description') ?>',
            footer: {
                copyright: '<?php echo get_theme_mod('sahara-footer-copyright') ?>',
                description: '<?php echo get_theme_mod('sahara-footer-description') ?>'
            }
        };
    </script>

    <script src="<?php asset('bundle.js') ?>"></script>
    <?php wp_head(); ?>
</head>
<body class="flex flex-wrap flex-direction-column">
<div id="app"></div>
<?php wp_footer(); ?>
</body>
</html>
