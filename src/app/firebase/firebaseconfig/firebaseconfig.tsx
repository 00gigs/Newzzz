// Import the functions you need from the SDKs you need
require('dotenv').config();
import app from "@/app/firecon";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";



      
    export const auth = getAuth(app)

    // Initialize real time database
    export const db =  getDatabase(app)



