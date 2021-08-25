import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {sendMessageCreator, updateNewMessageTextCreator} from '../../redux/dialogsReducer'

const Dialogs = (props) => {
    let state = props.dialogsPage
    console.log(state);

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)

    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)

    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onMessageChange= (e) => {
        let text = e.target.value
        props.updateNewMessageText(text)
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea placeholder="Enter your message" onChange={onMessageChange} value={props.dialogsPage.newMessageText}></textarea>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;