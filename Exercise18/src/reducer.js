export const initialState = {
    contacts: [],
}

export const reducer =(state, action) => {
    switch(action.type){
        case 'add':
            return { ...state, contacts: [...state.contacts, action.payload] }
        case 'edit':
            return { ...state, contacts: state.contacts.map((item, index) => index === action.payload.index ? { ...item, ...action.payload.updatedItem } : item) }
       case "delete":
            return { ...state, contacts: state.contacts.filter(contact => contact.id !== action.payload) }
        case "toggleFavorite":
            return { ...state, contacts: state.contacts.map(contact => contact.id === action.payload ? { ...contact, favorite: !contact.favorite } : contact) } 
        default:
            return state
    }
}