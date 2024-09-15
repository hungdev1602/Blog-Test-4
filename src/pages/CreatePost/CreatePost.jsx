import { observer } from "mobx-react-lite";
import BlogStore from "../../store/BlogStore"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')
  const handleCreatePost = (e) => {
    e.preventDefault()
    if(title && author && content){
      BlogStore.addPost(Date.now(), author, title, content)
      setTitle('')
      setAuthor('')
      setContent('')
      toast.success("Successfully create new post")
    }
    else{
      toast.error("Dont leave the cells blank")
    }
  }

  return (
    <>
      <div className="mt-[20px]">
        <div className="text-[36px] font-[600] text-[#5995ad]">Create New Post</div>
        <form className="" onSubmit={handleCreatePost}>
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
            
            <button className="bg-black text-white py-[10px] px-[20px] rounded-[5px] my-[15px]">Create Post</button>
        </form>
        <ToastContainer />
      </div>
    </>
  )
}

export default observer(CreatePost)