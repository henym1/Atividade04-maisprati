function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

function searchMember() {
   let member = document.querySelector('#characters').value
   let url = `https://gsi.fly.dev/characters/search?name=${member}`

   fetch(url).then(function(response){
        response.json().then(function(data) {
            console.log(data)
            displayData(data)
        })
   })

}

function displayData(data) {
    let result = document.querySelector('#result')

    result.innerHTML = `<p>Nome: ${data.results[0].name}</p>
                        <p>Visão: ${data.results[0].vision}</p>
                        <p>Arma: ${data.results[0].weapon}</p>`
}
