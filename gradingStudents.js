function gradingStudents(grades){
	let roundedGrades = [];
	let nextMultipleOfFive = 0; 
	let difference = 0; 
	
	grades.forEach(grade => {
		if(grade >= 38){ 
			nextMultipleOfFive = (Math.floor(grade / 5 ) + 1) * 5; 
			difference = nextMultipleOfFive - grade; 
			roundedGrades.push(difference < 3 ? nextMultipleOfFive : grade);
		}
		else{
			roundedGrades.push(grade);
		}
	});
	
	return roundedGrades;
}

arrGrades = [73, 67, 38, 33]; //resultado esperado: [75, 67, 40, 33]

console.log(gradingStudents(arrGrades)); 