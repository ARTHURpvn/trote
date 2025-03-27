function calcular() {
    let mascote = document.getElementById("mascote").value;
    let homenagem = document.getElementById("homenagem").value;
    let leite = document.getElementById("leite").value;
    let kitAvulso = document.getElementById("kitAvulso").value
    let suplementoAvulso = document.getElementById("suplementoAvulso").value

    let soma = parseFloat(mascote) + parseFloat(homenagem) + (2* parseFloat(leite)) + (30 * parseFloat(kitAvulso)) + (15 * parseFloat(suplementoAvulso))
    let label = document.getElementById("soma");

    label.innerHTML =  `Soma total: ${soma}`
}