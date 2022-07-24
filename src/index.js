const { response } = require('express');
const express = require('express');
const { v4: uuidv4 } = require('uuid')

const app = express();
const customers = [];

app.use(express.json())

app.post("/account", (request, response) => {
    const { cpf, name } = request.body;

    const customerAlreadyExits = customers.some((customer) => customer.cpf === cpf);

    if (customerAlreadyExits){
        return response.status(400).json({error: "Customer already exits!"});
    }
  

    customers.push({
        cpf, name, id: uuidv4(), statement: []
    })

    return response.status(201).send()

})

app.listen(
    4000
);


