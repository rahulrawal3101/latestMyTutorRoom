import React, { useContext, useEffect } from 'react'
import { AdelContext } from '../store/Context'

const useBottomBar = () => {
    const { state, dispatch } = useContext(AdelContext)
    useEffect(() => {
        function sizeOfScreen() {
            dispatch({ type: 'RESIZE', payload: window.innerWidth })
        }
        window.addEventListener('resize', sizeOfScreen)
        return () => window.removeEventListener('resize', sizeOfScreen)
    }, [])
    return (
        { state, dispatch }
    )
}

export default useBottomBar