import { Box, Typography } from '@mui/material'
import React from 'react'
import CardItem from '../../card-item'
import { getDuki } from './products';


const SectionDuki = () => {
   const [items, setItem] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {

        setLoading(true);
        getDuki()
        .then((respuesta) => {
            console.log(respuesta);
            setItem(respuesta)
        })
        .finally(() => {
            setLoading(false);
        })
    }, [])

  return (
    <Box display={"flex"} justifyContent={"center"} flexDirection={"row"} gap={20}>
        {
            loading ?
            <Typography>cargando ....</Typography>
            :
            items.map((item, index) => {
                return (
                    <CardItem key={index + item.ciudad}  ciudad={item.ciudad} precio= {item.precio} imageURL={item.imageURL}/>

                )
            })
        }
        

    </Box>
  )
}

export default SectionDuki