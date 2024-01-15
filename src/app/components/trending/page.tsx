import { Card, Paper } from '@mui/material';
import Link from '@mui/material/Link';
import React from "react"
import { useState, useEffect } from "react"
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent';
import styles from './styles.module.css'


const New = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=news&sortBy=popularity&apiKey=a85bc3b68a3f4351982c8f77634ce462')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  if (!data) return <div>...Loading</div>

  return (
    <div>
      <h1 style={{textDecoration:'underline'}}>TRENDING</h1>
      {data.articles.map((story, index) => (
        <Card variant="outlined" sx={{m:1,bgcolor:'#bdbdbd'}}>
            <Link key={index} href={story.url} underline="none" color='black'>
            <CardContent>
             <img className={styles.image} src={story.urlToImage} alt={story.title} />
              <Typography variant="overline" display="block" gutterBottom>{story.publishedAt}</Typography>
              <Typography variant="h4" gutterBottom>{story.title}</Typography>
              <Typography variant="subtitle2" gutterBottom>Overview: {story.description}</Typography>
            </CardContent>
        </Link>
        <button style={{display:'flex'}}>
        <img  width="50" height="50" src="https://img.icons8.com/ios-filled/50/000000/bookmark-ribbon.png" alt="bookmark-ribbon"/>
        </button>
          </Card>
      ))}
    </div>
  );
}

export default New