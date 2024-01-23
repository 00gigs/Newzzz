import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const UserDash = () => {
  return (
    <div style={{border:'2px solid black',borderRadius:'10px'
    ,width: '50%', /* Adjust the width as needed */
    position: 'absolute',
    left: '10',
    top: '10',
    height:'100vh',
    background:'black'
    }}>
      <h1 style={{textDecoration:'underline'}}>Saved </h1>
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          ha 
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          Something you say when they do sum dumb shi
          <br />
          {'"a sound of enjoyment"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default UserDash