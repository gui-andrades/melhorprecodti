let listaCanis = ""
let canis = new XMLHttpRequest()

function carregaXmlHttp(){
    canis.open("GET","canis.json",true)
    canis.send()
    canis.onreadystatechange = function(){
        if(canis.readyState == 4 && canis.status == 200){
            listaCanis = JSON.parse(canis.responseText)
        }
    }
}

function conferir(){
    let container = document.getElementById("container")
    let dataTxt = document.getElementById("data").value
    let data = new Date(`${dataTxt}T12:00:00-03:00`)
    let qtdCacPeq = document.getElementById("qtdCacPeq").value
    let qtdCacGra = document.getElementById("qtdCacGra").value
    if(dataTxt && qtdCacPeq && qtdCacGra){
        calcula(data, qtdCacPeq, qtdCacGra)
    }
    else addErro()
}

function addErro(){
    let res = document.getElementById("resultado")
    res.innerHTML = "Um ou mais campos não estão definidos. Favor conferir."
}

function calcula(data, qtdCacPeq, qtdCacGra){
    let valores = []
    let valor
    let indiceMenorVal = listaCanis.length - 1
    listaCanis.forEach(val => {
        if(data.getDay() == 0 || data.getDay() == 6){
            valor = val.precoPequenoFds * qtdCacPeq + val.precoGrandeFds * qtdCacGra
        }else{
            valor = val.precoPequeno * qtdCacPeq + val.precoGrande * qtdCacGra
        }
        valores.push(valor)
    })
    valores.forEach((val, i) => {
        if(val < valor) {
            valor = val
            indiceMenorVal = i
        }else if(val == valor && (listaCanis[i].distancia < listaCanis[indiceMenorVal].distancia)){                
            valor = val
            indiceMenorVal = i
        }
    })
    mostraResultado(listaCanis[indiceMenorVal].nome, valor)
}

function mostraResultado(nome, valor){
    let res = document.getElementById("resultado")
    res.innerHTML = `O petshop ${nome} é o que oferece menor preço hoje, com um preço total de ${valor} reais.`
}