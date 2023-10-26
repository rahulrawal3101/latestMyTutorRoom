import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material';
import React from 'react';
import termcondition from '../assets/termcondition.jpg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import gradient from '../assets/gradientimage.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MAIN_COLOR } from '../constant';

const PrivacyPolicy = () => {
    return (
        <>
            <Header />
            <Grid container >
                <Grid item lg={12} md={12} sm={12} xs={12} sx={{ height: '350px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${termcondition})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'ceenter' }}>
                    <Typography variant='h2' sx={{ fontSize: { lg: '40px', md: '37px', sm: '30px', xs: '29px' }, color: 'white', fontWeight: '700' }}>Privacy Policy</Typography>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12} sx={{ backgroundImage: `url(${gradient})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: '20px 5px' }}>
                    <Grid container sx={{ mt: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item lg={11} md={11} sm={11.5} xs={11.5}>
                            <Accordion defaultExpanded>

                                <AccordionDetails>
                                    <Typography sx={{ fontSize: { lg: '19px', md: '18px', sm: '16px', xs: '15px' } }}>
                                        • This privacy policy sets out how My Tutor Room uses and protects any information that you
                                        provide, whilst using My Tutor Room products and services. This includes, but is not limited
                                        to, My Tutor Room and any associated websites and sub-domains.<br />
                                        • My Tutor Room is committed to ensuring that your privacy is protected. Any information
                                        provided by you to My Tutor Room, by which you can be identified, will only be used by this
                                        privacy policy.<br />
                                        • My Tutor Room may change this policy as and when necessary. It is your responsibility to
                                        check this privacy policy periodically to ensure you agree with any changes.<br />

                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}

                                >
                                    <Typography sx={{ fontSize: { lg: '24px', md: '24px', sm: '22px', xs: '20px' }, color: MAIN_COLOR, fontWeight: '700', }}>Your consent</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontSize: { lg: '19px', md: '18px', sm: '16px', xs: '15px' } }}>
                                        • By using this site, you agree to the terms of this Privacy Policy and My Tutor Room Terms
                                        and Rules. Whenever you submit information via this site, you consent to the collection,
                                        use, and disclosure of that information by those Terms and Rules and this Privacy Policy.<br />


                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}

                                >
                                    <Typography sx={{ fontSize: { lg: '24px', md: '24px', sm: '22px', xs: '20px' }, color: MAIN_COLOR, fontWeight: '700', }}>What information do we collect?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontSize: { lg: '19px', md: '18px', sm: '16px', xs: '15px' } }}>
                                        {/* <strong>Basic Annual Maintenance Package Terms:</strong><br /> */}
                                        You can browse our website without providing any personal information, however, if you
                                        would like the enhanced website experience, you will need to register with us. When
                                        registering on our site, we may require some or all of the following information:<br />
                                        • username<br />
                                        • e-mail address<br />
                                        • password<br />
                                        •age<br />
                                        • location<br />

                                        Google, as a third-party vendor, uses cookies to serve ads on My Tutor Room based on your
                                        visit to our site and other sites on the Internet. Users may opt out of personalized
                                        advertising by visiting Ads Settings. Additionally, My Tutor Room collects potentially
                                        personally-identifying information that is collected by Google Analytics. Some or all of the
                                        following information may be collected:<br />

                                        • Internet Protocol (IP) address <br />
                                        • geographical location<br />
                                        • interests<br />
                                        • demographics<br />
                                        • browser type and version<br />
                                        • operating system<br />
                                        • referral source<br />
                                        • length of visit, page views, website navigation, and any other related browsing
                                        activity<br />
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}

                                >
                                    <Typography sx={{ fontSize: { lg: '24px', md: '24px', sm: '22px', xs: '20px' }, color: MAIN_COLOR, fontWeight: '700', }}>What we do with the information we collect</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontSize: { lg: '19px', md: '18px', sm: '16px', xs: '15px' } }}>
                                        The information you provide to My Tutor Room is required for, but not limited to, the
                                        following reasons:<br />

                                        • internal record keeping<br />
                                        • access to the My Tutor Room website<br />
                                        • account management<br />
                                        • improving our services<br />
                                        • tailoring advertising to make it more relevant to your likely interests and needs.<br />
                                        • conducting market research<br />
                                        • sending occasional company news, updates, related product, or service information,
                                        etc.<br />



                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}

                                >
                                    <Typography sx={{ fontSize: { lg: '24px', md: '24px', sm: '22px', xs: '20px' }, color: MAIN_COLOR, fontWeight: '700', }}>Internet-based transfers</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontSize: { lg: '19px', md: '18px', sm: '16px', xs: '15px' } }}>
                                        Unfortunately, the transmission of information via the Internet is not completely secure.
                                        Although we will do our best to protect your data, we cannot guarantee the security of your
                                        data transmitted to the TSRG site; any transmission is at your own risk. Once we have
                                        received your information, we will use strict procedures and security features to try to
                                        prevent unauthorized access. Given that the Internet is a global environment, using it to
                                        collect and process personal data necessarily involves the transmission of data on an
                                        international basis. This means for instance that data you pass to us may be transferred to
                                        and processed outside the European Economic Area (EEA). By submitting your data, you
                                        agree to this transfer, storing, or processing. We will take all steps reasonably necessary to
                                        ensure that your data is treated securely and by this policy. By communicating electronically
                                        with us, you acknowledge and agree to our processing of personal data in this way.<br />



                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}

                                >
                                    <Typography sx={{ fontSize: { lg: '24px', md: '24px', sm: '22px', xs: '20px' }, color: MAIN_COLOR, fontWeight: '700', }}>Privacy Settings</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontSize: { lg: '19px', md: '18px', sm: '16px', xs: '15px' } }}>
                                        Privacy settings on My Tutor Room enable you to customize the amount of personal
                                        information that you display to other members. These are vital for keeping you safe and My
                                        Tutor Room wants to make it as easy as possible for you to use the site without worrying.<br />

                                        You can set your privacy settings according to your preferences. Information that would be
                                        covered by your privacy settings are:<br />

                                        • Online Status <br />
                                        • Current activity<br />
                                        • Receiving site mailings<br />
                                        • Displaying your location<br />
                                        • Showing your date of birth<br />
                                        • Who can view your details on your profile page<br />
                                        • Who can receive your news feed<br />
                                        • Who can private message you<br />

                                        To edit your privacy settings,<strong>click here</strong> .                   </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}

                                >
                                    <Typography sx={{ fontSize: { lg: '24px', md: '24px', sm: '22px', xs: '20px' }, color: MAIN_COLOR, fontWeight: '700', }}>Security</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontSize: { lg: '19px', md: '18px', sm: '16px', xs: '15px' } }}>
                                        We are committed to ensuring that any information you provide to My Tutor Room is
                                        secure. To prevent unauthorized access or disclosure, we have put in place suitable physical,
                                        electronic, and managerial procedures to safeguard and secure the information we collect.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}

                                >
                                    <Typography sx={{ fontSize: { lg: '24px', md: '24px', sm: '22px', xs: '20px' }, color: MAIN_COLOR, fontWeight: '700', }}>How we use cookies and IP addresses</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontSize: { lg: '19px', md: '18px', sm: '16px', xs: '15px' } }}>
                                        My Tutor Room uses cookies to store information in your web browser. The information
                                        stored may include preferences, session identification, HTTP information, and IP address.
                                        This helps us analyze data about our site traffic, so we can improve My Tutor Room and
                                        tailor it more to our members' needs. All information is anonymous and only used for
                                        operational purposes.<br />
                                        IP addresses of computers used to visit My Tutor Room are stored in our database. This
                                        includes when first registering for an account, managing your account details, writing a
                                        private or public message, or performing any other transaction that results in data being
                                        transferred to or from your computer and the website in question.<br />
                                        Your IP address is not visible to the public at any time.<br />
                                        You can set your browser to not receive cookies, but this may limit your ability to use them.
                                        My Tutor Room Cookies are saved to the browser, so to turn off any cookie you will have to
                                        do so for each browser you use by following the instructions on the below pages:<br />


                                        • <a href=''>Cookie settings in Internet Explorer</a><br />
                                        • <a href=''> Cookie settings in Firefox</a><br />
                                        • <a href=''>Cookie settings in Chrome</a><br />
                                        • <a href=''>Cookie settings in Safari</a><br />


                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}

                                >
                                    <Typography sx={{ fontSize: { lg: '24px', md: '24px', sm: '22px', xs: '20px' }, color: MAIN_COLOR, fontWeight: '700', }}>Links to other websites</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontSize: { lg: '19px', md: '18px', sm: '16px', xs: '15px' } }}>
                                        My Tutor Room may contain links to external websites, third-party products, or services.
                                        These third-party sites have separate and independent privacy policies. We therefore have
                                        no responsibility or liability for the content and activities of these linked sites. Nonetheless,
                                        we seek to protect the integrity of our site and welcome any feedback about these sites.                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}

                                >
                                    <Typography sx={{ fontSize: { lg: '24px', md: '24px', sm: '22px', xs: '20px' }, color: MAIN_COLOR, fontWeight: '700', }}>Controlling your personal information</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontSize: { lg: '19px', md: '18px', sm: '16px', xs: '15px' } }}>
                                        When using My Tutor Room, you may choose to limit public viewing of applicable personal
                                        information through the settings located in the<strong>Privacy settings</strong>  of your account.<br />
                                        My Tutor Room will not sell, distribute, or lease your personal information to third parties
                                        unless we have your explicit permission or are required by law to do so. We may use your
                                        personal information to send you security information, updates, or other information about
                                        My Tutor Room, or your account.<br />
                                        You may ask us to provide details of the personal information we hold about you, under the
                                        Data Protection Act 1998. To request this information, please email us. If you discover any of
                                        the information My Tutor Room holds for you is incorrect or incomplete, and that you are
                                        unable to change yourself, please contact us as soon as possible so the necessary changes
                                        can be made.<br />


                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}

                                >
                                    <Typography sx={{ fontSize: { lg: '24px', md: '24px', sm: '22px', xs: '20px' }, color: MAIN_COLOR, fontWeight: '700', }}>Contact Us</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontSize: { lg: '19px', md: '18px', sm: '16px', xs: '15px' } }}>
                                        If there are any questions regarding this privacy policy, you may contact us using the
                                        information below.<br />
                                        <strong>info@mytutorroom.com</strong><br />


                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid >
            <Footer />
        </>
    )
}

export default PrivacyPolicy