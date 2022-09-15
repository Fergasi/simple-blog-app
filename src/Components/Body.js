import React, { useState } from "react";

const Body = ({ username, imgUrl }) => {
  const [blogs, setBlogs] = useState([]);
  const [blogText, setBlogText] = useState("");

  const deleteBlogPost = (blogId) => {
    setBlogs(
      blogs.filter((ogBlog) => {
        if (ogBlog.id !== blogId) {
          return ogBlog;
        }
      })
    );
  };

  return (
    <div className='bodyContainer'>
      <h4 id='heading'>Welcome {username} !</h4>
      <form className='newPostContainer'>
        <textarea
          className='textInputs'
          value={blogText}
          placeholder='Enter your text here...'
          onChange={(event) => {
            setBlogText(event.target.value);
          }}
        ></textarea>
        <button
          className='Buttons'
          type='button'
          onClick={() => {
            setBlogs([
              {
                username: username,
                imgUrl: imgUrl,
                text: blogText,
                id: blogs.length + 1,
              },
              ...blogs,
            ]);
            setBlogText("");
            console.log(blogs);
          }}
        >
          Post
        </button>
      </form>

      <h4>Blogs</h4>
      <div className='blogPosts'>
        {blogs.map((blog, index) => {
          return (
            <div key={index} className='post'>
              <div className='postHeader'>
                <img className='profilePicSmall' src={blog.imgUrl} />
                &nbsp;&nbsp;&nbsp;
                <h5>{blog.username}</h5>
              </div>
              <div>{blog.text}</div>
              <button
                className='deleteButtons'
                type='button'
                onClick={() => {
                  deleteBlogPost(blog.id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
