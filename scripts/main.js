const convert = document.getElementById("convert");
const result = document.getElementById("result");
const input = document.getElementById("input");
const from = document.getElementById("from");
const to = document.getElementById("to");
const clear = document.getElementById("reset");


convert.addEventListener("click", function(){
    let fromCurrency = from.value;
    let toCurrency = to.value;
    let amt = input.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        let rate = data.rates[toCurrency];
        let total = rate * amt;
        result.innerHTML = `${amt} ${fromCurrency} = ${total} ${toCurrency}`;
    });
});

clear.addEventListener("click", function(){
    input.value = "";
    from.selectedIndex = 0;
    to.selectedIndex = 0;
    result.innerHTML="";
})