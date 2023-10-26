import { Box, Button, Container, Grid, Typography } from '@mui/material';
// import orange from '../../assets/orange.jpg'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ChairAltIcon from '@mui/icons-material/ChairAlt';
import DomainIcon from '@mui/icons-material/Domain';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LuggageIcon from '@mui/icons-material/Luggage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import adelteam from '../../assets/acad1.jpeg';
import new1 from '../../assets/androidnew2.jpg';
import awspic from '../../assets/androidpage.jpg';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { MAIN_COLOR } from '../../constant';
import BottomNavBar from '../../global/BottomNavBar';
import useBottomBar from '../../utils/useBottomBar';
import androidnew2 from '../../assets/requesttut.jpg'
import Groups2Icon from '@mui/icons-material/Groups2';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import LanIcon from '@mui/icons-material/Lan';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import TranslateIcon from '@mui/icons-material/Translate';
import QuizIcon from '@mui/icons-material/Quiz';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import '../Homepage.css';

import { useEffect } from 'react';

const AndroidNewPage = () => {
    
    const { state } = useBottomBar()
    
 useEffect(()=>{
    AOS.init({
        duration:2000
    })
 },[])

    const AllBuisness = [{
        icon: <LiveTvIcon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name: "1:1 Live Tutoring"
    },
    {
        icon: <Diversity1Icon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name:"Group Tutoring"
    },
    {
        icon: <LanIcon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name: "k-12"
    },
    {
        icon: <AccountBalanceIcon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name: "College/University"
    },
    {
        icon: <LocalLibraryIcon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name: "Accelerated Learning"
    },
    {
        icon: <TranslateIcon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name: "Foreign Language"
    },

    {
        icon: <QuizIcon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name: "Test/Exam Prep"
    },

    {
        icon: <HomeWorkIcon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name: "Homework Help"
    },

    ]


    return (
        <>
            {state.currentScreenSize < 918 && <BottomNavBar />}
            <Header />

            <Container disableGutters maxWidth={'xl'}>
                <Grid container>
                    <Grid item xs={12} sx={{ height:{lg:"80vh",md:"75vh",sm:"65vh",xs:"60vh"},backgroundImage: `url(${androidnew2})`, backgroundBlendMode: "multiply", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", bgcolor: "rgba(0, 0, 0, 0.5)", p: {lg:"30px",md:"25px",sm:"18px",xs:"10px"} }}>

                        <Grid container sx={{ p: "10px",mt:"40px" }}>
                            <Grid item xs={2} sm={2} md={1} lg={1} >

                            </Grid>

                            <Grid item xs={12} sm={12} md={10} lg={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Box sx={{ lineHeight: "10", pt: '40px' }}>
                                    <Box>
                                        <Typography variant='h3' sx={{ fontWeight: "800", color: "white",  fontSize:{lg:"33px",md:"30px",sm:"28px",xs:"22px"}}}>
                                        Request an Expert Tutor Today
                                        </Typography>
                                        <Typography sx={{ color: "white", mt: "20px", fontSize: { lg: "15px", xs: '13px', md: '15px',sm:"14px" } }}>
                                        Our tutors are exceptionally skilled in their subjects and ready to provide tutoring services 24/7. They are passionate about what they do and find fulfillment in your success. Tutors at My Tutor Room leave no stone unturned in delivering a high-quality and transformative learning experience                                        </Typography>
                                        <Box sx={{ mt: "40px", display: "flex", justifyContent: { xs: "center", sm: "center", md: "center", lg: "left" } }}>
                                            <Button variant='contained' sx={{ textTransform: 'unset', bgcolor: MAIN_COLOR, fontSize: "17px", borderRadius: "16px", fontWeight: "800", p: "10px 40px", "&:hover": { bgcolor: MAIN_COLOR } }}>
                                            Request a Tutor
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    


                    <Grid item xs={12}>

                    <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', bgcolor:"rgba(10,8,59,0.9)", padding: '10px'}}>
                    <Grid item lg={4.5} md={4.5} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                        <Typography variant='h2' sx={{fontSize:{lg:"33px",md:"30px",sm:"28px",xs:"22px"}, fontWeight: '600', color: MAIN_COLOR }}>1:1 Live Tutoring</Typography>
                        <Typography variant='subtitle2' sx={{fontSize: { lg: "15px", xs: '13px', md: '15px',sm:"14px" }, mt: '20px', color: '#eeeeee' }}>Our tutoring programs are customized to give each student an individualized learning experience they can’t always get in the classroom. One that delivers results and builds confidence.  Our goal is to improve students’ academic performances in all subjects by providing guided explanations, homework assistance, and test preparation. </Typography>
                    </Grid>
                    <Grid item lg={5} md={5} sm={12} xs={12} sx={{ mt: { lg: '0px', md: '0px', sm: '5px', xs: '8px' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Box sx={{ width: { lg: '80%', md: '80%', sm: '100%', xs: '100%' }, height: { lg: '400px', md: '400px', sm: '390px', xs: '350px' }, borderRadius: { lg: '15%', md: '15%', sm: '10%', xs: '10px' }, mt: '25px' }}>
                            <img src={new1} alt='meeting' width={'100%'} height={'95%'} style={{ borderRadius: '10%' }} />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container sx={{ flexWrap: "wrap-reverse", display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', bgcolor: 'rgba(10,8,59,0.9)', pb: "20px", }}>
                    <Grid item lg={5} md={5} sm={12} xs={12} data-aos="fade-up" sx={{ mt: { lg: '0px', md: '0px', sm: '5px', xs: '15px' }, display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                        <Box sx={{ width: { lg: '80%', md: '80%', sm: '100%', xs: '100%' }, height: '350px', borderRadius: '10%' }}>
                            <img src={adelteam} alt='meeting' width={'100%'} height={'100%'} style={{ borderRadius: '10%' }} />
                        </Box>
                    </Grid>
                    <Grid item lg={4.5} md={5} sm={12} xs={12} data-aos="fade-up" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                        <Typography variant='h4' sx={{  fontSize:{lg:"33px",md:"30px",sm:"28px",xs:"22px"}, fontWeight: '600', m: '20px', color: MAIN_COLOR }}>Group Tutoring</Typography>
                        <Typography sx={{ fontSize: { lg: "15px", xs: '13px', md: '15px',sm:"14px" }, color: '#eeeeee', ml: "" }}>Our tutors are qualified to provide small and medium-sized group tutoring to students of various grade levels. Group tutoring is ideal for parents who have a low budget but with high academic outcomes for their children. In this setting, students are prone to engage interactively with other students and can pick up very quickly from their peers. </Typography>
                    </Grid>
                </Grid>
                    </Grid>



                    <Grid item xs={12} sx={{ pb: "15px" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", mb: '20px' }} data-aos="fade-up">
                        <Box sx={{ width: { xs: "90%", sm: "90%", md: "70%", lg: "80%" }, mt: "20px" }}>
                            <Typography  align='center' sx={{fontSize:{lg:"33px",md:"30px",sm:"28px",xs:"22px"}, fontWeight: "800", color: MAIN_COLOR }} >
                            We Strive to Ensure Maximum Success for All Students we Encounter.
                            </Typography>
                            <Typography sx={{  fontSize: { lg: "15px", xs: '13px', md: '15px',sm:"14px" },textAlign: { xs: "", sm: "", md: "center", lg: "center" }, mt: "10px" }}>
                            When you hire an expert tutor from My Tutor Room, you invest in your child’s learning needs and their desire to forge a brighter future. 
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", mt: "20px" }}>
                        <Grid container sx={{ width: { xs: "99%", sm: "99%", md: "70%", lg: "80%" }, display:'flex', justifyContent:'space-between', alignItems:'center', bgcolor:'black', borderRadius:'10px'}} >
                            {
                                AllBuisness.map((ele) => {
                                    return (
                                        <Grid item xs={12} sm={12} md={6} lg={2.8} data-aos="fade-up" sx={{ boxShadow: '1px 1px 5px 0px rgba(65,100,240,1)',m:'5px', m:'10px 9px' ,borderRadius:'10px'}} >
                                            <Box sx={{height:'210px', bgcolor:'black',borderRadius:'10px', border:'1px solid #0277bd'}}>
                                                <Box sx={{ p: "20px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                                    {ele.icon}
                                                    <Typography align='center' sx={{ fontSize: "28px", fontWeight: "800", color: 'white' }}>{ele.name}</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    )
                                })
                            }

                        </Grid>
                    </Box>
                </Grid>

                  
                    
                </Grid>


                <Footer />

            </Container >

        </>
    )
}

export default AndroidNewPage