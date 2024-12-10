window.addEventListener("DOMContentLoaded", () => {
  //eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYXJpYXMxODk4QGNldWFuZGFsdWNpYS5lcyIsImp0aSI6IjVkZjJkNzM0LTlmNWYtNGRiMy05NDU4LTRkMDczOGYzMmJiYSIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNzMzODUyNzg1LCJ1c2VySWQiOiI1ZGYyZDczNC05ZjVmLTRkYjMtOTQ1OC00ZDA3MzhmMzJiYmEiLCJyb2xlIjoiIn0.d-VwCtELI7WNkHmtrc0l1duStjwW0NYjQmjQaHtGTrE
  const fetchData = async () => {
    var headers = new Headers({ "cache-control": "no-cache", });
    var conf = {
      method: "GET",
      mode: "cors",
      headers: headers,
    };

    const api = document.getElementById("apikey").value
    const response = await fetch(`https://opendata.aemet.es/opendata/api/mapasygraficos/analisis?api_key=${api}`, conf)
    const data = await response.json()

    const responseMapa = await fetch(data.datos)
    const dataMapa = await responseMapa.blob()

    const div = document.getElementById("mapa")
    const img = document.createElement("img")

    img.setAttribute("src", URL.createObjectURL(dataMapa));

    div.appendChild(img)

    // console.log(data)
    // console.log(dataMapa)
  }

  document.getElementById("b1").addEventListener("click", (e) => {
    e.preventDefault()
    fetchData()
  })
})