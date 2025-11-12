// In a real app, this data would live in a database,

export  const pets=[ {pname: "rasty",  weight:5, sp: "Cat"},
    {pname: "zoro",  weight:4, sp: "Cat"},
     {pname: "zuu",  weight:25, sp: "Dog"},
      {pname: "kora",  weight:15, sp: "Dog"},
	{pname: "chapa",  weight:3, sp: "Cat"},
]

export function getPet( pname ) {
	
	return pets.find( p=>p.pname==pname);
}

export function createPet( pname, weight=0, sp="Cat") {

	 pets.push({pname: pname, weight:weight,sp:sp});
     console.log(pets)

	
}

export function deletePet(pname) {
	
	const index = pets.findIndex((p) =>p.pname==pname);

	if (index !== -1) {
		pets.splice(index, 1);
	}
}
