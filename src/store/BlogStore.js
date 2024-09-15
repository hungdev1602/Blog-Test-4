import { makeAutoObservable } from 'mobx'

class Blog {
  posts = [
    {
      id: 1,
      author: "N.D. Hung",
      title: "Blog Post One test data",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus laboriosam enim est sint odit dolores, commodi doloremque atque? At accusamus nemo ratione ullam, asperiores harum beatae. Repellendus minus enim facere!"
    },
    {
      id: 2,
      author: "Jordan Walke",
      title: "Blog Post Two test data",
      content: `ReactJS is an open-source JavaScript library developed by Facebook (now Meta) to build user interfaces (UI) for web applications. It focuses on creating reusable UI components, enabling rapid and efficient application development.

Main advantages
Component-based architecture: React uses a component-based architecture, allowing the interface to be broken down into small, reusable parts.
Virtual DOM: React utilizes Virtual DOM to optimize the interface update process, resulting in faster application responsiveness.
Declarative coding style: The declarative approach makes code easier to read and maintain.
Large ecosystem: React boasts a vast ecosystem with numerous supporting libraries and tools.
Cross-platform development: React can be used for developing mobile and desktop applications.
How it works
React operates by creating UI components, each representing a part of the interface. When the application state changes, React compares the current component tree with the new one and updates only the necessary parts, thanks to the Virtual DOM mechanism.

Applications
React is commonly used to build complex web applications, including:

Single-page applications (SPA)
Progressive Web Apps (PWA)
Mobile apps (when combined with React Native)
Desktop applications (when combined with Electron)
Conclusion
ReactJS has become one of the most popular JavaScript frameworks for frontend development, widely adopted by the developer community and leading tech companies worldwide. It provides an efficient and flexible approach to building user interfaces, suitable for both small projects and large-scale applications.`
    }
  ]

  isLogin = false

  constructor(){
    makeAutoObservable(this)
  }

  login(){
    this.isLogin = true
  }

  logout(){
    this.isLogin = false
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