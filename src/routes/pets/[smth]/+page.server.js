import {pets} from "$lib/server/db.js";


// @ts-ignore
export function load ({ params }){
    
    const pet = pets.find( p => p.pname==params.smth);
       return {pet};
}