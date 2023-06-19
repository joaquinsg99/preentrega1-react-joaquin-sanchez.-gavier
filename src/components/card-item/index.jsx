import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const CardItem = ({ ciudad, precio, imageURL}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt="duki"
      height="140"
      image={imageURL}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
       Ciudad: { ciudad }
      </Typography>
      <Typography variant="body2" color="text.secondary">
      Precio: { precio }
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Comprar</Button>
    </CardActions>
  </Card>
  )
}

export default CardItem