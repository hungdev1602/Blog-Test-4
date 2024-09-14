import PostItem from "../../components/PostItem/PostItem"
import { observer } from "mobx-react-lite";
import BlogStore from "../../store/BlogStore"
const Home = () => {
  return (
    <>
      <div className="mt-[20px]">
        {/* List */}
        <div className="grid grid-cols-3 gap-[20px]">
          {/* Item */}
          {BlogStore.posts.map((item) => (
            <PostItem 
              key={item.id}
              id={item.id}
              author={item.author}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default observer(Home)