function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('idade').value
    var res = document.getElementById('res')
    if (fano > ano || fano == 0){
        alert('[ERRO] Verifique o ano de nascimento e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano
        genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.height = 200
        img.width = 200
        img.style.borderRadius = '999px'
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade <= 10 && idade >= 0) {
                // Criança
                img.setAttribute('src', 'crianca-masc.jpeg')
            } else if (idade <= 21) {
                //Jovem
                img.setAttribute('src', 'jovem-masc.jpeg')
            }
             else if (idade > 21 && idade <= 50) {
                //adulto
                img.setAttribute('src', 'adulto-masc.jpeg')
            } else {
                //Velho
                img.setAttribute('src', 'velho-masc.jpeg')
            }
            }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade <= 10 && idade >= 0) {
                // Criança
                img.setAttribute('src', 'crianca-fem.png')
            } else if (idade <= 21) {
                //Jovem
                img.setAttribute('src', 'jovem-fem.jpeg')
            }
             else if (idade > 21 && idade <= 50) {
                //adulto
                img.setAttribute('src', 'adulto-fem.png')
                img.height = 1000
                img.width = 1000
            } else {
                //Velho
                img.setAttribute('src', 'velho-masc.jpeg')
            }
        } else {
            alert('[ERRO] Verifique o sexo')
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos </br>`
        res.appendChild(img)
    }
}