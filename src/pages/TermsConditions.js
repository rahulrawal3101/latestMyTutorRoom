import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material';
import React from 'react';
import termcondition from '../assets/termcondition.jpg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import gradient from '../assets/gradientimage.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MAIN_COLOR } from '../constant';

const TermsCondition = () => {
    return (
        <>
            <Header />
            <Grid container >
                <Grid item lg={12} md={12} sm={12} xs={12} sx={{ height: '350px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${termcondition})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'ceenter' }}>
                    <Typography variant='h2' sx={{ fontSize: { lg: '40px', md: '37px', sm: '30px', xs: '29px' }, color: 'white', fontWeight: '700' }}>TERMS AND SERVICE</Typography>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12} sx={{ backgroundImage: `url(${gradient})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: '20px 5px' }}>
                    <Grid container sx={{ mt: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item lg={11} md={11} sm={11.5} xs={11.5}>
                            <Accordion defaultExpanded>
                                
                                <AccordionDetails>
                                    <Typography sx={{ fontSize: { lg: '19px', md: '18px', sm: '16px', xs: '15px' } }}>
                                        • The providers ("we", "us", "our") of the service provided by this web site ("Service") are not
responsible for any user-generated content and accounts. Content submitted express the
views of their author only.<br />
                                        • This Service is available to users of appropriate learning age. A school administrator, parent,
or adult can register for service on our platform.<br />
                                        • Each user may only have one account. If duplicate accounts are discovered, the duplicates
may be banned.<br />
                                        • All content you submit, upload, or otherwise make available to the Service ("Content") may
be reviewed by staff members. All Content you submit, or upload may be sent to third-party
verification services (including, but not limited to, spam prevention services). Do not submit
any Content that is private or confidential.<br />
                                        • You agree to not use the Service to submit or link to any Content which is defamatory,
abusive, hateful, threatening, spam or spam-like, likely to offend, contains adult or
objectionable content, contains personal information of others, risks copyright infringement,
encourages unlawful activity, or otherwise violates any laws. You are entirely responsible for
the content of, and any harm resulting from, that Content or your conduct.<br />
                                        • We may remove or modify any Content submitted at any time, with or without cause, with
or without notice. Requests for Content to be removed or modified will be undertaken only
at our discretion. We may terminate your access to all or any part of the Service at any time,
with or without cause, with or without notice.<br />
                                        • You may not access the Service through automated or programmatic means (such as
through a content scraper) without prior permission from us.<br />
                                        • You are granting us with a non-exclusive, permanent, irrevocable, unlimited license to use,
publish, or re-publish your Content in connection with the Service. You retain copyright over
the Content.<br />
                                        • These terms may be changed at any time without notice.<br />
                                        • If you do not agree with these terms, please do not register or use the Service. Use of the
Service constitutes acceptance of these terms as well as our Privacy Policy. If you wish to
close your account, please contact us.<br />
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

export default TermsCondition