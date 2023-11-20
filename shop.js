function print_contact () {
    alert('skype: helper\ntelegram: @helper\ntel: 8995345235')
}
function basket () {
    window.location.href="shop2.html"
}
function change_color () {
    let a = document.getElementById ("color")
    //проверка заднего фона
    if ( window.getComputedStyle(a).backgroundColor == "rgb(255, 0, 0) ")
    {
        a.style.backgroundColor = "green";
    }
    else
    a.style.backgroundColor = "red";
}