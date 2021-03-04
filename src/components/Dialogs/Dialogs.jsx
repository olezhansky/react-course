import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {


    let d = {
        id: 1,
        name: 'Dimych'
    }
    let a = {
        id: 2,
        name: 'Andrey'
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
               <DialogItem name="Dimych" id="1"/>
               <DialogItem name="Andrey" id="2"/>
               <DialogItem name="Sveta" id="3"/>
               <DialogItem name="Sasha" id="4"/>
               <DialogItem name="Valera" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Hello"/>
                <Message message="Hello 2"/>
                <Message message="Hello 3"/>
            </div>
        </div>
    )
}

export default Dialogs;