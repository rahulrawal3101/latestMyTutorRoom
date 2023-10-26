import { Box, Button, Grid, OutlinedInput, Paper, Typography } from '@mui/material'
import Laravel from '../../assets/hire-wordpress-developer-banner.jpg'
import LaravelHire from '../../assets/wordpress-development-services-1.jpg'



import CheckIcon from '@mui/icons-material/Check';
import clutch from '../../assets/clutch.png'
import googleFirm from '../../assets/google-firms.png'
import hp1 from '../../assets/hp-and.png'
import hp2 from '../../assets/hp-PernodRicard.png'
import hp3 from '../../assets/hp-Panasonic.png'
import hp4 from '../../assets/hp-Ikea-Logo.png'
import hp5 from '../../assets/hp-Hero-logo.png'
import hiring from '../../assets/hiring-modal-one.jpg'
import hiring2 from '../../assets/hiring-modal-two.png'
import hiring3 from '../../assets/hiring-modal-three.jpg'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SendMessage from '../../components/SendMessage';
import { MAIN_COLOR } from '../../constant';
import useBottomBar from '../../utils/useBottomBar';
import BottomNavBar from '../../global/BottomNavBar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import HubIcon from '@mui/icons-material/Hub';



const LaravelPage = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    const { state } = useBottomBar()
    let six = Array(6).fill(1)
    return (

        <>
            <Header />
            {state.currentScreenSize < 918 && <BottomNavBar />}
            <Grid container >
                <Grid item xs={12} sx={{ backgroundImage: `url(${Laravel})`, backgroundBlendMode: "multiply", backgroundRepeat: "no-repeat", backgroundSize: "cover", bgcolor: "rgba(0, 0, 0, 0.5)", p: "50px" }}>

                    <Grid container sx={{ p: "10px" }}>
                        <Grid item xs={2} sm={2} md={1} lg={1} >

                        </Grid>

                        <Grid item xs={12} sm={12} md={10} lg={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Box sx={{ lineHeight: "9" }}>
                                <Box data-aos='fade-up' sx={{mt:{xs:'40px'}}}>
                                    <Typography variant='h4' sx={{ fontWeight: "800", color: "white" , fontSize:{lg:'33px', md:'30px', sm:'30px', xs:'22px'}}}>
                                        Hire LaravelPage Developer
                                    </Typography>
                                    <Typography sx={{ color: "white", mt: "20px", fontSize:{ lg:"20px", md:'17px', sm:'17px', xs:'15px'} }}>
                                        Develop an intuitive &amp; feature-rich website with the experienced, well-versed, &amp; skilled assistance of LaravelPage developers.
                                    </Typography>
                                    <Box sx={{ mt: "40px" }}>
                                        <Typography sx={{ color: "white", mt: "20px", fontSize: {lg:"16px", xs:'15px'}, display: "flex", alignItems: "center" }}><CheckIcon sx={{ color: MAIN_COLOR, mr: "8px" }} />Extensive expertise</Typography>
                                        <Typography sx={{ color: "white", mt: "20px", fontSize: {lg:"16px", xs:'15px'}, display: "flex", alignItems: "center" }}><CheckIcon sx={{ color: MAIN_COLOR, mr: "8px" }} />Hands-on technology</Typography>
                                        <Typography sx={{ color: "white", mt: "20px", fontSize: {lg:"16px", xs:'15px'}, display: "flex", alignItems: "center" }}><CheckIcon sx={{ color: MAIN_COLOR, mr: "8px" }} />360-degree innovation</Typography>
                                        <Typography sx={{ color: "white", mt: "20px", fontSize: {lg:"16px", xs:'15px'}, display: "flex", alignItems: "center" }}><CheckIcon sx={{ color: MAIN_COLOR, mr: "8px" }} />Seamless integration</Typography>
                                        <Typography sx={{ color: "white", mt: "20px", fontSize: {lg:"16px", xs:'15px'}, display: "flex", alignItems: "center" }}><CheckIcon sx={{ color: MAIN_COLOR, mr: "8px" }} />Easy to scale up &amp; down</Typography>

                                    </Box>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} lg={5} sx={{ mt: { xs: "70px", sm: "70px", md: "70px", lg: "35px" }, display: { xs: "none", sm: "none", md: "none", lg: "flex" }, justifyContent:'center', alignItems:'center', }}>
                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                                    <Paper sx={{ height: "fit-content", width: { xs: "90%", sm: "90%", md: "60%", lg: "55%" }, lineHeight: "4.5", p: "0px 14px 14px 14px ", }}>
                                        <Box sx={{ mt: "-20px", borderRadius: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <Box sx={{ p: "20px", borderRadius: "15px", bgcolor: MAIN_COLOR, width: "60%" }}>
                                                <Typography align='center' sx={{ color: "white", fontSize: "17px", bgcolor: MAIN_COLOR }}>
                                                    Request a free quote
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <OutlinedInput placeholder='Full Name' fullWidth sx={{ height: "40px" }} />
                                        <OutlinedInput placeholder='Buisness Email Address' fullWidth sx={{ height: "40px" }} />
                                        <OutlinedInput placeholder='Phone Number' fullWidth sx={{ height: "40px" }} />
                                        <OutlinedInput placeholder='Oragnisation/Institution' fullWidth sx={{ height: "40px" }} />
                                        <OutlinedInput placeholder='Message' fullWidth sx={{ height: "40px" }} />

                                        <Button variant='contained' sx={{ bgcolor: MAIN_COLOR, fontSize: "17px", borderRadius: "25px", fontWeight: "800", p: "10px 15px 10px 15px", "&:hover": { bgcolor: MAIN_COLOR } }} fullWidth>
                                            submit
                                        </Button>

                                    </Paper>
                                </Box>
                            </Grid>

                    </Grid>

                </Grid>
            </Grid>
            <Grid item xs={12} lg={4} sx={{ mb: "20px", mt: { xs: "70px", sm: "70px", md: "70px", lg: "35px" }, display: { sm: "block", sm: "block", md: "block", lg: "none" } }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                        <Paper sx={{ height: "fit-content", width: { xs: "90%", sm: "90%", md: "60%", lg: "60%" }, lineHeight: "4.5", p: "0px 14px 14px 14px " }} elevation={5}>
                            <Box sx={{ mt: "-20px", borderRadius: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Box sx={{ p: "20px", borderRadius: "15px", bgcolor: MAIN_COLOR, width: "60%" }}>
                                    <Typography align='center' sx={{ color: "white", fontSize: "17px", bgcolor: MAIN_COLOR }}>
                                        Request a free quote
                                    </Typography>
                                </Box>
                            </Box>
                            <OutlinedInput placeholder='Full Name' fullWidth sx={{ height: "40px" }} />
                            <OutlinedInput placeholder='Buisness Email Address' fullWidth sx={{ height: "40px" }} />
                            <OutlinedInput placeholder='Phone Number' fullWidth sx={{ height: "40px" }} />
                            <OutlinedInput placeholder='Oragnisation/Institution' fullWidth sx={{ height: "40px" }} />
                            <OutlinedInput placeholder='Message' fullWidth sx={{ height: "40px" }} />

                            <Button variant='contained' sx={{ bgcolor: MAIN_COLOR, fontSize: "17px", borderRadius: "25px", fontWeight: "800", p: "10px 15px 10px 15px", "&:hover": { bgcolor: MAIN_COLOR } }} fullWidth>
                                submit
                            </Button>

                        </Paper>
                    </Box>
                </Grid>

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "10px", mt: {lg:"-45px", md:'0', sm:'', xs:''},  }}>
                    <Grid container xs={8} sx={{ bgcolor: "white", boxShadow: " 0px -2px 38px -7px rgba(0,0,0,0.44)", p: "7px 3px", borderRadius: "15px" }}>
                        <Grid item xs={12} md={6} lg={3} sx={{ borderRight: {lg:"1px solid #efefef", md:'1px solid #efefef', sm:'', xs:''}}} spacing={2}>

                            <Typography align='center' sx={{ fontSize: {lg:"40px", md:'35px', sm:'30px', xs:'25px'}, fontWeight: "800", color: MAIN_COLOR }} >
                                600+
                            </Typography>
                            <Typography align='center' sx={{ fontWeight: "600", mt: "13px", fontSize: "20px" }}>
                                Happy Clients
                            </Typography>

                        </Grid>

                        <Grid item xs={12} md={6} lg={3} sx={{ borderRight: {lg:"1px solid #efefef", md:'1px solid #efefef', sm:'', xs:''}}}>

                            <Typography align='center' sx={{ fontSize:  {lg:"40px", md:'35px', sm:'30px', xs:'25px'}, fontWeight: "800", color: MAIN_COLOR }} >
                                50+
                            </Typography>
                            <Typography align='center' sx={{ fontWeight: "600", mt: "13px", fontSize: "20px" }}>
                                Happy Clients
                            </Typography>

                        </Grid>

                        <Grid item xs={12} md={6} lg={3} sx={{ borderRight: {lg:"1px solid #efefef", md:'1px solid #efefef', sm:'', xs:''} }}>

                            <Typography align='center' sx={{  fontSize:{lg:"40px", md:'35px', sm:'30px', xs:'25px'}, fontWeight: "800", color: MAIN_COLOR }} >
                                21+
                            </Typography>
                            <Typography align='center' sx={{ fontWeight: "600", mt: "13px", fontSize: "20px" }}>
                                Happy Clients
                            </Typography>

                        </Grid>

                        <Grid item xs={12} md={6} lg={3} sx={{ borderRight: {lg:"1px solid #efefef", md:'1px solid #efefef', sm:'', xs:''} }}>

                            <Typography align='center' sx={{ fontSize:  {lg:"40px", md:'35px', sm:'30px', xs:'25px'}, fontWeight: "800", color: MAIN_COLOR }} >
                                400+
                            </Typography>
                            <Typography align='center' sx={{ fontWeight: "600", mt: "13px", fontSize: "20px" }}>
                                Happy Clients
                            </Typography>

                        </Grid>

                    </Grid>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "10px" }}>
                    <Grid container xs={4} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        <Grid item data-aos='fade-right' xs={12} sm={12} md={5.5} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} >
                           <Box sx={{width:{lg:'180px', md:'160px', sm:'140px', xs:'120px'}, height:{lg:'85px', md:'80px', sm:'76px', xs:'70px'} }}>
                            <img src={clutch}  alt='clutch' height={'100%'} width={'100%'}/>

                           </Box>
                            <Typography align='center' sx={{ fontSize: "15px",fontWeight:'800' }}> We are rated 4.8 out of 5  on average.</Typography>
                        </Grid>
                        <Grid item data-aos='fade-left' xs={12} sm={12} md={5.5} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", mt:{xs:'10px'} }}>
                        <Box sx={{width:{lg:'180px', md:'160px', sm:'160px', xs:'155px'}, height:{lg:'85px', md:'80px', sm:'76px', xs:'70px'} }}>

                            <img src={googleFirm} alt='googlefirm' height={'100%'} width={'100%'}/>
                        </Box>
                            <Typography align='center' sx={{ fontSize: "15px", fontWeight:'800' }}> We are rated 4.8 out of 5  on average.</Typography>

                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ display:{ lg:"flex", md:'flex', sm:'flex', xs:'none'}, justifyContent: "center", alignItems: "center", bgcolor: "black", p: "15px", m: '30px' }}>
                    <Grid container xs={12}  >
                        <Grid item xs={2} sm={2} md={2} lg={2} data-aos='fade-up' sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Box sx={{width:{lg:'170px', md:'130px', sm:'90px', xs:'70px'}, height:{lg:'60px', md:'50px', sm:'50px', xs:'40px'}}}>
                            <Typography sx={{ fontSize: {lg:"18px", md:'16px', sm:'13px', xs:'11px'}, color: "white", fontWeight:'900' }}>
                                Trusted by Global Brands
                            </Typography>
                            </Box>
                           
                        </Grid>
                        <Grid item xs={2} sm={2} md={2} lg={2}data-aos='fade-up'sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                        <Box sx={{width:{lg:'170px', md:'130px', sm:'90px', xs:'70px'}, height:{lg:'60px', md:'50px', sm:'50px', xs:'40px'} }}>

                            <img src={hp1} alt='img' height="100%" width="100%" />
                        </Box>
                        </Grid>
                        <Grid item xs={2} sm={2} md={2} lg={2} data-aos='fade-up'sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                        <Box sx={{width:{lg:'170px', md:'130px', sm:'90px', xs:'70px'}, height:{lg:'60px', md:'50px', sm:'45px', xs:'38px'} }}>

                            <img src={hp2} alt='img' height="100%" width="100%" />
                        </Box>
                        </Grid>
                        <Grid item xs={2} sm={2} md={2} lg={2} data-aos='fade-up'sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{width:{lg:'170px', md:'130px', sm:'90px', xs:'70px'}, height:{lg:'60px', md:'50px', sm:'45px', xs:'38px'} }}>

                            <img src={hp3} alt='img' height="100%" width="100%" />
                        </Box>
                        </Grid>
                        <Grid item xxs={2} sm={2} md={2} lg={2} data-aos='fade-up'sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{width:{lg:'170px', md:'130px', sm:'90px', xs:'70px'}, height:{lg:'60px', md:'50px', sm:'45px', xs:'38px'}  }}>

                            <img src={hp4} alt='img' height="100%" width="100%" />
                        </Box>
                        </Grid>
                        <Grid item xs={2} sm={2} md={2} lg={2} data-aos='fade-up'sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{width:{lg:'170px', md:'130px', sm:'90px', xs:'70px'}, height:{lg:'60px', md:'50px', sm:'45px', xs:'38px'}  }}>

                            <img src={hp5} alt='img' height="100%" width="100%" />
                        </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Grid container sx={{ p: { xs: "8px", sm: "8px", md: "8px", lg: "15px", m: '20px 0px' } , justifyContent:'space-evenly', alignItems:'center'}}>
                
                <Grid item xs={12} md={5} lg={5} data-aos='fade-up'>
                    <Typography sx={{ fontSize:{lg:'33px', md:'30px', sm:'30px', xs:'22px'}, fontWeight: "800", color: MAIN_COLOR }} >
                        Hire Dedicated LaravelPage Developers with Flexibility
                    </Typography>
                    <Typography sx={{ mt: "10px", fontSize:{ lg:"16px", xs:'15px'}, mb: "15px" }}>
                        LaravelPage has long dominated the world of website development and blogging. It’s the single most popular website builder. According to LaravelPage.org, 38% of the entire web is built on LaravelPage. Small businesses and Fortune 500 companies alike use the framework for building and managing their digital ecosystem.
                    </Typography>
                    <Typography sx={{ mt: "10px", fontSize:{ lg:"16px", xs:'15px'}, mb: "15px" }}>
                        We nurture a team of experienced LaravelPage developers who can efficiently fulfill your digital solution requirements. Their years-long experience of working in multiple industry verticals helps them build the right solution for you. Whether you want to launch a personal blog, a business website, or an online store, you can hire a dedicated LaravelPage developer to meet your needs.
                    </Typography>

                </Grid>
                <Grid item xs={12} md={5} lg={5} sx={{display:'flex', justifyContent:'center', alignItems:'center', mt:{xs:'10px'}}}>
                   
                    <Box  data-aos='fade-up' sx={{ height: "350px", width: { xs: "90%", sm: "85%", md: "80%", lg: "80%" }, borderRadius: "25px", overflow: "hidden",boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)' }}>
                            <img src={LaravelHire} height="100%" width="100%" alt='img3' />
                        </Box>
                </Grid>
            </Grid>


            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: { xs: "8px", sm: "8px", md: "8px", lg: "15px" } , bgcolor:'black' }}>
                <Grid container xs={12} sm={12} md={10} lg={9}>
                    <Grid xs={12} item sx={{ display: "flex", justifyContent: "center" }}>
                        <Box >
                            <Typography align='center' sx={{ fontSize: {lg:'33px', md:'30px', sm:'30px', xs:'22px'}, fontWeight: "800", color: MAIN_COLOR }} >
                                End-To-End LaravelPage Development Services
                            </Typography>
                            <Typography align='center' sx={{fontSize:{lg:'16px', md:'15px', sm:'13px', xs:'13px'}, color:'white',fontWeight: "400",  }}>
                                When you hire LaravelPage developers from us, the scope of your digital world becomes virtually limitless. We offer an extensive range of design, development, and tech support services for all kinds of needs.
                            </Typography>
                        </Box>
                    </Grid>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "15px" }}>
                        <Grid container xs={12} spacing={3}>
                            {
                                six.map(() => {
                                    return (
                                        <Grid item xs={12} sm={6} md={4} sx={{ mt: "30px" }} data-aos='fade-up'>
                                            <Paper sx={{ borderRadius: "35px 10px 35px 10px", p: "20px", border: "1px solid rgba(9,49,150,1)",boxShadow: ' 0px 0px 13px 0px rgba(9,49,150,1)' }} >
                                                <Typography sx={{ fontSize: "23px", fontWeight: "800", color: MAIN_COLOR }} >
                                                    Comprehensive skillset
                                                </Typography>
                                                <Typography sx={{ mt: "10px", fontSize: { lg:"14px", xs:'14px'},  }}>
                                                    Get flawless, high-quality, and optimized codes which are written by expert PHP professionals to ensure that your application runs seamlessly.
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                    )
                                })
                            }

                        </Grid>
                    </Box>
                </Grid>
            </Box>

            <Grid container spacing={2} sx={{ bgcolor: "#002F96", overflow:"hidden",p: "20px" }}>
                    <Grid xs={12} item sx={{ display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: { xs: "100%", sm: "100%", md: "70%", lg: "60%" } }}>
                            <Typography align='center' sx={{ fontSize:{lg:'33px', md:'30px', sm:'30px', xs:'22px'}, fontWeight: "800", color: MAIN_COLOR }} >
                                Our Hiring Models
                            </Typography>
                            <Typography align='center' sx={{ color: "white", fontSize: {lg:"16px", xs:'16px'}, fontWeight: "400", }}>
                                Explore the engagement models we offer to hire Angular JS developer for your project         </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={0} sm={1} md={1.5} lg={2}></Grid>
                    <Grid item xs={12} md={5} lg={6} sx={{ mt: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ lineHeight: "2.5", height: "70%", pt: {lg:"20px", md:'20px', sx:'10px', xs:'0px'} }}>
                            <Typography sx={{ fontSize: {lg:"25px", md:'24px', sm:'23px', xs:'22px'}, fontWeight: "800", color: "white" }}>
                                Hourly-Basis
                            </Typography>
                            <Typography sx={{ fontWeight: "400", fontSize: {lg:"17px", xs:'15px'}, lineHeight: "25px", textAlign: "left", color: "#fff" }}>
                                As the name suggests, the hourly-basis or pay-as-you-go model offers AngularJS development services on an hourly basis. Billing is done per hour but you have to pay on a monthly basis while you can communicate via phone, email or Skype.
                            </Typography>

                        </Box>
                    </Grid>
                    <Grid item data-aos='fade-left' xs={12} md={5} lg={2.9} sx={{ mt: {lg:"15px", xs:'22px'}, display: "flex", p: "15px", }}>
                        <Box sx={{ height: "250px", width: "100%", borderRadius: "25px", overflow: "hidden" }}>
                            <img src={hiring} height="100%" width="100%" />
                        </Box>
                    </Grid>




                    <Grid item xs={0} sm={1} md={1.5} lg={2}></Grid>
                    <Grid item data-aos='fade-right' xs={12} md={5} lg={2.9} sx={{ mt: "15px", display: "flex", }}>
                        <Box sx={{ height: "250px", width: "100%", borderRadius: "25px", overflow: "hidden" }}>
                            <img src={hiring2} height="100%" width="100%" />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={5} lg={6} sx={{ mt: {lg:"15px", xs:'1px'}, display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ lineHeight: "2.5", height: "70%", pt: "20px" }}>
                            <Typography sx={{ fontSize: {lg:"25px", md:'24px', sm:'23px', xs:'22px'}, fontWeight: "800", color: "white" }}>
                                Part-Time Hiring
                            </Typography>
                            <Typography sx={{ fontWeight: "400", fontSize: {lg:"17px", xs:'15px'}, lineHeight: "25px", textAlign: "left", color: "#fff" }}>
                                As the name suggests, the hourly-basis or pay-as-you-go model offers AngularJS development services on an hourly basis. Billing is done per hour but you have to pay on a monthly basis while you can communicate via phone, email or Skype.
                            </Typography>
                        </Box>
                    </Grid>


                    <Grid item xs={0} sm={1} md={1.5} lg={2}></Grid>
                    <Grid item xs={12} md={5} lg={6} sx={{ mt: {lg:"15px", xs:'1px'}, display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ lineHeight: "2.5", height: "70%", pt: "20px" }}>
                            <Typography sx={{ fontSize: {lg:"25px", md:'24px', sm:'23px', xs:'22px'}, fontWeight: "800", color: "white" }}>
                                Full-Time Hiring
                            </Typography>
                            <Typography sx={{ fontWeight: "400",  fontSize: {lg:"17px", xs:'15px'}, lineHeight: "25px", textAlign: "left", color: "#fff" }}>
                                As the name suggests, the hourly-basis or pay-as-you-go model offers AngularJS development services on an hourly basis. Billing is done per hour but you have to pay on a monthly basis while you can communicate via phone, email or Skype.
                            </Typography>

                        </Box>
                    </Grid>
                    <Grid item data-aos='fade-left' xs={12} md={5} lg={2.9} sx={{ mt: {lg:"15px", xs:'22px'}, display: "flex", p: "15px" }}>
                        <Box sx={{ height: "250px", width: "100%", borderRadius: "25px", overflow: "hidden" }}>
                            <img src={hiring3} height="100%" width="100%" />
                        </Box>
                    </Grid>




                </Grid>

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", bgcolor:'black' }}>
                <Grid container sx={{ display: "flex", justifyContent: "center" }} >
                    <Grid xs={10} item >
                        <Box >
                            <Typography align='center' sx={{ fontSize: {lg:'33px', md:'30px', sm:'30px', xs:'22px'}, fontWeight: "800", color: MAIN_COLOR }} >
                                Different Hiring Models for Different Needs
                            </Typography>
                            <Typography align='center' sx={{ fontSize:{lg:'16px', md:'15px', sm:'13px', xs:'13px'},color:'white' ,fontWeight: "400", }}>
                                When you hire LaravelPage developers from us, the scope of your digital world becomes virtually limitless. We offer an extensive range of design, development, and tech support services for all kinds of needs.
                            </Typography>
                        </Box>
                    </Grid>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "15px" }}>
                        <Grid container xs={12} sm={12} md={10} lg={8} spacing={2}>
                            {
                                six.map((ele) => {
                                    return (
                                        <Grid item data-aos='fade-up' xs={12} sm={6} md={6} sx={{ mt: "30px", }}>
                                            <Paper sx={{ borderRadius: "35px 10px 35px 10px", p: "15px" }} elevation={3}>
                                                <Box sx={{ bgcolor: "#f4f4f4", p: "13px", borderRadius: "100%", width: "fit-content", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <HubIcon sx={{ fontSize: "45px" }} />
                                                </Box>
                                                <Typography sx={{ fontSize: {lg:"19px", md:'19px', sm:'17px', xs:'17px'}, fontWeight: "800", color: MAIN_COLOR }} >
                                                    Comprehensive skillset
                                                </Typography>
                                                <Typography sx={{ mt: "10px",  fontSize: {lg:"16px", xs:'15px'}, fontWeight: "400",  }}>
                                                    Get flawless, high-quality, and optimized codes which are written by expert PHP professionals to ensure that your application runs seamlessly.
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                    )
                                })
                            }

                        </Grid>
                    </Box>
                </Grid>
            </Box>
            <SendMessage />
            <Footer />
        </>
    )
}

export default LaravelPage