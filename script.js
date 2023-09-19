
//Pratica 1

const possibilidadeDeCartao = (idade) => {
    if (idade >= 13) {
        if (idade < 18) {
            console.log("Seu dependente ja pode ter um cartao de credito vinculado ao seu! ")
        } else {
            console.log("A pessoa não pode ser dependente, mas pode ter seu próprio cartão!")
        }
    } else {
        console.log("Consulte outras possibilidades da Labenk")
    }
}


possibilidadeDeCartao(13)



//Pratica 2
const verificaPossibilidadeDeCartao = (idade) => {
    const possuiConta = prompt("Voce possui conta no Labank?")
     possuiConta.toLocaleLowerCase() === "sim" ? console.log("BOAS VINDAS!") : console.log("FAÇA CADASTRO!")

    if (idade >= 13) {
        if (idade < 18) {
            console.log("Seu dependente ja pode ter um cartao de credito vinculado ao seu! ")
        } else {
            console.log("A pessoa não pode ser dependente, mas pode ter seu próprio cartão!")
        }
    } else {
        console.log("Consulte outras possibilidades da Labenk")
    }
}

verificaPossibilidadeDeCartao(26)

// Pratica 3

const escolhaCartao = (digitoDoUsuario) => {

  switch(digitoDoUsuario){
    case 1:
		console.log("Cartao Facil")
		break;
        case 2:
            console.log("Cartao Black")
		break;
        case 3:
            console.log("Cartao Platinum")
		break;
        case 4:
            console.log("Cartao Gold")
		break;
        default:
            console.log("Ëscolha uma das opcoes disponiveis")

  }

}
escolhaCartao(3)
escolhaCartao(4)
escolhaCartao(7)


