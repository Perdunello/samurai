let initialState = {
    bestFriend: [
        {
            id: 1,
            name: 'Nikita',
            avaUrl: "https://www.thefaceparismanagement.com/uploads/images/products/1234.jpg"
        },
        {
            id: 2,
            name: 'Sanya',
            avaUrl: "https://www.faceapp.com/static/img/content/compare/beard-example-before@3x.jpg"
        },
        {id: 3, name: 'Danik', avaUrl: "https://vistapointe.net/images/face-2.jpg"},
    ],
}

let sidebarReducer = (state = initialState, action) => {
    return {...state}
}
export default sidebarReducer