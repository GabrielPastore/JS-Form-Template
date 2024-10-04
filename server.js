const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname)));

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/submit', (req, res) => {
    const { name, email, phone, message } = req.body;

    console.log('Dados do Formulário Recebidos:');
    console.log(`Nome: ${name}`);
    console.log(`E-mail: ${email}`);
    console.log(`Telefone: ${phone}`);
    console.log(`Mensagem: ${message}`);

    res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});