function knopochka () {
    let arr = ['one', 'two', 'three', 'four'];
    for (let a=0; a<4; a++){
        alert(arr[a])
    }
}
x=1
function zvezdochka () {
    let a = ['zvezda01', 'zvezda02', 'zvezda03', 'zvezda04', 'zvezda05'];
    if (x==1)
    {
        for (let d=0; d< a.length; d++){
            let e = document.getElementById (a[d])
                e.src = "images/star_1.png"
        }
        x=2
    }
    else {
        for (let d=0; d< a.length; d++){
            let e = document.getElementById (a[d])
                e.src = "images/star_2.png"
            
        }
        x=1
    }
    
}


function forbidden() {
    let q = ['zvezda01', 'zvezda02', 'zvezda03', 'zvezda04']
    alert ('Совсем ашалел? Иди ка ты отсюда лесом >=(')
    window.close ()
}

function zvezdochka2 (z) {
    let a = ['zvezda01', 'zvezda02', 'zvezda03', 'zvezda04', 'zvezda05'];
    let b = document.getElementById (a[z])
    if (b.src.indexOf("images/star_2.png") > -1)
    {
        for (let d=0; d<=z; d++){
            let e = document.getElementById (a[d])
                e.src = "images/star_1.png"
        }
    }
    else
    {
        for (let d=4; d>z; d--){
            let e = document.getElementById (a[d])
                e.src = "images/star_2.png"
        }
    }
    }
  
    
function bann() {
    let a = document.getElementById ("greybackground")
    a.classList.toggle("background2_0")
    let b = document.getElementById ("ban")
    b.classList.toggle("socialcredit2_0")
}    

function back() {
    window.location.href="index.html"
}
