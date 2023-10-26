import React from 'react'
import { MAIN_COLOR } from '../constant'
import { Grid, Typography } from '@mui/material'

const SectionHead = ({ title, tagline }) => {
    return (
        <Grid item lg={12} >
            <Typography textAlign={'center'} variant='h1' color={MAIN_COLOR} sx={{ fontSize: '24px', letterSpacing: '3px', lineHeight: 1.43, fontWeight: 900 }}>{title}</Typography>
            <Typography textAlign={'center'} m={'6px'} fontSize={'18px'} fontWeight={600}>{tagline}</Typography>
        </Grid>

    )
}

export default SectionHead