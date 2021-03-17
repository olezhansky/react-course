
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
        }
    },

    getState() {
        return this._state   
    },
    _callSubscriber()  {
        console.log('State changed');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = {
            id: 8,
            message: this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
}


export default store;
window.store = store;