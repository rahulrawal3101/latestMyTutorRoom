import { Button } from "@mui/material"
import { LANDING_COLOR } from "./config"

const CstBtn = ({ text, p, m, borderColor, textColor, onClick, style }) => {
    return <Button onClick={onClick} style={style} disableRipple variant='contained' sx={{ width: 'fit-content', border: `1px solid ${borderColor}`, m: m, transition: 'all 0.2s ease', bgcolor: LANDING_COLOR, color: 'black', p: { lg: p, xs: '12px 24px' }, fontWeight: 900, borderRadius: '27px', textTransform: 'unset', fontSize: { lg: '16px', xs: '20px' }, '&:hover': { bgcolor: 'transparent', borderColor: `${borderColor}`, color: textColor } }}>{text}</Button>
}

export default CstBtn