import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import PostDetails from './pages/PostDetails/PostDetails'
import CreatePost from './pages/CreatePost/CreatePost'
import { observer } from "mobx-react-lite";
import BlogStore from "./store/BlogStore"
function App() {
  if(!BlogStore.isLogin){
    return (
      <>
        <Login />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/post/:id' element={<PostDetails />}/>
          <Route path='/createpost' element={<CreatePost />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </div>
    </>
  )
}

export default observer(App)
