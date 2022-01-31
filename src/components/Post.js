import React from "react";
import { useContextData } from "../Global/Context";

import Comment from "./Comments";

const Post = () => {
  const { posts,deletePost} = useContextData();
console.log(posts)
  return (
    <>
      {posts.map((post) => (
        <div className="posts" key={post.id}>
          <div className="posts__header">
          <div className='logo-avatar'>
            <h3 className="posts__header-avator">{post.username[0]}</h3>
            <h3 className="posts__header-name">{post.username}</h3>
         </div>
         <div >
            <button className="btn btn-sweet"id="button"> Edit</button>
          <button className="btn btn-sweet"onClick={()=>deletePost(post.id)}> Delete</button>
        </div>
         </div>
          
          <div className="posts__img">
            <img src={post.image} alt={post.image} />
          
          </div>
         
          
          <Comment id={post.id} />
            
        </div>
      ))}
    </>
  );
};

export default Post;
