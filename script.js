document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Por favor, insira seu nome.");
        return;
    }

    if (email === "") {
        alert("Por favor, insira seu e-mail.");
        return;
    } else if (!validateEmail(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    if (phone === "") {
        alert("Por favor, insira seu telefone.");
        return;
    } else if (!validatePhone(phone)) {
        alert("Por favor, insira um telefone válido com 10 ou 11 dígitos.");
        return;
    }

    if (message === "") {
        alert("Por favor, insira sua mensagem.");
        return;
    }

    submitForm(name, email, phone, message);
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    const re = /^\d{10,11}$/;
    return re.test(phone);
}

function submitForm(name, email, phone, message) {
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, phone, message})
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Seu formulário foi enviado com sucesso!");
            document.getElementById("contact-form").reset();
        } else {
            alert("Houve um problema ao enviar o formulário. Tente novamente.");
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("Houve um problema ao enviar o formulário. Tente novamente.");
    });
}

