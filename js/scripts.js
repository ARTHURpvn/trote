function calcular() {
    let mascote = Number(document.getElementById("mascote").value);
    let homenagem = Number(document.getElementById("homenagem").value);
    let leite = Number(document.getElementById("leite").value);
    let kit = Number(document.getElementById("kit").value);
    let suplemento = Number(document.getElementById("suplemento").value);
    let label = document.getElementById("soma");
    let equipe = document.getElementById("equipe").value;

    let soma = mascote + homenagem + (2* leite)
    
    if(equipe == "Laranja") {
        if(kit >= 97) {
            soma += 5000 + ((kit - 97) * 30)

        } else if(kit >= 78) {
            soma += 4000 + ((kit - 78) * 30)

        } else if(kit >= 49) {
            soma += 2500 + ((kit - 48) * 30)

        } else if(kit >= 19) {
            soma += 1000 + ((kit - 19) * 30)
            
        }

    }
    

    label.innerHTML =  `Soma total: ${soma}`
}