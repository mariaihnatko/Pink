"use strict";var navMain=document.querySelector(".main-nav"),navToggle=document.querySelector(".main-nav__toggle"),navSpace=document.querySelector(".page-main"),mainSpace=document.querySelector(".main-section__wrapper");function owlInitialize(){$(window).width()<660?($(".price__list.slider__list").addClass("owl-top").addClass("owl-carousel").addClass("owl-theme"),$(".owl-top").owlCarousel({loop:!0,margin:0,responsiveClass:!0,responsive:{0:{items:1,nav:!0,autoHeight:!0},400:{items:1,nav:!0,autoHeight:!0},600:{items:1,nav:!0,autoHeight:!0},1e3:{items:1,nav:!0,loop:!0,autoplay:!1,autoplayTimeout:2e3,autoplayHoverPause:!1,autoHeight:!0}}})):($(".owl-top").owlCarousel("destroy"),$(".price__list.slider__list").removeClass("owl-top").removeClass("owl-carousel").removeClass("owl-theme"))}function initMap(){var a={lat:59.938851,lng:30.323305},e=new google.maps.Map(document.getElementById("map"),{zoom:4,center:a});new google.maps.Marker({position:a,map:e})}navMain.classList.remove("main-nav--nojs"),navToggle.addEventListener("click",function(){navMain.classList.contains("main-nav--closed")?(navMain.classList.remove("main-nav--closed"),navMain.classList.add("main-nav--opened"),navSpace.classList.add("space"),mainSpace.classList.add("main-space")):(navMain.classList.add("main-nav--closed"),navMain.classList.remove("main-nav--opened"),navSpace.classList.remove("space"),mainSpace.classList.remove("main-space"))}),$(function(){var a=$("a[href='"+location.pathname.replace("/","")+"']");a&&($(".site-list__item").removeClass("active"),a.parent().addClass("active"))}),$(document).ready(function(){$(".owl-bottom").owlCarousel({loop:!0,margin:0,responsiveClass:!0,responsive:{0:{items:1,nav:!0,autoHeight:!0},400:{items:1,nav:!0,autoHeight:!0},600:{items:1,nav:!0,autoHeight:!0},1e3:{items:1,nav:!0,loop:!0,autoplay:!1,autoplayTimeout:2e3,autoplayHoverPause:!1,autoHeight:!0}}}),owlInitialize()}),$(window).resize(function(){owlInitialize()});