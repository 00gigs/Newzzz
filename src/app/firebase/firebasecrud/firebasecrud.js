import ConfigurationDB from "../firebaseconfig/firebaseconfig";
import { useState } from "react";
import {ref,set,get,update,remove,child, DataSnapshot} from "firebase/database"



const Firebasecrud = () =>{



const db = ConfigurationDB()

let insertData = () =>{
    get(child(db,'saved/')).then(snapshot=>{
        if(snapshot.exists()){
            alert('story already saved')
        }
    })
} 

let updateData = () =>{

} 

let removeData = () =>{

} 

let selectData = () =>{

} 

const handleSave = () =>{

}
 

}

export default Firebasecrud