// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
	const selectedContact = contacts.find( obj => {
		if(obj.firstName == name){
			return obj;
		}
	}); 
	if (selectedContact === undefined) return "No such contact"; 
	
	if (!selectedContact.hasOwnProperty(prop)) return "No such property"; 
	
	return selectedContact[prop];
	
  // Only change code above this line
}

console.log(lookUpProfile("Akira", "address"));