
import * as db from  "$lib/server/db.js";
export const actions = {
    create: async ( {  request } )=> {
    const data = await request.formData();
    db.createPet( data.get('pname'), data.get("weight"),data.get("sp") );  
return {message:"sucsess!"};},

    delete: async ( {  request } )=> {
    const data = await request.formData();
    db.deletePet( data.get('pname') );
}
    
    
}