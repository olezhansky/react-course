import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';




const Dialogs = (props) => {

    let dialogsData = [
         {id: 1, name: 'Dimych'},
         {id: 2, name: 'Andrey'},
         {id: 3, name: 'Sveta'},
         {id: 4, name: 'Sasha'},
         {id: 5, name: 'Valera'},
         {id: 6, name: 'Serhy'},
    ]
    let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesData = [
        {id: 1, message: 'Hello 1'},
        {id: 2, message: 'Hello 2'},
        {id: 3, message: 'Hello 3'},
        {id: 4, message: 'Hello 4'},
        {id: 5, message: 'Hello 5'},
        {id: 6, message: 'Hello 6'},
    ]
    let messagesElements = messagesData.map(m => <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
             {dialogsElements}
            </div>
            <div className={s.messages}>
              {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;