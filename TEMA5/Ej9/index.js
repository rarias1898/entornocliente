window.addEventListener("DOMContentLoaded", () => {
  
  const fetchApi = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=5")
      const data = await response.json()

      console.log(data)

      data.forEach((element, i) => {
        if(i == 0) {
          i = 2
        }
        const posts = document.getElementById("post-list")
        const post = document.createElement("div")
        const titulo = document.createElement("h1")
        const body = document.createElement("p")

        titulo.innerText = element.title
        body.innerText = element.body

        post.appendChild(titulo)
        post.appendChild(body)
        posts.appendChild(post)

        document.getElementById("load-more-btn").addEventListener("click", async () => {
          const secondResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${i}&_limit=5`)
          const secondData = await secondResponse.json()

          
          console.log(i)
        })
      });

    } catch (error) {
      console.log(error)
    }
  }

  fetchApi()
})