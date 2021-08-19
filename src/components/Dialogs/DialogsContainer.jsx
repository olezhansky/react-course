import {sendMessageCreator, updateNewMessageTextCreator} from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
 return {
    dialogsPage: state.dialogsPage
 }
}
let mapDispatchToProps = (dispatch) => {
 return {
    updateNewMessageText: (text) => {
        dispatch(updateNewMessageTextCreator(text))
    },
    sendMessage:  () => {
        dispatch(sendMessageCreator())
    }
 }    
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;