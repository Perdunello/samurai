// import profileReducer from "./profileReducer";
// import dialogsReducer from "./dialogsReducer";
// import sidebarReducer from "./sidebarReducer";
//
// let store = {
//     // _state: {
//     //     dialogPage: {
//     //         dialogsData: [
//     //             {
//     //                 id: 1,
//     //                 name: 'Nikita',
//     //                 avaUrl: "https://www.thefaceparismanagement.com/uploads/images/products/1234.jpg"
//     //             },
//     //             {
//     //                 id: 2,
//     //                 name: 'Sanya',
//     //                 avaUrl: "https://www.faceapp.com/static/img/content/compare/beard-example-before@3x.jpg"
//     //             },
//     //             {id: 3, name: 'Danik', avaUrl: "https://vistapointe.net/images/face-2.jpg"},
//     //             {
//     //                 id: 4,
//     //                 name: 'Andrey',
//     //                 avaUrl: "https://content.latest-hairstyles.com/wp-content/uploads/hairstyles-for-oval-faces.jpg"
//     //             },
//     //             {
//     //                 id: 5, name: 'Artem',
//     //                 avaUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/face-wash-gettyimages-489974588-1557345669.jpg"
//     //             }
//     //         ],
//     //         messagesData: [
//     //             {id: 1, message: 'Lorem.'},
//     //             {id: 2, message: 'Lorem ipsum.'},
//     //             {id: 3, message: 'Lorem ipsum dolor.'},
//     //             {id: 4, message: 'Lorem ipsum dolor. HAHA'},
//     //             {id: 5, message: 'Lorem ipsum BUBU'},
//     //         ],
//     //         newMessageText: '',
//     //     },
//     //     profilePage: {
//     //         postsData: [
//     //             {id: 1, message: 'Hello', likesCount: 10},
//     //             {id: 2, message: 'Bye', likesCount: 0},
//     //             {id: 3, message: 'DADA', likesCount: 5},
//     //             {id: 3, message: 'ggg', likesCount: 3}
//     //         ],
//     //         newPostText: '',
//     //     },
//     //     sidebar: {
//     //         bestFriend: [
//     //             {
//     //                 id: 1,
//     //                 name: 'Nikita',
//     //                 avaUrl: "https://www.thefaceparismanagement.com/uploads/images/products/1234.jpg"
//     //             },
//     //             {
//     //                 id: 2,
//     //                 name: 'Sanya',
//     //                 avaUrl: "https://www.faceapp.com/static/img/content/compare/beard-example-before@3x.jpg"
//     //             },
//     //             {id: 3, name: 'Danik', avaUrl: "https://vistapointe.net/images/face-2.jpg"},
//     //         ],
//     //     }
//     // },
//     _callSubscriber(state) {
//         //pattern
//     },
//
//     subscribe(observer) { //observer pattern
//         this._callSubscriber = observer
//     },
//     getState() {
//         return this._state;
//     },
//     dispatch(action) {
//         this.getState().profilePage = profileReducer(this.getState().profilePage, action)
//         this.getState().dialogsPage = dialogsReducer(this.getState().dialogsPage, action)
//         this.getState().sidebarPage = sidebarReducer(this.getState().sidebarPage, action)
//
//         this._callSubscriber(this._state)
//     },
// }
