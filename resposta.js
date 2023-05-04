function escolha(){
    var resposta = document.querySelector('input[name="namoro"]:checked').value;

    switch(resposta){
        case "sim":
            alert("Finalmente! Agora não tem mais volta, ok.")
        break;
        case "sla":
            alert("Ta na dúvida eh mlk")
        break;
        case "nao":
            alert("Não fiz tudo isso pra nada. Responde direito, praga.")
        break;
    }
}

