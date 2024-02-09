//use date paramater to show only artilces posted 2 days or a day ago (current date - 24/48 hours )
import { Card } from '@mui/material';
import Link from '@mui/material/Link';
import React from "react"
import { useState, useEffect } from "react"
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent';
import styles from './styles.module.css'
import SaveStory from '../SaveStory/SaveStory';

const New = () => {
  const [data, setData] = useState(null)
// Get today's date
let today = new Date();
// Subtract 3 days from the date
today.setDate(today.getDate() - 5);
// Convert the date to YYYY-MM-DD format
let formattedDate = today.toISOString().slice(0, 10);

const Key='a85bc3b68a3f4351982c8f77634ce462'


  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=news&from=${formattedDate}&language=en&apiKey=${Key}`)
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  if (!data) return <div>...Loading</div>

  return (
    <div>
      <h1 style={{textDecoration:'underline'}}>MISSED</h1>
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
            <SaveStory url={story.url} title={story.title} urlToImage={story.urlToImage} description={story.description}/>
          </Card>
        
      ))}
    </div>
  );
}

export default New