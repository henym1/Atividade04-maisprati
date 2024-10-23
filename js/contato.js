function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

function sendMail() {
    let parms = {
        name : document.getElementById("nome").value,
        lastname : document.getElementById("sobrenome").value,
        email : document.getElementById("email").value,
        message : document.getElementById("mensagem").value,
    }

    emailjs.send("service_yr47njy","template_am2jjop",parms).then(alert("Mensagem enviada!"))
}