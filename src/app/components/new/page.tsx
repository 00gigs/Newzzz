import React from "react"
import { useState,useEffect } from "react"


const New = () => {
const [data, setData] = useState(null)

useEffect(() => {
fetch('https://api.nytimes.com/svc/news/v3/content/nyt/business.json?limit=1&api-key=5YzZRcQGwKUHN0MDug914JIYNjpJt5l8')
.then(res => res.json())
.then(data =>setData(data))
}, [])

if(!data) return <div>...Loading</div>

const title = data.results[0].title;
const section = data.results[0].section;
const url = data.results[0].url;
const abstract = data.results[0].abstract


return (
  <div>
    <h1>{title}</h1>
    <p>From the {section} Feed</p>
    <p>Overview : {abstract}</p>
    <a href={url} target="_blank" rel="noopener noreferrer">Read Article</a>
  </div>
);
}

export default New