let button = document.getElementById("button");


button.onclick = function() {
    let x = document.getElementById("x");
    let y = document.getElementById("y");
    x=parseInt(x.value);
    y=parseInt(y.value);
    let sum = x+y;

    document.getElementById("result").value = sum;
};
