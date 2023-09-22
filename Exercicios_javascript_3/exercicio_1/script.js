var h2 = document.querySelector("h2");

let button = document.querySelector("button");
button.addEventListener('click', () => {
    var num= Number(document.getElementById("num").value);

    if (num < 0) {
        h2.innerHTML = `O número digitado não é positivo!!`;
    }

    else {
        a = setInterval(function(){
        h2.innerHTML = `${num}`;
        num = num - 1

        if (num < 0) {
            clearInterval(a);   
        }
    }, 1000);
    
    }
});