$(function() {   // when document is ready
	$("#f1").submit(getCountry);
	} );

// for testing

function getCountry() {
	var country = document.getElementsByName("country");
	var city = document.getElementsByName("city");
	var multiple = false;
	if(country.length>1){
		multiple = true;
	}
	else{
		country = document.getElementsByName("country")[0].value;
		city = document.getElementsByName("city")[0].value;
	}
	if(multiple){
		var tag="";
		for(var i=0; i<country.length;i++){
				tag=country[i].value;
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
				 			per_page : 2,
				 			pages : 1,
				 			jsoncallback : "displayPicture"
				 			},
				  	jsonp: false,						// don't have jQuery choose callback name
				  	dataType: "jsonp",			// treat the request as JSONP
						crossDomain: true
						} );
					return false;
					} catch (e) {console.log(e.description);}
			} 
		}
	else
	{
		try {
			$.ajax({
		 		url:"https://api.flickr.com/services/rest/",
		 		data: {
		 			method : "flickr.photos.search",
		 			api_key : "3d942ff62ab7286f0657bbc5de87c34d",
		 			is_getty : true,
		 			tag_mode : "all",
		 			text :country+', '+city,
		 			format : "json",
		 			per_page : 2,
		 			pages : 1,
		 			jsoncallback : "displayPicture"
		 			},
		  	jsonp: false,						// don't have jQuery choose callback name
		  	dataType: "jsonp",			// treat the request as JSONP
				crossDomain: true
				} );
			return false;
			} catch (e) {console.log(e.description);}
	} 
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
	if(country.length>1){
		$("#pictureArea").append("<br><h2>Check out Beautiful this beautiful destination</h2>");		
	
	}
	else{
		$("#pictureArea").append("<br><h2>Check out Beautiful "+country.value+", "+city.value+"</h2>");		
	}
	$("#pictureArea").append("<img src="+picture+">");
	}
