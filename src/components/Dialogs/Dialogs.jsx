import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';




const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} />)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        props.addMessage(text);
    }


    let onMessageChange= () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
      }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogsPage.newMessageText}></textarea>
                <div>
                    <button onClick={addMessage}>Add messagee</button>
                </div>
                
            </div>
        </div>
    )
}

export default Dialogs;