import { useParams } from 'react-router-dom';
import { observer } from "mobx-react-lite";
import BlogStore from "../../store/BlogStore"
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const PostDetails = () => {
  const { id } = useParams()
  // data from mobx
  const dataPost = BlogStore.posts.find((item) => item.id === Number(id))

  const [editPost, setEditPost] = useState(false)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')


  const handleSubmitEdit = (e) => {
    e.preventDefault()
    if(title && author && content){
      BlogStore.updatePost(Number(id), author, title, content)
      setEditPost(false)
      toast.success("Successfully update this post")
    }
    else{
      toast.error(`Dont leave the cells blank`)
    }
  }

  useEffect(() => {
    setTitle(dataPost.title)
    setAuthor(dataPost.author)
    setContent(dataPost.content)
  }, [])

  return (
    <>
      <div className="mt-[20px]">
        <div className="text-[36px] font-[600] text-[#5995ad]">{dataPost.title}</div>
        <div className="italic mt-[15px] mb-[20px] text-[18px]">Author: {dataPost.author}</div>
        <div className="whitespace-pre-line">{dataPost.content}</div>

        <div className="mt-[80px]">
          <div className="text-[36px] font-[600] text-[#5995ad]">Edit this post</div>
          <button 
            onClick={() => setEditPost(prev => !prev)}
            className="bg-black text-white py-[10px] px-[20px] rounded-[5px] mb-[20px]"
          >
            {editPost ? "Close Edit" : "Edit Post"}
          </button>

          {editPost && 
            <form className="mt-[20px]" onSubmit={handleSubmitEdit}>
              <label htmlFor="title">Title</label>
              <input 
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                id='title' 
                name='title'
                type="text" 
                className='border py-[5px] px-[10px] border-gray-600 outline-none w-full mb-[10px] rounded-[5px]' 
                placeholder='Title...'
              />
              <label htmlFor="author">Author</label>
              <input 
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
                id='author' 
                name='author'
                type="text" 
                className='border py-[5px] px-[10px] border-gray-600 outline-none w-full mb-[10px] rounded-[5px]' 
                placeholder='Title...'
              />
              <label htmlFor="content">Content</label>
              <textarea 
                onChange={(e) => setContent(e.target.value)}
                value={content}
                name="content" 
                id="content" 
                rows={10} 
                className='border py-[5px] px-[10px] border-gray-600 outline-none w-full rounded-[5px]' 
                placeholder='Content'
              >
              </textarea>
              
              <button className="bg-black text-white py-[10px] px-[20px] rounded-[5px] my-[15px]">Submit Edit</button>
            </form>
          }
        </div>
        <ToastContainer />
      </div>
    </>
  )
}

export default observer(PostDetails)