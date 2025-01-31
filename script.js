function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert("[ERROR] Verifique o ano digitado e tente novamente! ")
    }
    else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fAno.value)
        //res.innerHTML = `Idade Calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked ){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                //img.setAttribute('src','foto_bebe_m')
            }
            else if(idade < 21){
                //Jovem
            }
            else if(idade > 21 && idade < 50){
                //Adulto
            }
            else{
                //Idoso
            }
        }
        else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                //img.setAttribute('src','foto_bebe_f')
            }
            else if(idade < 21){
                //Jovem
            }
            else if(idade > 21 && idade < 50){
                //Adulto
            }
            else{
                //Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        //res.appendChild(img)
    }

}