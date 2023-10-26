import { createContext, useReducer } from "react";
import { reducer } from "./Reducer";
export const AdelContext = createContext("");

const initialState = {
    currentScreenSize: window.innerWidth,
    trigger: false,
    propasal_input: "",
    drawer_opened: false,
    modal_open: false,
}

function handleOpenWhatsAppChat() {
       
    const phoneNumber = '9773926687';
    const message = `Hello there! 🤝 I want to connect`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank');
  }
  

const AdelContextWrapper = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <AdelContext.Provider value={{ state, dispatch,handleOpenWhatsAppChat }}>
        {props.children}
    </AdelContext.Provider>
}
export default AdelContextWrapper