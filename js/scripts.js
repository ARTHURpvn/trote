function calcular() {
    let mascote = document.getElementById("mascote").value;
    let homenagem = document.getElementById("homenagem").value;
    let som = parseFloat(mascote) + parseFloat(homenagem)
    alert("funcionou "+ som);
}