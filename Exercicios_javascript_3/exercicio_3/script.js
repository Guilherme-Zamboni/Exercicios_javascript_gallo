var h2 = document.querySelector("h2");

let button = document.querySelector("button");
button.addEventListener('click', () => {
    var num= Number(document.getElementById("num").value);
    
    var mybr = document.createElement('br');

    for (i = 0; i != 11; i ++) {
        h2.innerHTML += `${num} * ${i} = ${num * i}`;
        h2.appendChild(mybr);
        // console.log(`${num} * ${i} = ${num * i}`);
    }

});