import React, { useState } from 'react'
import '../pages/Homepage.css'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Grid, Typography } from '@mui/material'
import { HOVER_COLOR, MAIN_COLOR, SECONDARY_COLOR } from '../constant'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




const MegaMenu = ({ title = "GiveTitleName", data = [], navigateHandlerTitleRoute = '/' }) => {
    const navigate = useNavigate()
    const [ stateNavi,setStateNavi]=useState(navigateHandlerTitleRoute)
    const style = {
        navTitle: {
            '&:hover': { opacity: 0.6, borderBottom: `3px solid ${HOVER_COLOR}` },
            transition: "all 0.50s ease",
            mr: "20px",
            color: SECONDARY_COLOR,
            cursor: "pointer",
            textDecoration: "none",
            borderBottom: '3px solid transparent',
            padding: '5px 5px',
            textTransform: 'unset',
            fontSize: {lg:'18px',md:"17px",sm:"15px",xs:"13px"},
            fontWeight: 900,
            
            
            
        
          
        },
        megaMenuTitle: {
            '&:hover': { cursor: 'pointer' },
            fontSize:{lg:'16px', md:'15px', sm:'14px', xs:'14px'},
            color: MAIN_COLOR,
            mb: '0px',
            mt: '10px',
            fontWeight: 900,
            lineHeight: 'initial',
            padding: '10px 0px',
            width: 'fit-content',
            
           
            
           
        },
        megaMenuItems: {
            '&:hover': { cursor: 'pointer', color: MAIN_COLOR },
            color: '#2B2B2B',
            fontSize: '14px',
            padding: '4px 0px',
            lineHeight: 'inherit',
            fontWeight: 100,
            width: 'fit-content',
            
            
            
        }
    }

    const handleNavigator=()=>{
        
           navigate(`${stateNavi}`)
           setStateNavi("")
           window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
    }

    const handleNavigatorScroll =(item)=>{
       if(item == 1){
        window.open('https://admin.mytutorroom.com/instructor-finder'); 
       }
      else if(item == 2){
        window.open('https://admin.mytutorroom.com/page/tutor-jobs'); 
       }
      else{
        navigate(`${item}`)
       }
        
    }

    const handleNavigatorScrollSec=(item)=>{
        if(item=="homework"){
            window.open("https://admin.mytutorroom.com/homework")
        }
        else{
            navigate(`${item}`)
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
        }
      
    }
   

    if (data.length > 0) {
        return (
            <>
                <Box component='div' className="dropdown" >
                    <Button onClick={() =>handleNavigator()} disableRipple disableElevation disableTouchRipple disableFocusRipple sx={style.navTitle} endIcon={<ExpandMoreIcon />}>
                        {title}
                    </Button>
                    <Box component='div' className="dropdown-content" sx={{ borderTop: `9px solid ${MAIN_COLOR}`, borderBottom: `9px solid ${MAIN_COLOR}` ,width:{lg:title == 'Services'?'17%':'11%', md:title == 'Services'?'17%':'12%'} }}>
                        <Grid container className="row">
                            {data.map((item, index) => {
                                return <Grid item xs={12} component='div' key={index} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                                    <Typography variant='h1' onClick={() => {handleNavigatorScroll(item.header.item_link)}} sx={style.megaMenuTitle} >{item.header.title}</Typography>
                                    {/* {item.data.map((nav, i) => {
                                        return <Typography variant='h5' key={i} onClick={() => navigate(`${nav.item_link}`)} sx={style.megaMenuItems} >{nav.title}</Typography>
                                    })} */}
                                </Grid>
                            })}
                        </Grid>
                    </Box>
                </Box>
            </>
        )
    } else {
        return (
            <>
                <Box component='div' className="dropdown">
                    <Button onClick={() =>{handleNavigatorScrollSec(navigateHandlerTitleRoute)}} disableRipple disableElevation disableTouchRipple disableFocusRipple sx={style.navTitle} >
                        {title}
                    </Button>
                </Box>
            </>
        )
    }

}

export default MegaMenu