function print_contact () {
    alert('skype: helper\ntelegram: @helper\ntel: 8995345235')
}
function basket () {
    window.location.href="shop2.html"
}
function change_color () {
    let a = document.getElementById ("color")
    //проверка заднего фона
    if ( window.getComputedStyle(a).backgroundColor == "rgb(255, 0, 0)")
    {
        a.style.backgroundColor = "green";
        a.style.color = "black"
        a.style.borderRadius = "0"
        a.style.boxShadow = "5px 5px 10px green"
        a.style.padding = "30px"
    }
    else
    {
        a.style.backgroundColor = "red";
        a.style.color = "white"
        a.style.borderRadius = "5px"
        a.style.boxShadow = "5px 5px 10px black"
        a.style.padding = "5px"
    }
}

function prove () {
    let x = document.getElementById ("prove")
    //проверка чисел
    x = prompt('Докажите, что вы человек: 2+2*2')
    y = 6
    if (x==y)
    {
        alert('Добро пожаловать!')
    }
    else 
    {
        alert('Петляй отсюда, псина сутулая, тебе здесь не рады')
        window.close ()
    }
}
function modal () {
    let a = document.getElementById ("modal")
    //проверка свойства display
    if ( window.getComputedStyle(a).display == "none")
    {
        a.style.display = "flex"
    }
    else
    {
        a.style.display = "none"
    }
}