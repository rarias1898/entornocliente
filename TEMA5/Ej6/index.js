window.addEventListener("DOMContentLoaded", () => {
  const postData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            userId: 1,
            title: "Esto es una prueba",
            body: "Esto es el body de la prueba saludos"
          }
        )
      })
  
      const data = await response.json()
      console.log(data)

    } catch (error) {
      console.log(error)
    }
  }

  postData()
})