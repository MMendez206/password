const button = document.querySelector(".btn")
const resultado = document.querySelector(".resultado")

button.addEventListener("click", function () {
    let opc1 = document.querySelector("#opc1").value
    let opc2 = document.querySelector("#opc2").value
    let opc3 = document.querySelector("#opc3").value
    let cantidad = opc1 + opc2 + opc3

    if (cantidad == "911") {
        resultado.innerHTML = "Password 1 Correcto"
    } else if (cantidad == "714") {
        resultado.innerHTML = "Password 2 Correcto"
    } else {
        resultado.innerHTML = "Password Incorrecto"
    }
})