const regex = /\d+/g;

const USD = 4.87
const EUR = 5.32
const GBP = 6.30

const buttonSubmit = document.querySelector("button")

buttonSubmit.addEventListener("click", () => {
    const inputAmount = document.querySelector("#amount")
    const inputValue = inputAmount.value

    const isValid = regex.test(inputValue)

    if(isValid == true) {
        event.preventDefault();
        const currencyOption = document.getElementById("currency")
        const currencyValue = currencyOption.value

        switch(currencyValue){
            case "USD":
                convertCurrency(inputValue, USD, "$")
                break
            case "EUR":
                convertCurrency(inputValue, EUR, "€")
                break
            case "GBP":
                convertCurrency(inputValue, GBP, "£")
                break
        }

        function convertCurrency(amount, price, symbol){
            let currencyCalc = amount * price;
            let currencyFinal = symbol + currencyCalc

            const resultCalc = document.getElementById("description")
            const resultFooter = document.getElementById("result")

            resultCalc.textContent = symbol + " 1 = " + price
            resultFooter.textContent = currencyFinal

            const footer = document.querySelector("footer")
            footer.style.display = "block"
        }

    } else {
        alert("Não é permitido LETRAS, utilize apenas NÚMEROS")
    }
})

