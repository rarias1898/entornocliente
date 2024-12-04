window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("b1").addEventListener("click", (e) => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()

        let tablaContainer = document.getElementById("tabla-container")
        let table = document.createElement("table")
        let thead = document.createElement("thead")
        let theadTr = document.createElement("tr")
        let theadTh1 = document.createElement("th")
        let theadTh2 = document.createElement("th")

        theadTh1.innerText = "Title"
        theadTh2.innerText = "Body"

        tablaContainer.appendChild(table)
        table.appendChild(thead)
        thead.appendChild(theadTr)
        thead.appendChild(theadTr)
        theadTr.appendChild(theadTh1)
        theadTr.appendChild(theadTh2)

        let tbody = document.createElement("tbody")
        table.appendChild(tbody)

        data.forEach(element => {
          let tr = document.createElement("tr")
          let tdTitle = document.createElement("td")
          let tdBody = document.createElement("td")

          tdTitle.innerText = element.title
          tdBody.innerText = element.body

          tbody.appendChild(tr)
          tr.appendChild(tdTitle)
          tr.appendChild(tdBody)
        });
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  })

})