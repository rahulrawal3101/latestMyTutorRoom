import { Box, Button, Container, FormControl, FormControlLabel, Grid, IconButton, OutlinedInput, Radio, RadioGroup, Typography } from '@mui/material'
import logo from '../assets/adellogo.png'
import free from '../assets/offermodal.png'
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { AdelContext } from '../store/Context';


const CustomModal = () => {
    const { state, dispatch } = useContext(AdelContext)

    const handleAlert=()=>{
        dispatch({
            type:"ALERTMESSAGE",
            payload:(true)
        })
    }

    return (

        <Modal
            open={state.modal_open}
            onClose={() => dispatch({ type: 'MODAL_ACTION', payload: false })}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{ outline: 'none' }}
            disablePortal
            disableEnforceFocus
            disableAutoFocus
            sx={{ overflowY: 'scroll', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Container disableGutters sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: { xs: '530px', lg: '700px', md: '700px', sm: '700px' } }} >


                <Grid container className='modalPopper' sx={{ mt: '30px', position: 'relative', width: { lg: '70%', xs: '95%' }, height: '100%', justifyContent: 'center', borderRadius: '20px', alignItems: 'flex-end', overflowX: { xs: 'hidden' }, overflowY: { lg: 'hidden', md: 'scroll', xs: 'scroll' } }}>
                    <Grid item lg={5} xs={12} sx={{ height: { lg: '100%', xs: '50%', md: '50%' }, bgcolor: "blue", p: { lg: "30px 20px", xs: '60px 7px' }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Box sx={{ userSelect: 'none', width: { lg: "200px", xs: "100px", md: '200px' }, height: { lg: '60px', md: '60px', xs: '30px' }, bgcolor: "white", borderRadius: '10px' }}>
                            <img src={logo} alt='pic' width="100%" height="100%" />
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                            <Typography align='center' sx={{ userSelect: 'none', color: "white", fontSize: { lg: '50px', xs: '20px', md: '30px' }, fontFamily: "comfortaa" }}>
                                Claim your
                            </Typography>
                            <div style={{ position: 'relative' }}>
                                <Typography align='center' sx={{ userSelect: 'none', fontSize: { lg: '90px', xs: '30px', md: '50px' }, p: "0px 30px", borderRadius: "12px", bgcolor: "white", letterSpacing: "6px", fontWeight: 1000, color: "#FF9900", fontFamily: "sans-serif" }}>
                                    FREE
                                </Typography>
                                <Box sx={{ position: 'absolute', right: { lg: '-9rem', xs: '-18rem', md: '-13rem' }, bottom: { lg: '-2rem', xs: '-1rem', md: '-2rem' } }}>
                                    <Box sx={{ width: { xs: "20%", lg: "55%", md: '30%' }, display: "flex", justifyContent: "flex-end", }}>
                                        <img src={free} alt='pic' height="100%" width="100%" />
                                    </Box>
                                </Box>

                            </div>

                        </Box>
                        <Box sx={{ borderLeft: "2px solid #FF9900", pl: "11px" }}>
                            <Typography sx={{ color: "white", lineHeight: { lg: "30px", xs: '20px', md: '30px', sm: '30px' }, fontSize: { xs: '10px', lg: '18px', md: '18px', sm: '18px' } }}>
                                Wait A Minute! These Special Free Services <br />Are Only For You! Look No More;<br />
                                Fill Up The Form & Be A Lucky One!
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item lg={7} xs={12} sx={{height: '100%', bgcolor: "#FF9900", p: { lg: "10px", md: '30px', xs: '12px' }, pt: { xs: '0px' }, display: "flex", flexDirection: "column", justifyContent:{xs:"",sm:"",md:"",lg:"center"} }}>

                        <IconButton onClick={() => dispatch({ type: 'MODAL_ACTION', payload: false })} sx={{ position: 'absolute', top: 0, right: 0, m: '7px', zIndex: 999, bgcolor: "white", "&:hover": { bgcolor: "white" } }}>
                            <CloseIcon sx={{ color: "red" }} />
                        </IconButton>

                        <Box >
                            <OutlinedInput placeholder='Full Name' fullWidth size={state.currentScreenSize < 500 ? 'small' : 'medium'} sx={{ bgcolor: "white", mt: "15px", borderRadius: '10px' }} />
                            <OutlinedInput placeholder='Email' fullWidth size={state.currentScreenSize < 500 ? 'small' : 'medium'} sx={{ bgcolor: "white", mt: "15px", borderRadius: '10px' }} />
                            <OutlinedInput placeholder='Website (optional)' fullWidth size={state.currentScreenSize < 500 ? 'small' : 'medium'} sx={{ bgcolor: "white", mt: "15px", borderRadius: '10px' }} />
                        </Box>
                        <Box sx={{ m: '10px' }}>
                            <Typography sx={{ userSelect: 'none', textAlign: "center", fontSize: { lg: "50px", xs: '18px', md: '30px' }, fontWeight: "900" }}>
                                Choose Your <span style={{ backgroundColor: "purple", color: "white", borderRadius: "12px", padding: "3px" }}>FREE</span>Service :
                            </Typography>
                        </Box>


                        <FormControl>
                            <RadioGroup defaultValue="consultation" name="radio-buttons-group">
                                <FormControlLabel value="consultation" control={<Radio size={state.currentScreenSize < 500 ? 'small' : 'medium'} />} label={<Typography variant='subtitle2'>30 minutes free business consultation</Typography>} />
                                <FormControlLabel value="SEO" control={<Radio size={state.currentScreenSize < 500 ? 'small' : 'medium'} />} label={<Typography variant='subtitle2'>Full SEO Analysis Report</Typography>} />
                                <FormControlLabel value="freelogo" control={<Radio size={state.currentScreenSize < 500 ? 'small' : 'medium'} />} label={<Typography variant='subtitle2'>Logo For Your Brand</Typography>} />
                                <FormControlLabel value="shortvideo" control={<Radio size={state.currentScreenSize < 500 ? 'small' : 'medium'} />} label={<Typography variant='subtitle2'>15 Second Short Video Edit</Typography>} />
                            </RadioGroup>
                        </FormControl>
                        <Button variant='contained' fullWidth sx={{ mt: '10px', fontSize: { lg: "20px", textTransform: 'unset', width: { xs: '50%', lg: '100%' } } }}  onClick={handleAlert}>Get The Free Service</Button>
                    </Grid>

                </Grid>

            </Container>
        </Modal >

    )
}

export default CustomModal