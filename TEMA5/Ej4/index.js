window.addEventListener("DOMContentLoaded", (e) => {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", "https://opentdb.com/api.php?amount=5&type=multiple")
  xhr.send()

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;

    if(xhr.status >= 200 && xhr.status < 300) {
      let ul = document.getElementById("ul-element")
      let json = JSON.parse(xhr.responseText)
      let response = json.results

      response.forEach(element => {
        let li = document.createElement("li")

        li.style.backgroundColor = "#e9e9e9"
        li.style.padding = "10px"
        li.style.margin = "5px 0"
        li.style.border = "1px solid #ccc"
        li.style.borderRadius = "4px"
        li.style.fontFamily = "Arial, sans-serif"
        li.style.color = "#333"

        li.addEventListener("mouseenter", (e) => {
          e.target.style.backgroundColor = "#d1d1d1"
        })
        
        li.addEventListener("mouseout", (e) => {
          e.target.style.backgroundColor = "#e9e9e9"
        })

        li.innerHTML = `${element.category} - ${element.question}: <b>${element.correct_answer}</b>`

        ul.appendChild(li)
      });
    }
  })
})