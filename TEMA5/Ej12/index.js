window.addEventListener("DOMContentLoaded", () => {
  
  const fetchData = async () => {
    const response = await fetch(`https://randomuser.me/api?results=1000`)
    const data = await response.json()
    const result = data.results

    let imgArr = []

    result.forEach(element => {
      imgArr.push(element.picture.large)
    });

    setTimeout(() => {
      
    }, 200);
  }

  fetchData()
})