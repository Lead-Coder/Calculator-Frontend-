let output = document.getElementById("screen")
let buttons = document.querySelectorAll("button")

let string="";
let expression = Array.from(buttons);
expression.forEach(button => {
    button.addEventListener('click', (evt) => {
        if(evt.target.innerHTML == '=') {
            string = eval(string);
        }
        else if(evt.target.innerHTML == 'AC') {
            string = "";
        }
        else if(evt.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length-1);
        }
        else {
            string += evt.target.innerHTML;
        }
        output.innerHTML = string;
    })
})