/**
 * Created by hieunc on 11/12/2015.
 */

$(document).ready(function () {
	jQuery.fn.extend({
		"slideAutoResize": function () {
			$(this).find("div.carousel-img").css("height", $(this).innerWidth() / 3);
		}
	});

	$("#carousel-banner").slideAutoResize();

	$("div.media-post div").click(function () {
		var dataType = $(this).attr("data-type"),
				dataSrc = $(this).attr("data-toggle"),
				dataModal = $(this).attr("target-modal");
		switch (dataType) {
			case "image":
				if (dataSrc && dataModal) {
					$(dataModal).find("img#imgSrc").on("load", function () {
						console.log(this.width + "x" + this.height);
						if (this.width > 1118) {
							$(this).css("width", "100%");
						}else

						{
							$(this).css({
								"top": "50%",
								"left": "50%",
								"margin-left": 0 - this.width / 2,
								"margin-top": 0 - this.height / 2
							});
						}
					});
					$(dataModal).find("img#imgSrc").attr("src", dataSrc);
					$(dataModal).modal("toggle");

				}
				return;
			default:
				return;
		}
	});
});