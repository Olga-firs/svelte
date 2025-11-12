// In a real app, this data would live in a database,

export  const pets=[ {pname: "rasty",  weight:5, sp: "cat"},
    {pname: "zoro",  weight:4, sp: "cat"},
     {pname: "zuu",  weight:25, sp: "dog"},
      {pname: "kora",  weight:15, sp: "dog"},
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