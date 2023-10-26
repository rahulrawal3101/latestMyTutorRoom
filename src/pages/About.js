import { Box, Container, Grid, Typography } from '@mui/material';
import team from '../assets/team.svg';
import first from '../assets/firstal.svg';
import web from '../assets/web.svg';
import email from '../assets/email.svg';
import seo from '../assets/seo.svg';
import years from '../assets/years.svg';
import mobileapp from '../assets/mobileapp.png';
import web1 from '../assets/webapp.png';
import landing from '../assets/landing.png';
import webdev from '../assets/webdev.png';
import "react-multi-carousel/lib/styles.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MAIN_COLOR } from '../constant';
import SendMessage from '../components/SendMessage';
import { Button } from '@mui/material';
import aboutimg from '../assets/aboutbanner.jpg';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import adelteam from '../assets/who.jpg';
import BottomNavBar from '../global/BottomNavBar';
import useBottomBar from '../utils/useBottomBar';
import vedio from '../assets/vediotut.mp4'
import { useContext, useEffect } from 'react';
import ReactPlayer from 'react-player'
import './Homepage.css';
import vision from '../assets/file.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';
import WhyUs from '../components/WhyUs';

const data = [
    {
        logo: team,
        number: '16+',
        text: 'Team Members'
    },
    {
        logo: first,
        number: '41',
        text: 'First Position'
    },
    {
        logo: email,
        number: '76',
        text: 'Email Campaigns'
    },
    {
        logo: seo,
        number: '96',
        text: 'SEO Campaigns'
    },
    {
        logo: years,
        number: '12',
        text: 'Years in Marketing'
    },
    {
        logo: web,
        number: '143',
        text: 'Web Analytics'
    }
];

const About = () => {

    const { state } = useBottomBar();
    const services = [
        { title: 'App Development', icon: mobileapp, desc: "Our goal in mobile app design is to create an intuitive and visually appealing interface that allows users to easily navigate and interact with the app’s features and functionality.", animate: "fade-right" },
        { title: 'Landing Page Design', icon: landing, desc: "Our goal in landing page design is to create an intuitive and visually appealing interface that allows users to easily navigate and interact with the page’s features and content.", animate: "fade-left" },
        { title: 'Web Design', icon: web1, desc: "Our goal in web design is to create an intuitive and visually appealing interface that allows users to easily navigate and interact with the website’s features and content.", animate: "fade-right" },
        { title: 'Web Development', icon: webdev, desc: "Our goal in web development is to create an intuitive and functional website that meets our clients' needs and requirements.", animate: "fade-left" }
    ].map((item) => {
        return (
            <Grid lg={4} md={4} sm={4} xs={12} className='servicesBox' item key={item.title} sx={{
                backgroundImage: `url(${item.icon})`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                p: '20px',
                borderRadius: '30px',
                m: { xs: "10px", sm: "10px", md: "10px 20px 20px 0px", lg: '10px 20px 20px 0px' },
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }} data-aos={`${item.animate}`}>
                <Typography className='servicesBoxhead' variant='h1' sx={{ fontSize: { lg: '25px', md: '25px', sm: '18px' }, fontWeight: 900, color: 'white', m: '0px 0px 30px 20px' }}>{item.title}</Typography>
                <Typography className='servicesBoxpara' paragraph sx={{ m: '-20px 0px 0px 20px', color: 'white', fontSize: { lg: '17px', md: '17px', sm: '14px', xs: '18px' } }}>{state.currentScreenSize < 700 ? item.desc.slice(0, 100) + '...' : item.desc}</Typography>
            </Grid>
        );
    });

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <>
            {state.currentScreenSize < 918 && <BottomNavBar />}
            <Header />
            <Container disableGutters maxWidth={false} sx={{ overflow: "hidden" }}>
                {/* <Grid container sx={{ height: 'fit-content',border:"1px solid red", padding: { lg: '100px 100px', xs: '100px 20px' }, backgroundImage: `url(${aboutimg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgb(80,80,80)', backgroundBlendMode: 'multiply', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                   
                    
                </Grid> */}
                <Grid container >
                    <Grid item xs={12} sx={{ bgcolor: 'black', height:{lg:'470px',md:"400px",sm:"200px",xs:"200px"}, textAlign: "center", padding: '80px 25px' }}>
                        <Typography variant='h1' sx={{ color: 'white', fontSize: { lg: '41px', xs: '20px' }, fontWeight: '600', mt: '15px' }}>Partner with My Tutor Room <br /><span style={{ color: MAIN_COLOR }}>Make Learning Engaging</span></Typography>
                        
                    </Grid>
                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',mb:{lg:"30px",md:"30px",sm:"0px",xs:"0px" }}}>
                        <Grid item
                            sx={{
                                height: { lg: '500px',md:"450px",sm:"400", xs: 'auto' },
                                overflow: "hidden",
                                mt: {lg:'-15rem',md:"-13rem",sm:"0px",xs:"0px"},
                                borderRadius: {lg:'20px',md:"20px",sm:"0px",xs:"0px"},
                            }}
                        >
                        <div style={{width:"100%",height:"100%"}}>

                            <ReactPlayer url={`${vedio}`} width="100%" height={"100%"} controls playing={true} />
                        </div>
                            </Grid>

                        
                        </Grid>
                    </Grid>
                    <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', bgcolor: '#f8f8f8', padding: '10px', bgcolor: '#080808', mt:{ lg:'10px',md:"10px",sm:"-10px",xs:"-10px"} }}>
                        <Grid item lg={4.5} md={4.5} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} data-aos="fade-right">
                            <Typography variant='h2' sx={{ fontSize: { lg: '30px', md: '30px', sm: '30px', xs: '28px' }, fontWeight: '600', color: MAIN_COLOR }}>Who Are We?</Typography>
                            <Typography variant='subtitle2' sx={{ fontSize: { lg: '16px', md: '16px', sm: '13px', xs: '14px', }, mt: '20px', color: '#eeeeee' }}>My Tutor Room is a privately-owned learning platform. We provide expert online tutoring services for all grade levels from K-12 to university at any time, and anywhere. Our services are convenient for both tutors, students, and institutions. Make no mistake, we guarantee you quality service, transformative learning experience and affordability. </Typography>
                        </Grid>
                        <Grid item lg={5} md={5} sm={12} xs={12} sx={{ mt: { lg: '0px', md: '0px', sm: '5px', xs: '8px' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }} data-aos="fade-left">
                            <Box sx={{ width: { lg: '80%', md: '80%', sm: '100%', xs: '100%' }, height: { lg: '400px', md: '400px', sm: '390px', xs: '350px' }, borderRadius: { lg: '15%', md: '15%', sm: '10%', xs: '10px' }, mt: '25px' }}>
                                <img src={adelteam} alt='meeting' width={'100%'} height={'95%'} style={{ borderRadius: '10%' }} />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container sx={{ flexWrap: "wrap-reverse", display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', bgcolor: '#080808', pb: "20px", padding: '10px', }}>
                        <Grid item lg={5} md={5} sm={12} xs={12} sx={{ mt: { lg: '0px', md: '0px', sm: '5px', xs: '15px' }, display: 'flex', justifyContent: 'center', alignItems: 'center', }} data-aos="fade-right">
                            <Box sx={{ width: { lg: '80%', md: '80%', sm: '100%', xs: '100%' }, height: '350px', borderRadius: '10%' }}>
                                <img src={vision} alt='meeting' width={'100%'} height={'100%'} style={{ borderRadius: '10%' }} />
                            </Box>
                        </Grid>
                        <Grid item lg={4.5} md={5} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} data-aos="fade-left">
                            <Typography variant='h4' sx={{ fontSize: { lg: '30px', md: '30px', sm: '30px', xs: '28px' }, fontWeight: '600', m: '20px', color: MAIN_COLOR }}>OUR VISION</Typography>
                            <Typography sx={{ fontSize: { lg: '16px', md: '16px', sm: '13px', xs: '14px', }, color: '#eeeeee', ml: "" }}>To ensure that everyone has access to an affordable learning environment at anytime and anywhere. </Typography>
                        </Grid>
                    </Grid>
                     <WhyUs/>
                   
                    <SendMessage />
            </Container>
            <Footer />
        </>
    );
}

export default About;