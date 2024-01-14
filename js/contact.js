$(function () {
	var b = $("#contact-form");
	var a = $("#form-messages");
	$(b).submit(function (d) {
		d.preventDefault();
		var c = $(b).serialize();
		$.ajax({
			type: "POST",
			url: $(b).attr("action"),
			data: c
		}).done(function (e) {
			$(a).removeClass("error");
			$(a).addClass("success");
			$(a).text(e);

			$("#name").val("");
			$("#email").val("");
			$("#sub").val("");
			$("#phn").val("");
			$("#message").val("");
		}).fail(function (e) {
			$(a).removeClass("success");
			$(a).addClass("error");
			if (e.responseText !== "") {
				$(a).text(e.responseText)
			} else {
				$(a).text("Oops! An error occured and your message could not be sent.")
			}
		})
	})
});