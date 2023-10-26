import { Box, Grid, Typography } from '@mui/material';
import React, { useContext, } from 'react';
import { BG_COLOR, LANDING_COLOR } from '../config';

import logo2 from '../../../assets/openbook.png';
import Header from '../../../components/Header';
import { AdelContext } from '../../../store/Context';
import '../Master.css';
import CstBtn from '../letsTalk';


const HeroPage = () => {
    return <Grid container sx={{ padding: { lg: '150px 30px', xs: '90px 20px' }, bgcolor: BG_COLOR }}>
        <Grid item lg={6} xs={12} sx={{ padding: '0px 0px', display: 'flex', flexDirection: 'column', alignItems: { lg: 'flex-start', xs: 'center' }, textAlign: { xs: 'center', lg: 'left' } }}>
            <Typography className='ok' sx={{ fontFamily: 'cursive !important', color: 'white', fontSize: { lg: '35px', xs: '22px' }, fontWeight: 500, }}>
            Invest in Your Professional
            </Typography>
            <Typography sx={{ color: 'white', fontWeight: 900, fontSize: { lg: '70px', xs: '50px' }, mt: { lg: '-30px', xs: '-10px' } }}>
            Development.
            </Typography>
            <CstBtn text="Let's Talk" p="15px 50px" m="30px 0px" borderColor={LANDING_COLOR} textColor={LANDING_COLOR} />
        </Grid>
        <Grid item lg={6} xs={12} sx={{ display: 'flex', justifyContent: 'center', height: '300px' }}>
            <Box sx={{ width: '90%', height: '90%', bgcolor: BG_COLOR, display: 'flex', justifyContent: 'center', p: '30px' }}>
                {/* <img className="rotateIconHeroPage" width={'200px'} height={'200px'} src={logo2} alt="pic" /> */}
                <img  width={'200px'} height={'200px'} src={logo2} alt="pic" />

            </Box>
        </Grid>
    </Grid >
}

const LandingHeader = () => {
    const { state, dispatch } = useContext(AdelContext)
    return (
        <>
            <Header/>
            <HeroPage state={state} dispatch={dispatch} />
        </>
    )
}

export default LandingHeader