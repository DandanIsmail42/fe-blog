
import Layout from '@/components/Layout/Layout'

import { BlogList } from '@/components'
import { useDispatch, useSelector } from 'react-redux'
// import { getListBlog } from '@/actions/blogAction'
import { useEffect } from 'react'
import { getListBlog } from '@/actions/blogAction';




export default function Home() {
const { getListBlogResult} = useSelector((state) => state.blogReducer)

  const dispatch = useDispatch()
  useEffect(() => {
      // panggil get list kontak
      dispatch(getListBlog())
  }, [dispatch])
  return (
    <>
      <Layout>
          <BlogList getListBlogResult={getListBlogResult}/>
      </Layout>
    </>
  )
}
