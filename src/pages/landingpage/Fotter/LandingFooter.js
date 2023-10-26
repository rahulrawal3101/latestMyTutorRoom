import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Button, Grid, Typography } from '@mui/material';
import logo from '../../../assets/logoMainu.png';
import { MOBILE } from '../../../constant';
import { BG_COLOR, LANDING_COLOR } from '../config';
import Footer from '../../../components/Footer';

const LandingFooter = () => {
    const lookingSec = [
        "Adwords Management Sydney",
        "Adwords Management Perth",
        "Management Melbourne",
        "Adwords Management Brisbane"
    ]

    return (
        <>
        <Grid container sx={{ pb: '30px' }}>
            <Grid item xs={12} sx={{ bgcolor: LANDING_COLOR, p: "20px" }}>
                <Grid container>
                    <Grid item xs={12} sm={12} lg={9} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Typography align='center' sx={{ fontSize: { lg: "45px", xs: '30px' }, fontWeight: "800" }}>
                            <span>I can do this. You can do this.</span> <span style={{ color: "white" }}>We can do this.</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={3} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Button disableRipple variant='contained' sx={{ width: 'fit-content', border: `1px solid black`, transition: 'all 0.2s ease', bgcolor: BG_COLOR, color: 'white', p: { lg: '12px 24px', xs: '12px 24px' }, fontWeight: 900, borderRadius: '27px', textTransform: 'unset', fontSize: { lg: '16px', xs: '12px' }, '&:hover': { bgcolor: 'transparent', color: 'black' } }}>Get Started</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Footer/>
        </>
    )
}

export default LandingFooter