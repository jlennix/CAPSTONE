function Post (props){
    const {title, description, image} = props.post

console.log('Post.jsx', title, description, image)

    return(
        <>
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        </>
    )
}

export default Post;