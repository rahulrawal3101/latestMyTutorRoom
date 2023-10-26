import { Box, Grid, Paper, Rating, Typography } from '@mui/material';
import React, { useState } from 'react';
import ship from '../../../assets/ship.jpg';
import landing1 from '../../../assets/landing1.jpg';
import landing2 from '../../../assets/landing2.jpg';
import landing3 from '../../../assets/landing3.jpg';
import landing4 from '../../../assets/landing4.jpg';
import hover from '../../../assets/hover.png';
import hover1 from '../../../assets/hover1.png';
import hover2 from '../../../assets/hover2.png';
import hover3 from '../../../assets/hover3.png';
import hover4 from '../../../assets/hover4.png';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { BG_COLOR, LANDING_COLOR } from '../config';
import quote from '../../../assets/quote.png'
import sr from '../../../assets/sr.jpg'
import bjp from '../../../assets/bjp.jpg'
import avtar from '../../../assets/images.png'
import svg1 from '../../../assets/livecourse.avif'
import svg2 from '../../../assets/vedio.png'
import svg3 from '../../../assets/text.png'
import svg4 from '../../../assets/webinar.png'
import { MAIN_COLOR } from '../../../constant';

const imgdata = [
    {
        id: 1,
        img: landing1,
        text: 'SUBARU',
        img1: hover1
    },
    {
        id: 2,
        img: landing2,
        text: 'KUSTOM TIMBER',
        img1: hover2
    },
    {
        id: 3,
        img: landing3,
        text: 'PURE RUNNING',
        img1: hover3
    },
    {
        id: 4,
        img: landing4,
        text: 'THE JERKY CO',
        img1: hover4
    }
]


const HowWeDo = () => {

    return <>
        <Grid item xs={12} sx={{ bgcolor: LANDING_COLOR, height: '10px', padding: '10px' }}>
        </Grid>
        <Grid container sx={{ padding: '30px 20px' }}>
            <Grid xs={12} item sx={{ mb: '40px' }}>
            <Typography align='center' sx={{ fontFamily: 'cursive !important', color: 'black', fontSize: { lg: '25px', xs: '17px' }, fontWeight: 500, }}>
            Investing in yourself is the best investment you will ever make!
            </Typography>
            <Typography align='center' paragraph>
               Education is an important part of being a competent individual, skillful manager, and charismatic leader. There is always room for improvement, most importantly – meaningful professional development. 
                    </Typography>
              
                <Typography align='center' sx={{ fontWeight: 900, fontSize: { lg: '40px', xs: '25px' },color:MAIN_COLOR,mt:{lg:"30px",md:"25px",sm:"15px",xs:"10px" }}}>Our Professional Development Courses are provided in several formats:
</Typography>
            </Grid>
            <Grid container >
                <Grid item lg={2.7} sx={{ p: '10px', mr: '30px',display:"flex",flexDirection:"column",justifyContent:"space-between" }}>
                    <img src={svg1} alt="Seo"  height={"100px"} width={"110px"}  />
                    <Typography sx={{ fontWeight: 900, mt: '10px', mb: '20px' }}>Live Courses</Typography>
                    <Typography paragraph>
                    Our live, online, and interactive courses are taught by individuals who are competent and expert in their fields. 
                    </Typography>
                    <Box sx={{ borderBottom: `4px solid ${LANDING_COLOR}`, width: '30px', pb: '6px', cursor: 'pointer', transition: 'all 0.37s ease', '&:hover': { width: '140px' } }}>
                        <Box sx={{ width: '150px' }}>
                            <Typography sx={{ fontWeight: 900, color: LANDING_COLOR }}>Live Courses</Typography>
                        </Box>
                    </Box>
                   
                </Grid>
                <Grid item lg={2.7} sx={{ p: '10px', mr: '30px',display:"flex",flexDirection:"column",justifyContent:"space-between" }}>
                    <img src={svg2} alt="app development" height={"100px"} width={"100px"} />
                    <Typography sx={{ fontWeight: 900, mt: '10px', mb: '20px' }}>Video Courses</Typography>
                    <Typography paragraph>
                    Video courses provide an in-depth explanation of the covered content and can be at your own pace. 
                    </Typography>
                    <Box sx={{ borderBottom: `4px solid ${LANDING_COLOR}`, width: '30px', pb: '6px', cursor: 'pointer', transition: 'all 0.37s ease', '&:hover': { width: '180px' } }}>
                        <Box sx={{ width: '200px' }}>
                            <Typography sx={{ fontWeight: 900, color: LANDING_COLOR }}>Video Courses</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={2.7} sx={{ p: '10px', mr: '30px',display:"flex",flexDirection:"column",justifyContent:"space-between" }}>
                    <img src={svg3} alt="web design" height={"100px"} width={"100px"} />
                    <Typography sx={{ fontWeight: 900, mt: '10px', mb: '20px' }}>Text-Based Courses</Typography>
                    <Typography paragraph>
                    These are courses that utilize written text-based instruction which requires reading and attention to detail. 
                    </Typography>
                    <Box sx={{ borderBottom: `4px solid ${LANDING_COLOR}`, width: '30px', pb: '6px', cursor: 'pointer', transition: 'all 0.37s ease', '&:hover': { width: '140px' } }}>
                        <Box sx={{ width: '150px' }}>
                            <Typography sx={{ fontWeight: 900, color: LANDING_COLOR }}>Text-Based Courses</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={2.7} sx={{ p: '10px',display:"flex",flexDirection:"column",justifyContent:"space-between" }}>
                    <img src={svg4} alt="hosting"  height={"100px"} width={"100px"}/>
                    <Typography sx={{ fontWeight: 900, mt: '10px', mb: '20px' }}>Webinars</Typography>
                    <Typography paragraph>
                    We offer an array of webinars in several disciplines and professions on our platform. They are interactive and motivational.
                    </Typography>
                    <Box sx={{ borderBottom: `4px solid ${LANDING_COLOR}`, width: '30px', pb: '6px', cursor: 'pointer', transition: 'all 0.37s ease', '&:hover': { width: '120px' } }}>
                        <Box sx={{ width: '120px' }}>
                            <Typography sx={{ fontWeight: 900, color: LANDING_COLOR }}>Webinars</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: LANDING_COLOR, height: '0px', padding: 'px' }}>
        </Grid>
    </>
}

const MainContent = () => {
    return (<>
        <HowWeDo />
    </>
    )
}

export default MainContent