
import { Box, Tab, Tabs } from '@mui/material'
import React from 'react'
import SectionDuki from '../ItemsListContainer/duki/duki';

const TabsComponent = () => {
    const [selected, setSelected] = React.useState("duki");

    const handleChange = (_, value) => {
        setSelected(value);

    }


  return (
    <Box>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  <Tabs value={selected} onChange={handleChange} aria-label="basic tabs example">
    <Tab label="Duki" value="duki" />
    <Tab label="Ysya"  value="ysya"/>
    <Tab label="Feid" value="feid"/>
  </Tabs>

</Box>
<Box m={2}>
    {
        selected === "duki" ?
        <SectionDuki />
        :
        null
    }
     {
        selected === "ysya" ?
        <Box> Ysya </Box>
        :
        null
    }
     {
        selected === "feid" ?
        <Box> Feid </Box>
        :
        null
    }
</Box>
</Box>
  )
}

export default TabsComponent