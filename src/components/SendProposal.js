import { Grid, Typography, Button, Container } from '@mui/material'
import React from 'react'
import { MAIN_COLOR, SECONDARY_COLOR } from '../constant'
import ProposalInput from '../global/ProposalInput'
import first from '../assets/first.svg'
import second from '../assets/second.svg'
import third from '../assets/third.svg'
import fourth from '../assets/fourth.svg'
import fifth from '../assets/five.svg'
import '../pages/Homepage.css'

const SendProposal = () => {
    const reviews = [{ title: "Choose from our database of qualified tutors/courses and find the right fit.", icon: first,animate:"fade-up"  },
    { title: "Find the perfect time that is right for you.", icon: third,animate:"fade-up"  }, {title: "Connect with the tutor via our interactive online platform.", icon: fourth,animate:"fade-up"  },
    {title: "Experience transformation through our various learning techniques. ", icon: fifth,animate:"fade-up"  }].map((item, index) => {
        return <Grid key={index} item sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: { lg: '90px', md: '90px' }, pl: '80px', width: { lg: '100%', md: '100%', sm: '50%', xs: '50%' } }}>
            <img src={item.icon} alt="icons" />
            <Typography variant='subtitle1' sx={{ color: 'white' }} data-aos={`${item.animate}`}>{item.title}</Typography>
        </Grid>
    })

    return (
        <Grid container sx={{ bgcolor: '#313535', mb: '60px', p: '20px',overflow:"hidden"}}  data-aos="fade-up">
            <Container disableGutters sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                <Grid item className='mainSendArea' sx={{ p: { xs: '0rem', lg: '4rem', md: '4rem', sm: '4rem' }, width: { lg: '50%', md: '50%', sm: '100%', xs: '100%' } }} data-aos="fade-up">
                    <Typography textAlign={'center'} variant='h3' sx={{ color: SECONDARY_COLOR, fontWeight: 900 ,fontSize:{lg:'50px', md:'50px', sm:'45px',xs:'40px'}}}>
                    My Tutor Room: <span style={{ color: MAIN_COLOR }}>Interactive, Engaging</span> and Convenient.
                    </Typography>
                    <Typography textAlign={'center'} variant='body1' sx={{ mb: '10px', color: SECONDARY_COLOR, fontWeight: 500, fontFamily: 'sans' }} data-aos="fade-up">
                    Our platform and expert tutors can meet your learning needs!
                    </Typography>
                    <Grid item  sx={{ display: 'flex', justifyContent: 'center', mt: '30px' }}>
                        {/* <ProposalInput style={{ width: { md: '100%', lg: '80%', sm: '100%', xs: '100%' }, color: 'white' }} title={"Find a Tutor today"} button={"send"} /> */}
                    </Grid>
                </Grid>

                <Grid container className='sideTexts' sx={{ width: { xs: '100%', sm: '100%', md: '50%', lg: '50%' }, display: 'flex', flexDirection: { xs: 'row', sm: 'row', md: 'column', lg: 'column' }, justifyContent: 'center' }}>
                    {reviews}
                </Grid>
            </Container>
        </Grid>
    )
}

export default SendProposal