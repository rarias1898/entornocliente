window.addEventListener("DOMContentLoaded", () => {

  let page = 1
  const spinnerContainer = document.getElementById("loading-spinner");
  const spinner = document.createElement("img")
  spinner.src = "./images/Spinner.gif"
  
  const fetchApi = async (page) => {
    try {
      showSpinner(true)
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`)
      const data = await response.json()
      showSpinner(false)
      // console.log(data)
      data.forEach(element => {
        const posts = document.getElementById("post-list")
        const divPostDetails = document.createElement("div")
        const postDetails = document.getElementById("post-details")
        const post = document.createElement("div")
        const titulo = document.createElement("h1")
        const body = document.createElement("p")

        titulo.innerText = `${element.id} - ${element.title}`
        titulo.style.cursor = "pointer"
        body.innerText = element.body

        // Al pulsar el titulo del post carga su comentario
        titulo.addEventListener("click", async () => {
          try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${element.id}`)
            const comments = await response.json()
            divPostDetails.innerHTML = ""
            comments.forEach(comment => {
              divPostDetails.innerHTML += `</br>${comment.postId} | <b>${comment.email}</b> - ${comment.body} </br></br>`
              postDetails.appendChild(divPostDetails)
            })
          } catch (error) {
            console.log(error)
          }
        })

        post.appendChild(titulo)
        post.appendChild(body)
        posts.appendChild(post)
      });

    } catch (error) {
      console.log(error)
    }
  }

  // Cargar nuevos posts
  document.getElementById("load-more-btn").addEventListener("click", async () => {
    try {
      document.getElementById("post-list").innerHTML = ""
      page++
      await fetchApi(page)
    } catch (error) {
      console.log(error)
    }
  })

  // Buscar un post
  document.getElementById("search-btn").addEventListener("click", async () => {
    try {
      const postDetails = document.getElementById("post-details")
      const divPostById = document.createElement("div")
      const titulo = document.createElement("h1")
      const body = document.createElement("p")
      const searchInput = document.getElementById("search-input").value

      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${searchInput}`)
      const data = await response.json()

      titulo.innerHTML = `${data.id} - ${data.title}`
      body.innerHTML = data.body
      
      divPostById.appendChild(titulo)
      divPostById.appendChild(body)
      postDetails.appendChild(divPostById)      
    } catch (error) {
      console.log(error)
    }
  })

  const showSpinner = (isLoading) => {
    
    if (isLoading) {
      spinnerContainer.style.display = "block"; // Mostrar el spinner
      spinnerContainer.appendChild(spinner)
    } else {
      spinnerContainer.style.display = "none"; // Ocultar el spinner
    }
  }

  fetchApi(page)
})