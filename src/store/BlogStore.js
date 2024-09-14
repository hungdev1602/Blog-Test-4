import { makeAutoObservable } from 'mobx'

class Blog {
  posts = [
    {
      id: 1,
      author: "N.D. Hung",
      title: "Blog Post One oh my god",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus laboriosam enim est sint odit dolores, commodi doloremque atque? At accusamus nemo ratione ullam, asperiores harum beatae. Repellendus minus enim facere!"
    },
    {
      id: 2,
      author: "Pe Hy",
      title: "Hung yeu Pe Hy",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus laboriosam enim est sint odit dolores, commodi doloremque atque? At accusamus nemo ratione ullam, asperiores harum beatae. Repellendus minus enim facere!"
    },
    {
      id: 3,
      author: "heheheh",
      title: "MixiGaming",
      content: "test test"
    },
    {
      id: 4,
      author: "Baroibeo",
      title: "SBTC team Senagaugau",
      content: "Song bang tinh cam"
    }
  ]

  constructor(){
    makeAutoObservable(this)
  }

  addPost(id, author, title, content){
    this.posts.unshift({
      id: id,
      author: author,
      title: title,
      content: content
    })
  }

  updatePost(id, author, title, content){
    const idx = this.posts.findIndex((item) => item.id === id)
    console.log(idx)
    console.log(title)
    if(idx >= 0){
      this.posts[idx] = {...this.posts[idx], author: author, title: title, content: content}
    }
  }
}

export default new Blog()