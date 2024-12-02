window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", (e) => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "https://yesno.wtf/api")
    xhr.send()

    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.readyState !== 4) return;

      if (xhr.status >= 200 && xhr.status < 300) {
        let json = JSON.parse(xhr.responseText)
        // console.log(json)
        
        let parrafo = document.getElementById("respuesta")
        let body = document.getElementsByTagName("body")[0]
        
        // parrafo.innerText = json.answer
        parrafo.innerHTML = `<img src='${json.image}' alt="">`
      }
    })
  })
})