import React from 'react';

export default (props) => {

    const { data } = props
    // const { edges: posts } = data.allMarkdownRemark

    console.log(props)
    // console.log({posts})

    return(
        <div>
            <h1> blog Title</h1>
            this is the blog
        </div>
    )
}