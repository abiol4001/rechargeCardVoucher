var cardStore = localStorage.store;
console.log(cardStore);

function displayValue(num) {
	var digit = num.target.value;

	// alert(digit);
	document.getElementById('display').value += digit;
	console.log(num.target);
}

function test() {
	document.getElementById('display').value = '';
}


function erase() {
	var displayStore = document.getElementById('display').value;
	var remainingDigits = displayStore.slice(0, (displayStore.length-1));
	document.getElementById('display').value = remainingDigits;
	// displayStore = remainingDigits;
	// console.log(displayStore);

}


function home() {
	var x = document.getElementById('togle');
	x.src="home.html";
}

function lock() {
	document.getElementById('togle').classList.toggle('hide');
}

function volume() {
	alert('button is under-development')
}

function checkNetwork() {
	document.getElementById('select').classList.toggle('network-selection')
}





function callNow() {
	var numberAndPrefix = document.getElementById('display').value;
	var prefix = numberAndPrefix.slice(1,4);
	var num = numberAndPrefix.slice(5,21);
console.log(num);

var numGlo = numberAndPrefix.slice(5,20);



if ( numberAndPrefix == "") {
	alert("provide a number to dial")
		}

else if ( prefix == "126") {
	if ( networkSelect.value !== "airtel") {
		alert("You selected the wrong network");
	}else runDial();
}
else if ( prefix === "123") {
	if ( networkSelect.value !== "glo") {
		alert("You selected the wrong network");
	}
}
else if ( prefix == "222") {
	if ( networkSelect.value !== "etisalat") {
		alert("You selected the wrong network");
	}else runDial();
}
else if ( prefix == "555") {
	if ( networkSelect.value !== "mtn" ) {
		alert("You selected the wrong network");
	}
}

else if ( numberAndPrefix === "*124#") {
	if (networkSelect.value !== "airtel") {
		alert(`You selected the wrong network`)
	}else {
		myAccountBalance = JSON.parse(localStorage.accountBalance);
		alert(`Your Airtel account balance is : ${myAccountBalance.airtel}`);
	}
}
else if ( numberAndPrefix == "*556#") {
	if (networkSelect.value !== "mtn") {
		alert(`You selected the wrong network`)
	}else {
		myAccountBalance = JSON.parse(localStorage.accountBalance);
		alert(`Your MTN account balance is : ${myAccountBalance.mtn}`);
	}
}
else if ( numberAndPrefix == "#124*1#") {
	if (networkSelect.value !== "glo") {
		alert(`You selected the wrong network`)
	}else {
		myAccountBalance = JSON.parse(localStorage.accountBalance);
		alert(`Your GLO account balance is : ${myAccountBalance.glo}`);
	}
}
else if ( numberAndPrefix == "*232#") {
	if (networkSelect.value !== "etisalat") {
		alert(`You selected the wrong network`)
	}else {
		myAccountBalance = JSON.parse(localStorage.accountBalance);
		alert(`Your 9mobile account balance is : ${myAccountBalance.etisalat}`);
	}
}

	
}

function runDial() {

	var numberAndPrefix = document.getElementById('display').value;
	var prefix = numberAndPrefix.slice(1,4);
	var num = numberAndPrefix.slice(5,21);
	var myLocalOutput = JSON.parse(cardStore);

for (var i = 0; i < myLocalOutput.length; i++) {
	console.log( myLocalOutput[i].used)
	if (num == myLocalOutput[i].number && networkSelect.value == myLocalOutput[i].network && myLocalOutput[i].used == 'new') {
		myLocalOutput[i].used = 'used';
		alert(`Your account has been successfully loaded with ${myLocalOutput[i].amount} on your ${myLocalOutput[i].network} network`)
		if (!localStorage.accountBalance) {
			var accountBalance = {mtn: 0, glo: 0, airtel: 0, etisalat: 0};
			localStorage.setItem('accountBalance', JSON.stringify(accountBalance));
		} 
		var newAccountBalance = JSON.parse(localStorage.accountBalance);
		newAccountBalance[myLocalOutput[i].network] += Number(myLocalOutput[i].amount);
		console.log(newAccountBalance[myLocalOutput[i].network]);
		localStorage.accountBalance = JSON.stringify(newAccountBalance);
		console.log(localStorage.accountBalance);

	}
}
localStorage.store = JSON.stringify(myLocalOutput);

}