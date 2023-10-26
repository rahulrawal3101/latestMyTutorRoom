import { AppBar, Box, Button, CssBaseline, Grid, Toolbar } from '@mui/material';
// import logo from '../assets/logo.png'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import mytutorlogo from '../assets/jpeg 1.jpg';
import { SECONDARY_COLOR } from '../constant';
import { servivessection, solutionsSection } from '../global/NavbarData';
import ScrollToColor from "../global/ScrollToColor";
import '../pages/Homepage.css';
import { AdelContext } from '../store/Context';
import MegaMenu from "../utils/MegaMenu";



export default function Header() {
    const { state, dispatch } = useContext(AdelContext);
    const navigate = useNavigate();
    
    const connectToTutorRoom=(ele)=>{
        switch (ele) {
            case 'login':
                window.open('https://admin.mytutorroom.com/login');
            case 'signup':
                window.open('https://admin.mytutorroom.com/register');
        
            default:
                break;
        }

    }


    return (
        <Grid item>
            <CssBaseline />
            <ScrollToColor>
                <AppBar>
                    <Toolbar sx={{ height: "65px", borderBottom: "1px solid #757575", display: "flex", justifyContent: "space-between" }}>
                        <Box id="logoImg" sx={{ width: "250px" }} >
                            {/* <Typography onClick={() => navigate('/')} variant='h1' sx={{ cursor: 'pointer', color: state.trigger ? SECONDARY_COLOR : MAIN_COLOR }} fontWeight={900} fontSize={'25px'} >AdelSocial</Typography> */}
                            <div style={{ flexGrow: 1 }}>
                                {/* <div style={{ height:"90%",width:"100%",border:"1px solid red",backgroundColor:"white"}}> */}
                                {/* <img src={logo}  style={{ cursor: 'pointer',}} alt='pic' /> */}
                                {/* <Typography sx={{ml:"10px",color:"white",fontSize:{lg:"20px",md:"20px",sm:"17px",xs:"15px"},fontWeight:"800"}}>AdelSocial</Typography> */}
                                {/* </div> */}
                                <Box onClick={() => navigate('/')} sx={{ userSelect: 'none', cursor: "pointer", width: { lg: "190px", sm: "180px", md: '140px', xs: '140px' }, height: { lg: '50px', md: '50px', xs: '40px' }, bgcolor: "white", borderRadius: '10px', p: '5px 15px' }}>
                                    <img src={mytutorlogo} alt='pic' width="100%" height="100%" style={{ cursor: "pointer" }} />
                                </Box>
                            </div>
                            {/* <img width="200px" className='imgStyles' height="50px" style={{ aspectRatio: "auto 165 / 35" }} src={logo} alt="logo" /> */}
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center", ml:{ lg:"30px",md:"0px",sm:"10px",xs:"10px"} }}>


                            {state.currentScreenSize > 918 && <Box sx={{ display: "flex", justifyContent: "space-between", width: { lg: "75%", md: "80%", sm: "90%", xs: "90%" }, }}>
                                <MegaMenu title="Home" />
                                <MegaMenu title="About" navigateHandlerTitleRoute='/about' />
                                <MegaMenu title="Services" data={servivessection}  navigateHandlerTitleRoute='/services' />
                                <MegaMenu title="Homework Help" navigateHandlerTitleRoute="homework"/>
                                <MegaMenu title="Job Openings" data={solutionsSection} />
                                
                                <MegaMenu title="Contact" navigateHandlerTitleRoute='/contact' />
                            </Box>}

                            <Box sx={{display: "flex", justifyContent: "right", width: { lg: "25%", md: "20%", sm: "100%", xs: "100%" } }}>
                                {/* <IconButton sx={{ color: state.trigger ? SECONDARY_COLOR : MAIN_COLOR, '&:hover': { opacity: 0.6 }, transition: "all 0.70s ease", }}>
                                <SearchOutlinedIcon />
                            </IconButton> */}
                                <Button variant='outlined' sx={{ border: state.trigger && `1px solid ${SECONDARY_COLOR}`, "&:hover": { border: state.trigger && `1px solid ${SECONDARY_COLOR}` }, color: state.trigger ? SECONDARY_COLOR : 'white', fontSize: { lg: '16px', md: '15px', sm: '14px', xs: '11px' },p:{xs:"0px",sm:"5px",md:"3px 10px",lg:"3px 10px"}, textTransform: 'unset', fontWeight: 900,mr: '10px' }} onClick={()=>{connectToTutorRoom('login')}}>Login</Button>
                                {/* <MenuIcon onClick={() => dispatch({ type: "DRAWER_CLICKED", payload: true })} sx={{ ml: '20px', cursor: 'pointer',  }} /> */}
                                <Button variant='outlined' sx={{ border: state.trigger && `1px solid ${SECONDARY_COLOR}`, "&:hover": { border: state.trigger && `1px solid ${SECONDARY_COLOR}` }, color: state.trigger ? SECONDARY_COLOR : 'white', fontSize: { lg: '16px', md: '15px', sm: '14px', xs: '11px' },p:{xs:"0px",sm:"5px",md:"3px 10px",lg:"3px 10px"}, textTransform: 'unset', fontWeight: 900}} onClick={()=>{connectToTutorRoom('signup')}}>Sign Up</Button>
                            </Box>
                        </Box>

                    </Toolbar>
                </AppBar>
            </ScrollToColor>
        </Grid >
    );
}