export const reducer = (state, action) => {
    switch (action.type) {
        case 'RESIZE':
            return { ...state, currentScreenSize: action.payload }
        case 'SCROLLTRIGGER':
            return { ...state, trigger: action.payload }
        case 'PROPOSAL':
            return { ...state, propasal_input: action.payload }
        case 'DRAWER_CLICKED':
            return { ...state, drawer_opened: action.payload }
        case 'MODAL_ACTION':
            return { ...state, modal_open: action.payload }
        case "DRAWER_CLOSED":
             return {...state,drawer_opened:false}
        default:
            return { ...state }
    }
}