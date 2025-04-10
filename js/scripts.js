function calcular() {
    let caracterizacao = Number(document.getElementById("caracterizacao").value);
    let mascote = Number(document.getElementById("mascote").value);
    let homenagem = Number(document.getElementById("homenagem").value);
    let leite = Number(document.getElementById("leite").value);
    let kit = Number(document.getElementById("kit").value);
    let suplemento = Number(document.getElementById("suplemento").value);
    let pct_arroz_5kg = Number(document.getElementById("pct_arroz_5kg").value)
    let pct_arroz_1kg = Number(document.getElementById("pct_arroz_1kg").value)
    let pct_feijao_2kg = Number(document.getElementById("pct_feijao_2kg").value)
    let pct_feijao_1kg = Number(document.getElementById("pct_feijao_1kg").value)
    let macarrao = Number(document.getElementById("macarrao").value)
    let oleo = Number(document.getElementById("oleo").value)
    let sangue = Number(document.getElementById("sangue").value);
    let social = Number(document.getElementById("social").value);
    let arrecadacao = Number(document.getElementById("arrecadacao").value);
    let acao = Number(document.getElementById("acao").value);

    let label = document.getElementById("soma");
    let equipe = document.getElementById("equipe").value;

    let soma = mascote + homenagem + (leite * 2) + (pct_arroz_5kg * 5) + pct_arroz_1kg + (pct_feijao_2kg * 2) + pct_feijao_1kg + (macarrao * 0.5) + oleo + social + arrecadacao +  + caracterizacao
    
    if(equipe == "Laranja") {
        if(kit >= 97 && suplemento >= 49) {
            soma += 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15)

        } else if(kit >= 78 && suplemento >= 39) {
            soma += 4000 + ((kit - 78) * 30) + ((suplemento - 39) * 15)

        } else if(kit >= 49 && suplemento >= 25) {
            soma += 2500 + ((kit - 48) * 30) + ((suplemento - 25) * 15)

        } else if(kit >= 19 && suplemento >= 10) {
            soma += 1000 + ((kit - 19) * 30) + ((suplemento - 10) * 15)
            
        }

        if(sangue >= 49) {
            soma += 2500 + ((sangue - 49) * 20)
        } else {
            soma += ((sangue) * 20)
        }
    }
    
    label.innerHTML =  `Soma total: ${soma}`
}