if (ClipboardJS.isSupported()) {
	$("#mail_copy_prompt").css("visibility", "visible");

	var clipboard = new ClipboardJS("#mail_copy_btn", {
		text: function() {
			return "\x7a\x31\x73\x74\x75\x64\x69\x6f\x2e\x64\x65\x76\x40\x67\x6d\x61\x69\x6c\x2e\x63\x6f\x6d";
		}
	});

	clipboard.on("success", function(e) {
		//console.log(e);
		//https://stackoverflow.com/a/23102317/1355992
		$("#success_alert")
			.fadeTo(2000, 500)
			.slideUp(500, function() {
				$("#success_alert").slideUp(500);
			});
	});
	clipboard.on("error", function(e) {
		//console.log(e);
		$("#failure_alert")
			.fadeTo(2000, 500)
			.slideUp(500, function() {
				$("#failure_alert").slideUp(500);
			});
	});
}
