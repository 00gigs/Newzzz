import { Card, Paper } from '@mui/material';
import Link from '@mui/material/Link';
import React from "react"
import { useState, useEffect } from "react"
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent';

import {ThemeProvider, createTheme}  from '@mui/system';

const New = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://api.nytimes.com/svc/news/v3/content/nyt/all.json?limit=10&api-key=5YzZRcQGwKUHN0MDug914JIYNjpJt5l8')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  if (!data) return <div>...Loading</div>

  return (
    <div>
      <h1>NEW</h1>
      {data.results.map((story, index) => (
        <Link key={index} href={story.url} underline="none">
          <Card variant="outlined" sx={{m:1,bgcolor:'#bdbdbd'}}>
            <CardContent>
              <Typography variant="overline" display="block" gutterBottom>{story.section}</Typography>
              <Typography variant="h4" gutterBottom>{story.title}</Typography>
              <Typography variant="subtitle2" gutterBottom>Overview: {story.abstract}</Typography>
            {story.multimedia && story.multimedia[0] && <img src={story.multimedia[0].url} alt={story.title} />}
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default New