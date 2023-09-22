var h2 = document.querySelector("h2");

let button = document.querySelector("button");
button.addEventListener('click', () => {

    var num = 3;
    var mybr = document.createElement('br');

    for (i = 1; i < 101; i ++) {
    var c = 0;  
    
        if (i % num == 0) {
            c = i;
            // console.log(c);
            while (c != 1 && c % num == 0) {
                // console.log(c);
                c = c / num;

                if (c % num != 0) {
                    break;
                }
            }

            // if (c == 1) {
            //     console.log(i);
            //     h2.innerHTML += `${i}`;
            //     h2.appendChild(mybr);
            // }

        }
    if (c == 1) {
        console.log(c);
        console.log(i);
        h2.innerHTML += `${i}`;
        h2.appendChild(mybr);
    }
    }

});