import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import sidebarReducer from "./sidebarReducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'post 1', likesCount: "like 1"}, 
                {id: 2, message: 'post 2', likesCount: "like 2"}
            ],
            newPostText: 'react-JS'
        }, 
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber()  {
        console.log('State changed');
    },
    getState() {
        return this._state   
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) { // {type: 'ADD-POST}
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state);
    }
}




// export default store;
// window.store = store;