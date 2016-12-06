var city, hotel, travelers, days, wifi, recSeat, meal, total, firstName;

function book(){
	firstName = document.getElementById("firstName").value;
	if(document.getElementById("det").checked){
		city = document.getElementById("det").value;
	}
	if(document.getElementById("lou").checked){
		city = document.getElementById("lou").value;
	}
	if(document.getElementById("mil").checked){
		city = document.getElementById("mil").value;
	}
	if(document.getElementById("eco").checked){
		hotel = document.getElementById("eco").value;
	}
	if(document.getElementById("stan").checked){
		hotel = document.getElementById("stan").value;
	}
	if(document.getElementById("up").checked){
		hotel = document.getElementById("up").value;
	}
	travelers = document.getElementById("trav").value;
	days = document.getElementById("days").value;
	
	if(document.getElementById("wifi").checked){
		wifi = document.getElementById("wifi").value;
		wifi = parseInt(wifi);
	}
	if(document.getElementById("recSeat").checked){
		recSeat = document.getElementById("recSeat").value;
		recSeat = parseInt(recSeat);

	}
	var mealChoice = document.forms.reservation.elements.meal;
	 for(var i=0; i < mealChoice.length; i++){
		if (mealChoice[i].checked)
			{
			meal = mealChoice[i].value;
		 	}
		}
	city = parseInt(city);
	hotel = parseInt(hotel);
	travelers = parseInt(travelers);
	days = parseInt(days);
	meal = parseInt(meal);


	total = (city * travelers) + (wifi * travelers) + (recSeat * travelers) + (meal * travelers) + (days * hotel);
	parseInt(total);
	document.getElementById("bookOut").innerHTML= "Thank you " +  firstName  + " for booking your vacation with us your total cost amounts to $" + total + ".";

}

function subscribe(){
	alert(" Thank you! You have subsribed to the mailing list");
}