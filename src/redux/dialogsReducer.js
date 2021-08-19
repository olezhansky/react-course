// const SEND_MESSAGE = 'SEND-MESSAGE'
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

// let initialState = {
//     dialogs: [
//         {id: 1, name: 'Dimych'},
//         {id: 2, name: 'Andrey'},
//         {id: 3, name: 'Sveta'},
//         {id: 4, name: 'Sasha'},
//         {id: 5, name: 'Valera'},
//         {id: 6, name: 'Serhy'}
//     ],
//     messages: [
//         {id: 1, message: 'Hello 1'},
//         {id: 2, message: 'Hello 2'},
//         {id: 3, message: 'Hello 3'},
//         {id: 4, message: 'Hello 4'},
//         {id: 5, message: 'Hello 5'},
//         {id: 6, message: 'Hello 6'},
//         {id: 7, message: 'Hello 7'},
//     ],
//     newMessageText: 'Hello 8'
// }

// const dialogsReducer = (state = initialState, action) => {

//     switch (action.type) {
//         case SEND_MESSAGE: {
//             let newMessage = {
//                 id: 8,
//                 message: state.newMessageText,
//             }
//             let stateCopy = {...state}
//             stateCopy.messages.push(newMessage);
//             stateCopy.newMessageText = '';
//             return stateCopy
//         }
         
//         case UPDATE_NEW_MESSAGE_TEXT: {
//             let stateCopy = {...state}
//             stateCopy.newMessageText = action.newText;
//             return stateCopy
//         }
           
//         default:
//             return state
//     }
// }

// export const sendMessageCreator = () => ({type: SEND_MESSAGE})

// export const updateNewMessageTextCreator= (text) => ({
//     type: UPDATE_NEW_MESSAGE_TEXT, newText: text 
// })


// export default dialogsReducer

const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Serhy'}
    ],
    messages: [
        {id: 1, message: 'Hello 1'},
        {id: 2, message: 'Hello 2'},
        {id: 3, message: 'Hello 3'},
        {id: 4, message: 'Hello 4'},
        {id: 5, message: 'Hello 5'},
        {id: 6, message: 'Hello 6'},
        {id: 7, message: 'Hello 7'},
    ],
    newMessageText: 'Hello 8'
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: 
        return {
            ...state,
            newMessageText: action.newText
        }
        case SEND_MESSAGE:
            let text = state.newMessageText
            return {
                ...state,
                messages: [...state.messages, {id: 8, message: text }],
                newMessageText: '',
            }
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageTextCreator= (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, newText: text 
})


export default dialogsReducer