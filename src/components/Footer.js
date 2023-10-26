import { Box, Divider, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import adel from '../assets/png 1.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { HOVER_COLOR, MAIN_COLOR } from '../constant';
import { useNavigate } from 'react-router-dom';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
    const navigate = useNavigate()
    const year= new Date().getFullYear()

  
    
    const companyArray = [{ title: 'Home', path: '/' }, { title: 'Service', path: '/services' }, { title: 'Contact', path: '/contact' }].map((item, index) => {
        return <Typography onClick={() => { navigate(`${item.path}`); window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }} key={index} sx={{
             
            fontSize: '15px',
            fontWeight: "700", mt: "8px", cursor: 'pointer', borderBottom: '3px solid transparent', '&:hover': { opacity: 0.6, borderBottom: `3px solid ${HOVER_COLOR}` },
            transition: "all 0.30s ease",
        }}>{item.title}</Typography>
    })

    const supportArray = [{ title: 'Help center', path: '/' }, { title: 'Terms of services', path: '/terms' }, { title: 'Privacy policy', path: '/privacy' }].map((item, index) => {
        return <Typography onClick={() => { navigate(`${item.path}`); window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }} key={index} sx={{ transition: "all 0.30s ease", fontSize: '15px', fontWeight: "700", mt: "8px", borderBottom: '3px solid transparent', '&:hover': { opacity: 0.6, borderBottom: `3px solid ${HOVER_COLOR}`, cursor: 'pointer' } }}>{item.title}</Typography>
    })

    const socialIcons = [{icon:<InstagramIcon color='primary'/>,id:1,link:"https://www.instagram.com/my_tutorroom/"}, {icon:<FacebookIcon color='primary'/>,id:2,link:"https://www.facebook.com/people/My-Tutor-Room/61551953380994/"}, {icon:<TwitterIcon color='primary'/>,id:3,link:"https://twitter.com/i/flow/login?redirect_after_login=%2FMy_tutorroom"}, {icon:<LinkedInIcon color='primary'/>,id:4,link:"https://www.linkedin.com/in/my-tutor-room-223626297/"},{icon:<YouTubeIcon color="primary"/>,id:5,link:"https://www.youtube.com/channel/UCgRGjxrgHQBsonyOYG_vECg"}].map((item, index) => {
        return <Typography key={index} sx={{ color: MAIN_COLOR, }}>
            <a href={item.link} style={{textDecoration:"none"}}>{item.icon}</a>
        </Typography>
    })

    const handleHomeNavigate =()=>{
        navigate('/')
        window.scroll({
            top:0,
            behavior:"smooth"
        })
    }
    
    return (
        <>
            <Divider sx={{ border: `5px solid ${MAIN_COLOR}`, mb: '20px' }} />
            <Grid container spacing={2} sx={{ pb: '20px', pl: { lg: '20px', xs: '0px' } }}>

                <Grid item xs={6} sm={6} md={6} lg={2} sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                        <Typography variant='h1' sx={{ color: MAIN_COLOR, fontWeight: "900", fontSize: "24px", mb: "10px" }}>Company</Typography>
                        {companyArray}
                    </Box>

                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={2} sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                        <Typography variant='h1' className='Box1' sx={{ color: MAIN_COLOR, fontWeight: "900", fontSize: "24px", mb: "10px" }}>Support</Typography>
                        {supportArray}
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-start", flexDirection: "column" }}>
                        <Typography variant='h1' sx={{ color: MAIN_COLOR, fontWeight: "900", fontSize: "24px" }}>Stay up to date</Typography>
                        <Box sx={{ display: "flex", alignItems: "center", mt: "15px" }}>
                            <TextField
                                label="Your email address"
                                variant="standard"
                                focused
                            />
                            <ArrowOutwardIcon sx={{ ml: "-20px", mt: "17px" }} />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} sx={{ display: "flex", justifyContent: "center", alignItems: 'center', flexDirection: 'column' }}>
                    <Box sx={{ width: "80%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ width: "100%", display: 'flex', justifyContent: 'center' }} >
                            <img src={adel} height="60px" width="65%" style={{ marginLeft: "-32px",cursor:"pointer" }} alt='pic' onClick={handleHomeNavigate}/>
                        </Box>
                        <Box sx={{ display: "flex", mt: "40px", justifyContent: "space-between", width: "70%", alignItems: 'center' }}>
                            {socialIcons}
                        </Box>
                    </Box>

                </Grid>

            </Grid>
            <Grid container sx={{ p: '20px', justifyContent: 'center', bgcolor: '#404343', mb: "50px" }}>
                <Typography textAlign={'center'} sx={{ fontSize: "14px", color: '#c3c3c3' }}>Copyright © {`${year}`} TutorRoom | All rights reserved</Typography>
            </Grid>
        </>
    )
}

export default Footer