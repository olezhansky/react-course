let rerenderEntireTree = () => {
    console.log('State changed');
}
let state = {
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
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 8,
        message: state.dialogsPage.newMessageText,
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}


export let updateNewPostText = (newText) => {
  
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}


export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer 
}

export default state;