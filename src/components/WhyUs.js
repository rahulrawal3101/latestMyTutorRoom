import { Box, Container, Grid, Typography } from '@mui/material'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import webdev from '../assets/insti1.avif'
import landing from '../assets/pro2.jpg'
import web from '../assets/tuto1.jpeg'
import acad1 from '../assets/tutorial1.jpg'
import SectionHead from '../global/SectionHead'
import '../pages/Homepage.css'
import { AdelContext } from '../store/Context'
import EastIcon from '@mui/icons-material/East';
import { MAIN_COLOR } from '../constant'

const WhyUs = () => {
    const { state } = useContext(AdelContext)
    const navigate = useNavigate()


    const services = [
        { title: 'Academic Tutoring', path: '/mobile', icon: acad1, desc: "Our goal is to ensure that every student we encounter improves academically. ", animate: "fade-right" },
        { title: 'Professional Development Courses', path: '/welcome', icon: landing, desc: "We believe that every adult in any profession should have access to specialized training to improve overall effectiveness and competency.", animate: "fade-left" },
        { title: 'Tutors', path: '/angular', icon: web, desc: "Our goal is to provide expert tutors in all academic subjects who are prepared to promote student success. ", animate: "fade-right" },
        { title: 'Institutions', path: '/wordpress', icon: webdev, desc: "Partner with us and allow your students to access live courses, quality tutoring services, and webinars anytime and anywhere. ", animate: "fade-left" }]


    const handleNavigatorAA = (item) => {
        console.log("running")
        navigate(`${item}`)
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <Grid container className='serviceSection' sx={{ p: { xs: '30px 2px', lg: '60px 20px', md: '60px 20px', sm: '40px 10px' }, overflow: "hidden"}} data-aos="fade-up" >
            <SectionHead title={"SERVICES"} tagline={"We take tutoring personally. Learn with qualified tutors today."} />

                <Container disableGutters sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', overflow: "hidden" }}>
            <Grid container className='servicesSectionMiddle' sx={{ borderRadius: { xs: '20px', lg: '90px', sm: '90px', md: '90px' }, p: { xs: '10px', lg: '20px', md: '20px', sm: '20px' }, pl: { xs: '30px', lg: '45px' }, justifyContent: 'space-evenly', alignItems: 'center' }} >
                    {
                        services.map((item) => {
                            return (<Grid item lg={5} md={5} sm={5} onClick={()=>{handleNavigatorAA(item.path)}} className='servicesBox'  key={item.title} sx={{ backgroundImage: `url(${item.icon})`,cursor:"pointer", display: 'flex', flexDirection: 'column', justifyContent:"space-between", p: '20px', borderRadius: '30px', m: '0px 20px 20px 0px', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} data-aos={`${item.animate}`} >
                            <Box>
                                <EastIcon sx={{color:"white",fontSize:{lg:"40px",md:"40px",sm:"30px",xs:"25px"},fontWeight:900}}/>
                            </Box>
                            <Box>
                                <Typography className='servicesBoxhead' variant='h1' sx={{ fontSize: { lg: '28px', md: '28px', sm: '20px', xs: "20px" }, fontWeight: 900, color: 'white', m: '0px 0px 30px 20px' }}>{item.title}</Typography>
                                <Typography className='servicesBoxpara' paragraph sx={{ m: '-20px 0px 0px 20px', color: 'white', fontSize: { lg: '16px', md: '16px', sm: '16px', xs: '16px' } }} >{state.currentScreenSize < 700 ? item.desc.slice(0, 100) + '...' : item.desc}</Typography>
                            </Box>
                            </Grid>)
                        })

                    }
            </Grid>
                </Container>
        </Grid>
    )
}

export default WhyUs