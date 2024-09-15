/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { FaUser } from "react-icons/fa";
const PostItem = ({ id, author, title, content }) => {
  return (
    <>
      <Link to={`/post/${id}`}>
        <div className="h-[220px] py-[30px] px-[15px] hover:bg-[#5995ad] hover:text-white cursor-pointer postItem border-b border-[#5995ad] relative">
          <div className="text-[25px] font-[700] mb-[25px] text-[#5995ad] postItemChild">{title}</div>
          <div className="line-clamp-2">{content}</div>
          <div className="flex items-center gap-[10px] mt-[20px] absolute bottom-[10px]">
            <FaUser /> <span className="">Author: {author}</span>
          </div>
        </div>
      </Link>
    </>
  )
}

export default PostItem