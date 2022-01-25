var show_hour = document.querySelector("div.hour")
var salutation = document.querySelector("div.salutation")
var image = document.querySelector("div.circle")
var width = window.screen.width

var data_sistema = new Date()
var hora = data_sistema.getHours()

if(hora > 0 && hora < 12){
    show_hour.innerHTML = `São ${hora} horas`
    salutation.innerHTML = `Bom dia!`
    if(width <= 900){
        image.style.background = "url('img/morning-responsive250.jpg')"
    }
    else if(width >= 901 && width <= 1500){
        image.style.background = "url('img/morning-responsive320.jpg')"
    }
    else if(width >= 2401){
        image.style.background = "url('img/morning-responsive500.jpg')"
    }
    else{
        image.style.background = "url('img/morning.jpg')"
    }
}

else if(hora >= 12 && hora <= 15){
    show_hour.innerHTML = `São ${hora} horas`
    salutation.innerHTML = `Bom começo de tarde!`
    if(width <= 900){
        image.style.backgroundImage = "url('img/afternoon-initial250.jpg')"
    }
    else if(width >= 901 && width <= 1500){
        image.style.backgroundImage = "url('img/afternoon-initial320.jpg')"
    }
    else if(width >= 2401){
        image.style.backgroundImage = "url('img/afternoon-initial500.jpg')"
    }
    else{
        image.style.backgroundImage = "url('img/afternoon-initial400.jpg')"
    }
}

else if(hora >=16 && hora <=17){
    show_hour.innerHTML = `São ${hora} horas`
    salutation.innerHTML = `Bom fim de tarde!`
    if(width <= 900){
        image.style.background = "url('img/afternoon-end250.jpg')"
    }
    else if(width >= 901 && width <= 1500){
        image.style.background = "url('img/afternoon-end320.jpg')"
    }
    else if(width >= 2401){
        image.style.background = "url('img/afternoon-end500.jpg')"
    }
    else{
        image.style.background = "url('img/afternoon-end400.jpg')"
    }
}

else{
    show_hour.innerHTML = `São ${hora} horas`
    salutation.innerHTML = `Boa noite!`
    if(width <= 900){
        image.style.background = "url('img/night-responsive250.jpg')"
    }
    else if(width >= 901 && width <= 1500){
        image.style.background = "url('img/night-responsive320.jpg')"
    }
    else if(width >= 2401){
        image.style.background = "url('img/night-responsive500.jpg')"
    }
    else{
        image.style.background = "url('img/night-responsive400.jpg')"
    }
}
console.log(width)
