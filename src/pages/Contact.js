import { Box, Button, Checkbox, Container, FormControlLabel, FormGroup, Grid, TextField, TextareaAutosize, Typography } from '@mui/material';
import React, { useContext } from 'react';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import contactwall from '../assets/contactwall.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SendMessage from '../components/SendMessage';
import { MAIN_COLOR, MOBILE } from '../constant';
import useBottomBar from '../utils/useBottomBar';
import BottomNavBar from '../global/BottomNavBar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ContactUs = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    const { state } = useBottomBar();

    const goToContactPage=()=>{
        window.open('https://admin.mytutorroom.com/contact'); 
    }


    return (
        <>
            {state.currentScreenSize < 918 && <BottomNavBar />}
            <Header />
            <Grid container >

                <Grid container sx={{ pt: '90px', height: '440px', backgroundImage: `url(${contactwall})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(90,90,90)', backgroundBlendMode: 'multiply' }}>
                    <Grid item xs={7} sx={{ mt: '-6%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Typography variant='h2' sx={{ fontSize: { lg: '55px', md: '48px', sm: '40px', xs: '36px' }, fontWeight: '600', textAlign: 'center', color: MAIN_COLOR }}>Contact Us </Typography>



                    </Grid>

                </Grid>
                <Container disableGutters>


                    <Grid container sx={{ mt: { lg: '50px', md: '40px', sm: '30px', xs: '30px' }, display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', padding: '20px 18px' }}>
                        <Grid item data-aos='fade-up' lg={5.44} md={6} sm={12} xs={12} sx={{ borderRadius: '10px', boxShadow: '1px 1px 10px 0px rgba(0,0,0,0.75)', height: '450px' }}>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3468.5519757846278!2d-98.48714869999999!3d29.6167077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c6206df1cd273%3A0x672fa5a7d2bdc533!2s401%20E%20Sonterra%20Blvd%20Suite%20375%2C%20San%20Antonio%2C%20TX%2078258%2C%20USA!5e0!3m2!1sen!2sin!4v1697610015393!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                        </Grid>
                        <Grid item lg={5} md={5} sm={12} xs={12}>
                            <Grid container sx={{justifyContent:'space-around', alignItems:'center', flexDirection:'column'}}>
                                <Grid item lg={7} md={8} sm={12} xs={12} sx={{mt: { lg: '20px', md: '20px', sm: '20px', xs: '25px' }}}>
                                    <Button data-aos='fade-up' variant='contained'sx={{fontSize:'16px'}} onClick={goToContactPage}>Click here To Fill Form</Button>

                                </Grid>

                                <Grid item data-aos='fade-up' lg={7} md={7} sm={12} xs={12} sx={{ mt: { lg: '20px', md: '20px', sm: '20px', xs: '25px' }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant='h5' sx={{ fontSize: { lg: '35px', md: '33px', sm: '30px', xs: '28px' }, color: '#01579b', fontWeight: '600' }}>Locate Us</Typography>
                                    <Typography variant='h2' sx={{ fontSize: '18px', fontWeight: '600' }}>San Antonio</Typography>
                                    <Typography sx={{ fontSize: { lg: '19px', md: '19px', sm: '17px', xs: '16px' }, mt: '5px', textAlign: 'center' }}>401 E Sonterra Blvd. Ste 375, <br />San Antonio, TX 78258, <br />info@mytutorroom.com</Typography>
                                    <Typography sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', fontSize: { lg: '19px', md: '19px', sm: '17px', xs: '16px' } }}><PhoneIphoneIcon fontSize='small' />{MOBILE}</Typography>



                                </Grid>

                            </Grid>
                        </Grid>

                    </Grid>

                </Container>
            </Grid >
            <SendMessage />
            <Footer />
        </>

    )
}

export default ContactUs