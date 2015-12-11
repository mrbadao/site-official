/**
 * Created by hieunc on 11/12/2015.
 */

$(document).ready(function () {
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