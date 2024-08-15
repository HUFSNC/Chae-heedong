let button = document.getElementById("button");


button.onclick = function() {
    let x = document.getElementById("x");
    let y = document.getElementById("y");

    let sum = x.value + y.value;

    document.getElementById("result").value = sum;
};
