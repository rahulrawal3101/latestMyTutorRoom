import React from 'react'
import LandingHeader from './Header/LandingHeader'
import MainContent from './Body/MainContent'
import LandingFooter from './Fotter/LandingFooter'

const LandingLayout = () => {
    return (
        <>
            <LandingHeader />
            <MainContent />
            <LandingFooter />
        </>
    )
}

export default LandingLayout