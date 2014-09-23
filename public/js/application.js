var counter = 1;
	var limit = 5;
	function addInput(divName){
     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " inputs");
     }
     else {
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
	function addWish(Destination){
		var country = document.getElementsByName("country")[Destination].value;
		var city = document.getElementsByName("city")[Destination].value;
		$('#sidebar').append('<li>'+city+', '+country+'</li>'); 
	    //add mouse hover functionality once a li tag is created in the bucket list
	    $("li").mouseover(function(){
	      $(this).css("color","blue");
	    });
	    $("li").mouseout(function(){
	      $(this).css("color","black");
	    });
	}