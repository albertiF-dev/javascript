function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById("txtano")
  var res = document.getElementById("res")
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!")
  } else {
    var fsex = document.getElementsByName("radsex")
    var idade = ano - Number(fano.value)
    var gênero = ""
    var img = document.createElement("img")
    img.setAttribute("id", "foto")
    if (fsex[0].checked) {
      gênero = "Homem"
      if (idade >= 0 && idade < 10) {
        // criança
        img.setAttribute("src", "imagens/perfil-criança-masculino.jpg")
      } else if (idade < 21) {
        // jovem
        img.setAttribute("src", "imagens/perfil-jovem-masculino.jpg")
      } else if (idade < 50) {
        // adulto
        img.setAttribute("src", "imagens/perfil-adulto-masculino.jpg")
      } else {
        //idoso
        img.setAttribute("src", "imagens/perfil-idoso-masculino.jpg")
      }
    } else if (fsex[1].checked) {
      gênero = "Mulher"
      if (idade >= 0 && idade < 10) {
        // criança
        img.setAttribute("src", "imagens/perfil-criança-feminino.jpg")
      } else if (idade < 21) {
        // jovem
        img.setAttribute("src", "imagens/perfil-jovem-feminino.jpg")
      } else if (idade < 50) {
        // adulto
        img.setAttribute("src", "imagens/perfil-adulto-feminino.jpg")
      } else {
        //idoso
        img.setAttribute("src", "imagens/perfil-idoso-feminino.jpg")
      }
    }
    res.style.textAlign = "center"
    res.innerHTML = `Foi detectado a pessoa do gênero ${gênero} com ${idade} anos.`
    res.appendChild(img)
  }
}
