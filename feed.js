$(document).ready(function(){
	alert();
    var url="http://52.74.43.53/growth-heacker/feed_gh.php";
		alert(url);
	$.ajax({
		url: url,
        success: function(data) {
			alert(data);
			$("body").append(data);
        }
    });
	
});