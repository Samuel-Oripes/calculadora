const escuro = document.querySelector("#escuro")
const claro = document.querySelector("#claro")
const neon = document.querySelector("#neon")

const body = document.querySelector(".body")
const buttonTema = document.querySelector(".button-tema")
const divCabecalho = document.querySelector(".div-cabecalho")
const bolinha = document.querySelector(".bolinha")
const inputTela = document.getElementById("tela")
const divTeclado = document.querySelector(".div-teclado")
let operadores = document.querySelectorAll(".operadores")
const deletar = document.querySelector(".deletar")
const limpar = document.querySelector(".limpar")
const igual = document.querySelector(".igual")

function mudarParaClaro(){

    body.style.background = "hsl(0, 0%, 90%)"
    buttonTema.style.background = "hsl(0, 5%, 81%)"
    divCabecalho.style.color = "hsl(60, 10%, 19%)"
    bolinha.style.left = "50px"
    bolinha.style.background = "hsl(25, 98%, 40%)"
    inputTela.style.background = "hsl(0, 0%, 93%)"
    inputTela.style.color = "hsl(60, 10%, 19%)"
    divTeclado.style.background = "hsl(0, 5%, 81%)"

    for(let i = 0; i < operadores.length; i++){
        operadores[i].style = `
            box-shadow: 0 4px hsl(35, 11%, 61%);
            background: hsl(45, 7%, 89%);
            color: hsl(60, 10%, 19%);
        ` 
    }

    deletar.style = `
        background-color: hsl(185, 42%, 37%);
        box-shadow: 0 4px hsl(185, 58%, 25%);
        color: #FFFFFF;
    `

    deletar.style = `
        opacity: 0.5;
    `

    limpar.style = `
        background-color: hsl(185, 42%, 37%);
        box-shadow: 0 4px hsl(185, 58%, 25%);
        color: #FFFFFF;
    `
    igual.style = `
        background-color: hsl(25, 98%, 40%);
        box-shadow: 0 4px hsl(25, 99%, 27%);
        color: #FFFFFF;
    `
}

function mudarParaEscuro(){

    body.style.background = "hsl(222, 26%, 31%)"
    buttonTema.style.background = "hsl(223, 31%, 20%)"
    divCabecalho.style.color = "#FFFFFF"
    bolinha.style.left = "26px"
    bolinha.style.background = "hsl(6, 63%, 50%)"
    inputTela.style.background = "hsl(224, 36%, 15%)"
    inputTela.style.color = "#FFFFFF"
    divTeclado.style.background = "hsl(223, 31%, 20%)"

    for(let i = 0; i < operadores.length; i++){
        operadores[i].style = `
            box-shadow: 0 4px hsl(28, 16%, 65%);
            background: hsl(30, 25%, 89%);
            color: hsl(221, 14%, 31%);
        ` 
    }

    deletar.style = `
        background-color: hsl(225, 21%, 49%);
        box-shadow: 0 4px hsl(224, 28%, 35%);
        color: #FFFFFF;
    `
    limpar.style = `
        background-color: hsl(225, 21%, 49%);
        box-shadow: 0 4px hsl(224, 28%, 35%);
        color: #FFFFFF;
    `
    igual.style = `
        background-color: hsl(6, 63%, 50%);
        box-shadow: 0 4px hsl(6, 70%, 34%);
        color: #FFFFFF;
    `
}

function mudarParaNeon(){

    body.style.background = "hsl(268, 75%, 9%)"
    buttonTema.style.background = "hsl(268, 71%, 12%)"
    divCabecalho.style.color = "hsl(52, 100%, 62%)"
    bolinha.style.left = "74px"
    bolinha.style.background = "hsl(176, 100%, 44%)"
    inputTela.style.background = "hsl(268, 71%, 12%)"
    inputTela.style.color = "hsl(52, 100%, 62%)"
    divTeclado.style.background = "hsl(268, 71%, 12%)"

    for(let i = 0; i < operadores.length; i++){
        operadores[i].style = `
            box-shadow: 0 4px hsl(290, 70%, 36%);
            background: hsl(268, 47%, 21%);
            color: hsl(52, 100%, 62%);
        ` 
    }

    deletar.style = `
        background: hsl(281, 89%, 26%);
        color: #FFFFFF;
        box-shadow: 0 4px hsl(285, 91%, 52%);
    `
    limpar.style = `
        background: hsl(281, 89%, 26%);
        color: #FFFFFF;
        box-shadow: 0 4px hsl(285, 91%, 52%);
    `
    igual.style = `
        background-color: hsl(176, 100%, 44%);
        box-shadow: 0 4px hsl(177, 92%, 70%);
        color: hsl(198, 20%, 13%);
    `
}

let teclas = ""
let visor = ""

function mostrarNaTela(numeros){

    teclas += numeros 

    if(numeros == "."){
        visor += ","
    } else {
        visor += numeros
    }
    
    inputTela.value = visor
}

function limparTela(){

    teclas = ""
    visor = ""
    inputTela.value = visor
}

function deletarDigito(){

    teclas = teclas.slice(0,-1)
    visor = visor.slice(0,-1)
    inputTela.value = visor
}

function calcular(){

    teclas = eval(teclas)
    inputTela.value = teclas.toLocaleString("es-AR")
}