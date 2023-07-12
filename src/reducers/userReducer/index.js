import { GET_LIST_USERS, DETAIL_USER, ADD_USER, DELETE_USER } from "@/actions/usersAction"


const initialState = {
   getListUsersResult : false,
   getListUsersLoading : false,
   getListUsersError : false,

    addUserResult : false,
    addUserLoading : false,
    addUserError : false,

    deleteUserResult : false,
    deleteUserLoading : false,
    deleteUserError : false,

    detailUserResult: false,

    // updateKontakResult : false,
    // updateKontakLoading : false,
    // updateKontakError : false,
}

const users = (state = initialState, action) => {
    switch(action.type) {
        case GET_LIST_USERS: 
            return {
                ...state,
               getListUsersResult: action.payload.data,
               getListUsersLoading: action.payload.loading,
               getListUsersError: action.payload.errorMessage
            }
        case ADD_USER: 
            return {
                ...state,
               addUserResult: action.payload.data,
               addUserLoading: action.payload.loading,
               addUserError: action.payload.errorMessage
            }
        case DELETE_USER: 
            console.log('4 reducer', action)
            return {
                ...state,
               deleteUserResult: action.payload.data,
               deleteUserLoading: action.payload.loading,
               deleteUserError: action.payload.errorMessage
            }
        case DETAIL_USER:
            return {
               ...state,
               detailUserResult: action.payload.data
           }
        default:
            return state
    }
}

export default users