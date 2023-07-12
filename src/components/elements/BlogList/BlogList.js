import React from 'react'
import styles from './index.module.css'



const BlogList = ({getListBlogResult, getListBlogLoading, getListBlogError}) => {
   
  return (
    <div className={styles.wrapper}>
      {getListBlogResult ? (
         getListBlogResult.map((blog, i) => {
          return(
              <>
                  <div className={styles.cart} key={i}>
                      <h2>{blog.title}</h2>
                      <p>{blog.body}</p>
                  </div>
              </>
          )
        })
      ) : getListBlogLoading ? (
        <p>Loading ....</p>
      ) : (
        <p>{getListBlogError}</p>
      )}
    </div>
  )
}

export default BlogList