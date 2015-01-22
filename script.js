(function($){
	$(".three").hover(function(){
		$(".callout", this).show();
		var img = $("img", this);
		var temp = img.attr("src");
		img.attr("src", img.attr("alt-src"));
		img.attr("alt-src", temp);
	}, function(){
		$(".callout", this).hide();
		var img = $("img", this);
		var temp = img.attr("src");
		img.attr("src", img.attr("alt-src"));
		img.attr("alt-src", temp);
	})

})(jQuery);