import { Grid, Typography, Button, Container, Box } from '@mui/material'
import React, { useContext } from 'react'
import { MOBILE,MOBILE2, SECONDARY_COLOR } from '../constant'
import '../pages/Homepage.css'
import { AdelContext } from '../store/Context'

const  SendMessage = () => {
    const {handleOpenWhatsAppChat}=useContext(AdelContext)
    
    function handleOpenWhatsApp() {
       
        handleOpenWhatsAppChat()
      }
      

    return (
        <Grid container sx={{ bgcolor: 'black', mb: '0px', p: '50px',overflow:"hidden" }}>

            <Container disableGutters sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>

                <Grid item lg={7} xs={12} sx={{ pl: { lg: '60px', xs: '0px' }, display: 'flex', flexDirection: 'column', alignItems: { lg: 'flex-start', xs: 'center' }, justifyContent: 'center' }}>

                    <Typography variant='h5' textAlign={'center'} sx={{ color: SECONDARY_COLOR, fontWeight: 'normal' }} data-aos="fade-right">Ready to speak with My Tutor Room? Call us now.</Typography>
                     <Box sx={{display:"flex"}}>
                     <a href={`tel:+91 ${MOBILE}`} style={{ textDecoration: 'none', }}>
                        <Typography textAlign="center" sx={{fontSize:{lg:"28px",md:"25px",sm:"18px",xs:"15px"},mr:"20px", color: '#fff', fontWeight: 900 }} data-aos="fade-right">+233531437109,</Typography>
                    </a>
                    <a href={`tel:+91 ${MOBILE2}`} style={{ textDecoration: 'none', }}>
                        <Typography textAlign="center" sx={{fontSize:{lg:"28px",md:"25px",sm:"18px",xs:"15px"}, color: '#fff', fontWeight: 900 }} data-aos="fade-right">+12109861774</Typography>
                    </a>
                     </Box>
                    
                </Grid>
                <Grid item lg={5} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Button variant='contained' sx={{ mt: { xs: '10px', lg: 0 }, padding: { lg: '20px 40px', xs: '10px 20px' }, borderRadius: '10px' }} data-aos="fade-left" onClick={handleOpenWhatsApp}>Send us a Message</Button>
                </Grid>
            </Container>
        </Grid >
    )
}

export default SendMessage