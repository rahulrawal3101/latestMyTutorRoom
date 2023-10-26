import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Grid, Paper, Typography } from '@mui/material'
import angularr from '../../assets/joinnet.jpg'
import web from '../../assets/web-design.jpg'
import core from '../../assets/ourcore.jpg'
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import hiring from '../../assets/hiring-modal-one.jpg'
import hiring2 from '../../assets/hiring-modal-two.png'
import hiring3 from '../../assets/hiring-modal-three.jpg'
import HubIcon from '@mui/icons-material/Hub';
import background8 from '../../assets/background-8.png'
import Diversity1Icon from '@mui/icons-material/Diversity1';
import vector from '../../assets/vacter_right.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { MAIN_COLOR } from '../../constant'
import useBottomBar from '../../utils/useBottomBar';
import BottomNavBar from '../../global/BottomNavBar';
import angular from '../../assets/whyous.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const AngularFrontend = () => {
    const { state } = useBottomBar();

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <>
            {state.currentScreenSize < 918 && <BottomNavBar />}
            <Header />
            <Container disableGutters maxWidth={"xl"} sx={{}}>
                <Grid container sx={{ height: "400px", backgroundImage: `url(${angularr})`, bgcolor: 'rgb(90,90,90)', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundBlendMode: "multiply", backgroundPosition: 'center' }}>
                    <Grid item xs={0} sm={1} md={1.5} lg={2}></Grid>
                    <Grid item xs={12} sm={10} md={8} lg={7} sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt:'50px' }}>
                        <Box sx={{ width: "100%", lineHeight: "7", p: "10px" }}>
                            <Typography sx={{fontSize:{lg:'33px', md:'30px', sm:'30px', xs:'22px'}, fontWeight: "900", color: "white" }}>
                            Join our network of tutors around the world. 
                            </Typography>
                            <Typography sx={{ color: "white", fontSize:{lg:'16px', md:'15px', sm:'13px', xs:'13px'}, mt:'10px' }}>
                            Earn money by sharing your expert knowledge in a fulfilling way. 
                            </Typography>
                            <Button variant='contained' sx={{ borderRadius: "25px", p: '10px 30px' }}>
                            Apply Today
                            </Button>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container sx={{ p: {lg:"10px", md:'10px', sm:'10px', xs:'2px'} , display:'flex', justifyContent:'space-around', alignItems:'center',overflow:"hidden"}}>
                   
                    <Grid item data-aos='fade-up' xs={12} md={5} lg={7} sx={{display:'flex', justifyContent:'center', flexDirection:'column',p:'0px 40px' }}>
                        <Typography sx={{ fontSize:{lg:'33px', md:'30px', sm:'30px', xs:'22px'}, fontWeight: "800", color: MAIN_COLOR }} >
                        Why Join My Tutor Room? 
                        </Typography>
                        <Typography sx={{ mt: "10px", fontSize:{ lg:"16px", xs:'15px'} }}>
                          <ol>
                            <li>Variety of subjects at different academic levels. </li>
                            <li>Competitive wages. Set your rates.</li>
                            <li>Flexible schedule; work anywhere and anytime.</li>
                            <li>Fulfilling; share your knowledge with passion and do it happily.</li>
                          </ol>
                        </Typography>
                        

                    </Grid>
                    <Grid item data-aos='fade-up' xs={12} md={5} lg={4} sx={{ p: "15px", display:'flex', justifyContent:'center', alignItems:'center' }}>
                        <Box sx={{  width:'400px ',height: "300px", borderRadius: "25px", overflow: "hidden" }}>
                            <img src={angular} height="100%" width="100%" />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container sx={{ bgcolor: "#002F96", p: "20px", display:'flex', justifyContent:'space-around', alignItems:'center',overflow:"hidden" }}>
                    
                    <Grid item data-aos='fade-up' xs={12} md={5} lg={7} sx={{mt: "15px", display: "flex", justifyContent: "center"  }}>
                        <Box sx={{ lineHeight: "2.5" }}>
                            <Typography sx={{ fontSize:{lg:'33px', md:'30px', sm:'30px', xs:'22px'}, fontWeight: "800", color: "white" }}>
                                Our Core Strength
                            </Typography>
                            <Typography sx={{ mt: "10px", fontSize:{ lg:"17px", xs:'15px'}, color: "white", fontWeight: "500" }}>
                                My Tutor Room has built its success on these key principles:
                            </Typography>
                            <ul>
                                <li style={{ color: "white",fontSize:{ lg:"16px", xs:'14px'} }}>Skilled tutors with extensive knowledge of learning development.</li>
                                <li style={{ color: "white", fontSize:{ lg:"16px", xs:'14px'} }}>Tutors who provide a clear and practical understanding of the subject matter</li>
                                <li style={{ color: "white", fontSize:{ lg:"16px", xs:'14px'} }}>Tutors who expand knowledge in an interactive and engaging format.</li>
                                <li style={{ color: "white", fontSize:{ lg:"16px", xs:'14px'}}}>Tutors who measure their success by the improvements of their students.</li>

                            </ul>
                            <Button variant='contained' sx={{ mt: "10px", bgcolor: MAIN_COLOR, height: "50px", borderRadius: "25px", fontWeight: "800", p: '10px 30px' }}>
                                Talk to us
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item data-aos='fade-up' xs={12} md={5} lg={4} sx={{ mt: "15px", display: "flex", justifyContent: "center",alignItems:'center', p: "15px",overflow:"hidden" }}>
                        <Box sx={{  width:'400px ',height: "300px", borderRadius: "25px", overflow: "hidden" }}>
                            <img src={core} height="100%" width="100%" />
                        </Box>
                    </Grid>
                </Grid>
                <Footer/>
            </Container>

        </>
    )
}

export default AngularFrontend