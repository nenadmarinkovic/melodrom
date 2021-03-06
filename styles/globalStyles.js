import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Gotham";
    src: url("fonts/GothamPro.woff") format("woff2"),
      url("fonts/GothamPro.woff") format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "Gotham", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }

  h1, h3, h6 {
    margin: 0
  }

  .wrapper {
    overflow-x: hidden;
  }

  .container {
    width: 1200px;
    max-width: 100%;
	margin: 0px auto;
  }

  .container-form {
    width: 700px;
    max-width: 100%;
	margin: 0px auto;
  }

  .container-slider-music {
	width: 800px;
    max-width: 100%;
	margin: 0px auto;
  }

  .cover-image {
	position: relative;
	
  }

  .slick-prev:before {
	  display: none;
  }

  .slick-next:before {
	display: none;
}

  .slick-slide {
	position: relative;
    display: flex;
    align-items: center;
  }

  .cover-text {
	position: absolute;
	top: 30%;
	line-height: 1.5;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 26px;
	color: white;
	text-align: center;
	
  }
  .container-impressum {
    width: 820px;
    max-width: 100%;
    margin: 0px auto;
  
  }

  .created {
    text-decoration: none;
    color: white;
  }

  .banner-image {
     border-radius: 10px;
  }

  a {
    text-decoration: none;
  }

  .PianoDarkTheme .ReactPiano__Key--accidental {
    background: #025d7d;
    border: 1px solid #888;
  }
  .PianoDarkTheme .ReactPiano__Key--natural {
    background: #013243;
    border: 1px solid #888;
    margin-right: 0;
  }
  .PianoDarkTheme .ReactPiano__Key--active.ReactPiano__Key--accidental {
    background: #0396ca;
  }
  .PianoDarkTheme .ReactPiano__Key--active.ReactPiano__Key--natural {
    background: #0396ca;
  }

.content-title {
  margin-top: 30px;
  text-align: center;
  font-size: 43px;
  font-weight: 700;
  color: #1F388C;
  padding-top: 20px;

  @media (max-width: 780px) {
	font-size: 33px;
  }

  @media (max-width: 480px) {
	font-size: 26px;
	margin-top: 0;
  }
}

  .leaflet-container {
    padding: 20px;
    margin-top: 100px;
    height: 420px;
	margin-bottom: 30px;
	margin-left: 15px;
	margin-right: 15px;

	@media (max-width: 520px) {
		margin-top: 20px;
		margin-left: 0;
		margin-right: 0;
	  }
	
  }

  .leaflet-popup {
    bottom: 21px !important;
	font-weight: 700 !important;
	@media (max-width: 480px) {
		width: 250px;
	  }

  }

  .leaflet-popup-content {
    font-family: 'Montserrat', sans-serif !important;
    font-size: 21px !important;
    text-align: center !important;
    color: #1F388C !important;
	line-height: 1.7 !important;

	@media (max-width: 480px) {
		font-size: 18px !important;
	  }

  }

.leaflet-pane,
.leaflet-tile,
.leaflet-marker-icon,
.leaflet-marker-shadow,
.leaflet-tile-container,
.leaflet-pane > svg,
.leaflet-pane > canvas,
.leaflet-zoom-box,
.leaflet-image-layer,
.leaflet-layer {
	position: absolute;
	left: 0;
	top: 0;
	}
.leaflet-container {
	overflow: hidden;
	}
.leaflet-tile,
.leaflet-marker-icon,
.leaflet-marker-shadow {
	-webkit-user-select: none;
	   -moz-user-select: none;
	        user-select: none;
	  -webkit-user-drag: none;
	}
/* Prevents IE11 from highlighting tiles in blue */
.leaflet-tile::selection {
	background: transparent;
}
/* Safari renders non-retina tile on retina better with this, but Chrome is worse */
.leaflet-safari .leaflet-tile {
	image-rendering: -webkit-optimize-contrast;
	}
/* hack that prevents hw layers "stretching" when loading new tiles */
.leaflet-safari .leaflet-tile-container {

	-webkit-transform-origin: 0 0;
	}
.leaflet-marker-icon,
.leaflet-marker-shadow {
	display: block;
	}
/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */
/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */
.leaflet-container .leaflet-overlay-pane svg,
.leaflet-container .leaflet-marker-pane img,
.leaflet-container .leaflet-shadow-pane img,
.leaflet-container .leaflet-tile-pane img,
.leaflet-container img.leaflet-image-layer,
.leaflet-container .leaflet-tile {
	max-width: none !important;
	max-height: none !important;
	}

.leaflet-container.leaflet-touch-zoom {
	-ms-touch-action: pan-x pan-y;
	touch-action: pan-x pan-y;
	}
.leaflet-container.leaflet-touch-drag {
	-ms-touch-action: pinch-zoom;
	/* Fallback for FF which doesn't support pinch-zoom */
	touch-action: none;
	touch-action: pinch-zoom;
}
.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {
	-ms-touch-action: none;
	touch-action: none;
}
.leaflet-container {
	-webkit-tap-highlight-color: transparent;
}
.leaflet-container a {
	-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);
}
.leaflet-tile {
	filter: inherit;
	visibility: hidden;
	}
.leaflet-tile-loaded {
	visibility: inherit;
	}
.leaflet-zoom-box {
	width: 0;
	height: 0;
	-moz-box-sizing: border-box;
	     box-sizing: border-box;
	z-index: 800;
	}
/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */
.leaflet-overlay-pane svg {
	-moz-user-select: none;
	}

.leaflet-pane         { z-index: 400; }

.leaflet-tile-pane    { z-index: 200; }
.leaflet-overlay-pane { z-index: 400; }
.leaflet-shadow-pane  { z-index: 500; }
.leaflet-marker-pane  { z-index: 600; }
.leaflet-tooltip-pane   { z-index: 650; }
.leaflet-popup-pane   { z-index: 700; }

.leaflet-map-pane canvas { z-index: 100; }
.leaflet-map-pane svg    { z-index: 200; }

.leaflet-vml-shape {
	width: 1px;
	height: 1px;
	}
.lvml {
	behavior: url(#default#VML);
	display: inline-block;
	position: absolute;
	}


/* control positioning */

.leaflet-control {
	position: relative;
	z-index: 800;
	pointer-events: visiblePainted; /* IE 9-10 doesn't have auto */
	pointer-events: auto;
	}
.leaflet-top,
.leaflet-bottom {
	position: absolute;
	z-index: 1000;
	pointer-events: none;
	}
.leaflet-top {
	top: 0;
	}
.leaflet-right {
	right: 0;
	}
.leaflet-bottom {
	bottom: 0;
	}
.leaflet-left {
	right: 10px;
	}
.leaflet-control {
	float: left;
	clear: both;
	}
.leaflet-right .leaflet-control {
	float: right;
	}
.leaflet-top .leaflet-control {
	margin-top: 10px;
	}
.leaflet-bottom .leaflet-control {
	margin-bottom: 10px;
	}
.leaflet-left .leaflet-control {
	margin-left: 10px;
	}
.leaflet-right .leaflet-control {
	margin-right: 10px;
	}


/* zoom and fade animations */

.leaflet-fade-anim .leaflet-tile {
	will-change: opacity;
	}
.leaflet-fade-anim .leaflet-popup {
	opacity: 0;
	-webkit-transition: opacity 0.2s linear;
	   -moz-transition: opacity 0.2s linear;
	        transition: opacity 0.2s linear;
	}
.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {
	opacity: 1;

	}
.leaflet-zoom-animated {
	-webkit-transform-origin: 0 0;
	    -ms-transform-origin: 0 0;
	        transform-origin: 0 0;
	}
.leaflet-zoom-anim .leaflet-zoom-animated {
	will-change: transform;
	}
.leaflet-zoom-anim .leaflet-zoom-animated {
	-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);
	   -moz-transition:    -moz-transform 0.25s cubic-bezier(0,0,0.25,1);
	        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);
	}
.leaflet-zoom-anim .leaflet-tile,
.leaflet-pan-anim .leaflet-tile {
	-webkit-transition: none;
	   -moz-transition: none;
	        transition: none;
	}

.leaflet-zoom-anim .leaflet-zoom-hide {
	visibility: hidden;
	}


/* cursors */

.leaflet-interactive {
	cursor: pointer;
	}
.leaflet-grab {
	cursor: -webkit-grab;
	cursor:    -moz-grab;
	cursor:         grab;
	}
.leaflet-crosshair,
.leaflet-crosshair .leaflet-interactive {
	cursor: crosshair;
	}
.leaflet-popup-pane,
.leaflet-control {
	cursor: auto;
	}
.leaflet-dragging .leaflet-grab,
.leaflet-dragging .leaflet-grab .leaflet-interactive,
.leaflet-dragging .leaflet-marker-draggable {
	cursor: move;
	cursor: -webkit-grabbing;
	cursor:    -moz-grabbing;
	cursor:         grabbing;
	}

/* marker & overlays interactivity */
.leaflet-marker-icon,
.leaflet-marker-shadow,
.leaflet-image-layer,
.leaflet-pane > svg path,
.leaflet-tile-container {
	pointer-events: none;
	}

.leaflet-marker-icon.leaflet-interactive,
.leaflet-image-layer.leaflet-interactive,
.leaflet-pane > svg path.leaflet-interactive,
svg.leaflet-image-layer.leaflet-interactive path {
	pointer-events: visiblePainted; /* IE 9-10 doesn't have auto */
	pointer-events: auto;
	}

/* visual tweaks */

.leaflet-container {
	background: #ddd;
	outline: 0;
	}
.leaflet-container a {
	color: #0078A8;
	}
.leaflet-container a.leaflet-active {
	outline: 2px solid orange;
	}
.leaflet-zoom-box {
	border: 2px dotted #38f;
	background: rgba(255,255,255,0.5);
	}


/* general typography */
.leaflet-container {
	font: 12px/1.5 "Helvetica Neue", Arial, Helvetica, sans-serif;
	}


/* general toolbar styles */

.leaflet-bar {
	box-shadow: 0 1px 5px rgba(0,0,0,0.65);
	border-radius: 4px;
	}
.leaflet-bar a,
.leaflet-bar a:hover {
	background-color: #fff;
	border-bottom: 1px solid #ccc;
	width: 26px;
	height: 26px;
	line-height: 26px;
	display: block;
	text-align: center;
	text-decoration: none;
	color: #14181D;
	}
.leaflet-bar a,
.leaflet-control-layers-toggle {
	background-position: 50% 50%;
	background-repeat: no-repeat;
	display: block;
	}
.leaflet-bar a:hover {
	background-color: #f4f4f4;
	}
.leaflet-bar a:first-child {
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	}
.leaflet-bar a:last-child {
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	border-bottom: none;
	}
.leaflet-bar a.leaflet-disabled {
	cursor: default;
	background-color: #f4f4f4;
	color: #bbb;
	}

.leaflet-touch .leaflet-bar a {
	width: 30px;
	height: 30px;
	line-height: 30px;
	}
.leaflet-touch .leaflet-bar a:first-child {
	border-top-left-radius: 2px;
	border-top-right-radius: 2px;
	}
.leaflet-touch .leaflet-bar a:last-child {
	border-bottom-left-radius: 2px;
	border-bottom-right-radius: 2px;
	}

/* zoom control */

.leaflet-control-zoom-in,
.leaflet-control-zoom-out {
	font: bold 18px 'Lucida Console', Monaco, monospace;
	text-indent: 1px;
	}

.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {
	font-size: 22px;
	}


/* layers control */

.leaflet-control-layers {
	box-shadow: 0 1px 5px rgba(0,0,0,0.4);
	background: #fff;
	border-radius: 5px;
	}
.leaflet-control-layers-toggle {
	background-image: url(images/layers.png);
	width: 36px;
	height: 36px;
	}
.leaflet-retina .leaflet-control-layers-toggle {
	background-image: url(images/layers-2x.png);
	background-size: 26px 26px;
	}
.leaflet-touch .leaflet-control-layers-toggle {
	width: 44px;
	height: 44px;
	}
.leaflet-control-layers .leaflet-control-layers-list,
.leaflet-control-layers-expanded .leaflet-control-layers-toggle {
	display: none;
	}
.leaflet-control-layers-expanded .leaflet-control-layers-list {
	display: block;
	position: relative;
	}
.leaflet-control-layers-expanded {
	padding: 6px 10px 6px 6px;
	color: #333;
	background: #fff;
	}
.leaflet-control-layers-scrollbar {
	overflow-y: scroll;
	overflow-x: hidden;
	padding-right: 5px;
	}
.leaflet-control-layers-selector {
	margin-top: 2px;
	position: relative;
	top: 1px;
	}
.leaflet-control-layers label {
	display: block;
	}
.leaflet-control-layers-separator {
	height: 0;
	border-top: 1px solid #ddd;
	margin: 5px -10px 5px -6px;
	}

/* Default icon URLs */
.leaflet-default-icon-path {
	background-image: url(images/marker-icon.png);
	}


/* attribution and scale controls */

.leaflet-container .leaflet-control-attribution {
	background: #fff;
	background: rgba(255, 255, 255, 0.7);
	margin: 0;
	}
.leaflet-control-attribution,
.leaflet-control-scale-line {
	padding: 0 5px;
	color: #333;
	}
.leaflet-control-attribution a {
	text-decoration: none;
	}
.leaflet-control-attribution a:hover {
	text-decoration: underline;
	}
.leaflet-container .leaflet-control-attribution,
.leaflet-container .leaflet-control-scale {
	font-size: 11px;
	}
.leaflet-left .leaflet-control-scale {
	margin-left: 5px;
	}
.leaflet-bottom .leaflet-control-scale {
	margin-bottom: 5px;
	}
.leaflet-control-scale-line {
	border: 2px solid #777;
	border-top: none;
	line-height: 1.1;
	padding: 2px 5px 1px;
	font-size: 11px;
	white-space: nowrap;
	overflow: hidden;
	-moz-box-sizing: border-box;
	     box-sizing: border-box;

	background: #fff;
	background: rgba(255, 255, 255, 0.5);
	}
.leaflet-control-scale-line:not(:first-child) {
	border-top: 2px solid #777;
	border-bottom: none;
	margin-top: -2px;
	}
.leaflet-control-scale-line:not(:first-child):not(:last-child) {
	border-bottom: 2px solid #777;
	}

.leaflet-touch .leaflet-control-attribution,
.leaflet-touch .leaflet-control-layers,
.leaflet-touch .leaflet-bar {
	box-shadow: none;
	}
.leaflet-touch .leaflet-control-layers,
.leaflet-touch .leaflet-bar {
	border: 2px solid rgba(0,0,0,0.2);
	background-clip: padding-box;
	}


/* popup */

.leaflet-popup {
	position: absolute;
	text-align: center;
	margin-bottom: 20px;
	}
.leaflet-popup-content-wrapper {
	padding: 1px;
	text-align: left;
	border-radius: 12px;
	}
.leaflet-popup-content {
	margin: 13px 19px;
	line-height: 1.4;
	}
.leaflet-popup-content p {
	margin: 18px 0;
	}
.leaflet-popup-tip-container {
	width: 40px;
	height: 20px;
	position: absolute;
	left: 50%;
	margin-left: -20px;
	overflow: hidden;
	pointer-events: none;
	}
.leaflet-popup-tip {
	width: 17px;
	height: 17px;
	padding: 1px;

	margin: -10px auto 0;

	-webkit-transform: rotate(45deg);
	   -moz-transform: rotate(45deg);
	    -ms-transform: rotate(45deg);
	        transform: rotate(45deg);
	}
.leaflet-popup-content-wrapper,
.leaflet-popup-tip {
	background: white;
	color: #333;
	box-shadow: 0 3px 14px rgba(0,0,0,0.4);
	}
.leaflet-container a.leaflet-popup-close-button {
	position: absolute;
	top: 0;
	right: 0;
	padding: 4px 4px 0 0;
	border: none;
	text-align: center;
	width: 18px;
	height: 14px;
	font: 16px/14px Tahoma, Verdana, sans-serif;
	color: #c3c3c3;
	text-decoration: none;
	font-weight: bold;
	background: transparent;
	}
.leaflet-container a.leaflet-popup-close-button:hover {
	color: #999;
	}
.leaflet-popup-scrolled {
	overflow: auto;
	border-bottom: 1px solid #ddd;
	border-top: 1px solid #ddd;
	}

.leaflet-oldie .leaflet-popup-content-wrapper {
	-ms-zoom: 1;
	}
.leaflet-oldie .leaflet-popup-tip {
	width: 24px;
	margin: 0 auto;

	-ms-filter: "progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";
	filter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);
	}
.leaflet-oldie .leaflet-popup-tip-container {
	margin-top: -1px;
	}

.leaflet-oldie .leaflet-control-zoom,
.leaflet-oldie .leaflet-control-layers,
.leaflet-oldie .leaflet-popup-content-wrapper,
.leaflet-oldie .leaflet-popup-tip {
	border: 1px solid #999;
	}


/* div icon */

.leaflet-div-icon {
	background: #fff;
	border: 1px solid #666;
	}

.leaflet-tooltip-pane {
	position: absolute;
    /* top: 0; */
    bottom: 0;
	top: -75px;
	font-family: "Gotham";
	font-size: 14px;
    left: 148px;
	transform: translate(-50%, -50%);
	
	@media (max-width: 480px) {
		top: -105px;
		left: 255px;
	  }
}


/* Tooltip */
/* Base styles for the element that has a tooltip */
.leaflet-tooltip {
	position: absolute;
	padding: 23px;	
	color: black;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	pointer-events: none;
	width: 320px;
	text-align: center;
	background-color: white;

	@media (max-width: 480px) {
		width: 180px;
	  }
	
	}
.leaflet-tooltip.leaflet-clickable {
	cursor: pointer;
	pointer-events: auto;
	}
.leaflet-tooltip-top:before,
.leaflet-tooltip-bottom:before,
.leaflet-tooltip-left:before,
.leaflet-tooltip-right:before {
	position: absolute;
	pointer-events: none;
	border: 6px solid transparent;
	background: transparent;
	content: "";
	display: none;
	}

/* Directions */

.leaflet-tooltip-bottom {
	margin-top: 6px;
}
.leaflet-tooltip-top {
	margin-top: -6px;
}
.leaflet-tooltip-bottom:before,
.leaflet-tooltip-top:before {
	left: 50%;
	margin-left: -6px;
	}
.leaflet-tooltip-top:before {
	bottom: 0;
	margin-bottom: -12px;
	border-top-color: #fff;
	}
.leaflet-tooltip-bottom:before {
	top: 0;
	margin-top: -12px;
	margin-left: -6px;
	border-bottom-color: #fff;
	}
.leaflet-tooltip-left {
	margin-left: -6px;
	@media (max-width: 1100px) {
		margin-left: 15px;
	  }

	  @media (max-width: 520px) {
		display: none
	  }
	
}
.leaflet-tooltip-right {
	margin-left: 6px;
}
.leaflet-tooltip-left:before,
.leaflet-tooltip-right:before {
	top: 50%;
	margin-top: -6px;
	}
.leaflet-tooltip-left:before {
	right: 0;
	margin-right: -12px;
	border-left-color: #fff;
	}
.leaflet-tooltip-right:before {
	left: 0;
	margin-left: -12px;
	border-right-color: #fff;
	}

 .leaflet-control-attribution, .leaflet-control-layers  {
    display: none !important;
  }

  /--------------------------
// Menu Bar
//--------------------------
.menubar {
	display: block;
	height: 60px;
	background-color: $mainColor;
	box-shadow: 2px 5px 5px 0 rgba(0,0,0,.12);
	text-align: center;
}
  
  
.menubar span {
	display: inline-block;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	font-weight: 300;
	font-size: 2em;
	line-height: 60px;
}
 

#hambmenu {
	position: relative;
	width: 40px;
	height: 45px;
	float: left;
	transition: .5s ease-in-out;
	cursor: pointer;
}
  
#hambmenu span {
	position: absolute;
    height: 5px;
    width: 100%;
    vertical-align: middle;
    margin: 20px 0 0 15px;
    background: white;
    border-radius: 8px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
    padding: 0px;
}
   
.hambclicker {
	content: '';
	height: 48px;
	width: 55px;
	position: absolute;
	top: 8px;
	left: 8px;
	cursor: pointer;
	z-index: 9;
}
  
#hambmenu  span:nth-child(1) {
	top: 0px;
}

#hambmenu  span:nth-child(2), #hambmenu  span:nth-child(3) {
	top: 10px
}
  
#hambmenu  span:nth-child(4) {
	top: 20px;
}
  
#hambmenu.isopen span:nth-child(1) {
	top: 18px
	width: 0%
	left: 50%
	opacity: 0
}
  
#hambmenu.isopen span:nth-child(2) {
	transform: rotate(45deg)
}
  
#hambmenu.isopen span:nth-child(3) {
	transform: rotate(-45deg)
}
  
#hambmenu.isopen span:nth-child(4) {
	top: 18px
	width: 0%
	left: 50%
	opacity: 0
}
  

//--------------------------
// Slide In Menu
//--------------------------
#menu {
	position: absolute
	height: calc(100vh - 60px)
	width: 210px
	background-color: white
	transform: translateX(-100%)
	transition: transform 300ms
}
  
  #menu ul {
	margin-top: 0px
    padding: 0px
    color: #14181D
    list-style-type: none
    text-align: left
  }
    
  #menu  li {
	padding: 30px 0 20px 20px
    font-size: 1.5em
    border-bottom: 1px solid rgba(0,0,0,.14)
  }
    
  #menu li:last-child {
	border-bottom: none
  }
    
.fa {

	color: #14181D
	padding-right: 8px
}

li a
  text-decoration: none
  color: #14181D

#menu.isopen {
	transform: none
}

.slick-dots {
bottom: -35px;
}


@media screen and (max-width: 420px) {
	.menubar span {
		font-size: 1.2em
	  }
	  
}

.ReactPiano__Keyboard {
    /* Used for absolute positioning of .ReactPiano__Key--accidental elements */
    position: relative;
    width: 100% !important;
    height: 232.6446px !important;
    /* Used to lay out .ReactPiano__Key--natural elements */
    display: flex;
  }
  
  .ReactPiano__Key {
    /* Used for flexbox layout of the child .ReactPiano__NoteLabelContainer elements */
    display: flex;
  }
  
  /*
   * Styles of accidental notes (flat or sharp)
   */
  .ReactPiano__Key--accidental {
    background: #14181D;
    border: 1px solid #fff;
    border-top: 1px solid transparent;
    // border-radius: 0 0 4px 4px;
    cursor: pointer;
    height: 66%;
    /* Overlay on top of natural keys */
    z-index: 1;
    /* Use absolute positioning along with inline styles specified in JS to put keys in correct locations. */
    position: absolute;
    top: 0;
  }
  

  .ReactPiano__Key--natural {
    background: white;
    border: 1px solid white;
    // border-radius: 0 0 6px 6px;
    cursor: pointer;
    z-index: 0;
    /*
     * Uses flexbox with margin instead of absolute positioning to have more consistent margin rendering.
     * This causes inline styles to be ignored.
     */
    flex: 1;
    margin-right: 3px;
  }
  
  .ReactPiano__Key--natural:last-child {
    /* Don't render extra margin on the last natural note */
    margin-right: 0;
  }
  
  /*
   * Styles of "active" or pressed-down keys
   */
  .ReactPiano__Key--active {
    background: #515B67;
  }
  
  .ReactPiano__Key--active.ReactPiano__Key--accidental {
    border: 1px solid #fff;
    border-top: 1px solid #14181D;
    /* Slight height reduction for "pushed-down" effect */
    height: 65%;
  }
  
  .ReactPiano__Key--active.ReactPiano__Key--natural {
    border: 1px solid #515B67;
    /* Slight height reduction for "pushed-down" effect */
    height: 98%;
  }
  
  /*
   * Styles for disabled state
   */
  .ReactPiano__Key--disabled.ReactPiano__Key--accidental {
    background: #ddd;
    border: 1px solid #999;
  }
  
  .ReactPiano__Key--disabled.ReactPiano__Key--natural {
    background: #eee;
    border: 1px solid #aaa;
  }
  
  /*
   * Styles for the note label inside a piano key
   */
  .ReactPiano__NoteLabelContainer {
    flex: 1;
    /* Align children .ReactPiano__NoteLabel to the bottom of the key */
    align-self: flex-end;
  }
  
  .ReactPiano__NoteLabel {
    font-size: 12px;
    text-align: center;
    text-transform: capitalize;
    font-family: "Gotham";
    /* Disable text selection */
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  }
  
  .ReactPiano__NoteLabel--accidental {
    color: #f8e8d5;
    margin-bottom: 3px;
  }
  
  .ReactPiano__NoteLabel--natural {
    color: #888;
    margin-bottom: 3px;
  }
  
  .ReactPiano__NoteLabel--natural.ReactPiano__NoteLabel--active {
    color: #f8e8d5;
  }
  

    
 
`;

export default GlobalStyle;
