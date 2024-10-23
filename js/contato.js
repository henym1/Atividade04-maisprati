function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

const emailInput = document.querySelector("#email")
const resultMessage = document.querySelector("#resultMessage")
const contactForm = document.querySelector("#contactForm")

contactForm.addEventListener("submit", function(event) {
    event.preventDefault()

    const email = emailInput.value

    const isValid = validateEmail(email)

    if(isValid) {
        sendMail()
    } else {
        resultMessage.textContent = "Email inválido"
        resultMessage.style.color = "red"
        resultMessage.style.fontWeight = 700
    }
})

const validateEmail = (email) => {
    const regex = /^[^\s]+@[^\s]+\.+[^\s]+$/
    return regex.test(email)
}


function sendMail() {
    let parms = {
        name : document.getElementById("nome").value,
        lastname : document.getElementById("sobrenome").value,
        email : document.getElementById("email").value,
        message : document.getElementById("mensagem").value,
    }

    emailjs.send("service_yr47njy","template_am2jjop",parms).then(alert("Mensagem enviada!"))
    clearForm()
}

function clearForm() {
    document.getElementById("nome").value = ""
    document.getElementById("sobrenome").value = ""
    document.getElementById("email").value = ""
    document.getElementById("mensagem").value = ""
}