import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import BlogStore from "../../store/BlogStore"
const Navbar = () => {
  return (
    <div className="bg-[#79B9D2] text-white">
      <div className="flex items-center justify-between py-[25px] container mx-auto">
        <Link to={'/'} className="text-[36px] inline-block font-[700]">My Blog Test</Link>
        <ul className="flex items-center gap-[30px]">
          <li className="">
            <Link to={'/'}>See All Posts</Link>
          </li>
          <li className="">
            <Link to={'/createpost'}>Create Posts</Link>
          </li>
          <li className="cursor-pointer" onClick={() => BlogStore.logout()}>Logout</li>
        </ul>
      </div>
    </div>
  )
}

export default observer(Navbar)