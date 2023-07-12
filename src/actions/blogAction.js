import api from "@/components/api"


export const GET_LIST_BLOG = "GET_LIST_BLOG"

export const getListBlog = () => {
    return (dispatch) => {

        // loading
        dispatch({
            type: GET_LIST_BLOG,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        // get api
        api.get('/posts')
            .then((response) => {
                console.log(response)
                // berhasil get api
                dispatch({
                    type: GET_LIST_BLOG,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((error) => {
                // gagal get api
                dispatch({
                    type: GET_LIST_BLOG,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}