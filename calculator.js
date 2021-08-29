function display(val){
    //function that displays the value
    document.getElementById("result-bar").value += val;;
}

function solve(){
    let x = document.getElementById("result-bar").value;
    let y = eval(x);
    document.getElementById("result-bar").value = y;
}
function clearButton(){
    document.getElementById("result-bar").value="";
}