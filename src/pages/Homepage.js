import { Grid } from '@mui/material'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import bg from '../assets/bg.png'
import OurExpertise from '../components/OurExpertise'
import BannerText from '../components/BannerText'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SendMessage from '../components/SendMessage'
import SendProposal from '../components/SendProposal'
import WebHosting from '../components/WebHosting'
import WhyUs from '../components/WhyUs'
import BottomNavBar from '../global/BottomNavBar'
import CustomModal from '../global/Modal'
import useBottomBar from '../utils/useBottomBar'
import './Homepage.css'

const Homepage = () => {
   
    const { state } = useBottomBar()
    // useEffect(() => {
    //     setTimeout(() => {
    //         dispatch({ type: 'MODAL_ACTION', payload: true })
    //     }, 4000)
    // }, [])

    useEffect(()=>{
     AOS.init({duration:2000})
    },[])

    return (

        <>
            {state.currentScreenSize < 918 && <BottomNavBar />}
            <CustomModal />
            <Grid container className='mainboxHomepage' sx={{ pt:"100px",pb: { lg: '30px', xs: '10px', sm: '30px', md: '30px' }, backgroundImage: `url(${bg})`, backgroundPosition: 'center', backgroundSize: 'cover', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <Grid item>
                    <Header />
                </Grid>
                <Grid item xs={12} sm={11} md={9} lg={9} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '100%' }}>
                    <BannerText />
                </Grid>
            </Grid>
            <WhyUs />
            <SendProposal />
            <OurExpertise />
            <WebHosting />
            <SendMessage />
            <Footer />
        </>
       
    )
}

export default Homepage