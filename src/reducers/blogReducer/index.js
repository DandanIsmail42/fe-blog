import { GET_LIST_BLOG } from "@/actions/blogAction"


const initialState = {
   getListBlogResult : false,
   getListBlogLoading : false,
   getListBlogError : false

    // addKontakResult : false,
    // addKontakLoading : false,
    // addKontakError : false,

    // deleteKontakResult : false,
    // deleteKontakLoading : false,
    // deleteKontakError : false,

    // detailKontakResult: false,

    // updateKontakResult : false,
    // updateKontakLoading : false,
    // updateKontakError : false,
}

const blog = (state = initialState, action) => {
    switch(action.type) {
        case GET_LIST_BLOG: 
            return {
                ...state,
               getListBlogResult: action.payload.data,
               getListBlogLoading: action.payload.loading,
               getListBlogError: action.payload.errorMessage
            }
        default:
            return state
    }
}

export default blog