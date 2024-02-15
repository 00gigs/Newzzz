import { useState,useEffect} from "react"
import React from "react"
import { ReadStory } from "@/app/firebase/firebasecrud/firebasecrud"
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent';
import { Card } from '@mui/material';
import Link from '@mui/material/Link';
import SaveStory from "../SaveStory/SaveStory";

const Community = () => {
const [stories, setStories] = useState([])


useEffect(() => {
  const fetechedStories = async()=>{
    const fetched = await ReadStory()
    console.log("Fetched stories in component:", fetched);
    setStories(fetched)
  }
  fetechedStories()
}, [])


  return (
    <div>
   
    </div>
  )
}

export default Community