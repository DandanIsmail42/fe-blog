import React from 'react'
import {  UsersList } from '@/components'
import { useEffect } from 'react'
import { getListUsers } from '@/actions/usersAction';
import Layout from '@/components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';

export default function Pengguna() {
    const { getListUsersResult, detailUserResult, addUserResult, deleteUserResult} = useSelector((state) => state.userReducer)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListUsers())
    }, [dispatch])

    useEffect(() => {
        if(deleteUserResult) {
          dispatch(getListUsers())
        }
      }, [deleteUserResult, dispatch])
  return (
    <Layout>
        <UsersList getListUsersResult={getListUsersResult} detailUserResult={detailUserResult} addUserResult={addUserResult}/>
    </Layout>
  )
}
