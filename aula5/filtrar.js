const clientes = require('./clientes.json');

function filtraAptoSemComplemento(clientes){
    return clientes.filter((cliente) => {
        return (
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento")
        )
    });
}

const filtrados = filtraAptoSemComplemento(clientes);

console.log(filtrados);