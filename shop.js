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
// function modal () {
//     let a = document.getElementById ("modal")
//     //проверка свойства display
//     if ( window.getComputedStyle(a).display == "none")
//     {
//         a.style.display = "flex"
//     }
//     else
//     {
//         a.style.display = "none"
//     }
// }

function modal () {
    let a = document.getElementById ("modal")
    a.classList.toggle("window1_2")
    let b = document.getElementById ("modal1")
    b.classList.toggle("windows_1")
}


function knopochka2 () {
    let c = ['button01', 'button02', 'button03', 'button04',  'button05', 'button06', 'prove', 'color']
    for (let d=0; d< c.length; d++){
        let e = document.getElementById (c[d])
        e.classList.toggle ("knopochki")
    //     if ( window.getComputedStyle(e).backgroundColor == "rgb(255, 0, 0)")
    //     {
    //     e.style.backgroundColor = "green";
    //     e.style.color = "black"
    //     e.style.borderRadius = "0"
    //     e.style.boxShadow = "5px 5px 10px green"
    //     e.style.padding = "30px"
    // }
    // else
    // {
    //     e.style.backgroundColor = "red";
    //     e.style.color = "white"
    //     e.style.borderRadius = "5px"
    //     e.style.boxShadow = "5px 5px 10px black"
    //     e.style.padding = "5px" 
    // }
    }
}
