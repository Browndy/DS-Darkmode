/**** game/stamm_new_menu.css ****/
.quickbar {
    border: 1px solid black;
    background-color: #352C27;
    border-spacing: 1px;
    list-style-type: none;
    padding: 0;
    margin: 0 auto;
}

.quickbar li {
    padding: 0px;
    padding-left: 4px;
    padding-right: 4px;
    white-space: nowrap;
    background-color: #37312E;
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/background/grey.jpg);
    display: inline;
}

/**** game/stamm.css ****/
a {
    font-weight: 700;
    text-decoration: none;
    color: #ebe1eb;
}

b {
	color: #dfdae1;
}

td {
    padding: 0;
    margin: 0;
}

a:hover {
    color: #e01f0f;
}

.selected a {
    color: #fff;
}

.selected a:hover {
    color: #e01f0f;
}

.warn:not(input), .warn_90, .res {
    background: transparent scroll top left no-repeat;
}

.overview_table .warn:not(input), .overview_table .warn_90, .overview_table .res, .small .warn:not(input), .small .warn_90, .small .res {
    padding: 1px 1px 1px 18px;
}

.rtt {
    display: block;
    height: 10px;
    width: 10px;
    background: transparent scroll top left no-repeat;
}

.rtt.green {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/dots/green.png);
}

.rtt.yellow {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/dots/yellow.png);
}

.rtt.brown {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/dots/brown.png);
}

.rtt.grey {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/dots/grey.png);
}

.rtt.down {
    width: 11px;
    height: 12px;
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/overview/down3.png);
}

.research_tech_button {
    margin: 1px 1px 0;
}

.oldStyleOnly {
    display: none;
}

#inner-border > .main {
    border: none;
    width: 100%;
    border-spacing: 0;
}

.timer_replace span {
    display: none;
}

form {
    margin: 0;
}

p:first-child,h1:first-child,h2:first-child,h3:first-child,h4:first-child,h5:first-child,h1+p,h2+p,h3+p,h4+p,h5+p {
    margin-top: 0;
}

.blind {
    border-spacing: 0;
    padding: 0;
}

table.left {
    float: left;
}

.vis {
    border-collapse: separate;
    word-wrap: normal;
	background: #c000ff;
}

.vis.tall tr td {
    line-height: 30px;
}

.vis td, .vis_item {
    background: #501367;
}

.requ_error {
    display: none;
}

.error > div > .requ_error {
    display: block;
    font-weight: normal;
    font-size: 10px;
}

.vis_item.error {
    background-color: #ffda1b;
}

.vis .no_bg {
    background: transparent;
}

.vis .align_right {
    text-align: right;
}

.vis .units_away > td {
    background: #3a2f1d;
}

.vis .row_a > td, .vis.alternating tr:nth-child(even) td, .vis .row_a > tr > td {
    background: #2c0a3b;
}

.vis .row_b > td, .vis.alternating-rows tr:nth-child(odd) td, .vis .row_a > tr > td {
    background: #501367;
}

.vis > h4 {
    padding: 3px;
    margin: 0px;
}

.vis > h4.with-button {
    padding-right: 23px;
}

.widget-button {
    cursor: pointer;
    position: absolute;
    right: 3px;
}

.vis > ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
}

div.vis {
    border: 1px solid #2a1f07;
    margin: 15px 5px;
    -webkit-box-shadow: 1px 1px 2px 1px rgba(60, 30, 0, 0.2);
    box-shadow: 1px 1px 2px 1px rgba(60, 30, 0, 0.2);
}

.vis_item {
    padding: 3px;
    margin: 1px;
    word-wrap: break-word;
}

.vis_item label {
    display: block;
    margin: 5px 0px;
}

.vis_item input, .vis_item select {
    margin: 0px 5px;
}

.vis .selected, .vis .selected > td, .overview_table .selected > td {
    background: #3e1e00;
}

.overview_table .nohover {
    background: #3a2b24;
}

th, .vis > h4 {
    font-size: 9pt;
    text-align: left;
    font-weight: 700;
	color: white;
    background-color: #260830 !important;
    background-repeat: repeat-x;
    position: relative;
}

body[dir="rtl"] .vis > h4 {
    text-align: right;
}

.outerBorder {
    position: relative;
    z-index: 0;
}

.innerBorder {
    position: absolute;
    left: 1px;
    right: 1px;
    top: 1px;
    bottom: 1px;
    z-index: 0;
    border: 1px solid #261e05;
}

.outerBorder table, .outerBorder form {
    position: relative;
    z-index: 2;
}

#main_layout {
    margin: 0 auto;
    padding: 0;
    background: #2a242a;
    z-index: 3;
    border-spacing: 0;
}

#main_layout .modemenu a {
    display: block;
    white-space: normal;
}

#main_layout .topbar {
    height: 48px;
    background: transparent;
    z-index: 11000;
    text-align: center;
}

#main_layout .topbar.fixed {
    position: absolute;
}

#main_layout .left {
    width: 25px;
    background: transparent;
}

#main_layout .right {
    width: 25px;
    background: transparent;
}

#main_layout .bg_left {
    width: 25px;
    overflow: hidden;
    vertical-align: top;
    background: transparent;
}

#main_layout .bg_right {
    width: 25px;
    overflow: hidden;
    vertical-align: top;
    background: transparent;
}

#main_layout .bg_left .bg_left {
    width: 25px;
    height: 200px;
    background: transparent;
}

#main_layout .bg_right .bg_right {
    width: 25px;
    height: 200px;
    background: transparent;
}

#main_layout .bg_leftborder {
    background: transparent;
}

#main_layout .bg_rightborder {
    background: transparent;
}

#main_layout .bg_bottomleft {
    width: 25px;
    background: transparent;
}

#main_layout .bg_bottomright {
    width: 25px;
    background: transparent;
}

#main_layout .bg_bottomcenter {
    height: 25px;
    background: transparent:
}

.maincell {
    padding: 0 0 5px;
    vertical-align: top;
    background: transparent;
}

.maincell table {
    border-spacing: 0;
    border-collapse: collapse;
	border-color: #46007a;
}

#SkyScraperAd, #SkyScraperAdLeft {
    position: fixed;
    top: 50px;
    margin-left: 20px;
    height: 600px;
    z-index: 2;
    overflow: hidden;
}

#SkyScraperAdLeft {
    margin-left: -300px;
}

#ContentAd {
    margin: 10px auto;
    text-align: center;
}

.quickbar {
    border-spacing: 1px;
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.menu {
    border: none;
    background: transparent none scroll left top no-repeat;
}

#menu_row > .menu-item {
    padding: 0;
    margin: 0;
    height: 43px;
    white-space: nowrap;
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/topbutton-right.png) scroll right top no-repeat;
    border-collapse: collapse;
    text-align: left;
    color: #FFF;
    font-size: 10px;
    font-weight: 700;
    vertical-align: top;
}

.menu-item .badge {
    color: #f6b628;
}

#menu_row > .menu-item:hover {
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/topbutton-right.png) scroll right bottom no-repeat;
}

#menu_row .lpad, #menu_row > .lpad:hover {
    width: 1px;
    min-width: 1px;
    background: transparent none !important;
}

#menu_row > .rpad, #menu_row > .rpad:hover {
    width: 3px;
    min-width: 3px;
    background: transparent none !important;
}

#topTable {
    margin: 2px auto;
    border-spacing: 0;
    text-align: center;
}

.fixed #topTable {
    margin: 0px auto;
}

#topTable table {
    margin: 0 auto;
    min-width: 900px;
}

/*
#topTable table::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% + 10px);
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); // Anpassen der Opazität, um die Dunkelheit zu steuern
  z-index: 1;
  pointer-events: none;
}
*/


#topTable table.menu-village-stronghold {
    min-width: 100px;
}

#topTable .menu_column {
    min-width: 1px;
    white-space: nowrap;
}


/*
#topTable .menu_column::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% + 10px);
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); // Anpassen der Opazität, um die Dunkelheit zu steuern
  z-index: 1;
  pointer-events: none;
  margin-left: -17px;
  margin-top: -4px;
}
*/

#topTable .menu-column-item, #topTable .menu-column-item a {
    white-space: nowrap;
    width: auto;
}

#topContainer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    margin-top: 0;
    text-align: center;
}

.fixed #topContainer {
    top: 2px;
}

.topbar .menu tr #topdisplay {
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/topdisplay-left.png) scroll left -4px no-repeat;
    padding: 0 0 0 5px;
    height: 43px;
    line-height: 18px;
    z-index: 1;
    width: auto;
    margin: 0 6px 0 2px;
}

#topdisplay:hover {
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/topdisplay-left.png) scroll left -4px no-repeat;
}

#topdisplay .bg {
    position: static;
    height: 43px;
    padding: 0 11px 0 5px;
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/topdisplay-right.png) scroll right -4px no-repeat;
    margin: 0;
    width: auto;
}

#topdisplay .bg .rank {
    color: #fff;
    text-align: center;
    background: none;
}

#rank_rank, #rank_points {
    color: #fff;
    -moz-transition: color 2.5s;
    -webkit-transition: color 2.5s;
    -o-transition: color 2.5s;
    -ms-transition: color 2.5s;
    transition: color 2.5s;
}

#rank_rank.increased, #rank_points.increased {
    color: #3A1B06;
    -moz-transition: none;
    -webkit-transition: none;
    -o-transition: none;
    -ms-transition: none;
    transition: none;
}

#premium_points {
    min-width: 15px;
    display: inline-block;
}

#premium_points_buy {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/premium_plus.png');
    position: relative;
    top: 1px;
    width: 10px;
    height: 10px;
    display: inline-block;
}

#topdisplay a {
    padding: 5px 0 0;
    height: 16px;
}

#topdisplay .bg a:hover {
    color: #3a1b06;
}

.menu .menu_column tr, .menu .menu_column {
    background-image: none;
}

.topbar .menu a {
    color: #FFF;
    font-size: 10px;
    font-weight: 700;
    padding: 15px 15px 0 13px;
    display: block;
    height: 28px;
    text-align: center;
    background: transparent none;
}

.topbar a.manager_icon {
    height: 18px;
    width: 18px;
    padding: 1px;
    margin-top: 1px;
    background-repeat: no-repeat;
}

.topbar a.manager_icon:hover {
    -webkit-filter: brightness(1.2);
    filter: brightness(1.2);
}

#menu_row > td.menu-item > a {
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/topbutton-left.png) scroll left top no-repeat;
    position: relative;
    left: -2px;
    padding: 15px 15px 0;
    font-size: 10px;
}

#menu_row > td.menu-item:hover > a {
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/topbutton-left.png) scroll left bottom no-repeat;
}

#topdisplay .bg a {
    width: auto;
    font-size: 10px;
}

.topbar .buttonicon {
    position: relative;
    width: 12px;
    height: 12px;
    top: -28px;
    left: 14px;
    margin-bottom: -12px;
}

.topbar .buttonicon a {
    padding: 0;
    margin: 0;
}

#quickbar_outer {
    margin: 0 auto;
    padding: 0;
}

#quickbar_inner {
    margin: 0;
    padding: 0;
    width: 100%;
}

#quickbar_inner .left {
    background: #410058;
    width: 15px;
}

#quickbar_inner .main {
    background: #410058;
    text-align: center;
}

#quickbar_inner .right {
    background: #410058;
    width: 15px;
    position: static;
}

#quickbar_inner .topborder .left {
    background: #410058;
    height: 4px;
}

#quickbar_inner .topborder .main {
    background: #410058;
    height: 4px;
}

#quickbar_inner .topborder .right {
    background: #410058;
    height: 4px;
}

#quickbar_inner .bottomborder .left {
    background: #410058;
    height: 4px;
}

#quickbar_inner .bottomborder .main {
    background: #410058;
    height: 4px;
}

#quickbar_inner .bottomborder .right {
    background: #410058;
    height: 4px;
}

#quickbar_inner .quickbar {
    border: none;
    background: none;
    margin: 0 auto;
    padding: 1px 0;
}

#quickbar_inner li {
    display: inline-table;
    margin: 0 5px 0 4px;
    padding: 0;
}

#quickbar_inner .separator {
    border-right: 1px dotted #302e27;
    width: 1px;
    overflow: hidden;
}

#quickbar_inner .quickbar img {
    vertical-align: -3px;
    margin-right: 2px;
}

ul.quickbar > li {
    background: transparent;
}

.icon-box {
    background: transparent;
    padding-left: 3px;
}

.menu-event-icon {
    vertical-align: -3px;
}

.box-item:first-child {
    background: transparent;
}

.box-item.separate {
    background: transparent;
    padding-left: 5px;
}

#header_info {
    background: transparent;
    background-image: none !important;
    margin: 0 auto 2px;
    padding: 0;
}

#header_info table {
    border: none;
    height: 26px;
}

.header-border {
    background: transparent;
    height: 26px;
    padding: 0;
    width: 1px;
}

.header-border .box {
    background: #524c5c;
}

.header-border .box .box-item.firstcell {
    padding: 0 3px;
}

.header-border .firstcell {
    background: transparent;
}

.header-border .box-item {
    padding: 0 3px;
}

.header-border .smallPadding .box-item, .header-border .no-gap .box-item {
    padding: 0 3px 0 0;
}

.header-border .smallPadding .box-item.separate {
    padding-left: 5px;
}

.header-border .smallPadding .icon-box, .header-border .smallPadding .icon-box.separate {
    padding: 0 1px 0 4px;
}

.header-border .no-gap .icon-box:first-child {
    padding: 0 0 0 2px;
}

.icon-box a, .no-gap .icon-box a {
    height: 20px;
    padding: 2px 0 0;
}

table.no-gap .icon-box a {
    height: 19px;
    padding: 3px 2px 0;
}

#menu_row2 {
    height: 26px;
}

.icon-box .village_switch_link,.icon-box .jump_link {
    display: block;
    width: 16px;
    height: 22px;
    padding: 0;
}

.arrowCell {
    padding: 0 2px 0 3px !important;
}

#pop_max_label {
    padding-right: 5px;
}

#storage {
    padding: 0 3px 0 1px;
}

#header_info span.icon {
    margin: 0 1px 0 0;
}

#header_info table {
    margin-left: 5px;
}

#header_info td:first-child table {
    margin-left: 0;
}

.arrowCell span {
    width: 16px;
    height: 22px;
    display: block;
}

td.shadow {
    text-align: left;
}

td.shadow div.leftshadow {
    height: 8px;
    width: 15px;
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/shadow-left.png) scroll left top no-repeat;
    margin-bottom: -8px;
    z-index: 0;
}

td.shadow div.rightshadow {
    height: 8px;
    width: auto;
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/shadow-right.png) scroll right top no-repeat;
    margin-left: 15px;
    z-index: 0;
}

#bottom {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 11900;
    width: 100%;
}

#footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 30px;
    z-index: 11900;
    cursor: default;
    text-align: center;
}

#footer #linkContainer {
    height: 21px;
    background: #5e5e5e;
    position: relative;
    top: 6px;
    margin-top: 3px;
}

#footer #linkContainer a {
    vertical-align: middle;
}

#footer .world_button_active, #footer .world_button_inactive {
    display: inline-block;
    float: none;
}

#footer, #footer a {
    color: #ebe1eb;
}

#footer a {
    cursor: pointer;
}

#footer .footer-link:hover {
    color: #e01f0f;
}

#footer #unsupported-browser {
    float: left;
    color: #e01f0f;
    font-weight: bold;
    position: absolute;
    line-height: 30px;
    top: 3px;
    left: 4px;
    z-index: 1;
    display: none;
}

#footer #unsupported-browser img {
    vertical-align: -3px;
}

#content_value table, .popup_help table {
    border-spacing: 2px;
    border-collapse: separate;
    empty-cells: show !important;
}

table.no_spacing {
    border-spacing: 0 !important;
}

#mass_train_table {
    min-width: 950px;
    width: 100%;
}

#content_value td, #content_value th, .popup_box_content .vis td, .popup_box_content .vis th, .popup_helper td, .popup_helper th {
    padding: 2px 3px;
}

#content_value {
    padding: 10px;
    width: 100%;
}

.content-border {
    padding: 0;
    margin: 0;
    direction: ltr;
    background: #605660;
    border-collapse: separate !important;
    border-spacing: 0!important;
    border: 1px solid #fff;
    -webkit-box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.2);
    box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.2);
}

.content-border.notification {
    width: 100%;
}

.content-border.notification td {
    padding: 5px;
}

#inner-border {
    padding: 2px 0;
    border: 1px solid #3b2400;
}

.navi-border {
    padding: 0;
    margin: 0;
    border: 1px solid #2a1f07;
}

.navi-border .navi-border-item {
    background: transparent;
    padding: 3px;
    font-weight: 400;
}

.main {
    overflow: hidden;
}

.quickbar > li {
    padding-top: 0;
    padding-bottom: 0;
    display: inline;
}

#topTable .menu .menu_column {
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/dropdown-bottomright.png) scroll right bottom no-repeat;
    display: table;
    z-index: 100;
    position: absolute;
    min-width: 92px;
    max-width: 250px;
    margin-left: 20px;
    margin-top: -4px;
    padding: 0;
    height: auto;
    visibility: hidden;
}

.menu tr td .menu_column tr {
    background: transparent none;
}

#topTable #topdisplay .menu_column {
    margin-left: 5px;
    margin-top: 0;
}

#topTable .menu td:hover .menu_column, #topTable .menu .hover .menu_column {
    visibility: visible;
    z-index: 999;
}

.menu_column .menu-column-item {
    height: auto;
    text-align: left;
    padding: 0;
    white-space: normal;
    line-height: 12px;
    width: auto;
    display: table-cell;
    float: none;
    z-index: 999;
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/dropdown-itemright.png) scroll right top repeat-y;
}

.menu_column tr:first-child .menu-column-item {
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/dropdown-topright.png) scroll right top no-repeat;
}

#topdisplay .menu_column .menu-column-item a, .menu_column .menu-column-item a {
    display: block;
    position: relative;
    left: -20px;
    padding: 3px 12px 3px 20px;
    margin: 0 -10px 0 0;
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/dropdown-itemleft.png) scroll left top no-repeat;
    color: #FFF;
    float: none;
    height: auto;
    text-align: left;
}

.menu_column .menu-column-item a:hover {
    color: #3a1b06;
}

#topdisplay .menu_column tr:first-child .menu-column-item a, .menu_column tr:first-child .menu-column-item a {
    padding: 6px 12px 3px 20px;
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/dropdown-topleft.png) scroll left top no-repeat;
}

.menu_column tr:first-child .menu-column-item a:hover {
}

.menu_column a {
    padding: 3px 12px 3px 20px;
    height: auto;
}

#topTable .menu_column a:hover {
    color: #3a1b06;
}

.menu_column tr:first-child .menu-column-item a {
    padding: 6px 12px 3px 20px;
}

.menu_column tr:first-child .menu-column-item a:hover {
}

.menu_column tr .bottom {
    background: transparent none;
}

.topbar .corner {
    position: relative;
    width: 20px;
    height: 25px;
    margin: 0;
    left: -20px;
    top: 0;
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/dropdown-bottomleft.png) scroll left top no-repeat;
}

.topbar .decoration {
    position: relative;
    width: 23px;
    height: 25px;
    margin: -25px 0 0 -25px;
    left: 50%;
    top: 0;
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/dropdown-decoration.png) scroll left 12px no-repeat;
}

.menu .icon {
    margin: 0;
    vertical-align: -2px;
}

.menu_block_right {
    margin: 0 0 0 auto;
    border-collapse: collapse;
    text-align: right;
}

.empty[usemap] {
    outline: none;
}

.center {
    text-align: center;
}

.lit .lit-item {
    font-weight: 700;
    background-color: #3e2f1b!important;
    background-image: none;
}

.lit2 .lit-item {
    font-weight: 700;
    background-color: #3b3120;
    background-image: none;
}

.nopad {
    padding: 0!important;
}

.top_background {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/bg-top.jpg);
    background-repeat: repeat-x;
    height: 27px;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
    display: none;
}

.top_bar {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/topbar-main.png);
    background-repeat: repeat-x;
    background-position: center 0;
    height: 57px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
}

.top_bar .bg_left {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/topbar-left.png);
    background-repeat: no-repeat;
    height: 57px;
    width: 70px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}

.top_bar .bg_right {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/topbar-right.png);
    background-repeat: no-repeat;
    height: 57px;
    width: 70px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
}

.top_shadow {
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/topbar-shadow.png) scroll left top repeat-x;
    position: fixed;
    margin: 0;
    padding: 0;
    top: 50px;
    left: 0;
    width: 100%;
    height: 6px;
    z-index: 9999;
}

body {
    background-attachment: fixed;
    background-color: #190924;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    font-size: 9pt;
    font-family: Verdana, Arial;
    width: 100%;
    margin: 0;
    padding: 0 0 35px;
	color: lightgray;
}

body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* Adjust the opacity to control darkness */
  z-index: -1
}

body.steam {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/background/bg-image-steam.jpg);
}

@media only all and (max-width: 1920px) and (max-height: 1283px) {
    body {
        background-size: 1920px 1283px;
        -moz-background-size: 1920px 1283px;
        -webkit-background-size: 1920px 1283px;
    }
}

@media only screen and (orientation: portrait) and (device-width: 320px), (device-width: 768px) {
    body {
        -webkit-background-size: auto 100%;
    }
}

@media only screen and (orientation: landscape) and (device-width: 320px), (device-width: 768px) {
    body {
        -webkit-background-size: 100% auto;
    }
}

.noBorderForFirstItem li:first-child {
    border: none;
}

h1 {
    font-size: 16pt;
}

h2 {
    font-size: 14pt;
}

h3 {
    font-size: 12pt;
    font-weight: 700;
}

h4 {
    font-size: 10pt;
    font-weight: 700;
    font-style: italic;
    margin-bottom: 4pt;
}

h5 {
    font-size: 10pt;
    font-weight: 700;
    margin-bottom: 2pt;
}

img {
    border: none;
}

.middle {
    vertical-align: middle;
}

.status-icon {
    width: 10px;
    height: 10px;
}

.grey {
    color: gray;
}

.warn {
    color: #ff4545;
}

.warn_90 {
    color: #fff000;
}

.nowrap {
    white-space: nowrap;
}

.wrap {
    white-space: normal;
}

.small {
    font-size: xx-small;
}

#buildings .inactive {
    white-space: normal;
}

.warstats_popup_date {
    color: #000;
    font-size: 0.9em;
}

hr {
    border-color: #403318 transparent #261e05;
    border-width : 1px 0;
    border-style : solid;
    height: 0;
    opacity: 0.75;
}

.box {
    background-color: #3A2F1D;
    background-repeat: repeat-x;
    border: 1px solid;
    border-color: #973 #FD9 #FEC #B95;
}

input,select {
    font-size: 8pt;
}

.attack {
    background-color: #fad2d2;
}

.support {
    background-color: #d2fad2;
}

.check {
    margin: 0 5px 0 0;
}

.quote .quote_author {
    font-weight: 700;
    font-size: 8pt;
}

.quote .quote_message {
    background-color: #FFF;
    font-size: 8pt;
}

textarea {
    border: 1px solid #2A1F07;
    padding: 4px;
    word-wrap: break-word;
}

#box {
    color: #000;
    background-color : #37312E;
    width: 100%;
    max-height: 200px;
    text-align: left;
    padding: 0;
    overflow: auto;
    position: relative;
}

ul.help {
    padding-left: 1px;
    margin-left: 0;
}

li.help {
    list-style-type: none;
    background-color: #501367;
    margin: 2px;
    padding-left: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
}

ul.help li.help ul.help li.help {
    background-color: #352C27;
}

ul.help li.help ul.help li.help ul.help li.help {
    background-color: #37312E;
}

ul.submenu {
    padding-left: 1px;
    margin-left: 0;
}

li.submenu {
    list-style-type: none;
    margin: 2px;
    padding-left: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
}

.sel {
    color: #0082BE;
    text-decoration: underline;
}

.server_info {
    font-size: 7pt;
    text-align: right;
    color: #fff;
    margin: 4px 3px -10px 0;
    background: #66009b;
}



/* ???? CHANGE ???? */
.docked-notebook {
    margin: 14px auto;
    padding: 10px;
    border: 1px solid #2A1F07;
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/main_bg.jpg);
    font-weight: bold;
}

.text-border {
    text-shadow: black -1px 1px, black 1px 1px, black 1px -1px, black -1px -1px;
}

.white {
    color: white;
}

#reservations {
    width: 100%;
    clear: both;
}

#settings {
    padding-left: 10px;
    padding-bottom: 3px;
    float: left;
}

#reservation_info > #partners {
    float: left;
    padding: 0 10px 3px 15px;
}

#noblelog {
    padding-left: 10px;
    float: left;
}

#edit_reservation {
    display: block;
}

#reservation_settings {
    display: block;
}

#reservation_info {
    padding-left: 10px;
}

.vis .group_edit {
    background-color: transparent;
}

.vis .group_label {
    width: 170px;
    height: 25px;
}

.vis #group_list td {
    height: 20px;
}

#tooltip {
    z-index: 100000 ! important;
}

#tut.ui-draggable #tut_menu {
    cursor: move;
}

.drag {
    cursor: move;
}

#combined_table th {
    text-align: center;
}


/* ???? CHANGE ???? */
#wait {
    position: absolute;
    top: 48%;
    left: 50%;
    width: 200px;
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/main_bg.jpg);
    border: 2px solid #280100;
    margin: -15px 0 0 -110px;
    padding: 10px;
    text-align: center;
    font-weight: 700;
}

#ajax_loader {
    position: absolute;
    top: 100px;
    left: 375px;
    z-index: 100;
    display: table-cell;
}

#intro_igm_preview {
    background-color: #FFF;
    border: solid 1px #000;
    width: 99%;
    margin: 10px;
}

.edit {
    display: none;
}

.scrollableMenu .main_layout .topbar {
    position: relative;
}

.scrollableMenu #topContainer {
    position: absolute;
    z-index: 10000;
}

.scrollableMenu .top_bar {
    position: absolute;
}

.scrollableMenu .top_shadow {
    position: absolute;
}

#coin_overview_table .select_coins {
    width: 160px;
}

* + html #main_layout .topbar {
    position: fixed!important;
}

* + html #main_layout .bg_left .bg_left {
    background: transparent;
}

* + html #main_layout .bg_right .bg_right {
    background: transparent;
}

* + html #main_layout .center {
    position: static;
}

* + html #topContainer {
    position: absolute !important;
    margin-top: 0!important;
    width: 100% !important;
    z-index: 123456;
}

* + html .top_bar {
    position: absolute;
}

* + html .top_shadow {
    position: absolute;
}

* + html #menu_row > .lpad {
    width: 1px;
}

* + html #menu_row > .rpad {
    width: 3px;
}

* + html #menu_row > .menu-item a {
    white-space: nowrap;
    padding-left: 20px;
    padding-right: 20px;
}

* + html hr {
    height: 2px;
}

* + html #SkyScraperAd {
    position: absolute;
}

* + html .topbar .buttonicon {
    top: -29px;
}

* + html #group_list_content #group_table {
    width: 292px;
}

* + html #group_popup_content_container #group_table {
    width: 292px;
}


/* ???? CHANGE ???? */
.vis_item > .bqhandle {
    width: 16px;
    height: 16px;
    margin: 0px 5px;
    background: url( 'https://dsde.innogamescdn.com/asset/88651122/graphic/sorthandle.png' ) center center no-repeat;
    cursor: pointer;
}

#secrets {
    position: absolute;
    width: 1000px;
    height: 1000px;
    z-index: 10;
}

.bbcodetable {
    border: #999966 1px solid;
    border-spacing: 2px;
    border-collapse: separate;
}

.col {
    float: left;
    width: 50%;
}

.col > .row {
    width: 92%;
    margin: 0 4% 4%;
}

.row {
    border: 1px solid #2A1F07;
    background: #501367;
    width: 96%;
    margin: 0 2% 4%;
    -webkit-box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
    box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
}

.row h4 {
    font-size: 9pt;
    text-align: left;
    font-weight: 700;
    background-color: #221f00 !important;
    background-repeat: repeat-x;
    padding: 3px;
    margin: 0;
}

.widget-content {
    clear: both;
    padding: 8px;
    position: relative;
}

.double-col {
    width: 96%;
    margin: 0 2% 2%;
}

#welcome-page-footer-right {
    float: right;
    margin: 0 2% 0;
}

#welcome-page-footer-left {
    margin: 0 2% 0;
    float: left;
}

.widget-tabs {
    display: block;
    background-color: #100d09;
    list-style-type: none;
    margin: 0;
    padding: 3px 0 0 0;
    height: 25px;
    border-bottom: 1px solid #2A1F07;
}

.widget-tabs li {
    float: left;
    margin: 0 0 0 4px;
    height: 25px;
}

#stats li {
    width: 30px;
    text-align: center;
}

.widget-tabs li a {
    border: 1px solid #000;
    border-bottom: 0;
    border-radius: 6px 6px 0px 0px;
    padding: 4px;
    height: 16px;
    background-color: #2a1800;
    display: block;
    color: #2b2b2b;
}

.widget-tabs li a:hover, .widget-tabs li a.selected {
    background-color: #3b1a07;
}

#news img {
    position: absolute;
    top: 5px;
    left: 10px;
}

#news p {
    padding-left: 25px;
    margin: 0;
}

.welcome-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.list-item {
    padding: 2px 5px 4px;
    line-height: 20px;
    height: 20px;
}

.list-item.a {
    background-color: #100d09;
}

.list-item.b {
    background-color: #32251b;
}

.list-left {
    margin: 0;
    display: inline-block;
    width: 75%;
}

.list-right {
    padding: 0;
    margin: 0;
    display: inline-block;
    width: 23%;
    text-align: right;
}

#map_wrap:-moz-full-screen .ui-resizable-handle {
    display: none;
}

#map_wrap:-webkit-full-screen .ui-resizable-handle {
    display: none;
}

#map_wrap:full-screen .ui-resizable-handle {
    display: none;
}

#map_wrap:-moz-full-screen #map_coord_y_wrap {
    position: fixed !important;
    z-index: 10;
    color: #fff;
}

#map_wrap:-webkit-full-screen #map_coord_y_wrap {
    position: fixed !important;
    z-index: 10;
    color: #fff;
}

#map_wrap:full-screen #map_coord_y_wrap {
    position: fixed !important;
    z-index: 10;
    color: #fff;
}

#map_wrap:-moz-full-screen #map_coord_x_wrap {
    position: fixed !important;
    z-index: 10;
    color: #fff;
    bottom: 0px !important;
    top: auto !important;
}

#map_wrap:-webkit-full-screen #map_coord_x_wrap {
    position: fixed !important;
    z-index: 10;
    color: #fff;
    bottom: 0px !important;
    top: auto !important;
}

#map_wrap:full-screen #map_coord_x_wrap {
    position: fixed !important;
    z-index: 10;
    color: #fff;
    bottom: 0px !important;
    top: auto !important;
}

#map_wrap:-moz-full-screen #minimap {
    z-index: 13;
    position: fixed !important;
    right: 0px;
    top: 0px;
    left: auto !important;
    border: 1px solid yellow;
}

#map_wrap:-webkit-full-screen #minimap {
    z-index: 13;
    position: fixed !important;
    right: 0px;
    top: 0px;
    left: auto !important;
    border: 1px solid yellow;
}

#map_wrap:full-screen #minimap {
    z-index: 13;
    position: fixed !important;
    right: 0px;
    top: 0px;
    left: auto !important;
    border: 1px solid yellow;
}

#fullscreen {
    display: none;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 13;
}

#map_wrap {
    z-index: 19;
}

.vidscreen-box, div.vidscreen-box, p.vidscreen-box {
    width: 500px;
}

h2.vidscreen-box {
    margin-top: 0;
}

.vidscreen-box > .watch-error {
    padding-top: 8px;
}

#video-reward {
    padding: 8px;
}

.video-reward-text {
    padding-top: 8px;
}

#video-reward-description {
    padding: 8px 0 8px;
}

.menu-side {
    width: 30px;
}

#loading_content {
    display: none;
}

#header_commands {
    display: none;
}

#header_commands.has_incomings, #header_commands.has_supports {
    display: table-cell;
}

#incomings_cell {
    display: none;
}

#header_commands.has_incomings #incomings_cell {
    display: table-cell;
}

#supports_cell {
    display: none;
}

#header_commands.has_supports #supports_cell {
    display: table-cell;
}

.bmain_list_img {
    float: left;
    margin-right: 8px;
}

.order-progress, .mass-progress {
    border: 1px solid #2d1900;
    height: 4px;
    overflow: hidden;
}

.order-progress div, .mass-progress div {
    float: left;
    height: 4px;
}

.mass-progress div {
    background-color: #92c200;
    display: block;
    width: 0;
}

.order-progress .anim {
    -webkit-transition: width 1s linear;
    transition: width 1s linear;
}

.recruit_req, .mint_coins_req {
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
    margin-left: 3px;
    margin-right: 5px;
}

.recruit_req > span, .mint_coins_req > span {
    -ms-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    white-space: nowrap;
}

.recruit_req > span:last-child {
    -ms-flex: 1.2;
    -webkit-flex: 1.2;
    flex: 1.2;
    white-space: nowrap;
}

.unmet_req {
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
}

.unmet_req > span {
    -ms-flex: 1;
    -webkit-flex: 1;
    flex: 1;
}

#wood_gain, #stone_gain, #iron_gain {
    font-weight: bold;
    color: green;
    position: absolute;
}

.award-group {
    width: 455px;
    margin-bottom: 15px;
}

.award-group-head {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/awards/ui/award-group-top.png) no-repeat;
    height: 36px;
    overflow: hidden;
    color: #593615;
    line-height: 32px;
    font-size: 14px;
    text-align: center;
}

.award-group-content {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/awards/ui/award-group-middle.png) repeat-y;
    padding: 5px;
}

.award-group-foot {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/awards/ui/award-group-bottom.png) no-repeat;
    height: 16px;
    overflow: hidden;
}

.award-group-content hr {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/awards/ui/sep.png);
    width: 447px;
    height: 3px;
    border: none;
    margin: 0;
    padding: 0;
}

.award-group-content hr:last-child {
    display: none;
}

.award-box {
    clear: both;
    margin: 5px 5px 10px;
}

.award-box p {
    margin: 2px 0;
}

.award-box .award {
    float: left;
    margin-right: 5px;
}

.award-box .award.compare {
    float: right;
}

.award-desc {
    float: left;
    width: 360px;
}

.award-desc {
    width: 301px;
}

.award-desc .inactive, .award-desc .inactive:hover {
    color: #1F1300;
}

.award-desc strong {
    font-size: 10pt;
}

.ranking-top3 {
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/hall_of_fame/hof-goldsilverbronze.png") no-repeat;
    width: 544px;
    height: 177px;
    position: relative;
    margin: 0 auto;
}

.ranking-top3 .gold {
    position: absolute;
    left: 185px;
    top: 128px;
    width: 152px;
    height: 32px;
}

.ranking-top3 .silver {
    position: absolute;
    left: 8px;
    top: 128px;
    width: 152px;
    height: 32px;
}

.ranking-top3 .bronze {
    position: absolute;
    left: 362px;
    top: 128px;
    width: 152px;
    height: 32px;
}

.ranking-top3 .gold a, .ranking-top3 .silver a, .ranking-top3 .bronze a {
    display: block;
    width: 144px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 3px 0 5px;
}

.ranking-aoe {
    position: relative;
}

.ranking-aoe img.university {
    display: block;
    width: 100%;
    height: auto;
}

.ranking-aoe .content {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: grid;
    grid-template: repeat(2, auto) / repeat(2, auto);
    align-items: start;
    align-content: space-between;
    justify-items: start;
    justify-content: space-between;
    margin: 10px;
}

.ranking-aoe .ranking-top {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/hall_of_fame/hof-gold.png) no-repeat top left / cover;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    height: 170px;
    width: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 129px 10px 10px;
}

.ranking-aoe-required-level {
    background-color: rgba(244, 228, 188, 0.8);
}

.ranking-aoe-required-level th {
    font-style: italic;
}

.ranking-aoe-required-level td {
    text-align: center;
    font-style: italic;
    font-size: 3em;
}

.ranking-aoe-table {
    background-color: rgba(244, 228, 188, 0.8);
}

.ranking-aoe-table .coords {
    text-align: center;
}

.unitsInput {
    width: 40px;
}

.help-portrait {
    float: left;
    margin: 0 10px 10px 0;
}

#quick_command_inputs * {
    vertical-align: middle;
}

dialog {
    display: block;
    position: absolute;
    left: 0px;
    right: 0px;
    width: fit-content;
    height: fit-content;
    margin: auto;
    border-width: initial;
    border-style: solid;
    border-color: initial;
    border-image: initial;
    padding: 1em;
}

dialog:not([open]) {
    display: none;
}

#main_layout .modemenu a.paged-nav-item {
    display: inline;
}

.word-break-all {
    word-break: break-all;
}

/**** game/buttons2.css ****/
.btn, .btn-default {
    display: inline-block;
    padding: 3px;
    margin: 0 2px;
    text-align: center;
    font-family: Verdana, Arial;
    font-size: 12px !important;
    font-weight: bold;
    line-height: normal;
    cursor: pointer;
    background: #241c12;
    background: linear-gradient(to bottom, #332e30 0%,#2c2621 22%,#241c12 30%,#241c12 100%);
    -webkit-border-radius: 5px;
    border-radius: 5px;
    border: 1px solid #000;
    color: #fff;
    white-space: nowrap;
}

.btn:hover, .btn-default:hover {
    background: #2a1a00;
    background: linear-gradient(to bottom, #3c2d23 0%,#322b1d 22%,#352b1a 30%,#241c17 100%);
    color: #fff;
    text-decoration: none;
}

.btn:active, .btn.active {
    -webkit-box-shadow: inset 50px 50px 100px -1px rgba(0,0,0,0.2);
    -moz-box-shadow: inset 50px 50px 100px -1px rgba(0,0,0,0.2);
    box-shadow: inset 50px 50px 100px -1px rgba(0,0,0,0.2);
}

.btn:focus {
    outline: none;
    border-color: #920707;
}

.btn::-moz-focus-inner {
    border: 0;
}

.btn-img {
    padding: 0 4px 0 0 !important;
    line-height: 24px;
}

.btn-img img {
    float: left;
    padding: 3px;
}

.btn-centered {
    display: block;
    width: 150px;
    margin: auto;
}

.btn-disabled, .btn[disabled], .btn-disabled:hover, .btn[disabled]:hover {
    background: #646464;
    background: linear-gradient(to bottom, #646464 0%,#4d4c4c 100%) !important;
    cursor: not-allowed;
}

.btn-build {
    min-width: 90px;
    padding: 3px 9px 3px 25px;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px 1px, #241c12;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px 1px, linear-gradient(to bottom, #332e30 0%,#2c2621 22%,#241c12 30%,#241c12 100%);
}

.btn-build:hover {
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px 1px, #3c2d23;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px 1px, linear-gradient(to bottom, #3c2d23 0%,#322b1d 22%,#352b1a 30%,#241c17 100%);
}

.btn-build.current-quest {
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px 1px,#0bac00;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px 1px,linear-gradient(to bottom, #0bac00 0%,#0e7a1e 100%);
}

.btn-build.current-quest:hover {
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px 1px,#13c600;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px 1px,linear-gradient(to bottom, #13c600 0%,#129e23 100%);
}

.btn-attack {
    padding: 3px 9px 3px 25px;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -74px, #241c12;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -74px, linear-gradient(to bottom, #332e30 0%,#2c2621 22%,#241c12 30%,#241c12 100%);
}

.btn-attack:hover {
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -74px, #3c2d23;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -74px, linear-gradient(to bottom, #3c2d23 0%,#322b1d 22%,#352b1a 30%,#241c17 100%);
}

.btn-attack.highlight {
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -74px,#0bac00;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -74px,linear-gradient(to bottom, #0bac00 0%,#0e7a1e 100%);
}

.btn-attack.highlight:hover {
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -74px,#13c600;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -74px,linear-gradient(to bottom, #13c600 0%,#129e23 100%);
}

.btn-attack[disabled], .btn-attack[disabled]:hover {
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -74px, #646464 !important;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -74px, linear-gradient(to bottom, #646464 0%,#4d4c4c 100%) !important;
}

.btn-support {
    padding: 3px 9px 3px 25px;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -99px, #241c12;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -99px, linear-gradient(to bottom, #332e30 0%,#2c2621 22%,#241c12 30%,#241c12 100%);
}

.btn-support:hover {
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -99px, #3c2d23;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -99px, linear-gradient(to bottom, #3c2d23 0%,#322b1d 22%,#352b1a 30%,#241c17 100%);
}

.btn-support.highlight {
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -99px,#0bac00;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -99px,linear-gradient(to bottom, #0bac00 0%,#0e7a1e 100%);
}

.btn-support.highlight:hover {
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -99px,#13c600;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -99px,linear-gradient(to bottom, #13c600 0%,#129e23 100%);
}

.btn-support:disabled, .btn-support:disabled:hover {
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -99px, #646464;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -99px, linear-gradient(to bottom, #646464 0%,#4d4c4c 100%);
}

.btn-recruit {
    padding: 3px 9px 3px 25px;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -125px, #241c12;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -125px, linear-gradient(to bottom, #332e30 0%,#2c2621 22%,#241c12 30%,#241c12 100%);
}

.btn-recruit:hover {
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -125px, #3c2d23;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -125px, linear-gradient(to bottom, #3c2d23 0%,#322b1d 22%,#352b1a 30%,#241c17 100%);
}

.btn-recruit-disabled, .btn-recruit-disabled:hover {
    padding: 3px 9px 3px 25px;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -125px, #646464;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -125px, linear-gradient(to bottom, #646464 0%,#4d4c4c 100%);
    cursor: not-allowed;
}

.btn-research {
    padding: 3px 9px 3px 25px;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -146px, #241c12;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -146px, linear-gradient(to bottom, #332e30 0%,#2c2621 22%,#241c12 30%,#241c12 100%);
}

.btn-research:hover {
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -146px, #3c2d23;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -146px, linear-gradient(to bottom, #3c2d23 0%,#322b1d 22%,#352b1a 30%,#241c17 100%);
}

.btn-research-disabled, .btn-research-disabled:hover {
    padding: 3px 9px 3px 25px;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -146px, #646464;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -146px, linear-gradient(to bottom, #646464 0%,#4d4c4c 100%);
    cursor: not-allowed;
}

.btn-bcr {
    width: 60px;
    text-align: right;
    padding: 3px;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -24px, #241c12;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -24px, linear-gradient(to bottom, #332e30 0%,#2c2621 22%,#241c12 30%,#241c12 100%);
}

.btn-bcr:hover {
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -24px, #3c2d23;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -24px, linear-gradient(to bottom, #3c2d23 0%,#322b1d 22%,#352b1a 30%,#241c17 100%);
}

.btn-bcr-disabled, .btn-bcr-disabled:hover {
    width: 60px;
    text-align: right;
    padding: 3px;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -24px, #646464;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -24px, linear-gradient(to bottom, #646464 0%,#4d4c4c 100%);
    cursor: not-allowed;
}

.btn-btr {
    text-align: right;
    padding: 3px 3px 3px 24px;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -49px, #241c12;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -49px, linear-gradient(to bottom, #332e30 0%,#2c2621 22%,#241c12 30%,#241c12 100%);
}

.btn-btr:hover {
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -49px, #3c2d23;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -49px, linear-gradient(to bottom, #3c2d23 0%,#322b1d 22%,#352b1a 30%,#241c17 100%);
}

.btn-btr.btn-disabled, .btn-btr.btn-disabled:hover {
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -49px, #646464;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -49px, linear-gradient(to bottom, #646464 0%,#4d4c4c 100%) !important;
    cursor: not-allowed;
}

.btn-instant-free {
    text-align: right;
    padding: 3px 3px 3px 24px;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -49px, #0bac00;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -49px, linear-gradient(to bottom, #0bac00 0%,#0e7a1e 100%);
}

.btn-instant-free:hover {
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -49px, #13c600;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -49px, linear-gradient(to bottom, #13c600 0%,#129e23 100%);
}

.btn-cancel {
    padding: 3px 9px 3px 25px;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -174px, #241c12;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -174px, linear-gradient(to bottom, #332e30 0%,#2c2621 22%,#241c12 30%,#241c12 100%);
}

.btn-cancel:hover {
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -174px, #3c2d23;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -174px, linear-gradient(to bottom, #3c2d23 0%,#322b1d 22%,#352b1a 30%,#241c17 100%);
}

.btn-edit {
    padding-left: 20px;
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/edit.png) no-repeat left center, linear-gradient(to bottom, #332e30 0%,#2c2621 22%,#241c12 30%,#241c12 100%);
}

.btn-edit:hover {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/edit.png) no-repeat left center, linear-gradient(to bottom, #332e30 0%,#2c2621 22%,#241c12 30%,#241c12 100%);
}

.btn-xmas-steel {
    padding: 3px 9px 3px 25px;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -199px, #241c12;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -199px, linear-gradient(to bottom, #332e30 0%,#2c2621 22%,#241c12 30%,#241c12 100%);
}

.btn-xmas-steel:hover {
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -199px, #3c2d23;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -199px, linear-gradient(to bottom, #3c2d23 0%,#322b1d 22%,#352b1a 30%,#241c17 100%);
}

.btn-xmas-steel[disabled], .btn-xmas-steel[disabled]:hover {
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -199px, #646464;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -199px, linear-gradient(to bottom, #646464 0%,#4d4c4c 100%);
    cursor: not-allowed;
}

.btn-res-gems {
    padding: 3px 9px 3px 25px;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -249px, #241c12;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -249px, linear-gradient(to bottom, #332e30 0%,#2c2621 22%,#241c12 30%,#241c12 100%);
}

.btn-res-gems:hover {
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -249px, #3c2d23;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -249px, linear-gradient(to bottom, #3c2d23 0%,#322b1d 22%,#352b1a 30%,#241c17 100%);
}

.btn-res-gems[disabled], .btn-res-gems[disabled]:hover {
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -249px, #646464;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -249px, linear-gradient(to bottom, #646464 0%,#4d4c4c 100%);
    cursor: not-allowed;
}

.btn-xmas-pp, .btn-pp {
    padding: 3px 9px 3px 25px;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -224px, #241c12;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -224px, linear-gradient(to bottom, #332e30 0%,#2c2621 22%,#241c12 30%,#241c12 100%);
}

.btn-xmas-pp:hover, .btn-pp:hover {
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -224px, #3c2d23;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -224px, linear-gradient(to bottom, #3c2d23 0%,#322b1d 22%,#352b1a 30%,#241c17 100%);
}

.btn-xmas-pp[disabled], .btn-xmas-pp[disabled]:hover, .btn-pp[disabled], .btn-pp[disabled]:hover, .btn-pp.btn-disabled, .btn-pp.btn-disabled:hover {
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -224px, #646464 !important;
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/btn/buttons.png") no-repeat 3px -224px, linear-gradient(to bottom, #646464 0%,#4d4c4c 100%) !important;
    cursor: not-allowed;
}

.btn-confirm-yes {
    padding: 5px;
    background: #0bac00;
    background: linear-gradient(to bottom, #0bac00 0%,#0e7a1e 100%);
    color: #fff;
    border-color: #006712;
}

.btn-confirm-yes.btn-disabled, .btn-confirm-yes[disabled] {
    border-color: #000000 !important;
}

.btn-confirm-yes:hover {
    background: #13c600;
    background: linear-gradient(to bottom, #13c600 0%,#129e23 100%);
}

.btn-confirm-yes:focus {
    outline: none;
    border-color: #323232;
}

.btn-confirm-yes-large, .btn-confirm-large {
    height: 20px !important;
    padding: 8px !important;
    font-size: 16px !important;
}

.btn-confirm-no {
    padding: 5px;
    background: #af281d;
    background: linear-gradient(to bottom, #af281d 0%,#801006 100%);
    color: #fff;
    border-color: #670900;
}

.btn-confirm-no:hover {
    background: #c92722;
    background: linear-gradient(to bottom, #c92722 0%,#a00d08 100%);
}

.btn-larger {
    padding: 5px !important;
    font-size: 14px !important;
}

.btn-midget {
    line-height: 14px !important;
}

/**** game/shared.css ****/
.center {
    text-align: center;
}

.va_base {
    vertical-align: baseline;
}

.va_middle {
    vertical-align: middle;
}

.float_left {
    float: left;
}

.float_right {
    float: right;
}

.nowrap {
    white-space: nowrap;
}

input[type=text]:disabled, input[type=number]:disabled {
    background-color: #e6e6e6;
}

pre {
    white-space: break-spaces;
}

.error {
    color: #b40000;
    font-weight: 700;
}

.error ul {
    margin: 0;
    padding: 0;
}

.error_box {
    font-size: 13px;
    font-weight: bold;
    background: #543C30 url('https://dsde.innogamescdn.com/asset/88651122/graphic/error.png') no-repeat 3px center;
    border: 1px solid #2A1F07;
    padding: 2px 2px 2px 24px;
    line-height: 21px;
    color: #B40000;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    cursor: pointer;
}

.error_box .content {
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
    width: 100%;
}

.info_box {
    min-height: 26px;
    font-size: 12px;
    background: #3e2f1b url('https://dsde.innogamescdn.com/asset/88651122/graphic/questionmark.png') no-repeat 4px center;
    border: 1px solid #2A1F07;
    padding: 3px 3px 3px 28px;
    margin: 5px 0;
    line-height: 24px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
}

.info_box .hint-toggle {
    cursor: pointer;
}

.info_box .content {
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
    width: 100%;
}

img.responsive {
    width: 100%;
    height: auto;
}

.info_box a {
    font-size: 12px;
}

.maincell > .info_box {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/questionmark.png') no-repeat 4px center, url("https://dsde.innogamescdn.com/asset/88651122/graphic/index/main_bg.jpg") repeat scroll right top;
}

.help-link {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/help.png') no-repeat;
    padding-left: 23px;
    line-height: 20px;
    font-size: 16px;
}

.help-link-white {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/help_white.png') no-repeat;
}

.w100 {
    width: 100%;
}

.premium_account_hint {
    display: inline-block;
    min-height: 30px;
    font-size: 12px;
    background: #501367 url('https://dsde.innogamescdn.com/asset/88651122/graphic/premium/features/Premium_hint.png') no-repeat 4px center;
    border: 1px solid rgb(180, 150, 98);
    padding: 3px 10px 3px 40px;
    margin: 5px 0;
    line-height: 30px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    text-align: left;
}

.premium_account_hint .content {
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
    width: 100%;
}

.premium_account_hint a {
    font-size: 12px;
}

.premium_account_hint.main {
    display: block;
}

.premium_account_hint.pa-hint-coa {
    display: block;
}

.premium_account_hint.pa-hint-map {
    margin-left: 20px;
    font-weight: normal;
    display: none;
}

.premium_account_hint.pa-hint-map-popup {
    line-height: normal;
}

.height-placeholder.pa-hint-map {
    height: 30px;
    width: 1px;
    display: inline-block;
    padding: 4px 0px 4px 0px;
    border: 1px;
    vertical-align: middle;
    margin: 5px 0px 5px 0px;
}

.dot {
    width: 10px;
    height: 10px;
    display: inline-block;
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/dots/grey.png');
}

.dot.dot-green {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/dots/green.png');
}

.dot.dot-blue {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/dots/blue.png');
}

.dot.dot-brown {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/dots/brown.png');
}

.rename-icon {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/rename.png) top left no-repeat;
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 2px;
}

.delete-icon {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/delete_small.png) center no-repeat;
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 2px;
}

.delete-icon-large {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/delete.png) center no-repeat;
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-left: 2px;
}

.support-icon {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/command/support.png) top left no-repeat;
    padding-left: 16px;
}

.attack-icon {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/command/attack.png) top left no-repeat;
    padding-left: 16px;
}

.sos-icon {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/reqdef.png) top left no-repeat;
    padding-right: 16px;
}

.hammer-icon {
    display: block;
    width: 16px;
    height: 16px;
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/overview/build.png) top left no-repeat;
}

.destroy-icon {
    display: block;
    width: 11px;
    height: 18px;
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/overview/down.png) top left no-repeat;
}

.research-icon {
    display: block;
    width: 15px;
    height: 15px;
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/overview/research.png) top left no-repeat;
}

.note-icon {
    display: block;
    width: 15px;
    height: 15px;
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/overview/note.png) top left no-repeat;
}

.cancel_link_icon {
    vertical-align: middle;
}

.inline-icon {
    display: inline-block;
    padding-left: 22px;
    height: 18px;
    line-height: 18px;
}

.building-main {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/buildings/main.png') center left no-repeat;
}

.building-barracks {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/buildings/barracks.png') center left no-repeat;
}

.building-stable {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/buildings/stable.png') center left no-repeat;
}

.building-garage {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/buildings/garage.png') center left no-repeat;
}

.building-church {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/buildings/church.png') center left no-repeat;
}

.building-church_f {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/buildings/church.png') center left no-repeat;
}

.building-snob {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/buildings/snob.png') center left no-repeat;
}

.building-smith {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/buildings/smith.png') center left no-repeat;
}

.building-place {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/buildings/place.png') center left no-repeat;
}

.building-statue {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/buildings/statue.png') center left no-repeat;
}

.building-market {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/buildings/market.png') center left no-repeat;
}

.building-wood {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/buildings/wood.png') center left no-repeat;
}

.building-stone {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/buildings/stone.png') center left no-repeat;
}

.building-iron {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/buildings/iron.png') center left no-repeat;
}

.building-farm {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/buildings/farm.png') center left no-repeat;
}

.building-storage {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/buildings/storage.png') center left no-repeat;
}

.building-hide {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/buildings/hide.png') center left no-repeat;
}

.building-wall {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/buildings/wall.png') center left no-repeat;
}

.building-watchtower {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/buildings/watchtower.png') center left no-repeat;
}

.tech-spear {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/unit/unit_spear.png') center left no-repeat;
}

.tech-sword {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/unit/unit_sword.png') center left no-repeat;
}

.tech-axe {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/unit/unit_axe.png') center left no-repeat;
}

.tech-archer {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/unit/unit_archer.png') center left no-repeat;
}

.tech-spy {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/unit/unit_spy.png') center left no-repeat;
}

.tech-light {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/unit/unit_light.png') center left no-repeat;
}

.tech-heavy {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/unit/unit_heavy.png') center left no-repeat;
}

.tech-marcher {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/unit/unit_marcher.png') center left no-repeat;
}

.tech-ram {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/unit/unit_ram.png') center left no-repeat;
}

.tech-catapult {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/unit/unit_catapult.png') center left no-repeat;
}

.avail {
    display: block;
    width: 10px;
    height: 10px;
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/overview/prod_avail.png) top left no-repeat;
}

.imposs {
    display: block;
    width: 10px;
    height: 10px;
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/overview/prod_impossible.png) top left no-repeat;
}

.running {
    display: block;
    width: 10px;
    height: 10px;
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/overview/prod_running.png) top left no-repeat;
}

.done {
    display: block;
    width: 10px;
    height: 10px;
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/overview/prod_finish.png) top left no-repeat;
}

span.wood, div.block-res.wood {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/holz.png);
}

span.stone, div.block-res.stone {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/lehm.png);
}

span.iron, div.block-res.iron {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/eisen.png);
}

div.res {
    background-position: left center;
}

span.mwood {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/m/res_wood.png);
    background-size: 18px 16px;
}

span.mstone {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/m/res_stone.png);
    background-size: 18px 16px;
}

span.miron {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/m/res_iron.png);
    background-size: 18px 16px;
}

.wood-bonus {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/resources/wood_18x16_plus.png);
}

.stone-bonus {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/resources/stone_18x16_plus.png);
}

.iron-bonus {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/resources/iron_18x16_plus.png);
}

.wood-minus {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/resources/wood_18x16_minus.png);
}

.stone-minus {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/resources/stone_18x16_minus.png);
}

.iron-minus {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/resources/iron_18x16_minus.png);
}

.quest-summary {
    background-color: #501367;
    border: 1px solid #1e1a00;
    padding: 5px;
    vertical-align: top;
}

.quest-goal {
    background-color: #351806;
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/background/flow.png');
    background-position: bottom;
    background-repeat: repeat-x;
    border: 1px solid #1e1a00;
    margin-bottom: -1px;
    clear: both;
}

.quest-goal > table {
    border: 1px solid #3b2300;
}

.quest-goal .progress-bar {
    padding: 0;
}

.quest-goal .progress-bar > div .label {
    margin-top: 2px;
}

.questlog {
    position: absolute;
    top: 5px;
    left: -65px;
}

.questlog_placeholder {
    min-width: 50px;
    height: 1px;
    float: left;
}

.quest {
    width: 25px;
    height: 25px;
    border: 1px solid #1e1a00;
    background-color: #8b23a5;
    margin: 10px;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    position: relative;
    text-align: center;
    box-shadow: rgb(81 4 94 / 70%) 2px 2px 2px;
    border-radius: 3px;
}

#new_quest {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/quests_new/new_quest_icon_small.png);
}

.spin {
    -webkit-animation: spin 1.4s infinite linear;
    -moz-animation: spin 1.4s infinite linear;
    -o-animation: spin 1.4s infinite linear;
    -ms-animation: spin 1.4s infinite linear;
}

.quest:hover {
    background-color: #c000ff;
}

.quest.finished {
    background-color: #3B3120;
}

.quest.finished:after {
    content: url(https://dsde.innogamescdn.com/asset/88651122/graphic/quests/check.png);
    position: absolute;
    right: -5px;
    bottom: -8px;
}

.decommission {
    color: #b40000;
}

.hide_toggle {
    display: none;
    margin-left: -1px;
}

.show_toggle {
    display: inline;
}

.mds input[type=checkbox].show_toggle {
    display: inline-block;
}

.quest_arrow {
    z-index: 13001;
    pointer-events: none;
}

.btn.quest-arrow-target {
    box-shadow: 0px 0px 0px 3px rgba(31, 111, 67, 0.8);
}

.quest-arrow-target#header_menu_link_map a, #command-data-form a.quest-arrow-target, .box-item.quest-arrow-target a {
    color: rgb(31, 111, 67) !important;
}

.quest_arrow_left {
    animation: bounceRight 1s linear infinite alternate;
    -webkit-animation: bounceRight 1s linear infinite alternate;
}

@keyframes bounceRight {
    from {
        margin-left: 0;
    }

    to {
        margin-left: 20px;
    }
}

@-webkit-keyframes bounceRight {
    from {
        margin-left: 0;
    }

    to {
        margin-left: 20px;
    }
}

.quest_arrow_right {
    animation: bounceLeft 1s linear infinite alternate;
    -webkit-animation: bounceLeft 1s linear infinite alternate;
}

@keyframes bounceLeft {
    from {
        margin-left: 0;
    }

    to {
        margin-left: -20px;
    }
}

@-webkit-keyframes bounceLeft {
    from {
        margin-left: 0;
    }

    to {
        margin-left: -20px;
    }
}

.quest_arrow_down {
    animation: bounceUp 1s linear infinite alternate;
    -webkit-animation: bounceUp 1s linear infinite alternate;
}

@keyframes bounceUp {
    from {
        margin-top: 0;
    }

    to {
        margin-top: -20px;
    }
}

@-webkit-keyframes bounceUp {
    from {
        margin-top: 0;
    }

    to {
        margin-top: -20px;
    }
}

.quest_arrow_up {
    animation: bounceDown 1s linear infinite alternate;
    -webkit-animation: bounceDown 1s linear infinite alternate;
}

@keyframes bounceDown {
    from {
        margin-top: 0;
    }

    to {
        margin-top: 20px;
    }
}

@-webkit-keyframes bounceDown {
    from {
        margin-bottom: 0;
    }

    to {
        margin-bottom: 20px;
    }
}

.quest_new {
    text-align: center;
    font-family: "Segoe UI", Tahoma, Verdana, Arial;
    font-size: 9px;
    font-weight: bold;
    border: 1px solid #fff;
    background-color: #9d281c;
    border-radius: 6px;
    height: 13px;
    width: 34px;
    position: absolute;
    top: 20px;
    left: -14px;
    color: #fff;
    z-index: 1000;
}

.quest.opened .quest_new {
    display: none;
}

.quest_new.ru, .quest_new.nl, .quest_new.it, .quest_new.es {
    font-size: 8px;
    width: 36px;
}

.quest_new.fr {
    font-size: 8px;
    width: 40px;
}

.quest_new.ae {
    width: 26px;
    left: 6px;
}

.quest_progress {
    background-color: green;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.45;
}

.quest.finished .quest_progress {
    display: none;
}


.popup_style {
    position: absolute;
    background: #605660;
    display: none;
    z-index: 99999;
    border-color: #280100 #1e1a00 #140e00 #280100;
    border-radius: 8px 8px 0 0;
    border-style: solid;
    border-width: 1px;
}


.popup_menu {
    background-color: #260830;
    background-repeat: repeat-x;
    border-radius: 8px 8px 0 0;
    cursor: move;
    font-size: 17px;
    font-weight: bold;
    height: 26px;
    padding: 2px 5px;
    width: auto;
}

.popup_menu a {
    float: right;
}


.popup_content {
    width: auto;
    background: #605660;
    padding: 10px 5px;
}

.popup_content td {
    padding: 2px 3px;
}

#inline_popup {
    border-top: 1px solid #280100;
    border-left: 1px solid #280100;
    border-right: 1px solid #1e1a00;
    border-bottom: 1px solid #140e00;
    -webkit-border-radius: 8px 8px 0px 0px;
    border-radius: 8px 8px 0px 0px;
    position: relative;
    width: 298px;
    z-index: 99999;
    -webkit-transform: scale(0.7);
    -moz-transform: scale(0.7);
    -ms-transform: scale(0.7);
    transform: scale(0.7);
    opacity: 0;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    visibility: hidden;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
}

#inline_popup.hidden {
    width: 0 !important;
    height: 0 !important;
}

#inline_popup.hidden * {
    display: none;
}

#inline_popup.show {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    opacity: 1;
    visibility: visible;
}

#inline_popup.ui-draggable-dragging {
    transition: none !important;
    background-color: red !important;
}


/* ???? CHANGE ???? */
#inline_popup_menu {
    background-color: #221f00;
    //background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/screen/tableheader_bg3.png);
    background-repeat: repeat-x;
    width: auto;
    height: 26px;
    padding: 2px 5px;
    cursor: move;
    -webkit-border-radius: 8px 8px 0px 0px;
    border-radius: 8px 8px 0px 0px;
    font-size: 17px;
    font-weight: bold;
}

#inline_popup_title {
    font-size: 17px;
    font-weight: bold;
}

#inline_popup_close {
    float: right;
}

/* ???? CHANGE ???? */
#inline_popup_main {
    overflow: auto;
    height: 300px;
    //background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/main_bg.jpg);
    padding: 3px;
}

.coinbag {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/premium/coinbag_18x18.png) no-repeat;
    line-height: 18px;
    width: 18px;
    height: 18px;
}

.coinbag-header {
    display: inline-block;
    vertical-align: top;
    position: relative;
    top: -3px;
}

.coinbag.solo {
    vertical-align: -4px;
    display: inline-block;
}

.coinbag.before {
    background-position: top left;
    padding-left: 20px;
}

.coinbag.after {
    background-position: top right;
    padding-right: 20px;
}

.cancel-icon.solo {
    display: inline-block;
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/delete.png) no-repeat 0 -2px;
    height: 15px;
    width: 15px;
}

.coinbag-free {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/confirm.png) no-repeat;
    line-height: 18px;
    width: 18px;
    height: 18px;
    display: inline-block;
    vertical-align: -4px;
}

.post_thanks {
    border-top: 1px solid #280100;
    padding: 3px;
    overflow: hidden;
}

.thanksnum {
    float: left;
    font-style: italic;
}

.post_thanks_who {
    display: none;
    clear: both;
}

.arrowLeft {
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/arrow-left.png) scroll left top no-repeat;
}

.arrowLeftGrey {
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/arrow-left-grey.png) scroll left top no-repeat;
}

.arrowLeft:hover {
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/arrow-left.png) scroll left bottom no-repeat;
}

.arrowRight {
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/arrow-right.png) scroll left top no-repeat;
}

.arrowRightGrey {
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/arrow-right-grey.png) scroll left top no-repeat;
}

.arrowRight:hover {
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/arrow-right.png) scroll left bottom no-repeat;
}

.group-menu-item {
    display: inline-block;
    white-space: nowrap;
}

.groupLeft {
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/group-left.png) scroll left top no-repeat;
}

.groupLeft:hover {
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/group-left.png) scroll left bottom no-repeat;
}

.groupRight {
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/group-right.png) scroll left top no-repeat;
}

.groupRight:hover {
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/group-right.png) scroll left bottom no-repeat;
}

.groupJump {
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/group-jump.png) scroll left top no-repeat;
}

.groupJump:hover {
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/group-jump.png) scroll left bottom no-repeat;
}

.red-button {
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/index/sprites.png") no-repeat scroll 0 -123px transparent;
    color: #FFFFFF;
    display: block;
    font-size: 18px;
    height: 38px;
    line-height: 35px;
    margin: auto;
    text-align: center;
    text-decoration: none;
    width: 308px;
}

.red-button:hover {
    color: white;
    background-position: 0px -161px;
}

.forum-container {
    margin: 5px;
}

.forum-container .post {
    width: 100%;
}

.forum-content {
    background: #32200f;
    border: 1px solid #1c1200;
}

.forum {
    display: inline-block;
    background-color: #352C27;
    margin-bottom: 4px;
    padding: 3px;
    border: 1px solid #1c1200;
    white-space: nowrap;
    line-height: 150%;
}

.selected, .selected td {
    background-color: #c000ff !important;
}

.shared_forum {
    display: inline-block;
    background-color: #524c5c;
    margin-bottom: 4px;
    padding: 1px;
    border: 1px solid #000;
    white-space: nowrap;
    line-height: 150%;
}

.shared_selected {
    background-color: #b7c3c9;
}

input.answer {
    margin-bottom: 4px;
}

.thread_button {
    display: inline;
}

.inline-affront-report {
    vertical-align: -4px;
    padding: 0 3px;
    opacity: 0.5;
    transition: opacity .25s ease-in-out;
    -moz-transition: opacity .25s ease-in-out;
    -webkit-transition: opacity .25s ease-in-out;
}

.inline-affront-report:hover {
    opacity: 1.0;
}

.igmline input {
    width: 12px;
    height: 12px;
    vertical-align: middle;
}

.igmline .postheader_right {
    float: right;
    font-size: 0.95em;
    padding-right: 4px;
}

.igmline .postheader_left {
    float: left;
}

.search_highlight {
    background-color: #3A2100;
}

.thread_button span {
    display: block;
    float: left;
    padding-right: 5px;
    padding-top: 6px;
    font-size: 10px;
    min-width: 80px;
    height: 23px;
	color: #603000;
}

body[dir="rtl"] .thread_button span {
    float: right;
    padding-left: 5px;
    padding-right: 0;
}

body[dir="rtl"] .thread_button span:last-child {
    margin-left: 5px;
}

.thread_new {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/forum/button_mid.png) repeat-x 0 0;
}

.thread_new_close {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/forum/button_close.png) no-repeat 0 0;
    width: 10px !important;
    padding-left: 0 !important;
    min-width: 10px !important;
}

body[dir="rtl"] .thread_new_close {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/forum/button_close-rtl.png) no-repeat 0 0;
}

.thread_new_open {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/forum/thread_new_open.png) no-repeat 0 0;
    width: 25px !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    min-width: 10px !important;
}

body[dir="rtl"] .thread_new_open {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/forum/thread_new_open-rtl.png) no-repeat 0 0;
}

.thread_poll {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/forum/button_mid.png) repeat-x 0 0;
}

.thread_poll_close {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/forum/button_close.png) no-repeat 0 0;
    width: 10px !important;
    padding-left: 0 !important;
    min-width: 10px !important;
}

body[dir="rtl"] .thread_poll_close {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/forum/button_close-rtl.png) no-repeat 0 0;
}

.thread_poll_open {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/forum/poll_open.png) no-repeat 0 0;
    width: 25px !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    min-width: 10px !important;
}

body[dir="rtl"] .thread_poll_open {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/forum/poll_open-rtl.png) no-repeat 0 0;
}

.thread_answer {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/forum/button_mid.png) repeat-x 0 0;
}

.thread_answer_open {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/forum/thread_answer_open.png) no-repeat 0 0;
    width: 25px !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    min-width: 10px !important;
}

body[dir="rtl"] .thread_answer_open {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/forum/thread_new_open-rtl.png) no-repeat 0 0;
}

.thread_answer_close {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/forum/button_close.png) no-repeat 0 0;
    width: 10px !important;
    padding-left: 0 !important;
    min-width: 10px !important;
}

body[dir="rtl"] .thread_answer_close {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/forum/button_close-rtl.png) no-repeat 0 0;
}

.thread_edit {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/forum/button_mid.png) repeat-x 0 0;
}

.thread_edit_open {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/forum/thread_edit_open.png) no-repeat 0 0;
    width: 25px !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    min-width: 10px !important;
}

body[dir="rtl"] .thread_edit_open {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/forum/thread_new_open-rtl.png) no-repeat 0 0;
}

.thread_edit_close {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/forum/button_close.png) no-repeat 0 0;
    width: 10px !important;
    padding-left: 0 !important;
    min-width: 10px !important;
}

body[dir="rtl"] .thread_edit_close {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/forum/button_close-rtl.png) no-repeat 0 0;
}

#popup_box_forum_share .popup_box_content {
    width: 300px;
}

.popup_box_container {
    z-index: 14000;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 80%;
}

@media screen and (max-height: 1000px) {
    .popup_box_container {
        height: 100%;
    }
}

#fader, .fader {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/grey-fade.png);
    z-index: 12000;
}

#payment_box {
    z-index: 14000;
    position: fixed;
    left: 50%;
    top: 10%;
}

#payment_box_loading {
    position: relative;
    top: -330px;
    text-align: center;
    font-size: 20px;
    color: #fff;
}

#payment_box_loading img {
    vertical-align: -3px;
}

#popup_box_bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
}

.popup_box {
    z-index: 13000;
    border: 1px solid #280100;
    opacity: 0;
    -webkit-transition: all 0.15s;
    -moz-transition: all 0.15s;
    transition: all 0.15s;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
    position: relative;
}

.popup_box.show {
    opacity: 1;
    visibility: visible;
}

.borderimage .popup_box {
    border: 19px solid #280100;
    -moz-border-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/popup/border.png") 9 19 19 19 repeat;
    -webkit-border-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/popup/border.png") 9 19 19 19 repeat;
    -o-border-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/popup/border.png") 19 19 19 19 repeat;
    border-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/popup/border.png") 19 19 19 19 repeat;
}

.borderimage .popup_box.slim {
    border: 9px solid #280100;
    -moz-border-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/popup/border_slim.png") 9 9 9 9 repeat;
    -webkit-border-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/popup/border_slim.png") 9 9 9 9 repeat;
    -o-border-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/popup/border_slim.png") 9 9 9 9 repeat;
    border-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/popup/border_slim.png") 9 9 9 9 repeat;
}

.popup_box.noborder {
    border: 0;
}

.popup_box.noborder .popup_box_content {
    background: transparent;
}

.popup_box_close {
    position: absolute;
    z-index: 2;
    top: -25px;
    right: -23px;
    width: 20px;
    height: 20px;
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/login_close.png) top left no-repeat;
}

.slim .popup_box_close {
    top: -15px;
    right: -13px;
}

.popup_box_header {
    margin-right: 10px;
    word-wrap: break-word;
}


.popup_box_content {
    background: #501367;
    padding: 10px;
    max-height: 85vh;
    overflow: auto;
}

.borderimage .popup_box_content {
    padding: 0;
}

.popup_box h3, .popup_box h2 {
    margin-top: 0;
}

#popup_box_quest {
    z-index: 13002;
}

.faded {
    opacity: 0.3;
}

.faded img {
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)";
}

a.faded:hover {
    opacity: 1;
}

a.faded:hover img {
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}

.report_image {
    height: 290px;
    width: 460px;
    position: relative;
    margin: 0 auto 8px;
    padding: 0 ! important;
}

.report_image_hidden {
    background: none !important;
    height: auto;
}

.report_image_hidden .report_transparent_overlay {
    background: none !important;
    position: inherit;
}

.spoiler .image_attack_won, .image_attack_won {
    background: center center url(https://dsde.innogamescdn.com/asset/88651122/graphic/reports/battle_attacker_won.jpg);
}

.spoiler .image_attack_lost, .image_attack_lost {
    background: bottom right url(https://dsde.innogamescdn.com/asset/88651122/graphic/reports/battle_attacker_lost.jpg);
}

.spoiler .image_defense_won, .image_defense_won {
    background: bottom left url(https://dsde.innogamescdn.com/asset/88651122/graphic/reports/battle_defender_won.jpg);
}

.spoiler .image_defense_lost, .image_defense_lost {
    background: bottom center url(https://dsde.innogamescdn.com/asset/88651122/graphic/reports/battle_defender_lost.jpg);
}

.spoiler .image_scout_enemy_success, .image_scout_enemy_success {
    background: bottom right url(https://dsde.innogamescdn.com/asset/88651122/graphic/reports/battle_scout_enemy_success.jpg);
}

.spoiler .image_scout_enemy_fail, .image_scout_enemy_fail {
    background: top center url(https://dsde.innogamescdn.com/asset/88651122/graphic/reports/battle_scout_enemy_fail.jpg);
}

.spoiler .image_scout_own_success, .image_scout_own_success {
    background: center right url(https://dsde.innogamescdn.com/asset/88651122/graphic/reports/battle_scout_own_success.jpg);
}

.spoiler .image_scout_own_fail, .image_scout_own_fail {
    background: bottom left url(https://dsde.innogamescdn.com/asset/88651122/graphic/reports/battle_scout_own_fail.jpg);
}

.spoiler .image_village_won, .image_village_won {
    background: bottom left url(https://dsde.innogamescdn.com/asset/88651122/graphic/reports/battle_village_won.jpg);
}

.spoiler .image_village_lost, .image_village_lost {
    background: bottom right url(https://dsde.innogamescdn.com/asset/88651122/graphic/reports/battle_village_lost.jpg);
}

.spoiler .image_support, .image_support {
    background: bottom center url(https://dsde.innogamescdn.com/asset/88651122/graphic/reports/support_arrives.jpg);
}

.spoiler .image_noble_conquered_own, .image_noble_conquered_own {
    background: center center url(https://dsde.innogamescdn.com/asset/88651122/graphic/reports/noble_conquer_own.jpg);
}

.spoiler .image_noble_conquered_enemy, .image_noble_conquered_enemy {
    background: center center url(https://dsde.innogamescdn.com/asset/88651122/graphic/reports/noble_conquer_enemy.jpg);
}

.spoiler .image_noble_attack, .image_noble_attack {
    background: center center url(https://dsde.innogamescdn.com/asset/88651122/graphic/reports/noble_attack.jpg);
}

.spoiler .image_noble_attack_fail, .image_noble_attack_fail {
    background: top center url(https://dsde.innogamescdn.com/asset/88651122/graphic/reports/noble_attack_failed.jpg);
}

.spoiler .image_noble_defense, .image_noble_defense {
    background: center center url(https://dsde.innogamescdn.com/asset/88651122/graphic/reports/noble_defense.jpg);
}

.spoiler .image_noble_defense_fail, .image_noble_defense_fail {
    background: center center url(https://dsde.innogamescdn.com/asset/88651122/graphic/reports/noble_defense_failed.jpg);
}

.spoiler .image_stronghold, .image_stronghold {
    background: center center url(https://dsde.innogamescdn.com/asset/88651122/graphic/stronghold/background1.jpg);
    background-size: cover;
}

.spoiler .image_battle_noble_own_lost, .image_battle_noble_own_lost {
    background: center center url(https://dsde.innogamescdn.com/asset/88651122/graphic/reports/battle_noble_own_lost.jpg);
}

.spoiler div {
    background: #410058 none repeat scroll 0 0;
    border: 1px inset;
    margin: 3px 0;
    padding: 6px;
    overflow: auto;
}

.spoiler pre {
    white-space: pre-wrap;
    word-wrap: break-word;
}

.report_transparent_overlay {
    width: 100%;
    padding: 4px 0;
    position: absolute;
    bottom: 0;
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/reports/transparent_overlay.png) !important;
}

.report_transparent_overlay table tr td {
    background: none;
}

.spoiler .report_transparent_overlay {
    margin: 0 !important;
    padding: 0 !important;
    border-style: none ! important;
}

.report_transparent_overlay table tr .overlay-item, .report_transparent_overlay table tr .overlay-item {
    background: none !important;
    padding: 0;
    margin: 0;
    line-height: 12px;
}

.report_transparent_overlay h4 {
    padding: 0;
    margin: 2px 4px;
}

#attack_luck .nobg {
    background-color: transparent;
}

#attack_luck .luck {
    border: 1px solid #000;
}

.unit-item {
    padding: 0 3px 0;
}

#attack_luck .luck .luck-item {
    padding: 0;
}

div.award {
    border: 1px solid #201100;
}

.award {
    width: 60px;
    height: 60px;
}

.award.level0 {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/awards/frame0.png);
}

.award.level1 {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/awards/frame1.png);
}

.award.level2 {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/awards/frame2.png);
}

.award.level3 {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/awards/frame3.png);
}

.award.level4 {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/awards/frame4.png);
}

.award img {
    margin: 7px;
}

.award-img {
    width: 46px;
    height: 46px;
}

.awardmini {
    border: 1px solid #201100;
    width: 16px;
    height: 16px;
    float: left;
    margin: 2px;
}

.awardmini.level1 {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/awards/frame1_mini.png);
}

.awardmini.level2 {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/awards/frame2_mini.png);
}

.awardmini.level3 {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/awards/frame3_mini.png);
}

.awardmini.level4 {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/awards/frame4_mini.png);
}

.awardmini img {
    margin: 2px;
    width: 12px;
    height: 12px;
}

.award-compare.better {
    color: #2b8327;
}

.award-compare.worse {
    color: #a43333;
}

.award-compare.equal {
    color: #1F1300;
}

.award-count {
    color: #fff;
    font-size: 24px;
    text-align: center;
    line-height: 60px;
}

.restart {
    width: 48%;
    float: left;
    -webkit-box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}

.restart_sitter {
    width: 70%;
    float: left;
    -webkit-box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}

.widget table {
    border-spacing: 1px !important;
}

.bgContainer {
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/main_bg.jpg) scroll left top repeat;
}

.containerBorder.narrow {
    display: table;
    border-spacing: 0;
    width: 1px;
}

.inactive, .inactive:hover {
    color: #241503;
}

.event-mini-icon {
    vertical-align: -4px;
}

#troop_template_container {
    width: 71%;
    float: left;
}

#troop_template_list {
    width: 29%;
    float: left;
}

#troop_template_list ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

#troop_template_list ul li {
    padding: 0;
    margin: 0;
}

#troop_template_list ul li a {
    display: block;
    padding: 3px;
}

#troop_template_list ul li:nth-child(even) a {
    background-color: #100d09;
}

#troop_template_list ul li:nth-child(odd) a {
    background-color: #32251b;
}

#troop_template_list ul li.selected a {
    background-color: #371b0b;
}

#troop_template_list img {
    float: right;
}

.troop_template_selector {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
    display: inline-block;
}

.requ_error {
    display: none;
}

.error > div > .requ_error {
    display: block;
    font-weight: normal;
    font-size: 10px;
}

.mds #template_queue {
    padding-left: 0;
}

.mds #template_queue li {
    height: 36px;
    clear: both;
}

.vis_item > .bqremove {
    width: 16px;
    height: 16px;
    margin: 0px 5px;
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/delete.png') center center no-repeat;
    cursor: pointer;
}

.mds .vis_item > .bqremove {
    margin-top: 8px;
}

.vis_item > .bqedit {
    width: 16px;
    height: 16px;
    margin: 0px 5px;
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/icons/paste.png') center center no-repeat;
    cursor: pointer;
}

#footer a {
    line-height: 22px;
}

.world_button_active {
    background: #c000ff;
    color: #fff;
    font-weight: bold;
    text-align: center;
    line-height: 22px;
    font-size: 12px;
    width: 90px;
    height: 22px;
    position: relative;
    float: left;
    display: block;
    margin-right: 8px;
    margin-bottom: 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

#world_selection_clicktrap {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999998;
    display: none;
}

.world_button_active:hover {
    background: #c000ff;
	box-sizing: border-box;
	border: 1px solid white;
}

.world_button_inactive {
    background: #501665;
    color: #fff;
    font-weight: bold;
    text-align: center;
    line-height: 22px;
    font-size: 12px;
    width: 90px;
    height: 22px;
    position: relative;
    float: left;
    display: block;
    margin-right: 8px;
    margin-bottom: 2px;
}

.world_button_inactive:hover {
    background: #c000ff;
}

#world_selection_popup {
    display: none;
    position: fixed;
    bottom: 22px;
    left: 4px;
    padding: 4px;
    z-index: 9999999;
	background: #190924;
	border: 1px solid white;
}

#servers-list-block {
    width: 200px;
    height: 100%;
    margin: 0;
    padding: 0 4px 0 8px;
    background: transparent;
}

#servers-list-block .world_button_active, #servers-list-block .world_button_inactive {
    margin-right: 4px;
}

#content #show_all_server, #show_all_server {
    margin: 5px 0 0;
    text-align: center;
}

#active_server .pseudo-heading {
    font-weight: bold;
    font-size: 10px;
    width: 175px;
    padding: 0 0 4px;
}

.servers-list-top {
    margin: 0;
    padding: 0;
    width: 200px;
    height: 10px;
    background: transparent;
}

.servers-list-bottom {
    margin: 0;
    padding: 0;
    width: 200px;
    height: 10px;
    background: transparent;
}

.widget-content .new-world-list {
    margin-left: 0;
    padding-left: 24px;
}

.new-world-list > .new-world-item {
    list-style-type: none;
    text-align: left;
}

.new-world-item > p {
    padding: 0;
    margin: 0 0 8px;
}

a .button_left {
    width: 4px;
    height: 28px;
    position: relative;
    float: left;
    display: block;
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/btn_left.png') no-repeat 0 0;
}

a .button_middle {
    font-size: 1.2em;
    color: #fff;
    font-weight: bold;
    height: 28px;
    position: relative;
    float: left;
    padding: 0 4px 0;
    line-height: 28px;
    text-align: center;
    display: block;
    min-width: 100px;
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/btn_middle.png') repeat-x scroll 0 0 transparent;
}

a .button_middle:hover {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/btn_middle.png') repeat-x scroll 0 -28px transparent;
}

a .button_right {
    width: 3px;
    height: 28px;
    position: relative;
    float: left;
    display: block;
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/btn_right.png') no-repeat 0 0;
}

a .button_left.green {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/quests/btn_left.png') no-repeat 0 0;
}

a .button_middle.green {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/quests/btn_middle.png') repeat-x scroll 0 0 transparent;
}

a .button_middle.green:hover {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/quests/btn_middle.png') repeat-x scroll 0 -28px transparent;
}

a .button_right.green {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/quests/btn_right.png') no-repeat 0 0;
}

.village_anchor {
    white-space: nowrap;
}

.village_anchor > .ctx {
    display: inline-block;
    vertical-align: -1px;
    width: 12px;
    height: 12px;
    margin-left: 5px;
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/icons/village_context.png');
    opacity: 0.4;
}

.village_anchor:hover > .ctx {
    opacity: 1;
}

.village_anchor > .ctx:hover {
    background-position: 0 -12px;
}

.village_ctx {
    height: 24px;
    width: 24px;
    display: block;
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/map/icons_context.png');
    position: absolute;
    z-index: 11950;
}

.village_anchor > .spin {
    -webkit-animation: spin 1.4s infinite linear;
    -moz-animation: spin 1.4s infinite linear;
    -o-animation: spin 1.4s infinite linear;
    -ms-animation: spin 1.4s infinite linear;
    opacity: 1;
}

.suppress-spin > .spin {
    -webkit-animation: none;
    -o-animation: none;
    animation: none;
}

@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
    }
}

@-moz-keyframes spin {
    0% {
        -moz-transform: rotate(0deg);
    }

    100% {
        -moz-transform: rotate(360deg);
    }
}

@-o-keyframes spin {
    0% {
        -o-transform: rotate(0deg);
    }

    100% {
        -o-transform: rotate(360deg);
    }
}

@-ms-keyframes spin {
    0% {
        -ms-transform: rotate(0deg);
    }

    100% {
        -ms-transform: rotate(360deg);
    }
}

#ctx_market {
    background-position: 0px 0px;
}

#ctx_market:hover {
    background-position: 0px -24px;
}

#ctx_place {
    background-position: -24px 0px;
}

#ctx_place:hover {
    background-position: -24px -24px;
}

#ctx_claim {
    background-position: -48px 0px;
}

#ctx_claim:hover {
    background-position: -48px -24px;
}

#ctx_unclaim {
    background-position: -216px 0px;
}

#ctx_unclaim:hover {
    background-position: -216px -24px;
}

#ctx_fav {
    background-position: -72px 0px;
}

#ctx_fav:hover {
    background-position: -72px -24px;
}

#ctx_unfav {
    background-position: -240px 0px;
}

#ctx_unfav:hover {
    background-position: -240px -24px;
}

#ctx_overview {
    background-position: -360px 0px;
}

#ctx_overview:hover {
    background-position: -360px -24px;
}

#ctx_recruit {
    background-position: -168px 0px;
}

#ctx_recruit:hover {
    background-position: -168px -24px;
}

#ctx_info {
    background-position: -144px 0px;
}

#ctx_info:hover {
    background-position: -144px -24px;
}

#ctx_map {
    background-position: -336px 0px;
}

#ctx_map:hover {
    background-position: -336px -24px;
}

.clearfix:before, .clearfix:after {
    content: " ";
    display: table;
}

.clearfix:after {
    clear: both;
}

.clearfix {
    *zoom: 1; }

.mo img {
    vertical-align: -3px;
}

.mo {
    float: right;
    border: 1px solid #000;
    border-radius: 3px;
    background: #a90329;
    background: -moz-linear-gradient(top, #a90329 0%, #8f0222 44%, #6d0019 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #a90329), color-stop(44%, #8f0222), color-stop(100%, #6d0019));
    background: -webkit-linear-gradient(top, #a90329 0%, #8f0222 44%, #6d0019 100%);
    background: -o-linear-gradient(top, #a90329 0%, #8f0222 44%, #6d0019 100%);
    background: -ms-linear-gradient(top, #a90329 0%, #8f0222 44%, #6d0019 100%);
    background: linear-gradient(to bottom, #a90329 0%, #8f0222 44%, #6d0019 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#a90329', endColorstr='#6d0019', GradientType=0);
    padding: 1px 4px 3px 4px;
    color: #fff;
    font-size: 11px;
}

.mo:hover {
    background: #e5042a;
    background: -moz-linear-gradient(top, #e5042a 0%, #c10323 44%, #a00002 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #e5042a), color-stop(44%, #c10323), color-stop(100%, #a00002));
    background: -webkit-linear-gradient(top, #e5042a 0%, #c10323 44%, #a00002 100%);
    background: -o-linear-gradient(top, #e5042a 0%, #c10323 44%, #a00002 100%);
    background: -ms-linear-gradient(top, #e5042a 0%, #c10323 44%, #a00002 100%);
    background: linear-gradient(to bottom, #e5042a 0%, #c10323 44%, #a00002 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e5042a', endColorstr='#a00002', GradientType=0);
    color: #fff;
}

#invite_rewards {
    width: 170px;
    float: right;
    padding: 0 10px 10px 10px;
    margin: 0 0 0 20px;
    text-align: center;
}

body[dir="rtl"] #invite_rewards {
    float: left;
    margin: 0 20px 0 0;
}

#invite_rewards div {
    width: 75px;
    display: inline-block;
}

#invite_rewards div p {
    font-weight: bold;
}

#invite_col1 {
    width: 47%;
    float: left;
    min-width: 280px;
    margin-right: 5%;
}

body[dir="rtl"] #invite_col1 {
    float: right;
    margin-right: 0;
    margin-left: 5%;
}

#invite_col2 {
    width: 47%;
    float: left;
    min-width: 280px;
}

body[dir="rtl"] #invite_col2 {
    float: right;
}

.invite_widget {
    width: 100%;
}

.invite_widget > div {
    background-color: #501367;
    padding: 5px;
}

#ref_link_input {
    width: 95%;
}

.invite_social {
    text-align: center;
}

.ui-slider {
    position: relative;
    text-align: left;
    background-color: #32251b;
    border: 1px solid #2a1f07;
    border-radius: 3px;
}

.ui-slider .ui-slider-handle {
    position: absolute;
    z-index: 2;
    width: 1.2em;
    height: 1.2em;
    cursor: pointer;
    background-color: #221200;
    border-radius: 6px;
    border: 1px solid #2a1f07;
}

.ui-slider .ui-slider-range {
    position: absolute;
    z-index: 1;
    font-size: .7em;
    display: block;
    border: 0;
    background-position: 0 0;
    background-color: #221f00;
}

.ui-slider.ui-state-disabled .ui-slider-handle, .ui-slider.ui-state-disabled .ui-slider-range {
    filter: inherit;
}

.ui-slider-horizontal {
    height: .8em;
}

.ui-slider-horizontal .ui-slider-handle {
    top: -.3em;
    margin-left: -.6em;
}

.ui-slider-horizontal .ui-slider-range {
    top: 0;
    height: 100%;
}

.ui-slider-horizontal .ui-slider-range-min {
    left: 0;
}

.ui-slider-horizontal .ui-slider-range-max {
    right: 0;
}

.ui-slider-vertical {
    width: .8em;
    height: 100px;
}

.ui-slider-vertical .ui-slider-handle {
    left: -.3em;
    margin-left: 0;
    margin-bottom: -.6em;
}

.ui-slider-vertical .ui-slider-range {
    left: 0;
    width: 100%;
}

.ui-slider-vertical .ui-slider-range-min {
    bottom: 0;
}

.ui-slider-vertical .ui-slider-range-max {
    top: 0;
}

#itunes, #googleplay {
    float: left;
    margin-top: 10px;
}

#itunes_mobile {
    width: 135px;
    height: 40px;
    margin: 10px auto;
}

#googleplay_mobile {
    width: 115px;
    height: 40px;
    margin: 10px auto;
}

#itunes img, #itunes_mobile img {
    width: 135px;
    height: 40px;
}

#googleplay img, #googleplay_mobile img {
    width: 115px;
    height: 40px;
}

.progress-bar {
    width: 100%;
    height: 20px;
    border-radius: 10px;
    box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.15) inset;
    background-color: #2b2a31;
    padding: 2px;
    margin: 4px 0;
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.progress-bar > div {
    background: #702124;
    background: -moz-linear-gradient(top, #702124 0%, #490404 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #702124), color-stop(100%, #490404));
    background: -webkit-linear-gradient(top, #702124 0%, #490404 100%);
    background: -o-linear-gradient(top, #702124 0%, #490404 100%);
    background: -ms-linear-gradient(top, #702124 0%, #490404 100%);
    background: linear-gradient(to bottom, #702124 0%, #490404 100%);
    height: 100%;
    display: block;
    border-radius: 15px 8px 8px 15px;
    position: relative;
    width: 0;
    animation: awardExpandWidth 0.8s;
    -webkit-animation: awardExpandWidth 0.8s;
    overflow: hidden;
}

.progress-bar > div.full {
    border-radius: 15px;
}

.progress-bar .label {
    position: absolute;
    height: 100%;
    width: 100%;
    display: block;
    top: 0;
    left: 0;
    font-size: 11px;
    font-weight: bold;
    text-align: center;
    color: #000;
}

.progress-bar > div > .label {
    color: #fff;
    margin-top: 0;
}

.progress-bar .grey {
    color: inherit;
}

@keyframes awardExpandWidth {
    0% {
        width: 0;
    }

    30% {
        width: 0;
    }
}

@-webkit-keyframes awardExpandWidth {
    0% {
        width: 0;
    }

    30% {
        width: 0;
    }
}

.live-progress-bar > div {
    -webkit-transition: width 0.3s;
    transition: width 0.3s;
}

.unit_desc {
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/questionmark.png") no-repeat scroll 4px center;
    padding: 3px 3px 3px 28px;
}

.hidden {
    color: #1e1800;
}

.warn {
    color: #ff4545;
}

.userimage-tiny {
    vertical-align: -5px !important;
    border-radius: 3px;
    max-width: 20px;
    max-height: 20px;
}

.userimage-tiny[src*=unknown] {
    box-sizing: border-box;
    border: 1px solid #251503;
}

.vis .p_groups {
    margin: 0;
    display: inline;
}

.rarity-text {
    font-weight: bold;
}

.rarity-text.common {
    color: green;
}

.rarity-text.uncommon {
    color: blue;
}

.rarity-text.rare {
    color: orange;
}

.rarity-text.epic {
    color: magenta;
}

.fake-browser-notification {
    width: 360px;
    height: 80px;
    padding: 8px 20px 8px 94px;
    box-sizing: border-box;
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/browser_notifications/fake_background.png');
    -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.5);
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.fake-browser-notification-close {
    width: 10px;
    height: 10px;
    position: absolute;
    top: 8px;
    right: 8px;
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/browser_notifications/fake_close.png');
    cursor: pointer;
}

.fake-browser-notification-header {
    display: block;
    margin-bottom: 10px;
}

.fake-browser-notification-content {
    font-size: 0.9em;
}

@-webkit-keyframes tada {
    0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }

    10%, 20% {
        -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
        transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
    }

    30%, 50%, 70%, 90% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    }

    40%, 60%, 80% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    }

    100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }
}

@keyframes tada {
    0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }

    10%, 20% {
        -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
        transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
    }

    30%, 50%, 70%, 90% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    }

    40%, 60%, 80% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    }

    100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }
}

.tada {
    -webkit-animation-name: tada;
    animation-name: tada;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}

.admin-bar {
    position: relative;
    width: 100%;
    height: 25px;
    text-align: center;
    border: 2px solid #67a13a;
    background-color: #ebf2e4;
}

.admin-bar .header {
    position: absolute;
    top: -2px;
}

.admin-bar span, .admin-bar .header {
    margin: 2px 5px 3px 5px;
    line-height: 25px;
}

.admin-bar a {
    color: #3D5236;
}

.train-ui {
    display: none;
}

.unit-input-faded img {
    opacity: 0.3;
}

.unit-input-faded a {
    color: #1e1800;
}

.units-entry-all {
    cursor: copy;
}

#ad_leaderboard {
    padding: 0;
    text-align: center;
}

#ad_leaderboard img {
    vertical-align: middle;
}

.emoji {
    height: 1.2em;
    width: 1.2em;
    vertical-align: -2px;
    margin: 0 2px;
}

.emoji-selectable {
    cursor: pointer;
    width: 18px;
    height: 18px;
}

.generic-avatar-selection {
    max-height: 225px;
    overflow: auto;
}

.generic-avatar {
    border: 1px solid #1e1a00;
    margin: 3px;
    width: 86px;
    height: 86px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.paged-nav-v2 {
    margin: 0 0.1em;
}

.paged-nav-v2:first-child {
    margin-left: 0;
}

.paged-nav-v2:last-child {
    margin-right: 0;
}

.paged-nav-v2:before {
    content: "[";
}

.paged-nav-v2:after {
    content: "]";
}

.paged-nav-v2-selected, .paged-nav-v2-selected:hover {
    color: #000;
    cursor: default;
}

.paged-nav-v2-selected:before {
    content: ">";
}

.paged-nav-v2-selected:after {
    content: "<";
}

#football_scores {
    position: relative;
}

.football-close {
    display: none;
    position: absolute;
    top: -7px;
    right: -2px;
}

#football_scores:hover .football-close {
    display: block;
}

.captcha {
    min-width: 340px;
    margin-bottom: 10px;
}

.commandicon-wt, .commandicon-ally {
    position: relative;
    display: inline-block;
}

.commandicon-wt:after {
    width: 10px;
    height: 10px;
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/command/watchtower_all_seeing_eye.png');
    display: inline-block;
    position: absolute;
    content: '';
    top: -3px;
    right: -2px;
    pointer-events: none;
}

.commandicon-ally:before {
    width: 10px;
    height: 10px;
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/command/ally_overlay.png');
    display: inline-block;
    position: absolute;
    content: '';
    top: -4px;
    right: -2px;
    pointer-events: none;
}

.bannered-reward {
    width: 576px;
    height: 210px;
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/ui/congrats_message.png);
    position: fixed;
    left: 50%;
    top: 20%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
}

.bannered-reward-message {
    color: #fff;
    position: relative;
    text-align: center;
    font-size: 24px;
    top: 95px;
    font-weight: bold;
}

@media screen and (max-width: 576px) {
    .bannered-reward {
        -webkit-transform: translateX(-50%) scale(0.5);
        -moz-transform: translateX(-50%) scale(0.5);
        -ms-transform: translateX(-50%) scale(0.5);
        -o-transform: translateX(-50%) scale(0.5);
        transform: translateX(-50%) scale(0.5);
        -webkit-transform-origin: 50% 50%;
        -moz-transform-origin: 50% 50%;
        -ms-transform-origin: 50% 50%;
        -o-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
    }
}

.locale-flag {
    width: 18px;
    height: 12px;
    vertical-align: -2px;
}

#bb_sizes, #bb_tagging {
    position: absolute;
    z-index: 100;
    border: 2px solid #280100;
    background-color: #342e26;
    top: 0;
    left: 0;
}

#bb_sizes .bb_size_item, #bb_tagging .bb_size_item {
    padding: 2px;
}

#bb_color_picker {
    position: absolute;
    z-index: 100;
    border: 1px solid #280100;
    -webkit-border-radius: 8px 8px 0 0;
    border-radius: 8px 8px 0 0;
    background-color: #342e26;
    top: 0;
    left: 0;
}

#bb_color_picker_tones {
    padding: 4px;
    border-bottom: 2px solid #280100;
    height: 86px;
}

#bb_color_picker_colors {
    padding: 4px;
    border-bottom: 2px solid #280100;
    height: 18px;
    white-space: nowrap;
}

#bb_color_picker_colors div {
    float: left;
    border-top: 1px solid #000;
    border-left: 1px solid #000;
    width: 16px;
    height: 16px;
    cursor: pointer;
}

#bb_color_picker_tones div {
    float: left;
    border-top: 1px solid #000;
    border-left: 1px solid #000;
    width: 16px;
    height: 16px;
    cursor: pointer;
}

#bb_color_picker_50, #bb_color_picker_51, #bb_color_picker_52, #bb_color_picker_53, #bb_color_picker_54, #bb_color_picker_55 {
    border-bottom: 1px solid #000;
}

#bb_color_picker_55, #bb_color_picker_45, #bb_color_picker_35, #bb_color_picker_25, #bb_color_picker_15, #bb_color_picker_05 {
    border-right: 1px solid #000;
}

#bb_color_picker_c0, #bb_color_picker_c1, #bb_color_picker_c2, #bb_color_picker_c3, #bb_color_picker_c4, #bb_color_picker_c5 {
    border-bottom: 1px solid #000;
}

#bb_color_picker_c5 {
    border-right: 1px solid #000;
}

#bb_color_picker_preview {
    margin: 2px;
    border: 1px solid #000;
    height: 16px;
    width: 104px;
    background: #3a2f1d;
    text-align: center;
}

#bb_color_picker_tx {
    width: 64px;
}

.generic-crest-container {
    width: 229px;
    height: 160px;
    margin: 5px auto;
    position: relative;
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/tribe/crest/1.png');
}

.generic-crest-container .crest {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
}

.generic-crest-container .tag {
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 27px;
    font-weight: bold;
    color: beige;
    top: 86px;
    line-height: 100%;
}

.ally-stronghold-bar {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/index/statusbar-center.png') repeat-x;
    height: 26px;
    border-width: 0 1px;
    border-color: #2a1e08;
    border-style: solid;
    width: auto;
}

.stronghold-bar-content {
    padding: 5px;
    display: inline-block;
    border-right: 1px solid #1f1400;
}

.stronghold-bar-content:last-child {
    border-right: 0;
}

.green {
    color: green;
}

.orange {
    color: orange;
}

.red {
    color: red;
}

input.input-nicer, select.input-nicer {
    border: 1px solid #ced4da;
    background-color: #fff;
    background-clip: padding-box;
    border-radius: .25rem;
    height: 17px;
    padding: 2px 4px;
    font-size: 13px;
    color: #333333;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    margin: 2px;
}

select.input-nicer {
    height: 23px;
}

input.input-nicer:focus, select.input-nicer:focus {
    color: #000;
    border: 1px solid rgba(193, 162, 100, 0.7);
    box-shadow: 0 0 0 0.1rem rgba(193, 162, 100, .1);
    outline: none;
}

.premium-required {
    filter: blur(3px);
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.has-pa .premium-required {
    filter: none;
    pointer-events: all;
    -webkit-user-select: auto;
    -moz-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
}

.has-pa .premium_account_hint {
    display: none;
}

.widget-tribe-activity .village_anchor {
    white-space: normal;
    word-break: break-word;
}

dialog {
    border: 9px solid #280100;
    -moz-border-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/popup/border_slim.png") 9 9 9 9 repeat;
    -webkit-border-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/popup/border_slim.png") 9 9 9 9 repeat;
    -o-border-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/popup/border_slim.png") 9 9 9 9 repeat;
    border-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/popup/border_slim.png") 9 9 9 9 repeat;
    background: transparent;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
    padding: 0;
}

dialog::backdrop {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/grey-fade.png);
}

dialog .dialog-content {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/popup/content_background.png');
    padding: 10px;
}

#withdraw_selected_units_village_info .call-unit-box {
    width: 25px;
}

#withdraw_selected_units_village_info .mds .call-unit-box {
    width: 38px;
}

#withdraw_selected_units_village_info .call-unit-box::-webkit-outer-spin-button, #withdraw_selected_units_village_info .call-unit-box::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

#withdraw_selected_units_village_info .call-unit-box {
    -moz-appearance: textfield;
}

.command-row td {
    position: relative;
}

.command-cancel {
    height: 18px;
    position: absolute;
    right: 3px;
    top: 1px;
    vertical-align: middle;
}

.rtl .command-cancel {
    left: 3px;
    right: auto;
}

.centered {
    display: flex;
    justify-content: center;
}

.force-cache-bust {
    width: 1px;
}

.force-cache-bust-2 {
    width: 1px;
}

#botprotection_quest {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/icons/account.png');
}

/**** shared/bordered_box.css ****/
.bordered-box {
    border-style: solid;
    border-width: 32px 30px 7px;
    -moz-border-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/ui/borderedbox/border.png) 32 30 7 repeat;
    -webkit-border-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/ui/borderedbox/border.png) 32 30 7 repeat;
    -o-border-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/ui/borderedbox/border.png) 32 30 7 repeat;
    border-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/ui/borderedbox/border.png) 32 30 7 fill repeat;
    background: #393120;
    background-clip: padding-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding-bottom: 3px;
    margin-bottom: 5px;
}

.no-borderimage .bordered-box {
    border: 1px solid #280100;
}

.bordered-box h3 {
    color: rgb(254, 230, 196);
    text-align: center;
    font-size: 12px;
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: -24px -5px 15px;
    padding: 0;
}

.no-borderimage .bordered-box h3 {
    background: #221F00 url("https://dsde.innogamescdn.com/asset/88651122/graphic/screen/tableheader_bg3.png") repeat-x;
    padding: 3px;
    margin: 0 0 10px;
    color: #000;
}

.bordered-box hr {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/awards/ui/sep.png);
    width: 100%;
    height: 3px;
    border: none;
    margin: 5px 0;
    padding: 0;
}

.borderimage .bordered-box-content {
    margin-left: -25px;
    margin-right: -25px;
}

/**** game/ui.css ****/
.autoHideBox {
    font-weight: normal;
    font-size: 14px;
    position: fixed;
    text-align: center;
    width: 450px;
    top: 200px;
    left: 50%;
    margin: 0 0 0 -205px;
    border: 1px solid #000;
    background: #32251b;
    background: -moz-linear-gradient(top, #32251b 0%, #100d09 100%);
    background: -webkit-linear-gradient(top, #32251b 0%,#100d09 100%);
    background: -o-linear-gradient(top, #32251b 0%,#100d09 100%);
    background: -ms-linear-gradient(top, #32251b 0%,#100d09 100%);
    background: linear-gradient(to bottom, #32251b 0%,#100d09 100%);
    z-index: 100000;
    color: #000000;
    cursor: pointer;
    -webkit-box-shadow: 1px 1px 2px 0px rgba(60, 30, 0, 0.35);
    box-shadow: 1px 1px 2px 0px rgba(60, 30, 0, 0.35);
    text-shadow: 1px 1px 1px #32251b;
    border-radius: 5px;
}

.autoHideBox p {
    padding: 5px;
    margin: 0;
}

.autoHideBox img.left {
    float: left;
    max-height: 70px;
    max-width: 70px;
}

.omg-message {
    pointer-events: none;
    font-size: 20px;
    color: greenyellow;
    position: absolute;
    text-shadow: 1px 1px 0 black, 1px -1px 0 black, -1px 1px 0 black, -1px -1px 0 black;
    text-align: center;
    width: 300px;
    z-index: 20;
    -webkit-animation-duration: 1.5s;
    animation-duration: 1.5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: omgMessageAnimation;
    animation-name: omgMessageAnimation;
}

.omg-message-container {
    pointer-events: none;
    position: absolute;
    z-index: 20;
    width: 300px;
}

@-webkit-keyframes omgMessageAnimation {
    0% {
        -webkit-transform: translateY(0);
        font-size: 20px;
    }

    65% {
        font-size: 50px;
        opacity: 1;
    }

    90% {
        opacity: 1;
    }

    100% {
        -webkit-transform: translateY(-100px);
        font-size: 50px;
        opacity: 0;
    }
}

@keyframes omgMessageAnimation {
    0% {
        transform: translateY(0);
        font-size: 20px;
    }

    65% {
        font-size: 50px;
        opacity: 1;
    }

    90% {
        opacity: 1;
    }

    100% {
        transform: translateY(-100px);
        font-size: 50px;
        opacity: 0;
    }
}

.confirmation-box {
    font-weight: normal;
    font-size: 14px;
    position: fixed;
    text-align: center;
    width: 400px;
    top: 200px;
    left: 50%;
    margin: 0 0 0 -205px;
    border: 1px solid #280100;
    z-index: 15000;
    color: #000000;
}

.borderimage .confirmation-box {
    border: 19px solid #280100;
    -moz-border-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/popup/border.png") 19 19 19 19 repeat;
    -o-border-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/popup/border.png") 19 19 19 19 repeat;
    -webkit-border-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/popup/border.png") 19 19 19 19 repeat;
    border-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/popup/border.png") 19 19 19 19 repeat;
}

.confirmation-box-content-pane {
    background: url("https://dsde.innogamescdn.com/asset/88651122/graphic/popup/content_background.png");
}

.confirmation-box-content {
    padding: 10px 5px;
}

.confirmation-box label {
    font-size: 0.9em;
}

.confirmation-box h3 {
    margin-top: 0;
}

.confirmation-box .confirmation-msg {
    margin-bottom: 14px;
}

.confirmation-box .skip-container {
    margin-bottom: 14px;
}

.autoHideBox.error {
    border: 1px solid #000;
    background: #a90329;
    background: -moz-linear-gradient(top, #a90329 0%, #8f0222 44%, #6d0019 100%);
    background: -webkit-linear-gradient(top, #a90329 0%,#8f0222 44%,#6d0019 100%);
    background: -o-linear-gradient(top, #a90329 0%,#8f0222 44%,#6d0019 100%);
    background: -ms-linear-gradient(top, #a90329 0%,#8f0222 44%,#6d0019 100%);
    background: linear-gradient(to bottom, #a90329 0%,#8f0222 44%,#6d0019 100%);
    color: #fff;
    text-shadow: 1px 1px 1px #000000;
}

.autoHideBox.success {
    border: 1px solid #204900;
    background: #19a903;
    background: -moz-linear-gradient(top, #19a903 0%, #159002 44%, #0f6e00 100%);
    background: -webkit-linear-gradient(top, #19a903 0%,#159002 44%,#0f6e00 100%);
    background: -o-linear-gradient(top, #19a903 0%,#159002 44%,#0f6e00 100%);
    background: -ms-linear-gradient(top, #19a903 0%,#159002 44%,#0f6e00 100%);
    background: linear-gradient(to bottom, #19a903 0%,#159002 44%,#0f6e00 100%);
    color: #fff;
    text-shadow: 1px 1px 1px #000000;
}

.notificationBox {
    position: fixed;
    text-align: center;
    width: 400px;
    top: 200px;
    left: 50%;
    margin: 0 0 0 -205px;
    z-index: 100000;
    cursor: pointer;
    background-color: #475334;
    border: 3px solid #5d9109;
    border-radius: 10px;
    color: #fff;
    -webkit-box-shadow: inset 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
    box-shadow: inset 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
}

.notificationBox > div {
    padding: 10px;
    font-weight: normal;
    font-size: 15px;
}

.popup_helper {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
}

#side-notification-container {
    position: fixed;
    right: 0;
    bottom: 30px;
    z-index: 12200;
}

body[dir="rtl"] #side-notification-container {
    left: 0;
    right: auto;
}

.side-notification {
    z-index: 12200;
    width: 260px;
    min-height: 66px;
    padding: 5px;
    position: relative;
    bottom: 0;
    right: 0;
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/popup/content_background.png');
    border-left: 1px solid #9e4622;
    border-top: 1px solid #9e4622;
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    transition: height 5s;
}

body[dir="rtl"] .side-notification {
    left: 0;
    right: auto;
}

.side-notification .img-container {
    width: 64px;
    height: 64px;
    line-height: 64px;
    text-align: center;
}

body[dir="rtl"] .side-notification .img-container {
    left: 0;
}

.side-notification img {
    max-height: 60px;
    max-width: 60px;
    vertical-align: middle;
}

.side-notification .content {
    padding: 2px 2px 0 9px;
    font-size: 11px;
}

.side-notification p {
    margin-top: 3px;
    margin-bottom: 3px;
}

.side-notification-visible {
    animation-name: notificationUp;
    -webkit-animation-name: notificationUp;
    animation-duration: 0.7s;
    -webkit-animation-duration: 0.7s;
    animation-timing-function: ease;
    -webkit-animation-timing-function: ease;
}

.side-notification-hide {
    opacity: 0;
    transition: opacity 0.3s;
    -webkit-transition: opacity 0.3s;
}

.side-notification-shrink {
    min-height: 0;
    height: 0;
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 0;
    margin-bottom: 0;
    transition: height 0.3s, min-height 0.3s;
    -webkit-transition: height 0.3s, min-height 0.3s;
}

@-webkit-keyframes notificationUp {
    0% {
        transform: translateY(100%);
    }

    100% {
        transform: translateY(0%);
    }
}

@keyframes notificationDown {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

.contacts_hidden {
    display: none;
}

/**** game/sprites.css ****/
.sprite {
    display: inline-block;
    background-repeat: no-repeat;
    overflow: hidden;
}

.icon {
    width: 18px;
    height: 18px;
    display: inline-block;
    margin: auto 2px auto 0;
    overflow: hidden;
    background-repeat: no-repeat;
    vertical-align: -4px;
}

td .icon-box {
    width: 20px;
    height: 20px;
    text-align: center;
    vertical-align: middle;
    overflow: hidden;
}

.icon.header {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/icons/header.png');
}

.header.wood {
    background-position: -18px 0px;
}

.header.stone {
    background-position: -36px 0px;
}

.header.iron {
    background-position: -55px 1px;
}

.header.ressources {
    background-position: 0px 0px;
}

.header.population {
    background-position: -72px 0px;
}

.header.new_post {
    background-position: -92px -2px;
    width: 13px;
    height: 13px;
}

.header.new_notification {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/icons/highlight_ally.png');
    ; width: 13px;
    height: 13px;
}

.header.no_new_post {
    background-position: -235px -2px;
    width: 13px;
    height: 13px;
}

.header.new_report {
    background-position: -149px -3px;
    width: 17px;
    height: 12px;
}

.header.new_mail {
    background-position: -132px -3px;
    width: 17px;
    height: 12px;
}

.header.knight {
    background-position: -179px 0px;
}

.header.flags {
    background-position: -248px 0px;
}

.header.flags_new {
    background-position: -266px 0px;
}

.header.time {
    background-position: -285px 0px;
}

.header.incomings {
    background-position: -198px 1px;
}

.header.map {
    background-position: -306px 0px;
    vertical-align: -4px;
    margin: 0 !important;
}

.header.village {
    background-position: -324px 0px;
    vertical-align: -4px;
    margin: 0 !important;
    width: 20px;
}

.header.arr_right {
    background-position: -118px -0.4px;
    height: 15px;
    width: 15px;
}

.header.arr_left {
    background-position: -105px -0.4px;
    height: 15px;
    width: 15px;
}

.header.arr_down {
    background-position: -166px -1px;
    width: 14px;
    height: 15px;
}

.header.arr_up {
    background-position: -218px -1px;
    width: 14px;
    height: 15px;
}

.header.new_report_faded {
    background-position: -361px -3px;
    width: 17px;
    height: 12px;
}

.header.new_mail_faded {
    background-position: -344px -3px;
    width: 18px;
    height: 12px;
}

.header.favorite_add {
    background-position: -377px 0px;
}

.header.favorite_remove {
    background-position: -394px 0px;
}

.header.overview_village {
    background-position: -412px 0px;
    width: 20px;
}

.header.premium {
    background-position: -433px 0px;
    width: 18px;
}

.header.reserve {
    background-position: -452px 0px;
    width: 18px;
}

.header.scale {
    background-position: -470px 0px;
    width: 18px;
}

.header.map_color {
    background-position: -306px 0px;
    vertical-align: -4px;
    margin: 0 !important;
}

.header.village_groups {
    background-position: -324px 0px;
    vertical-align: -4px;
    margin: 0 !important;
    width: 20px;
}

.header.troops {
    background-position: -198px 1px;
}

.header.send_invite {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/icons/send_invite.png');
}

.header.trader {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/buildings/market.png');
}

.header.inventory {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/icons/inventory.png');
}

.header.overview {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/icons/overview.png');
}

.menu .header.map2 {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/icons/map2.png');
}

.header.profile {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/icons/account.png');
}

.header.settings {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/icons/settings2.png');
}

.menu .header.profile {
    width: 16px;
}

.menu .header.overview, .menu .header.map2, .menu .header.ranking, .menu .header.profile, .menu .header.settings {
    vertical-align: top;
    position: relative;
    top: -2px;
}

.icon.ally {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/icons/ally_rights.png');
}

.ally.founder {
    background-position: -75px 0px;
}

.ally.lead {
    background-position: -132px 0px;
}

.ally.invite {
    background-position: -113px 0px;
}

.ally.diplomacy {
    background-position: -37px 0px;
}

.ally.mass_mail {
    background-position: 0px 0px;
}

.ally.forum_mod {
    background-position: -56px 0px;
}

.ally.internal_forum {
    background-position: -94px 0px;
}

.ally.trusted_member {
    background-position: -18px 0px;
}

.ally.found {
    background-position: -75px 0px;
}

.bonus_icon {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/overview/bonus_icons.png);
    width: 18px;
    height: 18px;
    display: inline-block;
    margin-left: 2px;
    vertical-align: middle;
}

.bonus_icon_1 {
    background-position: 0 0;
}

.bonus_icon_2 {
    background-position: 0 -18px;
}

.bonus_icon_3 {
    background-position: 0 -36px;
}

.bonus_icon_4 {
    background-position: 0 -126px;
}

.bonus_icon_5 {
    background-position: 0 -72px;
}

.bonus_icon_6 {
    background-position: 0 -90px;
}

.bonus_icon_7 {
    background-position: 0 -108px;
}

.bonus_icon_8 {
    background-position: 0 -54px;
}

.bonus_icon_9 {
    background-position: 0 -144px;
}

.bonus_icon_10 {
    background-position: 0 -162px;
}

.bonus_icon_11 {
    background-position: 0 -180px;
}

.bonus_icon_12 {
    background-position: 0 -198px;
}

.bonus_icon_13 {
    background-position: 0 -216px;
}

.bonus_icon_14 {
    background-position: 0 -234px;
}

.bonus_icon_15 {
    background-position: 0 -252px;
}

.bonus_icon_16 {
    background-position: 0 -270px;
}

.bonus_icon_17 {
    background-position: 0 -288px;
}

.bonus_icon_18 {
    background-position: 0 -306px;
}

.bonus_icon_19 {
    background-position: 0 -324px;
}

.bonus_icon_20 {
    background-position: 0 -342px;
}

.bonus_icon_21 {
    background-position: 0 -360px;
}

.bonus_icon_22, .bonus_icon_23, .bonus_icon_24, .bonus_icon_25, .bonus_icon_26, .bonus_icon_27, .bonus_icon_28, .bonus_icon_29, .bonus_icon_30, .bonus_icon_31, .bonus_icon_32 {
    background-position: 0 -378px;
}

.bonus_icon_33 {
    background-position: 0 -396px;
}

.farm_icon {
    height: 24px;
    width: 24px;
    display: block;
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/map/icons_context.png');
}

.farm_icon.decoration {
    cursor: default;
}

.farm_icon_a {
    background-position: -264px 0px;
}

.farm_icon_a:not(.decoration):hover {
    background-position: -264px -24px;
}

.farm_icon_b {
    background-position: -288px 0px;
}

.farm_icon_b:not(.decoration):hover {
    background-position: -288px -24px;
}

.farm_icon_c {
    background-position: -312px 0px;
}

.farm_icon_c:hover {
    background-position: -312px -24px;
}

.farm_icon_disabled {
    opacity: 0.5;
    filter: alpha(opacity=50);
}

.icon.friend {
    display: inline-block;
    height: 10px;
    width: 10px;
    vertical-align: middle;
}

.friend.online {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/stat/green.png');
}

.friend.offline {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/stat/red.png');
}

.icon.info {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/questionmark.png');
}

.icon.info-small {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/questionmark.png');
    background-size: 13px 13px;
    height: 13px;
    width: 13px;
    vertical-align: top;
}

.icon.info-med {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/questionmark.png');
    background-size: 18px 18px;
    height: 18px;
    width: 18px;
    vertical-align: top;
}

.icon.buddy_add {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/icons/add_friend.png');
    width: 18px;
    height: 18px;
}

.icon.block_communication {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/icons/block_icon.png');
    width: 18px;
    height: 18px;
}

.icon.am_build {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/buildings/main.png');
}

.icon.am_troops {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/buildings/barracks.png');
}

.icon.am_research {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/buildings/smith.png');
}

.icon.am_delivery {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/buildings/market.png');
}

.icon.am_stockpile_nosend {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/buildings/storage.png');
}

.icon.am_stockpile_receive {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/buildings/storage.png');
}

.icon.premium-feature {
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/icons/premium_features.png");
    background-size: 54px 18px;
}

.icon.premium-feature.Premium {
    background-position: 0 0;
}

.icon.premium-feature.AccountManager {
    background-position: -18px 0;
}

.icon.premium-feature.FarmAssistent {
    background-position: -36px 0;
}

.icon.command {
    height: 14px;
    width: 14px;
}

.icon.command.command-attack {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/command/attack.png');
}

.icon.command.command-attack-ally {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/command/attack_ally.png');
}

.icon.command.command-support {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/command/support.png');
}

.icon.command.command-support-ally {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/command/support_ally.png');
}

.icon.rewarded-ranking {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/icons/rewarded_ranking.png');
}

.action-icon-container {
    display: inline-block;
    width: 20px;
    min-height: 18px;
}

/**** game/autocomplete.css ****/
.ui-autocomplete {
    display: block;
    float: left;
    list-style: none outside none;
    margin: 0;
    padding: 2px;
    cursor: default;
    position: absolute;
    border: 1px solid #000;
    color: #333333;
    background-color: #501367;
    z-index: 100000;
}

.ui-autocomplete.no-suggestions {
    padding: 0px;
    border: none;
}

.ui-menu-item {
    clear: left;
    float: left;
    margin: 0;
    padding: 0;
    list-style: none outside none;
    width: 100%;
    color: #1e1a00;
    font-weight: bold;
}

.ui-menu-item:hover {
    background-color: #2f1809;
}

.ui-autocomplete .ui-menu-divider {
    display: none;
}

.ui-helper-hidden-accessible {
    display: none;
}

/**** game/hotkeys.css ****/
.hotkeys {
    min-width: 450px;
}

.hotkeys-keys {
    text-align: right;
    padding-right: 14px;
}

.hotkeys-keys .key, .hotkey {
    display: inline-block;
    min-width: 20px;
    background-color: #241c12;
    color: #ffffbf;
    text-align: center;
    padding: 3px;
    line-height: 1;
    font-family: Monaco,"Liberation Mono",Courier,monospace;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    cursor: default;
}

.hotkeys-pa {
    display: inline-block;
    min-width: 12px;
    background-color: #9d281c;
    color: #fff !important;
    font-size: 10px;
    padding: 2px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
}

.hotkeys-pa:hover {
    font-size: 0;
}

.hotkeys-pa:hover:after {
    font-size: 10px;
    content: attr(title);
}

.hotkey-item {
    display: inline-block;
    min-width: 20px;
    background-color: #241c12;
    color: #ffffbf;
    text-align: center;
    padding: 3px;
    font-family: Monaco,"Liberation Mono",Courier,monospace;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
}

.hotkey-item:hover {
    background-color: #2F2821;
}

.hotkey-item.used {
    border: 3px solid #3F3700;
}

.hotkey-item.used:hover {
    background-color: #4B2E1E;
}

.hotkey-item.hotkey-item-selected {
    border-color: #46944C;
    border-width: 3px;
    border-style: solid;
}

.hotkey-item.hotkey-item-selected:hover {
    background-color: #79B37E;
}

/**** game/sprites/unit_big.css ****/
.unit_sprite {
    display: inline-block;
    overflow: hidden;
    background-repeat: no-repeat;
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/unit_big/unit_big.png);
    width: 60px;
    height: 60px;
}

.unit_sprite.archer {
    background-position: -1020px -0px
}

.unit_sprite.archer_cross {
    background-position: -960px -60px
}

.unit_sprite.archer_grey {
    background-position: -960px -0px
}

.unit_sprite.axe {
    background-position: -900px -60px
}

.unit_sprite.axe_cross {
    background-position: -900px -0px
}

.unit_sprite.axe_grey {
    background-position: -840px -60px
}

.unit_sprite.catapult {
    background-position: -840px -0px
}

.unit_sprite.catapult_cross {
    background-position: -780px -60px
}

.unit_sprite.catapult_grey {
    background-position: -780px -0px
}

.unit_sprite.heavy {
    background-position: -720px -60px
}

.unit_sprite.heavy_cross {
    background-position: -720px -0px
}

.unit_sprite.heavy_grey {
    background-position: -660px -60px
}

.unit_sprite.knight_grey {
    background-position: -660px -0px
}

.unit_sprite.light {
    background-position: -600px -60px
}

.unit_sprite.light_cross {
    background-position: -600px -0px
}

.unit_sprite.light_grey {
    background-position: -540px -60px
}

.unit_sprite.marcher {
    background-position: -540px -0px
}

.unit_sprite.marcher_cross {
    background-position: -480px -60px
}

.unit_sprite.marcher_grey {
    background-position: -480px -0px
}

.unit_sprite.militia_grey {
    background-position: -420px -60px
}

.unit_sprite.ram {
    background-position: -420px -0px
}

.unit_sprite.ram_cross {
    background-position: -360px -60px
}

.unit_sprite.ram_grey {
    background-position: -360px -0px
}

.unit_sprite.snob {
    background-position: -300px -60px
}

.unit_sprite.snob_cross {
    background-position: -300px -0px
}

.unit_sprite.snob_grey {
    background-position: -240px -60px
}

.unit_sprite.spear {
    background-position: -240px -0px
}

.unit_sprite.spear_cross {
    background-position: -180px -60px
}

.unit_sprite.spear_grey {
    background-position: -180px -0px
}

.unit_sprite.spy {
    background-position: -120px -60px
}

.unit_sprite.spy_cross {
    background-position: -120px -0px
}

.unit_sprite.spy_grey {
    background-position: -60px -60px
}

.unit_sprite.sword {
    background-position: -60px -0px
}

.unit_sprite.sword_cross {
    background-position: -0px -60px
}

.unit_sprite.sword_grey {
    background-position: -0px -0px
}

@media only screen and (-Webkit-min-device-pixel-ratio: 1.5), only screen and (-moz-min-device-pixel-ratio: 1.5), only screen and (-o-min-device-pixel-ratio: 3/2), only screen and (min-device-pixel-ratio: 1.5) {
    .unit_sprite {
        background-image:url(https://dsde.innogamescdn.com/asset/88651122/graphic/unit_big/unit_big@2x.png?2);
        background-size: 900px 120px
    }

    .unit_sprite.archer {
        background-position: -840px -60px
    }

    .unit_sprite.archer_cross {
        background-position: -840px -0px
    }

    .unit_sprite.archer_grey {
        background-position: -780px -60px
    }

    .unit_sprite.axe {
        background-position: -780px -0px
    }

    .unit_sprite.axe_cross {
        background-position: -720px -60px
    }

    .unit_sprite.axe_grey {
        background-position: -720px -0px
    }

    .unit_sprite.catapult {
        background-position: -660px -60px
    }

    .unit_sprite.catapult_cross {
        background-position: -660px -0px
    }

    .unit_sprite.catapult_grey {
        background-position: -600px -60px
    }

    .unit_sprite.heavy {
        background-position: -600px -0px
    }

    .unit_sprite.heavy_cross {
        background-position: -540px -60px
    }

    .unit_sprite.heavy_grey {
        background-position: -540px -0px
    }

    .unit_sprite.light {
        background-position: -480px -60px
    }

    .unit_sprite.light_cross {
        background-position: -480px -0px
    }

    .unit_sprite.light_grey {
        background-position: -420px -60px
    }

    .unit_sprite.marcher {
        background-position: -420px -0px
    }

    .unit_sprite.marcher_cross {
        background-position: -360px -60px
    }

    .unit_sprite.marcher_grey {
        background-position: -360px -0px
    }

    .unit_sprite.ram {
        background-position: -300px -60px
    }

    .unit_sprite.ram_cross {
        background-position: -300px -0px
    }

    .unit_sprite.ram_grey {
        background-position: -240px -60px
    }

    .unit_sprite.spear {
        background-position: -240px -0px
    }

    .unit_sprite.spear_cross {
        background-position: -180px -60px
    }

    .unit_sprite.spear_grey {
        background-position: -180px -0px
    }

    .unit_sprite.spy {
        background-position: -120px -60px
    }

    .unit_sprite.spy_cross {
        background-position: -120px -0px
    }

    .unit_sprite.spy_grey {
        background-position: -60px -60px
    }

    .unit_sprite.sword {
        background-position: -60px -0px
    }

    .unit_sprite.sword_cross {
        background-position: -0px -60px
    }

    .unit_sprite.sword_grey {
        background-position: -0px -0px
    }
}

.unit_sprite_smaller {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/unit_big/unit_big.png);
    background-size: 540px 60px;
    width: 30px;
    height: 30px;
    vertical-align: -10px;
}

.unit_sprite_smaller.archer {
    background-position: -510px -0px
}

.unit_sprite_smaller.archer_cross {
    background-position: -480px -30px
}

.unit_sprite_smaller.archer_grey {
    background-position: -480px -0px
}

.unit_sprite_smaller.axe {
    background-position: -450px -30px
}

.unit_sprite_smaller.axe_cross {
    background-position: -450px -0px
}

.unit_sprite_smaller.axe_grey {
    background-position: -420px -30px
}

.unit_sprite_smaller.catapult {
    background-position: -420px -0px
}

.unit_sprite_smaller.catapult_cross {
    background-position: -390px -30px
}

.unit_sprite_smaller.catapult_grey {
    background-position: -390px -0px
}

.unit_sprite_smaller.heavy {
    background-position: -360px -30px
}

.unit_sprite_smaller.heavy_cross {
    background-position: -360px -0px
}

.unit_sprite_smaller.heavy_grey {
    background-position: -330px -30px
}

.unit_sprite_smaller.knight_grey {
    background-position: -330px -0px
}

.unit_sprite_smaller.light {
    background-position: -300px -30px
}

.unit_sprite_smaller.light_cross {
    background-position: -300px -0px
}

.unit_sprite_smaller.light_grey {
    background-position: -270px -30px
}

.unit_sprite_smaller.marcher {
    background-position: -270px -0px
}

.unit_sprite_smaller.marcher_cross {
    background-position: -240px -30px
}

.unit_sprite_smaller.marcher_grey {
    background-position: -240px -0px
}

.unit_sprite_smaller.militia_grey {
    background-position: -210px -30px
}

.unit_sprite_smaller.ram {
    background-position: -210px -0px
}

.unit_sprite_smaller.ram_cross {
    background-position: -180px -30px
}

.unit_sprite_smaller.ram_grey {
    background-position: -180px -0px
}

.unit_sprite_smaller.snob {
    background-position: -150px -30px
}

.unit_sprite_smaller.snob_cross {
    background-position: -150px -0px
}

.unit_sprite_smaller.snob_grey {
    background-position: -120px -30px
}

.unit_sprite_smaller.spear {
    background-position: -120px -0px
}

.unit_sprite_smaller.spear_cross {
    background-position: -90px -30px
}

.unit_sprite_smaller.spear_grey {
    background-position: -90px -0px
}

.unit_sprite_smaller.spy {
    background-position: -60px -30px
}

.unit_sprite_smaller.spy_cross {
    background-position: -60px -0px
}

.unit_sprite_smaller.spy_grey {
    background-position: -30px -30px
}

.unit_sprite_smaller.sword {
    background-position: -30px -0px
}

.unit_sprite_smaller.sword_cross {
    background-position: -0px -30px
}

.unit_sprite_smaller.sword_grey {
    background-position: -0px -0px
}

/**** game/premium.css ****/
.premium-box {
    width: 254px;
    margin-right: 30px;
    margin-bottom: 15px;
    float: left;
}

.premium-box:nth-child(3) {
    margin-right: 0;
}

.premium-box-head {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/premium/box-top.png);
    background-repeat: no-repeat;
    height: 36px;
    overflow: hidden;
    color: #593615;
    line-height: 32px;
    font-size: 14px;
    text-align: center;
}

.premium-box-content {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/premium/box-middle.png);
    background-repeat: repeat-y;
    padding: 1px 15px 5px;
    overflow: hidden;
    position: relative;
}

.premium-box-foot {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/premium/box-bottom.png);
    background-repeat: no-repeat;
    height: 16px;
    overflow: hidden;
}

.premium-box-content hr {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/awards/ui/sep.png);
    width: 220px;
    height: 3px;
    border: none;
    margin: 0;
    padding: 0;
    clear: both;
}

.premium-box-content ul {
    padding-left: 17px;
    list-style-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/premium/scroll.png');
}

.premium-box-status {
    position: absolute;
    top: 10px;
    right: 10px;
}

.premium-box-content .duration-selection, .premium-box-content .cost-display {
    width: 50%;
    float: left;
    margin-top: 5px;
    display: inline-block;
}

.premium-box-content .cost-display {
    text-align: right;
}

.mds .premium-box {
    float: none;
    margin: 10px auto;
}

.feature-header-container {
    width: 40%;
    margin-bottom: 10px;
}

.feature-header {
    height: 34px;
    line-height: 34px;
    padding: 3px;
    background-color: #3e2f1b;
    border: 1px solid #280100;
}

.feature-header img {
    vertical-align: -9px;
    height: 34px;
    width: 34px;
}

.feature-name {
    font-size: 20px;
    font-weight: bold;
    display: block;
}

.feature-name .caret {
    font-size: 16px;
    padding: 0 5px;
    float: right;
}

.feature-dropdown {
    border: 1px solid #280100;
    border-top: 0;
    display: none;
}

.feature-dropdown .feature-header {
    border: 0;
    border-bottom: 1px dashed #280100;
}

.feature-dropdown .feature-header:last-child {
    border-bottom: 0;
}

.premium-advantage {
    border: 2px solid #280100;
    margin-bottom: 20px;
}

.borderimage .premium-advantage {
    border: 9px solid #280100;
    -moz-border-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/popup/border_slim.png") 9 9 9 9 repeat;
    -webkit-border-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/popup/border_slim.png") 9 9 9 9 repeat;
    -o-border-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/popup/border_slim.png") 9 9 9 9 repeat;
    border-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/popup/border_slim.png") 9 9 9 9 repeat;
}

.premium-advantage .advantage-content {
    background-color: #3e2f1b;
    padding: 20px;
    overflow: hidden;
}

.premium-advantage img {
    width: 50%;
    height: auto;
    float: right;
    border: 1px solid #280100;
    box-sizing: border-box;
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 3px 2px rgba(128, 64, 0, 0.5);
    -moz-box-shadow: 0px 0px 3px 2px rgba(128, 64, 0, 0.5);
    box-shadow: 0px 0px 3px 2px rgba(128, 64, 0, 0.5);
}

.premium-advantage:nth-child(odd) img {
    float: left;
}

.premium-advantage .advantage-detail {
    width: 50%;
    float: left;
    text-align: center;
    padding: 15px 20px 25px 0;
    box-sizing: border-box;
}

.premium-advantage:nth-child(odd) .advantage-detail {
    float: right;
    padding: 15px 20px 20px 30px;
}

.premium-advantage h3 {
    margin: 0 0 6px 0;
    text-shadow: 1px 1px 4px rgba(128, 64, 0, 0.6);
}

.premium-advantage h5 {
    font-weight: normal;
    margin-top: 3px;
}

.premium-advantage hr {
    margin: 1px auto;
    width: 75%;
}

.premium-advantage p {
    margin-top: 15px;
    font-size: 1.08em;
}

.advantage-detail ul {
    text-align: left;
}

@media screen and (max-width: 700px) {
    .feature-header-container {
        width: 100%;
    }

    .premium-advantage .advantage-content {
        padding: 5px;
    }

    .premium-advantage img {
        float: none !important;
        width: 100% !important;
    }

    .premium-advantage .advantage-detail {
        float: none !important;
        width: 100% !important;
        padding: 5px !important;
    }
}

.premium-box-direct {
    width: 254px;
}

/**** game/igm.css ****/
.post {
    border: 1px solid #46007a;
    background-color: #524c5c;
    padding: 0;
    margin-bottom: 5px;
    -webkit-box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.18);
    -moz-box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.18);
    box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.18);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    width: 95%;
    float: left;
}

.post.own {
    float: right;
    border: 1px solid rgba(128, 20, 0, 0.7);
}

.post .text {
    overflow-x: auto;
}

.igmline {
    height: 26px;
    line-height: 26px;
    border-bottom: 1px solid #46007a;
    position: relative;
    overflow: hidden;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    background-color: #260830;
}

.system-message .igmline {
    border-bottom: 0;
}

.own .igmline {
    background: #422d19;
    background: -moz-linear-gradient(top, #422d19 0%, #2e271b 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #422d19), color-stop(100%, #2e271b));
    background: -webkit-linear-gradient(top, #422d19 0%, #2e271b 100%);
    background: -o-linear-gradient(top, #422d19 0%, #2e271b 100%);
    background: -ms-linear-gradient(top, #422d19 0%, #2e271b 100%);
    background: linear-gradient(to bottom, #422d19 0%, #2e271b 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#422d19', endColorstr='#2e271b', GradientType=0);
}

.igmline .userimage-tiny {
    max-height: 26px;
    margin-left: 4px;
    border-radius: 4px;
    -webkit-box-shadow: 0px 0px 2px 0px rgba(50, 50, 50, 0.8);
    -moz-box-shadow: 0px 0px 2px 0px rgba(50, 50, 50, 0.8);
    box-shadow: 0px 0px 2px 0px rgba(50, 50, 50, 0.8);
}

.igm-mobile-indicator {
    width: 8px;
    height: 14px;
    padding: 2px;
}

.igmline_anon {
    background-color: #342e26;
    padding: 3px;
    border-bottom: 1px solid #280100;
    position: relative;
}

.igmline_anon a {
    float: right;
}

.igmline-date {
    font-size: 0.94em;
}

.text {
    padding: 6px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    max-width: 800px;
}

.author {
    padding-left: 3px;
}

.igmline .author {
    font-size: 1.1em;
    position: relative;
    display: inline-block;
}

.date {
    font-size: x-small;
    line-height: 16px;
    padding-right: 3px;
}

.igmline .date {
    font-size: 0.95em;
    line-height: 26px;
}

.right {
    right: 5px;
    position: absolute;
}

#igm_groups {
    position: absolute;
    z-index: 100;
    border: 2px solid #280100;
    background-color: #342e26;
}

#igm_groups .igm-group-item {
    padding: 2px;
}

#igm_to {
    position: absolute;
    display: none;
    z-index: 1;
    text-align: left;
    border: 2px solid #280100;
    background-color: #342e26;
}

#igm_to_content {
    height: 250px;
    width: 200px;
    overflow: auto;
}

.igm-filter {
    display: none;
    width: 150px;
    position: absolute;
    background-color: white;
    border: 1px solid;
    z-index: 1;
    left: 0;
    top: 20px;
}

.igm-group-members {
    padding: 0;
}

.igm-group-members li {
    list-style-type: none;
    margin-bottom: 4px;
}

.igm-group-members .igm-group-member-delete {
    vertical-align: -2px;
}

.post blockquote {
    padding: 1px 3px;
    border-left: 3px solid #000;
}

/**** game/flags.css ****/
#flags_current {
    float: left;
    margin-right: 5px;
    width: 310px;
}

body[dir="rtl"] #flags_current {
    float: right;
    margin-left: 5px;
    margin-right: 0;
}

#flags_container {
    float: left;
    max-width: 650px;
}

body[dir="rtl"] #flags_current {
    float: right;
}

.flag_box {
    border: 1px solid #2A1F07;
    height: 60px;
    width: 60px;
    float: left;
    margin: 0 5px 5px 5px;
    position: relative;
    background-repeat: none;
    background-size: 60px 60px;
    background-color: #501367;
    -webkit-box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);
}

.flag_box_red {
    -webkit-box-shadow: 0 0 0 2px red;
    box-shadow: 0 0 0 2px red;
    border: 1px solid red;
}

body[dir="rtl"] .flag_box {
    float: right;
}

.flag_box_small {
    height: 45px !important;
    width: 45px !important;
    background-size: 45px 45px;
}

.flag_box_extra {
    border: 2px solid #9c2d1f !important;
    height: 80px;
}

.flag_box_empty {
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/flags/flag_empty.png") !important;
}

.flag_box_empty_1 {
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/flags/none_1.png") !important;
}

.flag_box_empty_2 {
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/flags/none_2.png") !important;
}

.flag_box_empty_3 {
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/flags/none_3.png") !important;
}

.flag_box_empty_4 {
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/flags/none_4.png") !important;
}

.flag_box_empty_5 {
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/flags/none_5.png") !important;
}

.flag_box_empty_6 {
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/flags/none_6.png") !important;
}

.flag_box_empty_7 {
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/flags/none_7.png") !important;
}

.flag_box_empty_8 {
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/flags/none_8.png") !important;
}

.flag_box_empty_9 {
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/flags/none_9.png") !important;
}

.flag_box_disabled {
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/flags/flag_disabled.png") !important;
    cursor: default !important;
}

.flag_bonus {
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/flags/bonus_gradient.png");
    background-repeat: repeat-x;
    color: #fff;
    top: 60px;
    position: absolute;
    width: 100%;
    height: 20px;
}

.flag_count {
    height: 15px;
    max-width: 35px;
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: #221F00 !important;
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/screen/tableheader_bg3.png");
    background-repeat: repeat-x;
    font-size: 9pt;
    text-align: center;
    cursor: default;
    border-top: 1px solid #2a1e07;
    border-left: 1px solid #2a1e07;
    padding: 0 2px;
}

.flag_box_small .flag_count {
    height: 13px !important;
    width: 22px !important;
    font-size: 7pt !important;
}

.flag_upgrade {
    position: absolute;
    left: 0px;
    bottom: 0px;
    cursor: pointer;
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/flags/upgrade.png");
    width: 20px;
    height: 20px;
}

.flag_clickable {
    cursor: pointer;
}

.flag_report_info {
    text-align: center;
    width: 45%;
    float: left;
    border: 1px solid #2a1e07;
    margin: 10px;
}

.flag_report_info p {
    font-weight: bold;
}

.flag_report_info div {
    margin: 10px auto;
    float: none !important;
}

.flag_world_container {
    float: left;
    margin: 10px;
}

.flags_new {
    color: red;
    font-size: 8pt
}

#flag_big {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/flags/flag_big.png');
    height: 385px;
    width: 301px;
    border: 1px solid #000;
}

#flag_big img {
    top: 25px;
    left: 66px;
    position: relative;
}

@media only screen and (-Webkit-min-device-pixel-ratio: 1.5), only screen and (-moz-min-device-pixel-ratio: 1.5), only screen and (-o-min-device-pixel-ratio: 3/2), only screen and (min-device-pixel-ratio: 1.5) {
    .flag_box_empty {
        background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/flags/flag_empty@2x.png") !important;
    }

    .flag_box_empty_1 {
        background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/flags/none_1@2x.png") !important;
    }

    .flag_box_empty_2 {
        background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/flags/none_2@2x.png") !important;
    }

    .flag_box_empty_3 {
        background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/flags/none_3@2x.png") !important;
    }

    .flag_box_empty_4 {
        background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/flags/none_4@2x.png") !important;
    }

    .flag_box_empty_5 {
        background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/flags/none_5@2x.png") !important;
    }

    .flag_box_empty_6 {
        background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/flags/none_6@2x.png") !important;
    }

    .flag_box_empty_7 {
        background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/flags/none_7@2x.png") !important;
    }

    .flag_box_empty_8 {
        background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/flags/none_8@2x.png") !important;
    }

    .flag_box_empty_9 {
        background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/flags/none_9@2x.png") !important;
    }

    .flag_box_disabled {
        background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/flags/flag_disabled@2x.png") !important;
    }
}

#selected_flag {
    margin-top: 10px;
}

#selected_flag table {
    width: 100%;
    margin: 0;
}

#selected_flag img {
    float: left;
    margin-right: 4px;
    width: 60px;
    height: 60px
}

/**** game/knight.css ****/
.knight_identification_tooltip .portrait {
    display: inline-block;
}

.knight_identification_tooltip .info {
    display: inline-block;
    vertical-align: top;
}

.knight_identification_tooltip .level {
    display: inline-block;
    vertical-align: middle;
    width: 26px;
    height: 26px;
    line-height: 20px;
    text-align: center;
    position: relative;
}

.knight_identification_tooltip .level .background {
    display: inline-block;
    width: 20px;
    height: 20px;
    position: relative;
    top: 2px;
    background-color: darkred;
}

.knight_identification_tooltip .level .value {
    font-size: small;
    color: white;
    position: relative;
    top: -25px;
}

.knight_identification_tooltip .level .frame {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.knight_identification_tooltip .name {
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
    font-weight: bold;
}

.knight_identification_tooltip .skill_points {
    margin-top: 4px;
}

.knight_identification_tooltip .skill_points .points_held {
    margin-right: 15px;
}

/**** game/daily_bonus.css ****/
.daily-bonus-subtitle {
    font-size: 14px;
}

.mds .daily-bonus-subtitle {
    font-size: 10px;
}

.daily-bonus-extra-info {
    margin-left: 10px;
}

.daily-bonus-extra-info .icon, .daily-bonus-extra-info img {
    vertical-align: bottom;
}

#daily_bonus_content {
    position: relative;
}

#daily_bonus_content .rewards_grid {
    display: inline-block;
    padding: 6px 0 0 6px;
    width: 519px;
    height: 537px;
}

#daily_bonus_content .rewards_grid .reward {
    position: relative;
    float: left;
    width: 167px;
    height: 173px;
    margin: 0 6px 6px 0;
    background-color: #2f1c09;
}

#daily_bonus_content .actions {
    position: absolute;
    bottom: 0;
    padding: 6px 4px;
    width: calc(100% - 8px);
    text-align: right;
}

#daily_bonus_content .chest_container {
    position: relative;
    display: inline-block;
    width: 167px;
    height: 173px;
}

#daily_bonus_content .day {
    position: absolute;
    width: 20px;
    height: 20px;
    text-align: center;
    font-size: large;
    top: 17px;
    left: 129px;
}

#daily_bonus_content .db-chest {
    width: 100%;
    height: 100%;
}

#daily_bonus_content .skin-silver .db-chest {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/daily_bonus/chest_skins/silver/closed.png');
}

#daily_bonus_content .skin-silver .db-chest.unlocked {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/daily_bonus/chest_skins/silver/unlocked.png');
}

#daily_bonus_content .skin-silver .db-chest.opened {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/daily_bonus/chest_skins/silver/opened.png');
}

#daily_bonus_content .skin-gold .db-chest {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/daily_bonus/chest_skins/gold/closed.png');
}

#daily_bonus_content .skin-gold .db-chest.unlocked {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/daily_bonus/chest_skins/gold/unlocked.png');
}

#daily_bonus_content .skin-gold .db-chest.opened {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/daily_bonus/chest_skins/gold/opened.png');
}

#daily_bonus_content .skin-merge_incentive_meh .db-chest {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/daily_bonus/chest_skins/merge_incentive_meh/closed.png');
}

#daily_bonus_content .skin-merge_incentive_meh .db-chest.unlocked {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/daily_bonus/chest_skins/merge_incentive_meh/unlocked.png');
}

#daily_bonus_content .skin-merge_incentive_meh .db-chest.opened {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/daily_bonus/chest_skins/merge_incentive_meh/opened.png');
}

#daily_bonus_content .skin-merge_incentive_meh .day {
    top: 30px;
    left: 128px;
}

#daily_bonus_content .skin-merge_incentive_wowzerz .db-chest {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/daily_bonus/chest_skins/merge_incentive_wowzerz/closed.png');
}

#daily_bonus_content .skin-merge_incentive_wowzerz.unlocked .db-chest {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/daily_bonus/chest_skins/merge_incentive_wowzerz/unlocked.png');
}

#daily_bonus_content .skin-merge_incentive_wowzerz.opened .db-chest {
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/daily_bonus/chest_skins/merge_incentive_wowzerz/opened.png');
}

#daily_bonus_content .skin-merge_incentive_wowzerz .day {
    top: 30px;
    left: 128px;
}

.daily-bonus-reward-label {
    text-align: center;
    font-weight: bold;
    font-size: 12px;
    padding-bottom: 10px;
}

#daily_bonus_content .rewards_pane {
    width: 280px;
    overflow: hidden;
}

#daily_bonus_content .rewards_sheet {
    width: 2700px;
}

#daily_bonus_content .rewards_pane .reward {
    position: relative;
    float: left;
    width: 280px;
}

#daily_bonus_content .arrow {
    position: absolute;
    width: 11px;
    height: 11px;
    top: calc(50% - 5px);
    background-repeat: no-repeat;
}

#daily_bonus_content .arrow.left {
    left: 0;
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/links.png);
}

#daily_bonus_content .arrow.right {
    right: 0;
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/rechts.png)
}

#daily_bonus_content .reward_info {
    padding-top: 10px;
}

#daily_bonus_content .reward_info table {
    display: inline-block;
}

#daily_bonus_content .reward_info td {
    text-align: left;
    font-size: x-small;
    vertical-align: middle;
}

#daily_bonus_content .reward_info img {
    width: 70px;
    height: 70px;
}

/**** game/player_inventory.css ****/
.inventory_items {
    float: left;
    width: 30%;
    border: 2px solid #2a1f07;
    padding: 4px 0 0 4px;
    background: #2f1c09;
    position: relative;
    display: flex;
    flex-wrap: wrap;
}

body[dir="rtl"] .inventory_items {
    float: right;
    direction: rtl;
}

.item_container {
    width: 92px;
    height: 92px;
    border: 2px solid #4a411f;
    margin: 0 4px 4px 0;
    background: #501367;
    border-radius: 4px;
    overflow: hidden;
    filter: drop-shadow(0 0 0.05rem rgba(0, 0, 0, 0.2));
}

.mobile .inventory_items {
    float: none;
    overflow: hidden;
    margin: auto;
}

.item_container:empty {
    opacity: 0.5;
}

.item_container .item {
    cursor: pointer;
    background: #501367;
    position: relative;
}

.item_container img {
    vertical-align: middle;
    width: 92px;
    height: 92px;
}

.item_container .item .count {
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: #221F00;
    border-left: 1px solid #1c1600;
    border-top: 1px solid #1c1600;
    border-top-left-radius: 2px;
    opacity: 0.9;
    font-weight: bold;
    padding: 2px;
    min-width: 15px;
    text-align: center;
}

.item_container .item .new-count {
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: 0.9;
    font-weight: bold;
    padding: 2px;
    min-width: 15px;
    text-align: center;
    border-top: 1px solid #46130e;
    border-right: 1px solid #46130e;
    border-top-right-radius: 2px;
    background-color: #811010;
    color: #fff;
}

.item_container .item:hover, .item_container .item.active {
    background: #302a25;
}

.item_container.active {
    border: 2px solid #811010 !important;
}

.inventory_detail {
    float: right;
    width: 30%;
    border: 1px solid #2a1f07;
    background: #501367;
}

body[dir="rtl"] .inventory_detail {
    float: left;
}

.mobile .inventory_detail {
    float: none;
    margin: 10px auto 0;
}

.inventory_detail .btn {
    margin-right: 10px;
    min-width: 50px;
}

.detail_head img {
    width: 60px;
    height: auto;
    float: right;
    margin-left: 5px;
}

body[dir="rtl"] .detail_head img {
    float: left;
    margin-right: 5px;
    margin-left: 0;
}

.detail_head .name {
    font-weight: bold;
    display: inline-block;
    font-size: 13px;
}

.detail_head .line {
    line-height: 15px;
    display: block;
}

.detail_section {
    padding: 5px;
    border-bottom: 1px solid #3d0c00;
}

.detail_head {
    min-height: 56px;
}

.inventory_detail .detail_section:last-child {
    border: 0;
}

.inventory_pages {
    clear: both;
    font-size: 15px;
}

.inventory_search_container {
    margin-bottom: 10px;
    clear: both;
}

#inventory_container {
    display: inline-block;
    position: relative;
    width: 100%;
    vertical-align: middle;
}

.inventory_search {
    background: #501367;
    padding: 5px;
    border: 1px solid #2a1f07;
    width: auto;
    display: table-cell;
}

.inventory_search input {
    width: 200px;
}

.inventory_message {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 406px;
    z-index: 1;
    background: rgba(0, 0, 0, 0.35);
}

.inventory_message span {
    font-size: 18px;
    font-weight: bold;
    position: absolute;
    top: 190px;
    width: 100%;
    text-align: center;
    color: #fff;
}

.mds .inventory_message span {
    top: 90px;
}

.inventory_new {
    margin: 0 !important;
    display: table-cell;
}

.inventory_new > div {
    overflow: hidden;
    background: #321f10;
}

.inventory_new .item_container {
    margin: 6px;
}

.inventory_gift {
    background: #501367;
    padding: 6px;
    border: 1px solid #2A1F07;
    box-shadow: 1px 1px 2px 1px rgba(60, 30, 0, 0.2);
    width: 65%;
    float: left;
    clear: both;
}

.inventory_gift.mobile {
    float: none;
    width: 96%;
}

.inventory_gift img {
    float: left;
    margin-right: 8px;
}

.inventory_gift h3 {
    font-size: 16px;
}

.inventory_gift_rules {
    float: right;
    width: 30%;
    margin: 0 !important;
}

.inventory_gift_rules.mobile {
    width: 100%;
    margin-top: 10px;
}

.inventory_gift_rules div {
    background: #501367;
    padding: 4px;
}

.skill_book_preview {
    display: inline-block;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
}

.skill_book_preview .label {
    font-weight: bold;
}

#skill_book_knight_selection {
    background-color: rgb(229, 208, 155);
    margin-right: 10px;
    padding: 1px;
}

#skill_book_knight_selection .knight {
    background-color: #501367;
    cursor: pointer;
    border: 1px solid rgb(230, 180, 106);
    margin: 5px;
    white-space: nowrap;
}

#skill_book_knight_selection.no_choice .knight {
    cursor: default;
}

#skill_book_knight_selection .knight:hover {
    background-color: #3D2E1C;
}

#skill_book_knight_selection .knight.selected {
    border-color: rgb(129, 16, 16);
    background-color: #3B3127 !important;
}

#skill_book_knight_selection .knight:hover .portrait {
    filter: brightness(105%);
    -webkit-filter: brightness(105%);
}

#skill_book_knight_selection .knight.selected .portrait {
    filter: brightness(110%);
    -webkit-filter: brightness(110%);
}

#skill_book_knight_selection .knight.ineligible {
    color: gray;
    cursor: not-allowed;
}

#skill_book_knight_selection .knight.ineligible:hover {
    background-color: #FAD9D9;
}

#skill_book_knight_selection .knight.ineligible .portrait, #skill_book_knight_selection .knight.ineligible .level {
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
}

#skill_book_knight_selection .knight .portrait {
    vertical-align: middle;
}

#skill_book_knight_selection .knight .stats {
    display: inline-block;
    vertical-align: top;
    padding: 2px 3px 2px 3px;
}

#skill_book_knight_selection .knight .name {
    display: inline-block;
    vertical-align: middle;
    font-weight: bold;
    overflow-x: hidden;
    text-overflow: ellipsis;
}

.mds #skill_book_knight_selection .knight .name {
    max-width: 150px;
}

#skill_book_knight_selection .knight .level {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    background-color: darkred;
    color: white;
    border: 1px solid gold;
}

#skill_book_knight_selection .knight .warn {
    border-top: 1px solid rgb(230, 180, 106);
    padding: 2px 3px 2px 3px;
}

#skill_book_study_container {
    margin-top: 10px;
}

.report_ReportItemPackageReceived {
    padding: 0 !important;
}

.report_items {
    background: #2f1c09;
}

.report_items .item_container {
    float: inherit;
    display: inline-block;
    margin: 8px;
}

a.mobile-pagination-link {
    font-size: 15px;
}

.mobile-inventory-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-top: -9px;
    width: 26px;
    height: 95%;
    font-size: 16pt;
    text-align: center;
    background-repeat: no-repeat;
    background-position: center;
    color: transparent;
}

.mobile-inventory-arrow.arrow-prev {
    left: 0%;
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/links.png);
}

.mobile-inventory-arrow.arrow-next {
    right: 0%;
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/rechts.png);
}

.inventory-wrapper {
    overflow: hidden;
    position: relative;
}

#amount-selector {
    width: 50px;
    height: 20px;
}

/**** game/building_watchtower.css ****/
.building-watchtower-info {
    width: 65%;
}

.building-watchtower-sight {
    width: 200px;
}

.building-watchtower-minimap {
    overflow: hidden;
    position: relative;
    padding: 0;
    width: 250px;
    height: 250px;
    border: 1px solid brown;
}

.mds .building-watchtower-info, .mds .building-watchtower-sight, .mds .building-watchtower-minimap {
    width: 100%;
    float: none;
}

/**** game/visual.css ****/
#leftcolumn {
    width: 600px;
}

#rightcolumn {
    width: 350px !important;
}

#overviewtable {
    border-spacing: 0 !important;
}

.visual {
    position: relative;
    width: 660px;
    height: 465px;
    border-bottom: #2a1f07;
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/visual/2016/back_none.jpg);
}

.visual.night {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/visual_night/2016/back_none.jpg);
}

.visual-empty {
    position: absolute;
    z-index: 4;
    left: 0;
    top: 0;
    width: 660px;
    height: 465px;
}

.visual-label {
    background: -moz-linear-gradient(top, rgba(102, 136, 51, 0.8) 0%, rgba(102, 136, 51, 0.8) 1%, rgba(52, 89, 33, 0.8) 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(102, 136, 51, 0.8)), color-stop(1%, rgba(102, 136, 51, 0.8)), color-stop(100%, rgba(52, 89, 33, 0.8)));
    background: -webkit-linear-gradient(top, rgba(102, 136, 51, 0.8) 0%, rgba(102, 136, 51, 0.8) 1%, rgba(52, 89, 33, 0.8) 100%);
    background: -o-linear-gradient(top, rgba(102, 136, 51, 0.8) 0%, rgba(102, 136, 51, 0.8) 1%, rgba(52, 89, 33, 0.8) 100%);
    background: -ms-linear-gradient(top, rgba(102, 136, 51, 0.8) 0%, rgba(102, 136, 51, 0.8) 1%, rgba(52, 89, 33, 0.8) 100%);
    background: linear-gradient(to bottom, rgba(102, 136, 51, 0.8) 0%, rgba(102, 136, 51, 0.8) 1%, rgba(52, 89, 33, 0.8) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#cc668833', endColorstr='#cc345921', GradientType=0);
    padding: 2px;
    border: 1px #2b310b solid;
    color: white;
    -webkit-border-radius: 7px;
    border-radius: 5px;
    text-align: center;
    z-index: 7;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    position: absolute;
}

.no-labels .visual-label {
    display: none;
}

.visual-label a {
    color: white;
}

.visual-label .order-level {
    font-size: 8px;
}

.visual-label .building-extra {
    font-size: 8px;
}

.visual-label:hover {
    opacity: 0.4;
}

.night .visual-label {
    background: -moz-linear-gradient(top, rgba(32, 32, 96, 0.8) 0%, rgba(18, 20, 53, 0.8) 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(32, 32, 96, 0.8)), color-stop(100%, rgba(18, 20, 53, 0.8)));
    background: -webkit-linear-gradient(top, rgba(32, 32, 96, 0.8) 0%, rgba(18, 20, 53, 0.8) 100%);
    background: -o-linear-gradient(top, rgba(32, 32, 96, 0.8) 0%, rgba(18, 20, 53, 0.8) 100%);
    background: -ms-linear-gradient(top, rgba(32, 32, 96, 0.8) 0%, rgba(18, 20, 53, 0.8) 100%);
    background: linear-gradient(to bottom, rgba(32, 32, 96, 0.8) 0%, rgba(18, 20, 53, 0.8) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#cc202060', endColorstr='#cc121435', GradientType=0);
    border: 1px #12082e solid;
}

.visual-building {
    position: absolute;
    display: inline-block;
    overflow: hidden;
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/visual/2016/visual-building.png) no-repeat;
}

.night .visual-building {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/visual_night/2016/visual-building.png) no-repeat;
}

.visual-building-wall0 {
    width: 660px;
    height: 465px;
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/visual/2016/wall0.png);
}

.night .visual-building-wall0 {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/visual_night/2016/wall0.png);
}

.visual-building-wall1 {
    width: 660px;
    height: 465px;
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/visual/2016/wall1.png);
}

.night .visual-building-wall1 {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/visual_night/2016/wall1.png);
}

.visual-building-wall2 {
    width: 660px;
    height: 465px;
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/visual/2016/wall2.png);
}

.night .visual-building-wall2 {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/visual_night/2016/wall2.png);
}

.visual-building-wall3 {
    width: 660px;
    height: 465px;
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/visual/2016/wall3.png);
}

.night .visual-building-wall3 {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/visual_night/2016/wall3.png);
}

.special-layer {
    position: absolute;
    display: inline-block;
    z-index: 5;
}

.layer-tree {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/visual/2016/special-tree.png);
    width: 42px;
    height: 50px;
    top: 179px;
    left: 400px;
}

.night .layer-tree {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/visual_night/2016/special-tree.png);
}

.layer-halloween {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/visual/2016/special-halloween.png);
    width: 52px;
    height: 46px;
    top: 182px;
    left: 394px;
}

.night .layer-halloween {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/visual_night/2016/special-halloween.png);
}

.layer-pumpkin {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/visual/2016/special-pumpkin.png);
    width: 37px;
    height: 33px;
    top: 283px;
    left: 330px;
}

.night .layer-pumpkin {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/visual_night/2016/special-pumpkin.png);
}

.layer-valentines {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/visual/2016/special-valentines.png);
    width: 29px;
    height: 44px;
    top: 186px;
    left: 363px;
}

.night .layer-valentines {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/visual_night/2016/special-valentines.png);
}

.layer-valentines2 {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/visual/2016/special-valentines.png);
    width: 29px;
    height: 44px;
    top: 226px;
    left: 202px;
}

.night .layer-valentines2 {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/visual_night/2016/special-valentines.png);
}

.layer-birthday {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/visual/2016/special-birthday.png);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 4;
}

.night .layer-birthday {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/visual_night/2016/special-birthday.png);
}

.layer-rune {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/visual/2016/special-rune.png);
    width: 85px;
    height: 92px;
    top: 373px;
    left: 212px;
}

.night .layer-rune {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/visual_night/2016/special-rune.png);
}

.visual-anim {
    position: absolute;
    margin: 0;
}

.anim-building-barracks-0 {
    left: 479px;
    top: 285px;
    width: 10px;
    height: 23px;
}

.anim-building-snob-0 {
    left: 225px;
    top: 118px;
    width: 26px;
    height: 50px;
}

.anim-building-stable-0 {
    left: 193px;
    top: 268px;
    width: 13px;
    height: 22px;
}

.anim-building-wall-0 {
    left: 147px;
    top: 116px;
    width: 11px;
    height: 20px;
}

.anim-building-smith-0 {
    left: 289px;
    top: 336px;
    width: 13px;
    height: 22px;
}

.anim-building-place-0 {
    left: 370px;
    top: 276px;
    width: 12px;
    height: 20px;
}

.anim-building-market-0 {
    left: 277px;
    top: 184px;
    width: 13px;
    height: 22px;
}

.anim-building-wood-0 {
    left: 570px;
    top: 386px;
    width: 13px;
    height: 22px;
}

.anim-building-stone-0 {
    left: 105px;
    top: 355px;
    width: 11px;
    height: 18px;
}

.anim-building-iron-0 {
    left: 79px;
    top: 66px;
    width: 13px;
    height: 22px;
}

.anim-building-church-0 {
    left: 493px;
    top: 207px;
    width: 13px;
    height: 22px;
}

.anim-building-barracks-0 {
    left: 479px;
    top: 285px;
    width: 10px;
    height: 23px;
}

.anim-building-garage-0 {
    left: 381px;
    top: 341px;
    width: 9px;
    height: 21px;
}

.anim-building-garage-prod {
    left: 356px;
    top: 353px;
    width: 18px;
    height: 16px;
}

.anim-building-garage-prod2 {
    left: 331px;
    top: 340px;
    width: 22px;
    height: 18px;
}

.anim-building-main-1 {
    left: 419px;
    top: 103px;
    width: 31px;
    height: 20px;
}

.anim-building-main-2 {
    left: 418px;
    top: 101px;
    width: 31px;
    height: 20px;
}

.anim-building-main-3 {
    left: 351px;
    top: 106px;
    width: 32px;
    height: 22px;
}

.anim-building-farm-2 {
    left: 493px;
    top: 29px;
    width: 66px;
    height: 56px;
}

.anim-building-farm-3 {
    left: 480px;
    top: 8px;
    width: 86px;
    height: 83px;
}

.anim-building-wood-prod {
    left: 533px;
    top: 397px;
    width: 26px;
    height: 24px;
}

.anim-building-iron-prod {
    left: 80px;
    top: 69px;
    width: 30px;
    height: 28px;
}

.anim-building-stone-prod {
    left: 97px;
    top: 396px;
    width: 33px;
    height: 23px;
}

.anim-building-farm-prod {
    left: 581px;
    top: 91px;
    width: 35px;
    height: 28px;
}

.anim-building-main-prod {
    left: 369px;
    top: 176px;
    width: 36px;
    height: 29px;
}

.anim-building-snob-prod {
    left: 239px;
    top: 94px;
    width: 35px;
    height: 22px;
}

.anim-building-stable-prod {
    left: 167px;
    top: 280px;
    width: 51px;
    height: 40px;
}

.anim-building-smith-prod {
    left: 212px;
    top: 337px;
    width: 27px;
    height: 25px;
}

.anim-building-barracks-prod {
    left: 366px;
    top: 247px;
    width: 48px;
    height: 39px;
}

.anim-joker {
    left: 242px;
    top: 245px;
    width: 19px;
    height: 24px;
}

.anim-guard {
    left: 200px;
    top: 200px;
    width: 29px;
    height: 38px;
}

.anim-convo {
    left: 258px;
    top: 261px;
    width: 29px;
    height: 30px;
}

.visual-building-church3 {
    width: 138px;
    height: 122px;
    background-position: -1px -1px;
    left: 417px;
    top: 122px;
}

.visual-building-church_f1 {
    width: 128px;
    height: 120px;
    background-position: -141px -1px;
    left: 417px;
    top: 127px;
}

.visual-building-church2 {
    width: 115px;
    height: 117px;
    background-position: -271px -1px;
    left: 417px;
    top: 130px;
}

.visual-building-farm3 {
    width: 139px;
    height: 94px;
    background-position: -388px -1px;
    left: 480px;
    top: 12px;
}

.visual-building-market3 {
    width: 120px;
    height: 105px;
    background-position: -529px -1px;
    left: 243px;
    top: 149px;
}

.visual-building-watchtower1 {
    width: 53px;
    height: 69px;
    background-position: -651px -1px;
    left: 495px;
    top: 211px;
}

.visual-building-iron1 {
    width: 56px;
    height: 54px;
    background-position: -651px -72px;
    left: 55px;
    top: 43px;
}

.visual-building-main3 {
    width: 120px;
    height: 98px;
    background-position: -388px -97px;
    left: 322px;
    top: 91px;
}

.visual-building-barracks3 {
    width: 112px;
    height: 95px;
    background-position: -271px -120px;
    left: 412px;
    top: 234px;
}

.visual-building-smith2 {
    width: 122px;
    height: 93px;
    background-position: -141px -123px;
    left: 219px;
    top: 285px;
}

.visual-building-stable3 {
    width: 132px;
    height: 87px;
    background-position: -1px -125px;
    left: 104px;
    top: 226px;
}

.visual-building-smith3 {
    width: 121px;
    height: 93px;
    background-position: -1px -214px;
    left: 220px;
    top: 285px;
}

.visual-building-garage3 {
    width: 126px;
    height: 87px;
    background-position: -510px -108px;
    left: 313px;
    top: 297px;
}

.visual-building-watchtower2 {
    width: 59px;
    height: 85px;
    background-position: -638px -128px;
    left: 503px;
    top: 205px;
}

.visual-building-stable2 {
    width: 119px;
    height: 83px;
    background-position: -385px -197px;
    left: 117px;
    top: 229px;
}

.visual-building-snob0 {
    width: 94px;
    height: 102px;
    background-position: -265px -217px;
    left: 194px;
    top: 86px;
}

.visual-building-snob1 {
    width: 94px;
    height: 102px;
    background-position: -506px -197px;
    left: 194px;
    top: 86px;
}

.visual-building-church1 {
    width: 99px;
    height: 92px;
    background-position: -602px -215px;
    left: 417px;
    top: 151px;
}

.visual-building-farm2 {
    width: 126px;
    height: 74px;
    background-position: -361px -282px;
    left: 492px;
    top: 31px;
}

.visual-building-main2 {
    width: 108px;
    height: 83px;
    background-position: -489px -301px;
    left: 336px;
    top: 105px;
}

.visual-building-garage2 {
    width: 106px;
    height: 82px;
    background-position: -599px -309px;
    left: 333px;
    top: 297px;
}

.visual-building-market2 {
    width: 113px;
    height: 81px;
    background-position: -124px -218px;
    left: 250px;
    top: 153px;
}

.visual-building-smith1 {
    width: 117px;
    height: 75px;
    background-position: -124px -301px;
    left: 224px;
    top: 303px;
}

.visual-building-stable1 {
    width: 110px;
    height: 77px;
    background-position: -243px -321px;
    left: 126px;
    top: 235px;
}

.visual-building-stable0 {
    width: 110px;
    height: 76px;
    background-position: -355px -358px;
    left: 126px;
    top: 236px;
}

.visual-building-storage3 {
    width: 94px;
    height: 88px;
    background-position: -467px -386px;
    left: 142px;
    top: 147px;
}

.visual-building-watchtower3 {
    width: 74px;
    height: 107px;
    background-position: -563px -393px;
    left: 487px;
    top: 176px;
}

.visual-building-stone2 {
    width: 69px;
    height: 70px;
    background-position: -639px -393px;
    left: 59px;
    top: 333px;
}

.visual-building-farm1 {
    width: 69px;
    height: 65px;
    background-position: -639px -465px;
    left: 550px;
    top: 41px;
}

.visual-building-farm2_field {
    width: 121px;
    height: 65px;
    background-position: -1px -309px;
    left: 539px;
    top: 0px;
}

.visual-building-barracks2 {
    width: 98px;
    height: 78px;
    background-position: -1px -376px;
    left: 412px;
    top: 234px;
}

.visual-building-main1 {
    width: 103px;
    height: 73px;
    background-position: -101px -378px;
    left: 342px;
    top: 108px;
}

.visual-building-storage2 {
    width: 94px;
    height: 79px;
    background-position: -206px -400px;
    left: 142px;
    top: 156px;
}

.visual-building-statue1 {
    width: 48px;
    height: 57px;
    background-position: -302px -400px;
    left: 289px;
    top: 249px;
}

.visual-building-farm1_field {
    width: 87px;
    height: 84px;
    background-position: -101px -453px;
    left: 573px;
    top: 50px;
}

.visual-building-garage1 {
    width: 85px;
    height: 82px;
    background-position: -1px -456px;
    left: 354px;
    top: 297px;
}

.visual-building-wood3 {
    width: 99px;
    height: 70px;
    background-position: -352px -436px;
    left: 503px;
    top: 347px;
}

.visual-building-statue0 {
    width: 48px;
    height: 46px;
    background-position: -302px -459px;
    left: 289px;
    top: 260px;
}

.visual-building-stone3 {
    width: 83px;
    height: 82px;
    background-position: -190px -481px;
    left: 44px;
    top: 321px;
}

.visual-building-church0 {
    width: 73px;
    height: 75px;
    background-position: -275px -507px;
    left: 435px;
    top: 159px;
}

.visual-building-iron3 {
    width: 87px;
    height: 75px;
    background-position: -88px -539px;
    left: 43px;
    top: 32px;
}

.visual-building-market1 {
    width: 94px;
    height: 68px;
    background-position: -177px -565px;
    left: 254px;
    top: 155px;
}

.visual-building-storage1 {
    width: 84px;
    height: 73px;
    background-position: -1px -540px;
    left: 152px;
    top: 160px;
}

.visual-building-farm3_field {
    width: 80px;
    height: 74px;
    background-position: -1px -615px;
    left: 580px;
    top: 130px;
}

.visual-building-wood2 {
    width: 91px;
    height: 68px;
    background-position: -83px -616px;
    left: 512px;
    top: 347px;
}

.visual-building-barracks0 {
    width: 98px;
    height: 61px;
    background-position: -453px -476px;
    left: 412px;
    top: 251px;
}

.visual-building-wood0 {
    width: 81px;
    height: 71px;
    background-position: -553px -502px;
    left: 523px;
    top: 347px;
}

.visual-building-iron0 {
    width: 64px;
    height: 59px;
    background-position: -636px -532px;
    left: 55px;
    top: 43px;
}

.visual-building-barracks1 {
    width: 98px;
    height: 61px;
    background-position: -350px -508px;
    left: 412px;
    top: 251px;
}

.visual-building-garage0 {
    width: 90px;
    height: 66px;
    background-position: -450px -539px;
    left: 349px;
    top: 297px;
}

.visual-building-place0 {
    width: 81px;
    height: 67px;
    background-position: -542px -575px;
    left: 347px;
    top: 227px;
}

.visual-building-place1 {
    width: 81px;
    height: 67px;
    background-position: -542px -575px;
    left: 347px;
    top: 227px;
}

.visual-building-wood1 {
    width: 76px;
    height: 68px;
    background-position: -625px -593px;
    left: 527px;
    top: 347px;
}

.visual-building-market0 {
    width: 94px;
    height: 57px;
    background-position: -350px -571px;
    left: 254px;
    top: 155px;
}

.visual-building-iron2 {
    width: 75px;
    height: 65px;
    background-position: -273px -584px;
    left: 55px;
    top: 32px;
}

.visual-building-stone1 {
    width: 59px;
    height: 55px;
    background-position: -176px -635px;
    left: 59px;
    top: 350px;
}

.visual-building-hide1 {
    width: 54px;
    height: 46px;
    background-position: -446px -607px;
    left: 273px;
    top: 88px;
}

.visual-building-smith0 {
    width: 114px;
    height: 64px;
    background-position: -502px -644px;
    left: 227px;
    top: 305px;
}

.visual-building-stone0 {
    width: 44px;
    height: 25px;
    background-position: -618px -663px;
    left: 81px;
    top: 348px;
}

.night .visual-building-stone0 {
    width: 44px;
    height: 32px;
    background-position: -1px -1px;
    left: 81px;
    top: 348px;
}

.night .visual-building-hide {
    width: 54px;
    height: 46px;
    background-position: -47px -1px;
    left: 273px;
    top: 88px;
}

.night .visual-building-statue0 {
    width: 48px;
    height: 46px;
    background-position: -103px -1px;
    left: 289px;
    top: 260px;
}

.night .visual-building-stone1 {
    width: 59px;
    height: 55px;
    background-position: -153px -1px;
    left: 59px;
    top: 350px;
}

.night .visual-building-statue1 {
    width: 48px;
    height: 57px;
    background-position: -214px -1px;
    left: 289px;
    top: 249px;
}

.night .visual-building-market0 {
    width: 94px;
    height: 57px;
    background-position: -264px -1px;
    left: 254px;
    top: 155px;
}

.night .visual-building-barracks0 {
    width: 98px;
    height: 61px;
    background-position: -360px -1px;
    left: 412px;
    top: 251px;
}

.night .visual-building-barracks1 {
    width: 98px;
    height: 61px;
    background-position: -460px -1px;
    left: 412px;
    top: 251px;
}

.night .visual-building-iron1 {
    width: 66px;
    height: 61px;
    background-position: -560px -1px;
    left: 45px;
    top: 43px;
}

.night .visual-building-smith0 {
    width: 114px;
    height: 64px;
    background-position: -1px -64px;
    left: 227px;
    top: 305px;
}

.night .visual-building-iron0 {
    width: 64px;
    height: 65px;
    background-position: -117px -64px;
    left: 55px;
    top: 43px;
}

.night .visual-building-farm2_field {
    width: 121px;
    height: 65px;
    background-position: -183px -64px;
    left: 539px;
    top: 0px;
}

.night .visual-building-farm1 {
    width: 69px;
    height: 65px;
    background-position: -306px -64px;
    left: 550px;
    top: 41px;
}

.night .visual-building-garage0 {
    width: 90px;
    height: 66px;
    background-position: -377px -64px;
    left: 349px;
    top: 297px;
}

.night .visual-building-place0, .night .visual-building-place1 {
    width: 81px;
    height: 67px;
    background-position: -469px -64px;
    left: 347px;
    top: 227px;
}

.night .visual-building-watchtower1 {
    width: 51px;
    height: 67px;
    background-position: -552px -64px;
    left: 508px;
    top: 212px;
}

.night .visual-building-wood1 {
    width: 80px;
    height: 68px;
    background-position: -605px -64px;
    left: 523px;
    top: 347px;
}

.night .visual-building-market1 {
    width: 94px;
    height: 68px;
    background-position: -1px -134px;
    left: 254px;
    top: 155px;
}

.night .visual-building-stone2 {
    width: 70px;
    height: 70px;
    background-position: -97px -134px;
    left: 59px;
    top: 333px;
}

.night .visual-building-wood0 {
    width: 81px;
    height: 71px;
    background-position: -169px -134px;
    left: 523px;
    top: 347px;
}

.night .visual-building-iron2 {
    width: 85px;
    height: 72px;
    background-position: -252px -134px;
    left: 45px;
    top: 32px;
}

.night .visual-building-main1 {
    width: 103px;
    height: 73px;
    background-position: -339px -134px;
    left: 342px;
    top: 108px;
}

.night .visual-building-storage1 {
    width: 84px;
    height: 73px;
    background-position: -444px -134px;
    left: 152px;
    top: 160px;
}

.night .visual-building-farm2 {
    width: 126px;
    height: 74px;
    background-position: -530px -134px;
    left: 492px;
    top: 31px;
}

.night .visual-building-farm3_field {
    width: 80px;
    height: 74px;
    background-position: -658px -134px;
    left: 580px;
    top: 130px;
}

.night .visual-building-smith1 {
    width: 117px;
    height: 75px;
    background-position: -1px -210px;
    left: 224px;
    top: 303px;
}

.night .visual-building-wood2 {
    width: 91px;
    height: 75px;
    background-position: -120px -210px;
    left: 512px;
    top: 347px;
}

.night .visual-building-wood3 {
    width: 99px;
    height: 75px;
    background-position: -213px -210px;
    left: 503px;
    top: 347px;
}

.night .visual-building-stable0 {
    width: 110px;
    height: 76px;
    background-position: -314px -210px;
    left: 126px;
    top: 236px;
}

.night .visual-building-stable1 {
    width: 110px;
    height: 77px;
    background-position: -426px -210px;
    left: 126px;
    top: 235px;
}

.night .visual-building-barracks2 {
    width: 98px;
    height: 78px;
    background-position: -538px -210px;
    left: 412px;
    top: 234px;
}

.night .visual-building-storage2 {
    width: 94px;
    height: 80px;
    background-position: -638px -210px;
    left: 142px;
    top: 156px;
}

.night .visual-building-market2 {
    width: 113px;
    height: 81px;
    background-position: -1px -292px;
    left: 250px;
    top: 153px;
}

.night .visual-building-iron3 {
    width: 87px;
    height: 81px;
    background-position: -116px -292px;
    left: 43px;
    top: 32px;
}

.night .visual-building-garage1 {
    width: 85px;
    height: 82px;
    background-position: -205px -292px;
    left: 354px;
    top: 297px;
}

.night .visual-building-stone3 {
    width: 85px;
    height: 82px;
    background-position: -292px -292px;
    left: 44px;
    top: 321px;
}

.night .visual-building-garage2 {
    width: 106px;
    height: 82px;
    background-position: -379px -292px;
    left: 333px;
    top: 297px;
}

.night .visual-building-stable2 {
    width: 119px;
    height: 83px;
    background-position: -487px -292px;
    left: 117px;
    top: 229px;
}

.night .visual-building-farm1_field {
    width: 87px;
    height: 84px;
    background-position: -608px -292px;
    left: 573px;
    top: 50px;
}

.night .visual-building-watchtower2 {
    width: 60px;
    height: 85px;
    background-position: -1px -378px;
    left: 503px;
    top: 205px;
}

.night .visual-building-church0 {
    width: 99px;
    height: 86px;
    background-position: -63px -378px;
    left: 417px;
    top: 157px;
}

.night .visual-building-main2 {
    width: 108px;
    height: 86px;
    background-position: -164px -378px;
    left: 336px;
    top: 105px;
}

.night .visual-building-garage3 {
    width: 126px;
    height: 87px;
    background-position: -274px -378px;
    left: 313px;
    top: 297px;
}

.night .visual-building-stable3 {
    width: 132px;
    height: 87px;
    background-position: -402px -378px;
    left: 104px;
    top: 226px;
}

.night .visual-building-storage3 {
    width: 94px;
    height: 88px;
    background-position: -536px -378px;
    left: 142px;
    top: 147px;
}

.night .visual-building-church1 {
    width: 99px;
    height: 92px;
    background-position: -632px -378px;
    left: 417px;
    top: 151px;
}

.night .visual-building-smith3 {
    width: 121px;
    height: 93px;
    background-position: -1px -472px;
    left: 220px;
    top: 285px;
}

.night .visual-building-smith2 {
    width: 122px;
    height: 93px;
    background-position: -124px -472px;
    left: 219px;
    top: 285px;
}

.night .visual-building-farm3 {
    width: 139px;
    height: 94px;
    background-position: -248px -472px;
    left: 480px;
    top: 12px;
}

.night .visual-building-barracks3 {
    width: 112px;
    height: 97px;
    background-position: -389px -472px;
    left: 412px;
    top: 234px;
}

.night .visual-building-main3 {
    width: 120px;
    height: 101px;
    background-position: -503px -472px;
    left: 322px;
    top: 91px;
}

.night .visual-building-snob1 {
    width: 94px;
    height: 102px;
    background-position: -625px -472px;
    left: 194px;
    top: 86px;
}

.night .visual-building-snob0 {
    width: 94px;
    height: 102px;
    background-position: -1px -576px;
    left: 194px;
    top: 86px;
}

.night .visual-building-market3 {
    width: 120px;
    height: 105px;
    background-position: -97px -576px;
    left: 243px;
    top: 149px;
}

.night .visual-building-watchtower3 {
    width: 75px;
    height: 107px;
    background-position: -219px -576px;
    left: 491px;
    top: 179px;
}

.night .visual-building-church2 {
    width: 115px;
    height: 117px;
    background-position: -296px -576px;
    left: 417px;
    top: 130px;
}

.night .visual-building-church_f1 {
    width: 128px;
    height: 120px;
    background-position: -413px -576px;
    left: 417px;
    top: 127px;
}

.night .visual-building-church3 {
    width: 138px;
    height: 122px;
    background-position: -543px -576px;
    left: 417px;
    top: 122px;
}

.visual-label-main {
    left: 343px;
    top: 80px;
}

.visual-label-place {
    left: 386px;
    top: 210px;
}

.visual-label-wood {
    left: 579px;
    top: 341px;
}

.visual-label-stone {
    left: 138px;
    top: 402px;
}

.visual-label-iron {
    left: 68px;
    top: 27px;
}

.visual-label-statue {
    left: 280px;
    top: 236px;
}

.visual-label-wall {
    left: 471px;
    top: 335px;
}

.visual-label-farm {
    left: 481px;
    top: 27px;
}

.visual-label-hide {
    left: 280px;
    top: 73px;
}

.visual-label-storage {
    left: 138px;
    top: 144px;
}

.visual-label-market {
    left: 294px;
    top: 141px;
}

.visual-label-barracks {
    left: 512px;
    top: 270px;
}

.visual-label-stable {
    left: 103px;
    top: 218px;
}

.visual-label-garage {
    left: 402px;
    top: 358px;
}

.visual-label-church {
    left: 510px;
    top: 173px;
}

.visual-label-church_f {
    left: 510px;
    top: 173px;
}

.visual-label-watchtower {
    left: 559px;
    top: 220px;
}

.visual-label-snob {
    left: 204px;
    top: 88px;
}

.visual-label-smith {
    left: 240px;
    top: 278px;
}

/**** game/university.css ****/
.university-overview-widget {
    position: relative;
    overflow-y: auto;
}

.university-overview-widget .background {
    display: block;
    min-width: 100%;
    height: auto;
}

.university-overview-widget .ui {
    position: absolute;
    top: 10px;
    left: 10px;
    bottom: 10px;
    right: 10px;
    display: grid;
    grid-template: auto / auto;
    align-items: start;
    justify-items: start;
    align-content: space-between;
}

.university-overview-widget .level-display {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 4.7em;
    height: 2.33em;
    width: 2.33em;
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/stronghold/stronghold_max.png) no-repeat center center / contain;
    display: flex;
    align-items: center;
    justify-content: center;
}

.university-overview-widget .controls {
    background-color: rgba(244, 228, 188, 0.8);
    text-align: center;
    padding: 10px;
}

.university-overview-widget .controls h5 {
    margin: 0;
}

.university-overview-widget .controls ul {
    padding-left: 0;
    list-style: none;
}

.mobile-university-overview .university-image {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    margin: -10px -10px 0;
    width: calc(100% + 20px);
    height: auto;
}

#show_mobile_university, #show_university_actions {
    width: 99%;
    margin: 5px auto 15px;
}

#show_mobile_university img, #show_university_actions img {
    vertical-align: -3px;
}

#show_mobile_university h3, #show_university_actions h3, #show_mobile_university h4, #show_university_actions h4 {
    display: block;
    color: #fff;
    font-size: 14px !important;
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/m/box/header_left.png'), url('https://dsde.innogamescdn.com/asset/88651122/graphic/m/box/header_right.png'), url('https://dsde.innogamescdn.com/asset/88651122/graphic/m/box/header.png');
    background-position: left top, right top, center top;
    background-repeat: no-repeat, no-repeat, repeat-x;
    background-size: 10px 34px, 10px 34px, 1px 34px;
    height: 20px;
    overflow: hidden;
    padding: 5px 15px 5px 10px;
    margin: 0;
    clear: both;
}

#show_mobile_university div.widget_content, #show_university_actions div.widget_content {
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
}

#show_mobile_university .mobile-university-overview > div, #show_university_actions .mobile-university-overview > div {
    border: 1px solid #1b1806;
    border-bottom: none;
    background-color: #3d3221;
    font-weight: bold;
    font-size: 14px !important;
    overflow: hidden;
}

#show_mobile_university .mobile-university-overview > div, #show_university_actions .mobile-university-overview > div {
    padding: 10px;
}

#show_mobile_university .mobile-university-overview > div.content, #show_university_actions .mobile-university-overview > div.content {
    font-size: inherit !important;
    font-weight: inherit !important;
}

#show_mobile_university .mobile-university-overview > div > span, #show_university_actions .mobile-university-overview > div > span {
    font-size: inherit !important;
}

#show_mobile_university .mobile-university-overview > div > span a, #show_university_actions .mobile-university-overview > div > span a {
    font-size: inherit !important;
}

#show_mobile_university .mobile-university-overview > div:last-child, #show_university_actions .mobile-university-overview > div:last-child {
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom: 1px solid #1b1806;
}

#show_mobile_university .mobile-university-overview > div > span:first-child, #show_university_actions .mobile-university-overview > div > span:first-child {
    float: left;
}

.rtl #show_mobile_university .mobile-university-overview > div > span:first-child, .rtl #show_university_actions .mobile-university-overview > div > span:first-child {
    float: right;
}

#show_mobile_university .mobile-university-overview > div > span:last-child, #show_university_actions .mobile-university-overview > div > span:last-child {
    float: right;
}

.rtl #show_mobile_university .mobile-university-overview > div > span:last-child, .rtl #show_university_actions .mobile-university-overview > div > span:last-child {
    float: left;
}

#show_university_actions div.content > div {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
}

#show_university_actions div.content.actions {
    text-align: center;
}

#show_university_actions div.content.actions form {
    display: inline;
}

.university-report-image {
    width: 452px;
    height: 250px;
    object-fit: cover;
    object-position: 0 -5px;
}

.university-info {
    display: grid;
    grid-template: "img div" auto "img ranking" auto / 1fr 1fr;
    justify-items: center;
}

.university-info .university-ranking-image-mobile {
    max-width: calc(100% - 20px);
    margin: 10px;
    display: block;
    grid-area: img;
}

.university-info .level {
    width: auto;
    grid-area: ranking;
    text-align: center;
}

@media screen and (max-width: 769px) {
    .university-info {
        grid-template: "img" auto "div" auto "ranking" auto;
    }

    .university-info .university-ranking-image-mobile {
        margin: 0;
        max-width: none;
        width: 100%;
    }
}

.aoe-mobile-ranking h3, .aoe-mobile-ranking div {
    display: grid;
    grid-template: auto / 3fr 1fr 1fr;
}

.aoe-mobile-ranking span {
    text-align: center;
}

.aoe-mobile-ranking span:first-child {
    text-align: left;
}

.aoe-mobile-ranking span:last-child {
    text-align: right;
}

/**** game/item.css ****/
.item_details .identity {
    min-height: 56px;
    min-width: 260px;
    display: flex;
    justify-content: space-between;
}

.item_details .identity img {
    width: 60px;
    height: auto;
}

.rtl .item_details .identity {
    flex-direction: row-reverse;
}

.item_details .identity .texts {
    word-wrap: break-word;
    overflow: hidden;
}

.item_details .identity .texts .name {
    font-weight: bold;
    display: inline-block;
    font-size: 13px;
}

.item_details .identity .texts .type, .item_details .identity .texts .category {
    line-height: 15px;
    display: block;
}

/**** game/labeled_box.css ****/
.labeled-box {
    display: block;
    border: 1px solid #c000ff;
    padding: 0;
    background-color: #c000ff;
}

.labeled-box-inline {
    display: inline-block;
}

.labeled-box-label {
    display: block;
    padding: 2px 3px;
    background-color: #260830;
    min-height: 18px;
    font-weight: bold;
}

.labeled-box-content {
    display: block;
    padding: 2px 3px;
    margin: 1px;
    background-color: #501367;
}

/**** game/village_notes.css ****/
.village-note {
    background-color: #38311F;
    border: 1px solid #2C1D08;
    border-radius: 3px;
    margin-bottom: 2px;
}

.village-note-head {
    font-size: x-small;
    padding: 0 2px 1px 2px;
    border-bottom: 1px solid #372719;
}

.village-note-delete {
    display: block;
    width: 14px;
    height: 14px;
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/delete_14.png");
    cursor: pointer;
}

.village-note-body {
    padding: 2px 3px;
}

.village-notes-scroll-container {
    max-height: 550px;
    overflow: hidden;
}

.village-notes-container {
    padding: 1px 1px 0px 1px;
}

.note-toggle {
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/notes/closed_note.png");
    display: block;
    cursor: pointer;
    height: 20px;
    width: 20px;
    float: left;
    transition: transform ease-in-out 0.2s;
}

.note-toggle.note-opened {
    transform: rotate(90deg);
}

.note-content {
    max-height: 0;
    display: block;
    overflow: hidden;
    transition: max-height ease-in-out 0.2s;
    margin: 20px 0 0 0;
}

.note-content.note-opened {
    max-height: 500px;
}

.village-note-edit {
    display: block;
    width: 14px;
    height: 14px;
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/rename.png");
    background-repeat: no-repeat;
    background-position: 2px 1px;
    cursor: pointer;
}

.note-toggle-mobile {
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/plus.png");
    background-repeat: no-repeat;
    background-position: 2px 2px;
}

.note-toggle-mobile.note-opened {
    transform: rotate(0deg);
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/minus.png");
}

.note-row {
    display: none;
}

.note-row .note-content {
    margin: 0;
}

/**** game/borders.css ****/
.border-frame-gold-red {
    border-style: solid;
    border-width: 7px;
    border-color: rgb(121, 0, 0);
    border-image-slice: 7 7 7 7;
    border-image-source: url("https://dsde.innogamescdn.com/asset/88651122/graphic/border/frame-gold-red.png");
}

.border-frame-silver {
    border-style: solid;
    border-width: 3px;
    border-color: rgb(130, 130, 130);
    border-image-slice: 3 3 3 3;
    border-image-source: url("https://dsde.innogamescdn.com/asset/88651122/graphic/border/frame-silver.png");
}

.titled-border-top {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: flex-end;
    align-items: flex-end;
}

.titled-border-top .title {
    min-width: 50px;
    font-size: 14px;
    font-weight: bold;
    position: relative;
    padding: 2px 7px;
    top: 9px;
}

.titled-border-top .left-line, .titled-border-top .right-line {
    border-bottom: 1px solid #2A1F07;
    -ms-flex: 1;
    -webkit-flex: 1;
    flex: 1;
}

.titled-border-content {
    border: 1px solid #2A1F07;
    border-top: none;
    padding: 9px 0 0 0;
}

/**** game/chat.css ****/
#chat-wrapper {
    position: absolute;
    right: 0;
    bottom: 0;
    margin-bottom: 28px;
    z-index: 11901;
}

.chat-block {
    width: 240px;
    float: right;
    margin: 0 5px;
    height: 28px;
    position: relative;
}

.chat-mini-block {
    width: 130px;
    -webkit-transition: width 0.2s linear;
    -moz-transition: width 0.2s linear;
    -o-transition: width 0.2s linear;
    transition: width 0.2s linear;
}

.chat-mini-block .chat-header h4 {
    width: calc(100% - 40px);
}

.chat-new-block {
    -webkit-transition: none;
    -moz-transition: none;
    -o-transition: none;
    transition: none;
}

.chat-window {
    border: 1px solid #2A1F07;
    border-bottom: 0;
    -webkit-box-shadow: 1px 1px 1px rgba(0, 0, 0, .3);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, .3);
    position: absolute;
    bottom: 0;
    width: 100%;
}

.chat-header {
    background: #221f00 url(https://dsde.innogamescdn.com/asset/88651122/graphic/screen/tableheader_bg3.png) repeat-x;
    background-clip: padding-box;
    padding: 3px;
    box-sizing: border-box;
    height: 23px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom: 1px solid #2A1F07;
    cursor: pointer;
}

.chat-header h4 {
    font-size: 9pt;
    font-weight: bold;
    font-style: normal;
    margin: 0;
    display: inline-block;
    width: calc(100% - 75px);
}

.chat-header .chat-buttons {
    float: right;
}

.chat-button {
    height: 16px;
    width: 16px;
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/chat/sprite.png);
    display: block;
    float: right;
    margin-left: 2px;
}

.chat-button-minimize {
    background-position: 0 0;
}

.chat-button-maximize {
    background-position: -16px 0;
    display: none;
}

.chat-button-close {
    background-position: -32px 0;
}

.chat-button-other {
    background-position: -48px 0;
}

.chat-button-sound-off {
    background-position: -16px -16px;
    display: none;
}

.chat-button-sound-on {
    background-position: -32px -16px;
}

.chat-button-group-chat {
    background-position: -64px 0;
}

.chat-sound-enabled .chat-button-sound-off {
    display: inline-block;
}

.chat-sound-enabled .chat-button-sound-on {
    display: none;
}

.chat-body {
    height: 260px;
    background: #342108;
    overflow-y: auto;
}

.chat-body.lit {
    background: #3a2617;
}

.chat-body::-webkit-scrollbar {
    width: 4px;
    background: rgba(148, 75, 45, 0.25);
}

.chat-body::-webkit-scrollbar-thumb {
    background-color: #1e1a00;
    border-radius: 4px;
    cursor: pointer;
}

.chat-body::-webkit-scrollbar-thumb:active {
    background-color: #b43425;
    border-radius: 4px;
    cursor: pointer;
}

.chat-body::-webkit-scrollbar-track {
    border-radius: 5px;
}

.chat-footer {
    border-top: 1px solid #2A1F07;
    background: #3e2f1b;
    padding: 3px;
    max-height: 120px;
    position: relative;
    overflow-x: auto;
    overflow-y: auto;
}

.chat-input {
    height: 16px;
    width: 100%;
    box-sizing: border-box;
    display: block;
    outline: none;
    background-color: #3e2f1b;
    resize: none;
    padding: 0;
    margin: 0;
    border: none;
    font-size: 13px;
    font-family: Verdana, Arial, Verdana, sans-serif;
    overflow: hidden;
}

.chat-busy-indicator {
    position: absolute;
    right: 1px;
    top: 1px;
    z-index: 1;
    display: none;
}

.chat-busy .chat-busy-indicator {
    display: block;
}

.chat-smileys {
    position: absolute;
    right: 3px;
    bottom: 3px;
    z-index: 1;
    cursor: pointer;
}

.chat-busy .chat-smileys {
    display: none;
}

.chat-row {
    padding: 4px;
    clear: both;
    overflow: hidden;
    position: relative;
}

.chat-row .userimage {
    box-sizing: border-box;
    border: 1px solid #251503;
    max-width: 26px;
    max-height: 26px;
    float: left;
    margin-right: 4px;
    border-radius: 2px;
}

.chat-message {
    max-width: 90%;
    background: #3c321f;
    background: -webkit-linear-gradient(top, #3c321f 0%,#352f26 100%);
    background: -o-linear-gradient(top, #3c321f 0%,#352f26 100%);
    background: -ms-linear-gradient(top, #3c321f 0%,#352f26 100%);
    background: linear-gradient(to bottom, #3c321f 0%,#352f26 100%);
    border: 1px solid rgba(125, 91, 15, 0.7);
    padding: 4px 6px;
    float: right;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .15);
    box-shadow: 1px 1px 1px rgba(0, 0, 0, .15);
    word-wrap: break-word;
    font-size: 13px;
}

.has-avatar .chat-message {
    max-width: 184px;
}

.chat-report {
    display: none;
    position: absolute;
    right: 6px;
    top: 7px;
}

.reportable.chat-row:hover {
    background: #382217;
    -webkit-border-radius: 7px;
    -moz-border-radius: 7px;
    border-radius: 7px;
}

.reportable.chat-row:hover .chat-report {
    display: block;
}

.chat-message.chat-message-other {
    background: #501367;
    background: -webkit-linear-gradient(top, #e1efef 0%,#d3dfdf 100%);
    background: -o-linear-gradient(top, #e1efef 0%,#d3dfdf 100%);
    background: -ms-linear-gradient(top, #e1efef 0%,#d3dfdf 100%);
    background: linear-gradient(to bottom, #e1efef 0%,#d3dfdf 100%);
    float: left;
}

.chat-message * {
    white-space: normal;
}

.chat-author {
    font-size: 0;
}

.chat-time {
    text-align: center;
    color: gray;
    display: block;
    font-weight: bold;
    font-size: 10px;
}

.chat-system {
    text-align: center;
    color: gray;
    display: block;
    font-weight: bold;
    font-size: 11px;
}

.chat-author-line {
    color: gray;
    display: block;
    font-size: 9px;
    margin: 0 0 3px 32px;
}

.chat-typing-indicator {
    width: 16px;
    height: 16px;
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/chat/sprite.png) -48px -16px;
    vertical-align: -4px;
    display: none;
    position: relative;
}

.is-typing .chat-typing-indicator {
    display: inline-block;
    animation: is-typing 1.2s infinite;
    -webkit-animation: is-typing 1.2s infinite;
}

.chat-title .constrained {
    display: inline-block;
    vertical-align: -3px;
    max-width: 133px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.is-typing .chat-title a {
    max-width: 120px;
}

.blocked .chat-message {
    font-size: 0.9em;
    font-style: italic;
}

.blocked .chat-message, .blocked .userimage, .blocked .chat-author-line {
    opacity: 0.3;
}

.blocked .chat-report {
    display: none !important;
}

@keyframes is-typing {
    0% {
        left: 0;
    }

    50% {
        left: 0;
    }

    90% {
        left: 10px;
    }

    to {
        left: 10px;
    }
}

@-webkit-keyframes is-typing {
    0% {
        left: 0;
    }

    50% {
        left: 0;
    }

    90% {
        left: 10px;
    }

    to {
        left: 10px;
    }
}

.chat-new-message-notification {
    position: absolute;
    background-color: #3c321f;
    top: 23px;
    left: 0;
    border-bottom: 1px solid rgba(125, 81, 15, 0.8);
    padding: 3px;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    display: none;
}

.chat-window-minimized .chat-button-minimize, .chat-window-minimized .chat-button-other, .chat-window-minimized .chat-button-sound-off, .chat-window-minimized .chat-button-sound-on, .chat-window-minimized .chat-button-group-chat {
    display: none;
}

.chat-window-minimized .chat-button-maximize {
    display: block;
}

.chat-window-minimized .chat-body, .chat-window-minimized .chat-footer {
    display: none;
}

.chat-window-minimized .chat-menu {
    display: none;
}

.chat-title input {
    width: calc(100% - 20px);
    padding-right: 20px
}

.chat-title .confirm-rename {
    width: 18px;
    height: 18px;
    position: absolute;
    right: 74px;
    top: 3px;
}

.chat-contacts .chat-body {
    background: #342519;
}

.chat-contact-group {
    padding: 2px 4px 0;
}

.chat-contact-group-header {
    cursor: pointer;
    margin-bottom: 2px;
}

.chat-contact-group-header span:before {
    content: " ";
    position: relative;
    display: inline-block;
    margin: 2px 3px 2px 0;
    width: 6px;
    height: 6px;
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/chat/sprite.png);
    background-position: 0 -16px;
}

.chat-contact-group-open span:before {
    background-position: -6px -16px;
}

.chat-contact-group-contacts {
    display: none;
}

.chat-contact-group-open .chat-contact-group-contacts {
    display: block;
}

.chat-contact:first-child {
    border-top: 1px solid #342108;
}

.chat-contact {
    padding: 2px 5px 1px 16px;
    border-bottom: 1px solid #342108;
    display: block;
}

.chat-contact-name {
    display: inline-block;
    max-width: 165px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.chat-contact-count {
    display: inline-block;
    overflow: auto;
}

.chat-status:before {
    display: inline-block;
    overflow: auto;
    position: relative;
    margin-right: 4px;
    content: url(https://dsde.innogamescdn.com/asset/88651122/graphic/dots/grey.png);
}

.chat-header .chat-status:before {
    display: none;
}

.chat-status-online:before {
    content: url(https://dsde.innogamescdn.com/asset/88651122/graphic/dots/green.png);
    display: inline !important;
}

.chat-status-offline:before {
    content: url(https://dsde.innogamescdn.com/asset/88651122/graphic/dots/red.png);
    display: inline !important;
}

.chat-contacts.chat-window-minimized .chat-button-close {
    display: none;
}

.chat-no-contacts {
    padding: 85px 10px 10px 10px;
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/chat/no_contacts.png') no-repeat center 20px;
}

.chat-open-buffer {
    height: 300px;
    display: none;
}

.chat-menu {
    position: absolute;
    top: 23px;
    right: 25px;
    border: 1px solid rgba(125, 81, 15, 0.8);
    border-top: 0;
    background-color: #501367;
}

.chat-menu-option {
    display: block;
    padding: 2px 5px;
    border-bottom: 1px solid rgba(125, 81, 15, 0.3);
}

.chat-menu-option:last-child {
    border: 0;
}

.chat-disconnected .chat-window.chat-conversation {
    display: none;
}

.chat-disconnected .chat-window.chat-contacts .chat-body, .chat-disconnected .chat-window.chat-contacts .chat-footer {
    display: none;
}

.chat-disconnected .chat-window.chat-contacts .chat-button {
    display: none;
}

.chat-disconnected .chat-block {
    width: 110px;
}

.chat-disconnected .chat-window.chat-contacts .chat-title {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/error.png) no-repeat;
    padding-left: 20px;
    line-height: 16px;
}

.chat-popover {
    border: 1px solid #2A1F07;
    border-radius: 3px;
    -webkit-box-shadow: 1px 1px 1px rgba(0, 0, 0, .3);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .1), 0 1px 10px rgba(0, 0, 0, .35);
    position: absolute;
    bottom: 30px;
    right: 10px;
    background: #3e2f1b;
    max-width: 150px;
}

.chat-popover-smileys {
    padding: 5px;
    font-size: 17px;
    width: 134px;
}

.chat-group-player {
    display: block;
}

#popup_box_create_group_chat .btn {
    margin: 0 auto;
    display: block
}

/**** game/overrides.css ****/
.no-padding {
    padding: 0;
}

.no-margin {
    margin: 0;
}

.mds-only {
    display: none;
}

.mds .ds-only {
    display: block;
}

.small-text {
    font-size: 0.95em;
}

/**** game/event_end_popup.css ****/
#popup_box_api > .popup_box_content {
    overflow-x: hidden;
}

.event-popup {
    width: 540px;
    text-align: center;
    min-height: 720px;
    background-repeat: no-repeat;
    background-size: cover;
}

.event-popup .event-popup-header {
    width: 380px;
    height: 120px;
    display: block;
    margin: 0 auto;
    padding-top: 20px;
    background-repeat: no-repeat;
    background-position-y: bottom;
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/events/end_popup/victory.png');
}

.event-popup .event-popup-header h1 {
    text-align: center;
    color: #5c4631;
    line-height: 126px;
}

.event-popup .ranking-box {
    width: 420px;
    height: 150px;
    display: block;
    margin: 10px auto 0 auto;
    padding-top: 0;
    position: relative;
}

.ranking-box-bg {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    opacity: 80%;
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/events/end_popup/box.png');
}

.ranking-box .ranking-icon {
    float: left;
    margin: 2px 0 0 10px;
    position: relative;
}

.ranking-box .ranking-icon img {
    width: 100px;
    height: 100px;
}

.ranking-box > header {
    text-align: center;
    color: #FFFFFF;
    font-size: 14px;
    line-height: 34px;
    position: relative;
}

.ranking-box > p {
    width: 305px;
    text-align: center;
    float: left;
    font-size: 16px;
    position: relative;
    margin: 0.67em 0;
}

.ranking-box > h1 {
    width: 305px;
    text-align: center;
    float: left;
    font-size: 32px;
    position: relative;
    margin: 0;
}

.rank-color-good {
    color: #2e1a06;
}

.rank-color-great {
    color: #676767;
}

.rank-color-excellent {
    color: #b6b40f;
}

.rank-color-exceptional {
    color: #6d04a3;
}

/**** game/events/event_base.css ****/
.bordered-box {
    margin-bottom: 0;
}

.event-help {
    float: right;
    top: 0;
    right: 0;
    margin-bottom: 0;
}

.rtl .event-help {
    float: left;
}

.event-logo {
    display: inline-block;
    width: 100px;
    height: 100px;
    background-size: 100% 100%;
    float: left;
    margin: 0 8px 8px 0;
}

.event-logo-help {
    width: 120px;
    height: 120px;
    float: right;
}

.rtl .event-logo-help {
    float: left;
}

.rtl .event-logo {
    float: right;
    margin-left: 5px;
}

.event-title {
    margin-top: 0;
}

.rtl .event-title {
    float: right;
}

.desktop .event-shop {
    width: 100%;
}

.event-shop {
    float: right;
    width: 23.5%;
    text-align: center;
    margin-left: 12px;
}

#event-top-section-left {
    max-width: 70%;
    vertical-align: top;
}

#event-top-section-right {
    width: 20%;
    vertical-align: bottom;
    position: relative;
}

.energy-shop-section .offer-image {
    border: none;
}

.event-status-bar {
    clear: left;
    overflow: hidden;
}

.event-status {
    width: 47%;
    margin: 0 1%;
    height: 67px;
    float: left;
}

.event-status:first-child {
    margin-left: 0;
}

.event-status:last-child {
    margin-right: 0;
}

.event-status-content {
    text-align: center;
}

.event-status-bar-content {
    width: 80%;
    margin: 0 auto;
}

.rewarded-rankings-container {
    padding: 0;
}

.rewarded-ranking-widget {
    margin: 5px 0 5px;
}

.mds .event-help {
    margin: 0;
}

.mds .event-option-footer p {
    margin-bottom: 20px;
}

#mobileContent {
    margin-top: 0;
}

.mds .event-header-container {
    position: relative;
}

.event-top-section {
    display: flex;
    flex-wrap: nowrap;
    align-items: stretch;
    padding-bottom: 10px;
}

.event-top-section-middle {
    padding: 0 10px;
}

.event-top-section-right {
    align-items: end;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

/**** plugins/jquery.tooltip.css ****/
.tooltip-style {
    position: absolute;
    max-width: 300px;
    z-index: 30000;
    border: 1px solid #280100;
    padding: 5px;
    background: #2a242a;
    background: -moz-linear-gradient(top, #2b282b 0%, #291729 100%);
    background: -webkit-linear-gradient(top, #2b282b 0%, #291729 100%);
    background: -o-linear-gradient(top, #2b282b 0%, #291729 100%);
    background: -ms-linear-gradient(top, #2b282b 0%, #291729 100%);
    background: linear-gradient(to bottom, #2b282b 0%, #291729 100%);
    -webkit-box-shadow: 1px 1px 2px 0px rgba(50, 30, 20, 0.35);
    box-shadow: 1px 1px 2px 0px rgba(50, 30, 20, 0.35);
    -webkit-border-radius: 4px;
    border-radius: 4px;
}

.tooltip-style h3, .tooltip-style div {
    margin: 0;
}

.tooltip-style h3 {
    font-size: 12px;
    padding-bottom: 2px;
}

.tooltip-style.command-details {
    max-width: 700px;
}

/**** game/quest_popup.css ****/
.quest-popup-container {
    width: 800px;
    overflow-x: hidden;
}

.quest-popup-header {
    height: 130px;
    position: relative;
    background-size: 100% 90px;
    background-repeat: no-repeat;
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/quests_new/top_banner.png');
}

.quest-popup-navbar {
    position: absolute;
    height: 52px;
    width: 100%;
    bottom: 0;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/quests_new/nav_banner.png');
}

.quest-popup-navbar > ul {
    margin: 0 auto;
    padding: 4px;
    list-style-type: none;
    display: flex;
    justify-content: center;
    height: 42px;
    text-align: center;
}

.quest-popup-navbar > ul > li {
    display: inline-block;
    white-space: nowrap;
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/topbutton-right.png) scroll right top no-repeat;
    min-width: 150px;
    height: 43px;
    line-height: 43px;
    color: white;
    margin: 0 5px;
}

.quest-popup-navbar > ul > li:hover, .quest-popup-navbar > ul > li.selected-tab, li.selected-tab {
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/topbutton-right.png) scroll right bottom no-repeat;
}

.quest-popup-navbar > ul > li > a {
    color: white;
    display: block;
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/topbutton-left.png) scroll left top no-repeat;
    position: relative;
    left: -2px;
    font-size: 10px;
    cursor: pointer;
}

.quest-popup-navbar > ul > li:hover > a, .quest-popup-navbar > ul > li.selected-tab > a, li.selected-tab > a {
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/topbutton-left.png) scroll left bottom no-repeat;
}

.quest-popup-body {
    min-height: 450px;
    width: 100%;
}

.quest-popup-leftbar {
    width: 30%;
    height: 550px;
    overflow-y: scroll;
    float: left;
}

.quest-popup-content {
    width: 70%;
    height: 550px;
    display: table-cell;
    position: relative;
    visibility: visible;
    float: left;
}

.quest-popup-content.invisible {
    visibility: hidden;
}

.quest-popup-content.full-width {
    width: 100%;
}

.questline-list {
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.questline-list > li:last-child {
    margin-bottom: 0;
}

.questline-list > li {
    width: 100%;
    font-size: 14pt;
    text-align: center;
    background: #100d09;
    color: floralwhite;
    margin-bottom: 2px;
}

.questline-header {
    position: relative;
    transition: all .2s;
    display: block;
    color: white;
    text-shadow: 0 0 2px #333333;
    background-repeat: no-repeat;
    padding-bottom: 100px;
    background-size: cover;
    background-position: center;
    filter: sepia(1);
}

.questline-header.header-opened {
    filter: sepia(0);
}

.questline-title {
    position: absolute;
    color: white;
    text-shadow: 0 0 2px #333333;
    font-size: 14pt;
    font-weight: bold;
    text-align: center;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
}

ul.quest-title {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

header.quest-title {
    display: block;
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/quests_new/quest_banner.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 1em;
    color: white;
    position: relative;
}

header.quest-title p {
    font-size: 11pt;
    margin-bottom: .5em;
}

header.quest-title h1 {
    margin-bottom: .3em;
}

header.quest-title .reward {
    position: absolute;
    right: 1em;
    top: 2px;
    width: 70px;
    height: 70px;
}

.rtl header.quest-title .reward {
    right: auto;
    left: 1em;
}

.quest-goal-completed {
    position: absolute;
    right: 0;
    bottom: 0;
}

.rtl .quest-goal-completed {
    right: auto;
    left: 0;
}

header.quest-title .reward img {
    width: 58px;
    margin: 6px;
}

.quests.opened {
    height: auto !important;
    display: block;
}

.quests {
    list-style-type: none;
    padding: 0;
    height: 0 !important;
    display: none;
    background: #2a1f0a;
}

ul.quests > li.inactive {
    background-color: #1a180f;
}

ul.quests > li.completed {
    padding-right: 40px;
    background: #a9d0a3;
    cursor: not-allowed;
}

ul.quests > li.completed > a:hover {
    color: #1e1a00;
}

ul.quests > li.completed:before {
    position: absolute;
    content: " ";
    right: 6px;
    top: 10px;
    width: 34px;
    height: 28px;
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/quests/completed.png);
    pointer-events: none;
}

ul.quests > li.inactive > a {
    color: #ddd;
}

ul.quests > li.inactive > a.selected {
    color: #1e1a00;
}

ul.quests > li {
    border-bottom: 1px solid #1e1a00;
    position: relative;
}

ul.quests > li:last-child:not(:first-child) {
    border-bottom: none;
}

ul.quests > li > a {
    font-size: 12px;
    width: 100%;
    display: block;
    padding: 10px 0;
    cursor: pointer;
}

.quest-body {
    padding: .7em;
    font-size: 12px;
}

.quest-paladin {
    position: absolute;
    left: 2em;
    bottom: 0em;
    width: 120px;
    height: 230px;
    background-size: cover;
}

.quest-description {
    font-style: italic;
}

.quest-progress-bar {
    float: right;
    width: 65%;
    padding-top: 2em;
    text-align: center;
}

.tab {
    display: none;
    width: 100%;
}

.tab.active-tab {
    display: block;
}

.goal {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    padding: 5px;
}

.goal-left {
    width: 320px;
    padding-right: 10px;
}

.goal-image {
    width: 80px;
    height: 60px;
    background-size: contain;
    background-repeat: no-repeat;
}

.progress-bar {
    padding: 0;
    overflow: hidden;
}

.progress-bar .label {
    line-height: 20px;
}

footer.quest-footer {
    width: 100%;
    height: 237px;
    bottom: 0;
}

.noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.reward-descriptions {
    padding: 5px;
    background-color: #501367;
}

.reward-tab-content p {
    margin: 5px;
    padding: 2px;
}

.reward-tab-content {
    background: #2a1f0a;
}

.reward-tab-content table {
    width: 100%;
}

.reward-tab-content th {
    width: 20%;
    height: 25px;
    text-align: center;
}

.reward-tab-content td {
    height: 35px;
    text-align: center;
}

.reward-tab-content .building-info {
    line-height: 35px;
    text-align: left;
    padding-left: 10px;
}

.quest-popup-navbar .badge {
    color: #f6b628;
}

.reward-tab-content .small {
    font-size: xx-small;
}

.reward-system-content-mobile .building-name {
    padding-left: 10px;
}

.quests-header-mobile {
    overflow: hidden;
}

.quests-header-menu {
    overflow: hidden;
    width: 100%;
    height: 43px;
    padding: 4px;
    background-repeat: no-repeat;
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/topbar-main.png);
    position: relative;
}

.quests-navbar-mobile {
    width: auto;
    left: 0;
    white-space: nowrap;
    text-align: left;
    position: absolute;
}

.quests-navbar-mobile > ul {
    margin: 0 auto;
    padding: 0 3px;
    list-style-type: none;
    display: inline-block;
    text-align: center;
}

.quests-navbar-mobile > ul > li > a {
    color: white;
    display: block;
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/topbutton-left.png) scroll left top no-repeat;
    position: relative;
    left: -2px;
    font-size: 10px;
}

.quests-navbar-mobile > ul > li:hover > a, .quests-navbar-mobile > ul > li.selected-tab > a {
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/topbutton-left.png) scroll left bottom no-repeat;
}

.quests-navbar-mobile > ul > li {
    display: inline-block;
    padding: 0 !important;
    border: none !important;
    white-space: nowrap;
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/topbutton-right.png) scroll right top no-repeat;
    min-width: 150px;
    height: 43px;
    line-height: 43px;
    color: white;
    margin: 0 5px;
}

.quests-navbar-mobile > ul > li:hover, .quests-navbar-mobile > ul > li.selected-tab, li.selected-tab {
    background: transparent url(https://dsde.innogamescdn.com/asset/88651122/graphic/index/topbutton-right.png) scroll right bottom no-repeat;
}

.quest-title-mobile {
    text-align: left;
    font-size: 14pt;
    font-weight: lighter;
}

.rtl .quest-title-mobile {
    text-align: right;
}

.quest-content-mobile {
    padding: 8px 0 0;
}

.quest-foot-mobile {
    display: flex;
    display: -moz-flex;
    display: -webkit-flex;
    width: 100%;
    height: 120px;
    position: relative;
}

.quest-mobile-rewards {
    display: flex;
    display: -moz-flex;
    display: -webkit-flex;
}

.questline-reward-mobile {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    width: 80px;
    height: 80px;
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/quests_new/reward_circle.png');
    background-size: 80px;
}

.questline-reward-mobile img {
    width: 60px;
    margin: 10px;
}

.quest-mobile-rewards-container > span {
    color: #000 !important;
    text-align: start !important;
    margin: 10px 0 0 0 !important;
}

.quest-mobile-paladin {
    width: 120px;
    height: 120px;
    margin-left: -8px;
    background-size: cover;
}

.quest-mobile-rewards-container {
    min-height: 20px;
    min-width: 150px;
    color: #000;
    flex: 1;
}

.quest-popup-container .hidden {
    display: none !important;
}

.quest-popup-leftbar::-webkit-scrollbar, .quest-popup-container::-webkit-scrollbar, .popup_box_content::-webkit-scrollbar {
    width: 4px;
    position: fixed;
}

.quest-popup-leftbar::-webkit-scrollbar-track, .quest-popup-container::-webkit-scrollbar-track, .popup_box_content::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 4px #2a1f0a;
    position: fixed;
}

.quest-popup-leftbar::-webkit-scrollbar-thumb, .quest-popup-container::-webkit-scrollbar-thumb, .popup_box_content::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 4px #1e1a00;
    position: fixed;
}

.quest-goals-container {
    width: 400px;
    float: right;
    flex-direction: column;
}

.quest-goals {
    width: 100%;
    flex-direction: column;
}

.quest-goal {
    display: flex;
    flex-direction: row;
}

.quest-reward-summary {
    display: flex;
    align-items: center;
    margin-left: 5px;
    border: 1px solid #231000;
    padding: 3px;
}

.quest-reward-image {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/quests_new/reward_circle.png);
    background-repeat: no-repeat;
    background-size: contain;
    width: 60px;
    height: 60px;
}

.quest-reward-text {
    height: 100%;
    align-self: stretch;
    flex: 1;
    text-align: center;
}

.quest-mobile-rewards > .quest-reward-text {
    align-self: center;
    padding-left: 1em;
    text-align: left;
}

.quest-reward-image img {
    width: 40px;
    margin: 10px;
}

.quest-reward-image img.small-image {
    width: 18px;
    margin: 21px;
}

.quest-reward-title {
    font-weight: bold;
    font-size: 12pt;
    margin: 5px 0;
}

.complete-btn-container {
    width: 314px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/**** plugins/zebra_datepicker.css ****/
.Zebra_DatePicker {
    background: #fff;
    border: 1px solid #aaa;
    border-radius: 4px;
    box-shadow: 0 0 10px #ccc;
    color: #222;
    font: 13px Tahoma,Arial,Helvetica,sans-serif;
    padding: 5px;
    position: absolute;
    display: table;
    *width: 255px;
    z-index: 1200;
}

.Zebra_DatePicker *, .Zebra_DatePicker :after, .Zebra_DatePicker :before {
    box-sizing: content-box!important;
}

.Zebra_DatePicker * {
    padding: 0;
}

.Zebra_DatePicker table {
    border-collapse: collapse;
    border-radius: 4px;
    border-spacing: 0;
    width: 100%;
}

.Zebra_DatePicker td, .Zebra_DatePicker th {
    border-radius: 4px;
    padding: 5px;
    cursor: pointer;
    text-align: center;
    min-width: 25px;
    width: 25px;
}

.Zebra_DatePicker .dp_body .dp_not_in_month {
    color: #666;
}

.Zebra_DatePicker .dp_body .dp_time_controls_condensed td {
    width: 25%;
}

.Zebra_DatePicker .dp_body .dp_current {
    color: #3a87ad;
}

.Zebra_DatePicker .dp_body .dp_selected {
    background: #337ab7;
    color: #fff;
}

.Zebra_DatePicker .dp_body .dp_disabled {
    color: #bbb;
    cursor: text;
}

.Zebra_DatePicker .dp_body .dp_disabled.dp_current {
    color: #b4d5e6;
}

.Zebra_DatePicker .dp_body .dp_hover {
    background: #dedede;
}

.Zebra_DatePicker .dp_body .dp_hover.dp_time_control {
    background-color: #dedede;
}

.Zebra_DatePicker .dp_monthpicker td, .Zebra_DatePicker .dp_timepicker td, .Zebra_DatePicker .dp_yearpicker td {
    width: 33.3333%;
}

.Zebra_DatePicker .dp_timepicker .dp_disabled {
    border: none;
    color: #222;
    font-size: 26px;
    font-weight: 700;
}

.Zebra_DatePicker .dp_time_separator div {
    position: relative;
}

.Zebra_DatePicker .dp_time_separator div:after {
    content: ":";
    color: #222;
    font-size: 20px;
    left: 100%;
    margin-left: 2px;
    margin-top: -13px;
    position: absolute;
    top: 50%;
    z-index: 1;
}

.Zebra_DatePicker .dp_header {
    margin-bottom: 5px;
}

@supports (-ms-ime-align:auto) {
    .Zebra_DatePicker .dp_header {
        font-family: 'Segoe UI Symbol',Tahoma,Arial,Helvetica,sans-serif;
    }
}

.Zebra_DatePicker .dp_footer {
    margin-top: 5px;
}

.Zebra_DatePicker .dp_footer .dp_icon {
    width: 50%;
}

.Zebra_DatePicker .dp_actions td {
    border-radius: 4px;
}

.Zebra_DatePicker .dp_actions .dp_caption {
    font-weight: 700;
    width: 100%;
}

.Zebra_DatePicker .dp_actions .dp_next, .Zebra_DatePicker .dp_actions .dp_previous {
    *padding: 0 10px;
}

.Zebra_DatePicker .dp_actions .dp_hover {
    background-color: #dedede;
}

.Zebra_DatePicker .dp_daypicker th {
    cursor: text;
    font-weight: 700;
}

.Zebra_DatePicker.dp_hidden {
    display: none;
}

.Zebra_DatePicker .dp_icon {
    height: 16px;
    background-image: url('https://dsde.innogamescdn.com/asset/88651122/graphic/zebra_icons.png');
    background-repeat: no-repeat;
    text-indent: -9999px;
    *text-indent: 0;
}

.Zebra_DatePicker .dp_icon.dp_confirm {
    background-position: center -123px;
}

.Zebra_DatePicker .dp_icon.dp_view_toggler {
    background-position: center -91px;
}

.Zebra_DatePicker .dp_icon.dp_view_toggler.dp_calendar {
    background-position: center -59px;
}

button.Zebra_DatePicker_Icon {
    background: url('https://dsde.innogamescdn.com/asset/88651122/graphic/zebra_icons.png') center top no-repeat;
    border: none;
    cursor: pointer;
    display: block;
    height: 16px;
    line-height: 0;
    padding: 0;
    position: absolute;
    text-indent: -9000px;
    width: 16px;
}

button.Zebra_DatePicker_Icon.Zebra_DatePicker_Icon_Disabled {
    background-position: center -32px;
    cursor: default;
}

/**** game/searchbar.css ****/
.search_result .post_header {
    background-color: #383023;
    border-bottom: 1px solid #280100;
}

.searchbar {
    overflow: auto;
    width: auto;
}

.searchbar a, .searchbar span {
    float: left;
    height: 20px;
    width: 20px;
    border: 1px solid rgb(129, 66, 2);
    border-right-width: 0;
    background-color: #F5F3F0;
    background-repeat: no-repeat;
    background-position: center;
}

.searchbar a {
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/icons/settings.png");
}

.mds .searchbar a, .mds .searchbar span {
    height: 26px;
    width: 26px;
}

.searchbar input[type=search] {
    box-sizing: content-box;
    -webkit-appearance: none;
    float: left;
    height: 18px;
    width: 150px;
    padding: 1px 6px 1px 6px;
    border: 1px solid rgb(129, 66, 2);
    border-left-width: 0px;
    border-right-width: 0px;
    background-color: white;
}

.mds .searchbar input[type=search] {
    height: 24px;
    width: 200px;
}

.searchbar input[type=submit] {
    float: left;
    height: 22px;
    width: 28px;
    border: 1px solid rgb(129, 66, 2);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: rgb(234, 226, 208);
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/search.png");
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/search.png"), -webkit-linear-gradient(left top, rgb(243, 236, 218), rgb(210, 202, 184));
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/search.png"), -o-linear-gradient(left top, rgb(243, 236, 218), rgb(210, 202, 184));
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/search.png"), -moz-linear-gradient(left top, rgb(243, 236, 218), rgb(210, 202, 184));
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/search.png"), -ms-linear-gradient(left top, rgb(243, 236, 218), rgb(210, 202, 184));
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/search.png"), linear-gradient(to bottom right, rgb(243, 236, 218), rgb(210, 202, 184));
    cursor: pointer;
}

.searchbar input[type=submit]:hover {
    background-color: rgb(245, 242, 235);
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/search.png");
}

.mds .searchbar input[type=submit] {
    height: 28px;
    width: 36px;
    border: 1px solid rgb(129, 66, 2);
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    background-color: #c41212;
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/search.png"), -webkit-linear-gradient(top, #c41212, #7c0a0a);
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/search.png"), -o-linear-gradient(top, #c41212, #7c0a0a);
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/search.png"), -moz-linear-gradient(top, #c41212, #7c0a0a);
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/search.png"), -ms-linear-gradient(top, #c41212, #7c0a0a);
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/search.png"), linear-gradient(top, #c41212, #7c0a0a);
}

.mds .searchbar input[type=submit]:hover {
    background-color: #f43b12;
    background-image: url("https://dsde.innogamescdn.com/asset/88651122/graphic/search.png");
}

/**** game/gift_calendar.css ****/
@font-face {
    font-family: 'Vinque';
    src: url(https://dsde.innogamescdn.com/asset/88651122/fonts/Vinque.eot?#iefix) format('embedded-opentype'), url(https://dsde.innogamescdn.com/asset/88651122/fonts/Vinque.ttf) format('truetype');
}

#gift-calendar-dialog-icon {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/gift_calendar/icon.png);
}

#calendar_field_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 605px;
    flex: 1;
    overflow: hidden;
}

.rtl #calendar_field_container {
    flex-direction: row-reverse;
}

.gift-calendar-field {
    border: 1px solid;
    margin: 1px 1px 0 0;
    width: 118px;
    height: 118px;
    display: flex;
    justify-content: end;
    align-items: start;
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/gift_calendar/door.png);
    background-size: cover;
    position: relative;
    transition: all 0.2s linear;
}

.gift-calendar-field:hover {
    background-color: rgba(221, 0, 0, 0.4);
}

.field-opened {
    background-color: rgba(14, 122, 30, 0.2);
    cursor: pointer;
}

.field-unlocked {
    cursor: pointer;
}

.field-locked {
    cursor: not-allowed;
    filter: grayscale(0.8);
}

.field-opened:hover {
    background-color: rgba(14, 122, 30, 0.4);
}

.gift-calendar-field.active-day {
    box-shadow: inset 0 0 8px #dd0000;
    animation: border-pulse .4s infinite;
    animation-direction: alternate;
    cursor: pointer;
}

@keyframes border-pulse {
    0% {
        box-shadow: inset 0 0 8px #dd0000;
    }

    100% {
        box-shadow: inset 0 0 8px #0e7a1e;
    }
}

.gift-calendar-position {
    position: absolute;
    top: 2px;
    right: 2px;
    width: 30px;
    height: 30px;
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/gift_calendar/day_sprites.png);
    background-size: 2000%;
}

.gift-calendar-timer-container {
    text-align: center;
    margin: 12px 0;
    font-size: 18px;
    font-weight: bold;
}

.gift-calendar-timer, .timer-days {
    color: forestgreen;
}

.gift-calendar-reward-container {
    min-width: 400px;
    display: flex;
    flex-direction: column;
}

.gift-calendar-reward {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 1em;
}

.gift-calendar-reward > img {
    align-self: center;
}

.gift-calendar-reward-text {
    text-align: center;
    margin-bottom: 1em
}

.gift-calendar-metadata {
    display: flex;
    justify-content: space-between;
}

.gift-calendar-metadata-speaker {
    margin-right: 12px;
}

.rtl .gift-calendar-metadata-speaker {
    margin-left: 12px;
}

.gift-calendar-metadata-speaker > img {
    width: 80px;
    height: 80px;
    border-radius: 4px;
    border: 2px solid rgba(125, 81, 15, 0.6);
}

.el-hidden {
    display: none;
}

.gift-calendar-door-animation {
    width: 118px;
    height: 118px;
    z-index: 11;
}

.banner-left, .banner-right {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/gift_calendar/side_banner.png);
    width: 120px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.banner-right {
    transform: scaleX(-1);
}

.main-banner {
    background-image: url(https://dsde.innogamescdn.com/asset/88651122/graphic/gift_calendar/main_banner.png);
    background-repeat: no-repeat;
    position: absolute;
    width: 100%;
    height: 80px;
    background-size: cover;
    top: -43px;
    overflow: visible;
    line-height: 38px;
    text-align: center;
    font-size: 20px;
    color: #372719;
    user-select: none;
    text-shadow: 1px 1px 1px #000;
}

.gift-calendar-tile-img {
    position: absolute;
    left: -1px;
    top: -1px;
    width: 120px;
    height: 120px;
    z-index: 10;
}

.gift-calendar-finished .gift-calendar-tile-img {
    width: 121px;
    height: 121px;
}

.gift-calendar-main-container {
    display: flex;
}

.gift-calendar-report {
    width: 60px;
    height: 60px;
}

.gift-calendar-report-icon {
    margin-left: 12px
}

.gift-calendar-footer {
    width: 100%;
    margin: 1em 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    visibility: hidden;
}

.gift-calendar-footer.gift-calendar-finished {
    visibility: visible;
}

.btn-larger.btn-sign, .btn-larger.btn-download {
    padding-left: 25px !important;
}

.btn-sign {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/edit.png) no-repeat 5px center/16px, linear-gradient(to bottom, #332e30 0%, #2c2621 22%, #241c12 30%, #241c12 100%);
}

.btn-sign.btn[disabled] {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/edit.png) no-repeat 5px center/16px, linear-gradient(to bottom, #646464 0%, #4d4c4c 100%) !important;
}

.btn-sign:hover {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/edit.png) no-repeat 5px center/16px, linear-gradient(to bottom, #3c2d23 0%, #322b1d 22%, #352b1a 30%, #241c17 100%);
}

.btn-download {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/download.png) no-repeat 5px center/16px, linear-gradient(to bottom, #332e30 0%, #2c2621 22%, #241c12 30%, #241c12 100%);
}

.btn-download.btn[disabled] {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/download.png) no-repeat 5px center/16px, linear-gradient(to bottom, #646464 0%, #4d4c4c 100%) !important;
}

.btn-download:hover {
    background: url(https://dsde.innogamescdn.com/asset/88651122/graphic/download.png) no-repeat 5px center/16px, linear-gradient(to bottom, #3c2d23 0%, #322b1d 22%, #352b1a 30%, #241c17 100%);
}

.btn-sign, .btn-download {
    user-select: none;
}

.show-finished-image > .gift-calendar-field, .show-template > .calendar-preview-personal, .show-personal > .calendar-preview-template {
    display: none;
}

.calendar-preview {
    width: 100%;
    transition: all 0.3s;
}

.calendar-font {
    font-family: Vinque;
}

.mds .gift-calendar-timer-container {
    font-size: 12px;
    font-weight: normal;
}

.mds .calendar-field-mobile {
    position: relative;
}

.mds .fields-sheet {
    display: flex;
}

.mds .gift-calendar-reward-container {
    min-width: auto;
}

.mds .popup_box_container {
    width: 96%;
    left: 2%;
}

.mds #calendar_field_container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

.rtl.mds #calendar_field_container {
    flex-direction: row-reverse;
}

.mds .gift-calendar-field {
    flex-basis: 20%;
    padding-bottom: 20%;
    height: 0;
    margin: 0;
    border: none;
    position: relative;
}

.mds .gift-calendar-door-animation {
    width: 100%;
    height: 100%;
    position: absolute;
}

.mds .gift-calendar-tile-img {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
}

.mds .gift-calendar-field-single {
    display: flex;
    justify-content: center;
}

.mds .gift-calendar-field-single .gift-calendar-field {
    flex-basis: 120px;
    padding-bottom: 120px;
}

.mds .gift-calendar-popup .popup_box_content {
    padding: 2em 0;
}

.flex-break {
    flex-basis: 100%;
    height: 1em;
}

.force-cache-bust-2 {
    width: 1px;
}

/**** game/cosmetics.css ****/
.cosmetic-name {
    font-weight: bold;
}

.cosmetic-name-pink {
    color: #eb72f2;
}

.cosmetic-name-green {
    color: #51af4f;
}

.cosmetic-name-turquoise {
    color: #5ad8d3;
}

.cosmetic-name-animated {
    color: transparent;
    background-size: auto 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: cosmetic-animation 7s linear infinite;
    display: inline-block;
}

@keyframes cosmetic-animation {
    0% {
        background-position-y: -10%;
    }

    25% {
        background-position-y: 110%;
    }

    to {
        background-position-y: 110%;
    }
}

.cosmetic-name-animated.cosmetic-name-red {
    background-image: linear-gradient( to bottom, #d04444 0%, #d04444 50%, #fff 50%, #fff 55%, #d04444 55%, #d04444 100% );
}

.cosmetic-name-animated.cosmetic-name-blue {
    background-image: linear-gradient( to bottom, #524de9 0%, #524de9 50%, #fff 50%, #fff 55%, #524de9 55%, #524de9 100% );
}




/* added stuff */

.units-widget-group {
    color: white !important;
}

#plunder_list_filters {
	background: #c000ff !important;
};

.header {
	background: #260830 !important;
};
