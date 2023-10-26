import { Box, Button, Grid, OutlinedInput, Paper, Typography } from '@mui/material'

import wordPress from '../../assets/hire-wordpress-developer-banner.jpg'
import edu from '../../assets/edu.jpg'
import wordPressHire from '../../assets/wordpress-development-services-1.jpg'
import edu1 from '../../assets/edu1.jpg';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SendMessage from '../../components/SendMessage';
import { MAIN_COLOR } from '../../constant';
import useBottomBar from '../../utils/useBottomBar';
import BottomNavBar from '../../global/BottomNavBar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import HubIcon from '@mui/icons-material/Hub';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';



const Wordpress = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    const { state } = useBottomBar()
    const details = ['Getting started is easy. Register as an institution on the My Tutor Room platform.', 'Fill out our supplemental forms.', 'Create classes for your students and instruct them to sign up for your courses.']
    const data = ['Cheaper for each student enrolled at your institution.', 'Institutions pay My Tutor Room a fraction of the fees collected from their students ']
    let six = ['Customized programs', 'Interactive and engaging learning experience', 'Improves work and study habits.', 'Helps overcome learning obstacles.', 'Test and exam preparation tutoring and self-assessment.']
    return (

        <>
            <Header />
            {state.currentScreenSize < 918 && <BottomNavBar />}
            <Grid container >
                <Grid item xs={12} sx={{ backgroundImage: `url(${edu})`, backgroundBlendMode: "multiply", backgroundRepeat: "no-repeat", backgroundSize: "cover", bgcolor: "rgba(0, 0, 0, 0.5)", p: "50px",  height: '450px' }}>

                    <Grid container sx={{ p: "10px" }}>
                        <Grid item xs={2} sm={2} md={1} lg={1} >

                        </Grid>

                        <Grid item xs={12} sm={12} md={10} lg={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Box sx={{ lineHeight: "9" }}>
                                <Box data-aos='fade-up' sx={{ mt: { xs: '50px',   } }}>
                                    <Typography variant='h4' sx={{ fontWeight: "800", color: "white", fontSize: { lg: '33px', md: '30px', sm: '30px', xs: '22px' } }}>
                                        Partner with My Tutor Room platform!
                                    </Typography>
                                    <Typography sx={{ color: "white", mt: "20px", fontSize: { lg: "19px", md: '17px', sm: '17px', xs: '15px' } }}>
                                        We believe that tutoring can help strengthen subject comprehension, boost confidence, and build important learning skills in your students. Your institution can manage all of that with our support.
                                    </Typography>

                                </Box>
                            </Box>
                        </Grid>



                    </Grid>

                </Grid>
            </Grid>






            <Grid container sx={{ p: { xs: "8px", sm: "8px", md: "8px", lg: "15px", m: '20px 0px' }, justifyContent: 'space-evenly', alignItems: 'center' }}>

                <Grid item xs={12} md={5} lg={5} data-aos='fade-up' sx={{p:'0px 10px'}}>
                    <Typography sx={{ fontSize: { lg: '33px', md: '30px', sm: '30px', xs: '22px' }, fontWeight: "800", color: MAIN_COLOR }} >
                        Work With Us!
                    </Typography>
                    <Typography sx={{ mt: "10px", fontSize: { lg: "18px", xs: '17px' }, mb: "15px" }}>
                        As an institution, our online platform can give your students the opportunity to access live courses, webinars, and tutoring sessions at anytime and anywhere. Your program can give each student an individualized learning experience they can’t always get in a classroom setting.
                    </Typography>
                    <Typography sx={{ mt: "10px", fontSize: { lg: "19px", xs: '17px' }, mb: "15px" }}>
                        Things to consider:
                    </Typography>
                    <Box >
                        <Typography sx={{ fontSize: { lg: "18px", xs: '17px' }, }}>1. Create specialized classes for students who need extra help.</Typography>
                        <Typography sx={{ fontSize: { lg: "18px", xs: '17px' }, }}>2. Administer tutoring services to all your students- 1-on-1 and group sessions.</Typography>
                        <Typography sx={{ fontSize: { lg: "18px", xs: '17px' }, }}>3. Use the platform for teachers’ training and workshops.</Typography>
                        <Typography sx={{ fontSize: { lg: "18px", xs: '17px' }, }}>4. Create webinars to engage parents on students’ activities, etc. </Typography>
                        <Typography sx={{ fontSize: { lg: "18px", xs: '17px' }, }}>5. Engage students in a transformative online environment.</Typography>
                        <Typography sx={{ fontSize: { lg: "18px", xs: '17px' }, }}>6. Keep a record of quizzes, and exams and give homework. </Typography>
                        <Typography sx={{ fontSize: { lg: "18px", xs: '17px' }, }}>7. Students can provide feedback or rate their tutors/instructors’ performances.</Typography>
                    </Box>

                    <Box sx={{ mt: '15px', fontSize: { lg: "19px", xs: '17px' }, }}>
                        <Typography sx={{ fontSize: { lg: "18px", xs: '17px' }, }}>Our tutoring program will help students at your institution with the skills they need to deal with the challenges of school and will also help them develop critical thinking and skills they can use throughout life. </Typography>

                    </Box>

                </Grid>
                <Grid item xs={12} md={5} lg={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: { xs: '10px' } }}>

                    <Box data-aos='fade-up' sx={{ height: "350px", width: { xs: "90%", sm: "85%", md: "80%", lg: "80%" }, borderRadius: "25px", overflow: "hidden", boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)' }}>
                        <img src={edu1} height="100%" width="100%" alt='img3' />
                    </Box>
                </Grid>
            </Grid>


            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: { xs: "8px", sm: "8px", md: "8px", lg: "15px" }, bgcolor: 'black' }}>
                <Grid container xs={12} sm={12} md={10} lg={9}>
                    <Grid xs={12} item sx={{ display: "flex", justifyContent: "center" }}>
                        <Box >
                            <Typography align='center' sx={{ fontSize: { lg: '33px', md: '30px', sm: '30px', xs: '22px' }, fontWeight: "800", color: MAIN_COLOR }} >
                                Benefits of online tutoring.
                            </Typography>

                        </Box>
                    </Grid>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "15px" }}>
                        <Grid container xs={12} spacing={3}>
                            {
                                six.map((ele, index) => {
                                    return (
                                        <Grid item xs={12} sm={6} md={4} sx={{ mt: "30px" }} data-aos='fade-up'>
                                            <Paper sx={{ borderRadius: '3px 15px 3px 15px', p: "20px",height:'120px' }} elevation={3} >
                                                <Typography sx={{ fontSize: "23px", fontWeight: "800", color: MAIN_COLOR }} >
                                                    {index + 1}
                                                </Typography>
                                                <Typography sx={{ mt: "10px", fontSize: { lg: "17px", xs: '15px' }, }}>
                                                    {ele}
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                    )
                                })
                            }

                        </Grid>
                    </Box>
                </Grid>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: { xs: "8px", sm: "8px", md: "8px", lg: "15px" }, bgcolor: 'black' }}>
                <Grid container xs={12} sm={12} md={10} lg={9} >
                    <Grid xs={12} item sx={{ display: "flex", justifyContent: "center" }}>
                        <Box >
                            <Typography align='center' sx={{ fontSize: { lg: '33px', md: '30px', sm: '30px', xs: '22px' }, fontWeight: "800", color: MAIN_COLOR }} >
                                Cost benefits
                            </Typography>

                        </Box>
                    </Grid>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "15px", width: '100%' }}>
                        <Grid container xs={12} spacing={3}>
                            {
                                data.map((ele, index) => {
                                    return (
                                        <Grid item xs={12} sm={6} md={6} lg={6} sx={{ mt: "30px" }} data-aos='fade-up'>
                                            <Paper sx={{ borderRadius: '3px 15px 3px 15px', p: "20px", display: 'flex', justifyContent: 'left', alignItems: 'center', }} elevation={3} >
                                                <Typography sx={{ fontSize: "43px", fontWeight: "800", color: MAIN_COLOR }} >
                                                    {'. '}
                                                </Typography>
                                                <Typography sx={{ fontSize: { lg: "17px", xs: '15px' }, mt: '20px', ml: '10px' }}>
                                                    {ele}
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                    )
                                })
                            }

                        </Grid>
                    </Box>
                </Grid>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: { xs: "8px", sm: "8px", md: "8px", lg: "15px" }, bgcolor: 'black' }}>
                <Grid container xs={12} sm={12} md={10} lg={9}>
                    <Grid xs={12} item sx={{ display: "flex", justifyContent: "center" }}>
                        <Box >
                            <Typography align='center' sx={{ fontSize: { lg: '33px', md: '30px', sm: '30px', xs: '22px' }, fontWeight: "800", color: MAIN_COLOR }} >
                                Benefits of online tutoring.
                            </Typography>

                        </Box>
                    </Grid>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "15px" }}>
                        <Grid container xs={12} spacing={3}>
                            {
                                details.map((ele, index) => {
                                    return (
                                        <Grid item xs={12} sm={6} md={4} sx={{ mt: "30px" }} data-aos='fade-up'>
                                            <Paper sx={{ borderRadius: '3px 15px 3px 15px', p: "20px",height:{lg:'120px', md:'120px', sm:'130px', xs:'135px'} }} elevation={3} >
                                                <Typography sx={{ fontSize: "23px", fontWeight: "800", color: MAIN_COLOR }} >
                                                    {index + 1}
                                                </Typography>
                                                <Typography sx={{ mt: "10px", fontSize: { lg: "17px", xs: '15px' }, }}>
                                                    {ele}
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                    )
                                })
                            }

                        </Grid>
                    </Box>
                </Grid>
            </Box>

           
            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start',bgcolor: 'black', borderBottom:`4px solid ${MAIN_COLOR}` }}>
                <Grid xs={10} item sx={{ display: "flex", justifyContent: "center",  }}>
                    <Box >
                        <Typography align='center' sx={{ fontSize: { lg: '33px', md: '30px', sm: '30px', xs: '22px' }, fontWeight: "800", color: MAIN_COLOR }} >
                            Support Services
                        </Typography>

                    </Box>
                </Grid>
                <Grid item xs={10}>
                    <Typography sx={{ mt: "10px", fontSize: { lg: "24px",md:'22px', sm:'20px', xs: '20px' },color:'white' }}>My Tutor Room provides all technological and lesson plan support. Should you need our help in
                        making your classes more engaging, our lesson plans support staff can assist you.</Typography>
                </Grid>
                <Grid item xs={10} sx={{mt:'10px',display:'flex', justifyContent:'left', alignItems:'center',}}>
                    <ArrowForwardOutlinedIcon  sx={{color:'white'}}/>
                    <Typography sx={{  fontSize: { lg: "18px", xs: '16px' },color:'white' }}>Our platform operates 24/7. We can work together and make education fun and
                        engaging.</Typography>
                </Grid>
                <Grid item xs={10} sx={{display:'flex', justifyContent:{lg:'right', md:'right', sm:'center', xs:'center'}, alignItems:'center', mt:{sm:'15px', xs:'15px'}, pb:'20px'}}>
                    <Button variant='outlined' sx={{p:'10px 20px'}}>Get started</Button>

                </Grid>
            </Grid>



            <SendMessage />
            <Footer />
        </>
    )
}

export default Wordpress