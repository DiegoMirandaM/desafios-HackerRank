function timeConversion(s) {
	let pmAm = s.slice(s.length - 2, s.length); 
	
	if(pmAm === "AM"){
		if(s.slice(0,2) === "12"){ //Si son las 12 am, la hora debe volverse 00.
			return "00" + s.slice(2,8);
		}
		else{ //Si es AM pero no son las 12, solo se recorta.
			return s.slice(0,8);
		}
	}
	else { //Si es PM, se le suman 12 hrs y se recorta, A MENOS que sean las 12 PM... 
		if(s.slice(0,2) === "12"){ //Si son las 12 PM, la hora debe quedar tal cual. 
			return "12" + s.slice(2,8);
		}
		return String( parseInt( s.slice(0,2) ) + 12) + s.slice(2,8);
	}
}

//let s = "07:05:45PM";
//let s = "12:40:22AM";
let s = "12:45:54PM";

console.log(timeConversion(s));