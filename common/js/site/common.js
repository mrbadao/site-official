/**
 * Created by hieunc on 11/12/2015.
 */

$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() >= 175) {
			$("nav.navbar-fixed-top").css("display", "block").slideDown();
		} else {
			$("nav.navbar-fixed-top").css("display", "none");
		}
	});

	$(".main-menu .nav-item.has-child").hover(
			function () {
				$(this).find("a.nav-link").addClass("hover");
				$(this).find("div.menu-layer").css("display", "block");
			},
			function () {
				$(this).find("a.nav-link").removeClass("hover");
				$(this).find("div.menu-layer").css("display", "none");
			}
	)
});