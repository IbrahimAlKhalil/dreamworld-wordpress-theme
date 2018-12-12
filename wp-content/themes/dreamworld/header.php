<header class="flex align-items-center flex-wrap">

    <!-- TODO: Make the logo dynamic -->

    <div class="flex align-items-center">
        <img class="logo" src="<?php image('logo.png') ?>" alt="<?php bloginfo('name') ?>">
        <div class="spacer-right"></div>
        <img class="collapse-menu"
             src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgMTI0IDEyNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI0IDEyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0xMTIsNkgxMkM1LjQsNiwwLDExLjQsMCwxOHM1LjQsMTIsMTIsMTJoMTAwYzYuNiwwLDEyLTUuNCwxMi0xMlMxMTguNiw2LDExMiw2eiIgZmlsbD0iIzAwMDAwMCIvPgoJPHBhdGggZD0iTTExMiw1MEgxMkM1LjQsNTAsMCw1NS40LDAsNjJjMCw2LjYsNS40LDEyLDEyLDEyaDEwMGM2LjYsMCwxMi01LjQsMTItMTJDMTI0LDU1LjQsMTE4LjYsNTAsMTEyLDUweiIgZmlsbD0iIzAwMDAwMCIvPgoJPHBhdGggZD0iTTExMiw5NEgxMmMtNi42LDAtMTIsNS40LTEyLDEyczUuNCwxMiwxMiwxMmgxMDBjNi42LDAsMTItNS40LDEyLTEyUzExOC42LDk0LDExMiw5NHoiIGZpbGw9IiMwMDAwMDAiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"/>
    </div>
    <div class="spacer-right"></div>
    <nav id="main-nav-desktop">

    </nav>
</header>

<div data-nav-menu="Header" hidden>
    <?php
    wp_nav_menu([
        'menu' => 'Header',
        'container' => false
    ]);
    ?>
</div>