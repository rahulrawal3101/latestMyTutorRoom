import { Box, Grid, Typography } from '@mui/material'
import { MAIN_COLOR } from '../constant';
import angular from '../assets/angular2.png'
import flutter from '../assets/flutter2.png'
import python from '../assets/python.png'
import node from '../assets/node.png'
import javaSc from '../assets/jsav.png'
import ProposalInput from '../global/ProposalInput';
import maths from '../assets/math1.jpg'
import science1 from '../assets/science.png'
import fench from '../assets/french.png'
import english from '../assets/english1.png'
import test from '../assets/test1.png'
import '../pages/Homepage.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const BannerText = () => {

    useEffect(()=>{
        AOS.init({duration:2000})
         },[])

       const goToHomePage=()=>{
        window.open('https://admin.mytutorroom.com/classes'); 
       }  

    return (
        <Grid container sx={{ justifyContent: 'space-evenly', flexDirection: 'column', alignItems: 'center', flexWrap: 'nowrap', height: '100%' }}>
            <Grid item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Typography textAlign={'center'} sx={{ userSelect: 'none', width: { lg: '45rem', sm: '30rem', xs: '25rem', md: '50rem' }, color: 'white', fontSize: { lg: '60px', sm: '40px', xs: '30px' } }}>Improving Education  <span style={{ textAlign: 'center', paddingLeft: '10px', color: MAIN_COLOR, fontWeight: 900 }}>Outcomes  </span>for All!</Typography>
                <Typography textAlign={'center'} sx={{ m: '10px 0px 30px 0px', userSelect: 'none', width: { lg: '45rem', sm: '30rem', xs: '20rem', md: '50rem' }, color: 'white', fontSize: { lg: '17px', sm: '14px', xs: '12px' } }}>
                We believe that effective tutoring can help strengthen subject comprehension, boost confidence, and build important learning skills. Our tutoring program will help students with the skills they need to deal with the challenges at school and improve their critical thinking abilities. 
                </Typography>
            </Grid>
            {/* <ProposalInput style={{ m: { lg: 1, xs: 3 }, width: { md: '70%', lg: '50%' }, color: 'white' }} title={"What would you like to learn?"} button={"search"}/> */}

            <Grid container sx={{ mt:{xs:"20px",sm:"30px",md:"40px",lg:"60px"}, alignItems: 'flex-end', justifyContent: 'space-evenly',p:"10px",pb:"20px" }}>
                <Grid item xs={2} lg={1.2} md={1.5} sm={1.5} data-aos="fade-right" onClick={goToHomePage} >
                    <Box sx={{height:{lg:"110px",md:"90px",sm:"80px",xs:"65px"},transition:"0.3s all ease-in","&:hover": {transform: "scale(1.1)"}}}>
                         <img src={maths} height={"100%"} width={"100%"} style={{borderRadius:"12px"}}/>
                         <Typography align='center' sx={{fontSize:{lg:"17px",md:"18px",sm:"12px",xs:"10px"},whiteSpace:"nowrap",fontWeight:"900",color:"white",mt:"-5px"}}>MATH</Typography>
                    </Box>
                </Grid>
                <Grid item xs={2} lg={1.2} md={1.5} sm={1.5} data-aos="fade-down" onClick={goToHomePage} >
                    <Box sx={{height:{lg:"110px",md:"90px",sm:"80px",xs:"65px"},transition:"0.3s all ease-in","&:hover": {transform: "scale(1.1)"}}}>
                         <img src={science1} height={"100%"} width={"100%"} style={{borderRadius:"12px"}}/>
                         <Typography align='center' sx={{fontSize:{lg:"17px",md:"18px",sm:"12px",xs:"10px"},whiteSpace:"nowrap",fontWeight:"900",color:"white",mt:"-5px"}}>SCIENCE</Typography>
                    </Box>
                </Grid>
                <Grid item xs={2} lg={1.2} md={1.5} sm={1.5} data-aos="fade-up" onClick={goToHomePage} > 
                    <Box sx={{height:{lg:"110px",md:"90px",sm:"80px",xs:"65px"},transition:"0.3s all ease-in","&:hover": {transform: "scale(1.1)"}}}>
                         <img src={fench} height={"100%"} width={"100%"} style={{borderRadius:"12px"}}/>
                         <Typography align='center' sx={{fontSize:{lg:"17px",md:"18px",sm:"12px",xs:"10px"},whiteSpace:"nowrap",fontWeight:"900",color:"white",mt:"-5px"}}>FRENCH</Typography>
                    </Box>
                </Grid>
                <Grid item xs={2} lg={1.2} md={1.5} sm={1.5} data-aos="fade-down" onClick={goToHomePage} >
                    <Box sx={{height:{lg:"110px",md:"90px",sm:"80px",xs:"65px"},transition:"0.3s all ease-in","&:hover": {transform: "scale(1.1)"}}}>
                         <img src={english} height={"100%"} width={"100%"} style={{borderRadius:"12px"}}/>
                         <Typography align='center' sx={{fontSize:{lg:"17px",md:"18px",sm:"12px",xs:"10px"},whiteSpace:"nowrap",fontWeight:"900",color:"white",mt:"-5px"}}>English</Typography>
                    </Box>
                </Grid>
                <Grid item xs={2} lg={1.2} md={1.5} sm={1.5} data-aos="fade-left" onClick={goToHomePage} >
                    <Box sx={{height:{lg:"110px",md:"90px",sm:"80px",xs:"65px"},transition:"0.3s all ease-in","&:hover": {transform: "scale(1.1)"}}}>
                         <img src={test} height={"100%"} width={"100%"} style={{borderRadius:"12px"}}/>
                         <Typography align='center' sx={{fontSize:{lg:"17px",md:"18px",sm:"12px",xs:"10px"},whiteSpace:"nowrap",fontWeight:"900",color:"white",mt:"-5px"}}>TEST PREP</Typography>
                    </Box>
                </Grid>
              
            </Grid>
        </Grid >
    )
}

export default BannerText