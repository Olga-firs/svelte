import * as db from  "$lib/server/db.js";
export function load(){
    return {
        cats: db.pets.filter( p => p.sp=="Cat"),
        dogs: db.pets.filter( p => p.sp=="Dog")
    }
}

