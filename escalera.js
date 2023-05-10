function staircase(n) { 
	let simbolo = '#'; 
	let espacio = ' ';  
	let resultado = ""; 
    for(let i = 1; i <= n; i++){ 
		resultado = (espacio.repeat(n-i)) + (simbolo.repeat(i)); 
		console.log(resultado); 
	} 
} 

let niveles = 5;

staircase(niveles); 