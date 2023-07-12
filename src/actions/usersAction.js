import api from "@/components/api"
import Swal from 'sweetalert2';

export const GET_LIST_USERS = "GET_LIST_USERS"
export const DETAIL_USER = "DETAIL_USER"
export const ADD_USER = "ADD_USER"
export const DELETE_USER = "DELETE_USER"


export const getListUsers = () => {
    return (dispatch) => {

        // loading
        dispatch({
            type: GET_LIST_USERS,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        // get api
        api.get('/users')
            .then((response) => {
                console.log(response.data)
                // berhasil get api
                dispatch({
                    type: GET_LIST_USERS,
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
                    type: GET_LIST_USERS,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}
export const addUser = (data) => {
    return (dispatch) => {

        // loading
        dispatch({
            type: ADD_USER,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        // get api
        api.post('/users', data)
            .then((response) => {
                console.log(response.data)
                // berhasil get api
                dispatch({
                    type: ADD_USER,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
                Swal.fire(
                    'Notification',
                    'Data added successfully',
                    'success'
                  )
            })
            .catch((error) => {
                // gagal get api
                console.log(error)
                dispatch({
                    type: ADD_USER,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}
export const deleteUser = (id) => {
    console.log('2 action')
    return (dispatch) => {
        // loading
        dispatch({
            type: DELETE_USER,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        api.delete('/users/' + id)
            .then((response) => {
                console.log(response.data)
                 console.log('3 berhasil get api')
                dispatch({
                    type: DELETE_USER,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
                Swal.fire(
                    'Notification',
                    'Data delete successfully',
                    'success'
                  )
            })
            .catch((error) => {
                // gagal get api
                console.log(error)
                dispatch({
                    type: ADD_USER,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}

export const detailUser = (data) => {
    return (dispatch) => {
        dispatch({
            type: DETAIL_USER,
            payload: {
              data: data
            }
        })
    }
}