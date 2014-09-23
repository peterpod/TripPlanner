$(function() {   // when document is ready
	$("#f1").submit(getCountry);
	} );

// for testing

function getCountry() {
	var destinations = document.getElementsByName("country");
	var tag="";
	for(var i=destinations.length-1; i<destinations.length; i++){
		var country = document.getElementsByName("country")[i].value;
		var city = document.getElementsByName("city")[i].value;
		tag=country+", "+city;
			try {
				$.ajax({
			 		url:"https://api.flickr.com/services/rest/",
			 		data: {
			 			method : "flickr.photos.search",
			 			api_key : "3d942ff62ab7286f0657bbc5de87c34d",
			 			is_getty : true,
			 			tag_mode : "all",
			 			text :tag,
			 			format : "json",
			 			per_page : 1,
			 			pages : 1,
			 			jsoncallback : "displayPicture"
			 			},
			  	jsonp: false,						// don't have jQuery choose callback name
			  	dataType: "jsonp",			// treat the request as JSONP
					crossDomain: true
					} );
				} 
				catch (e) {console.log(e.description);} 
		}
		return false;
	}

function displayPicture(response) {
	var p=response.photos.photo[0];
	var farm = p.farm;
	var server = p.server;
	var id = p.id;
	var secret = p.secret
	var picture =
			"http://farm" + farm + ".static.flickr.com/" 
			+ server + "/" + id + "_" + secret + "_z.jpg";
	var destinations = document.getElementsByName("country");
	var i = destinations.length-1;
	var country = document.getElementsByName("country")[i].value;
	var city = document.getElementsByName("city")[i].value;
	$("#pictureArea").append("<br><h2>Check out the beautiful "+city+", "+country+"</h2>");	
	$("#pictureArea").append("<img src="+picture+">");
	}
