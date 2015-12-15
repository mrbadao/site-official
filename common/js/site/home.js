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

	fnBindHideMediaModal = function (element) {
		$(element).on("hidden.bs.modal", function (e) {
			$(this).find(".viewer img").remove();
			$(this).find(".viewer iframe").remove();
			$(this).find(".comment iframe").remove();
		});
	};

	fnBindShowMediaModal = function (element) {
		$(element).on("shown.bs.modal", function (e) {
			var dialog = $(this).find(".modal-dialog");
			console.log();
			console.log(dialog[0].offsetWidth);
			$(dialog).css("margin-left", - $(dialog).outerWidth()/2).fadeIn();
			//console.log($(dialog).innerWidth());
		});
	};

	$("div.media-post div").click(function () {
		var dataType = $(this).attr("data-type"),
				dataSrc = $(this).attr("data-toggle"),
				dataModal = $(this).attr("target-modal");

		dataModalEventObj = $._data($(dataModal).get(0), "events");

		if (typeof dataModalEventObj == "undefined" || typeof dataModalEventObj.hidden == "undefined") {
			fnBindHideMediaModal(dataModal);
		}

		fnBindShowMediaModal(dataModal);

		switch (dataType) {
			case "image":
				$(dataModal).find("div.viewer").html('<img id="imgSrc" src=""/>');
				$(dataModal).find("div.comment").html('<div class="fb-comments" data-width="100%" data-href="http://developers.facebook.com/docs/plugins/comments/" data-numposts="5"></div>');
				FB.XFBML.parse($(dataModal).find("div.comment").get(0));
				if (dataSrc && dataModal) {
					$(dataModal).find("img#imgSrc").on("load", function () {
						var originWHRate = 1118 / 650;
						var imgWHRate = this.width / this.height;

						var imgH = 1118 / imgWHRate;
						var imgW = 650 * imgWHRate;
						if (this.width > 1118) {
							if (imgH <= 650) {
								$(this).css("width", "100%");
								$(this).css({
									"top": "50%",
									"margin-top": 0 - (imgH / 2)
								});
							} else {
								$(this).css("height", "100%");
								$(this).css({
									"left": "50%",
									"margin-top": 0 - (imgW / 2)
								});
							}


						} else {
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

			case "object":
				$(dataModal).find("div.viewer").html('<iframe width="100%" height="100%" src="" frameborder="0" allowfullscreen></iframe>');
				$(dataModal).find("div.comment").html('<div class="fb-comments" data-width="100%" data-href="http://developers.facebook.com/docs/plugins/comments/" data-numposts="5"></div>');
				FB.XFBML.parse($(dataModal).find("div.comment").get(0));
				if (dataSrc && dataModal) {
					$(dataModal).find("div.viewer iframe").attr("src", dataSrc);
					$(dataModal).modal("toggle");
				}
				return;

			default:
				return;
		}
	});
});