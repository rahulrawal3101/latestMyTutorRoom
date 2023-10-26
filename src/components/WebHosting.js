import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material'
import '../pages/Homepage.css'
import DoneIcon from '@mui/icons-material/Done';
import cust from '../assets/cust.png'
import money from '../assets/money.png'
import prize from '../assets/prize.png'
import offer from '../assets/offer.png'
import webbg from '../assets/pricingbg.png'
import { MAIN_COLOR, SECONDARY_COLOR } from '../constant';
import SectionHead from '../global/SectionHead';
import { useContext, useState } from 'react';
import { Add } from '@mui/icons-material';
import '../pages/Homepage.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { AdelContext } from '../store/Context';



const WebHosting = () => {
    const { state } = useContext(AdelContext)
    const [planTime, setPlanTime] = useState(true)
    const [plansAmt, setPlansAmt] = useState(false)
    const handlePlan = (plan) => {
        if (plan === 'annual') {
            setPlanTime(prev => { return !prev })
            setPlansAmt(prev => { return !prev })
        }
        else {
            setPlanTime(prev => { return !prev })
            setPlansAmt(prev => { return !prev })
        }
    }
    const handleHostingPlan = (planName) => {
        switch (planName) {
            case 'Single Domain Hosting':
                window.open('https://domain.adelsocial.com/hosting.php')
            case 'Multiple Domain Hosting':
                window.open('https://domain.adelsocial.com/multidomain_hosting.php')
            case 'C-panel Hosting':
                window.open('https://domain.adelsocial.com/cpanel-hosting.php')
        }
    }

  
  
    

    return (
        <>
            <Grid container sx={{ padding: '30px 20px', justifyContent: 'center', overflow: "hidden", }} data-aos="fade-up">
                {/* <SectionHead title={"AFFORDABLE DOMAIN & HOSTING"} tagline={"Make a customer, not a sale."} /> */}
                <Grid container className='webHostingBox' alignItems={'flex-start'} height={'fit-content'} sx={{ pb: '40px', borderRadius: { lg: '90px', xs: '20px' }, backgroundImage: `url(${webbg})`, backgroundPosition: 'top', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', border: '1px solid lightgray' }}>
                    <Grid item xs={12} lg={12} sx={{ p: '40px', display: 'flex', justifyContent: 'center', borderRadius: '90px' }}>
                        <Typography variant='h3' sx={{ fontSize: { lg: '48px',md:'40px', sm:'30px', xs: '28px' }, width: { lg: '50%', xs: '100%', sm: '50%', md: '50%' } }} textAlign={'center'} fontWeight={900}>Homework Help</Typography>
                    </Grid>

                    <Grid item lg={12} style={{ height: '100%', width: '100%' }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} >
                        <Grid container sx={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', }} >
                            <Container disableGutters sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', }}>
                                <Grid container sx={{borderRadius:'20px',  bgcolor:'black', p:'20px', display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                                    <Grid item lg={2.4} md={2.5} sm={3.8} xs={5.5} sx={{borderRadius:'10px', display:'flex', justifyContent:'space-around', alignItems:'center', flexDirection:'column', height:{lg:'150px', md:'150px', sm:'120px', xs:'100px'},boxShadow: '1px 1px 12px 0px rgba(35,7,219,1)'}}>
                                       <AccessTimeIcon sx={{color:MAIN_COLOR, fontSize:{lg:'70px', md:'60px', sm:'50px', xs:'40px'}}}/>
                                       <Typography sx={{color:'white', fontSize:{lg:'20px', md:'17px', sm:'15px', xs:'13px'} ,textAlign:'center' }}>24/7 Online</Typography>
                                    </Grid>
                                    <Grid item lg={2.4} md={2.5} sm={3.8} xs={5.5}  sx={{borderRadius:'10px' , display:'flex', justifyContent:'space-around', alignItems:'center', flexDirection:'column', height:{lg:'150px', md:'140px', sm:'120px', xs:'100px'},boxShadow: '1px 1px 12px 0px rgba(35,7,219,1)'}}>
                                    <MenuBookIcon sx={{color:MAIN_COLOR, fontSize:{lg:'70px', md:'60px', sm:'50px', xs:'40px'}}}/>
                                       <Typography sx={{color:'white', fontSize:{lg:'20px', md:'17px', sm:'15px', xs:'13px'}, textAlign:'center'}}>Personalize Assignment</Typography>
                                    </Grid>
                                    <Grid item lg={2.4} md={2.5} sm={3.8} xs={5.5}  sx={{borderRadius:'10px' ,  display:'flex', justifyContent:'space-around', alignItems:'center', flexDirection:'column', height:{lg:'150px', md:'140px', sm:'120px', xs:'100px'},boxShadow: '1px 1px 12px 0px rgba(35,7,219,1)',mt:{lg:'0px', md:'0px', sm:'0px', xs:'20px'}}}>
                                    <LiveTvIcon sx={{color:MAIN_COLOR, fontSize:{lg:'70px', md:'60px', sm:'50px', xs:'40px'}}}/>
                                       <Typography sx={{color:'white', fontSize:{lg:'20px', md:'17px', sm:'15px', xs:'13px'}, textAlign:'center'}}>Live sessions available</Typography>
                                    </Grid>
                                    <Grid item lg={3} md={3} sm={12} xs={12}  sx={{borderRadius:'10px' ,  display:'flex', justifyContent:'space-around', alignItems:'center', flexDirection:'column', height:'150px'}}>
                                     <Typography sx={{color:'yellow', fontSize:{lg:'25px',md:'22px', sm:'20px', xs:'18px'}, textAlign:'center'}}>All Academy subjects</Typography>
                                     <Button  sx={{fontSize:'17px', fontWeight:'800',border:'1px solid white', color:'white'}}><a href='https://admin.mytutorroom.com/homework' style={{textDecoration:'none', color:'white'}}>Get help now!</a></Button>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid >

        </>

    )
}

export default WebHosting