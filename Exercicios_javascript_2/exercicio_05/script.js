let button = document.querySelector("button");
button.addEventListener('click', () => {
    let num_1 = Number(document.getElementById("num1").value);
    let num_2 = Number(document.getElementById("num2").value);


let h2 = document.querySelector("h2");

if (num1 > num_2) {
    while(num_1 != num_2) {
        if (num_1 % num_2 != 0) {
            h2.innerHTML = `Esses números não são multiplos`;
            break;
        }

        else {

        }
        num_1 = num_1 / num_2;
    }

    if (num_1 == num_2) {
        h2.innerHTML = `Esses números são multiplos`;
    }

    else{

    }
    
}

else {
    while(num_2 != num_1) {
        if (num_2 % num_1 != 0) {
            h2.innerHTML = `Esses números não são multiplos`;
            break;
        }

        else {

        }
        num_2 = num_2 / num_1;
    }

    if (num_2 == num_1) {
        h2.innerHTML = `Esses números são multiplos`;
    }

    else{
        
    }
}});
