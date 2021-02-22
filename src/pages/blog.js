import React from 'react'
import Layout from '../components/layout'
import styles from '../components/blog.module.css'

const blog = () => {
    return (
        <Layout>
            <div className={styles.page}>
                <h1>Blog page</h1>
                <p className={styles.text}>
                    Magna voluptate excepteur adipisicing eu eiusmod cupidatat. 
                    Non eiusmod mollit fugiat est ipsum reprehenderit tempor. 
                    Ipsum aute adipisicing aliqua ex cillum eu.
                </p>

            </div>
            
        </Layout>
    )
}

export default blog
