	//have a counter for the number of destinations. The form should not allow
	//more than 5 destinations for simplicity.
	var counter = 1;
	var limit = 5;
	function addInput(divName){
	 //destination number has reached its limit
     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " inputs");
     }
     else {
     	  //create a new div with a new Destination header as well as the corresponding
     	  //country input and city input
          var newdiv = document.createElement('div');
          newdiv.innerHTML = "<h3>Destination " + (counter + 1) + " </h3><h4>Country</h4><input type='text' id= 'country' name='country' value=''><h4>City</h4><input type='text' id= 'city' name='city' value=''><input type='button' value='Add to Bucket List' onClick='addWish("+(counter)+");'>";
          document.getElementById(divName).appendChild(newdiv);
          counter++;
     }
     //every time you add a destination new text inputs and buttons will be generated with the jquery styling
	$('input[type=text], input[type=button]')
	  .button()
	  .css({
	          'font' : 'inherit',
	         'color' : 'inherit',
	    'text-align' : 'left',
	       'outline' : 'none',
	        'cursor' : 'text'
	  });
}
	//addWish takes in a destination index ex. Destination 2 will correspond to
	//country[2].value since get ElementsByName returns an array
	function addWish(Destination){
		var country = document.getElementsByName("country")[Destination].value;
		var city = document.getElementsByName("city")[Destination].value;
		//add the city,country to the side bar bucketlist
		$('#sidebar').append('<li>'+city+', '+country+'</li>'); 
	    //add mouse hover functionality once a li tag is created in the bucket list
	    $("li").mouseover(function(){
	      $(this).css("color","blue");
	    });
	    $("li").mouseout(function(){
	      $(this).css("color","black");
	    });
	}