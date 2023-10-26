import { Button, FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import React, { useContext } from 'react'
import { AdelContext } from '../store/Context'
import { MAIN_COLOR } from '../constant';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ProposalInput = ({ style,title,button }) => {
    const { state, dispatch } = useContext(AdelContext);
    const goToHomePage=()=>{
        window.open('https://admin.mytutorroom.com'); 
    }
    return (
        <FormControl sx={style} variant="outlined" >
            <InputLabel shrink={false} sx={{fontSize:{lg:"20px",md:"18px",sm:"16px",xs:"14px"}}}>{state.propasal_input.length > 0 ? "" :title}</InputLabel>
            <OutlinedInput
            disabled
                value={state.propasal_input}
                onChange={e => { dispatch({ type: 'PROPOSAL', payload: e.target.value }) }}
                sx={{ outline: 'none', color: MAIN_COLOR, fontWeight: 900, border: 'none', bgcolor: 'lightgray', borderRadius: '12px'}}
                type={'text'}
                endAdornment={
                    <InputAdornment position="end" >
                    
                        <Button variant='contained' sx={{ fontSize: { xs: '14px' }, textTransform: { md: 'unset', lg: 'uppercase', xs: 'unset' } }} onClick={goToHomePage}> {button} <ArrowForwardIcon fontSize='small' sx={{ml:'5px'}}/></Button>
                    </InputAdornment>
                }
               
            />
        </FormControl>

    )
}

export default ProposalInput