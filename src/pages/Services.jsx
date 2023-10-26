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

const Services = () => {

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
                <Grid container sx={{}}>
                    <Grid item xs={12} sx={{ bgcolor: 'black', height: '20px', textAlign: "center", padding: '80px 25px' }}>
                        <Typography variant='h1' sx={{ color: 'white', fontSize: { lg: '41px', xs: '20px' }, fontWeight: '600', mt: '15px' }}>Our Services</Typography>
                        
                    </Grid>
                   
                    </Grid>
                   
                     <WhyUs/>
                   
                    <SendMessage />
            </Container>
            <Footer />
        </>
    );
}

export default Services;