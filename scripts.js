const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyToSelect = document.querySelector(".currency-to-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyConverted = document.querySelector(".currency-value")

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.2
    const realToday = 1

    if (currencyToSelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }

    if (currencyToSelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencyToSelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencyToSelect.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "dolar") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        currencyConverted.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "real") {
        currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }
}
    function changeCurrency() {
        const currencyName = document.getElementById("currency-name")
        const currencyByName = document.querySelector(".currency")
        const currencyImage = document.querySelector(".currency-img-bottom")
        const currencyImageTop = document.querySelector(".currency-img-top")

        if (currencySelect.value=="dolar"){
            currencyName.innerHTML = "Dólar Americano"
            currencyImage.src = "assets/dolar.png"
        }

        if (currencySelect.value=="euro"){
            currencyName.innerHTML = "Euro"
            currencyImage.src = "assets/euro.png"
        }

        if (currencySelect.value=="libra"){
            currencyName.innerHTML = "Libra Esterlina"
            currencyImage.src = "assets/libra.png"
        }

        if (currencySelect.value=="real"){
            currencyName.innerHTML = "Real Brasileiro"
            currencyImage.src = "assets/real.png"
        }

        else if (currencyToSelect.value=="dolar"){
            currencyByName.innerHTML = "Dólar Americano"
            currencyImageTop.src = "assets/dolar.png"
        }

        else if (currencyToSelect.value=="euro"){
            currencyByName.innerHTML = "Euro"
            currencyImageTop.src = "assets/euro.png"
        }

        else if (currencyToSelect.value=="libra"){
            currencyByName.innerHTML = "Libra Esterlina"
            currencyImageTop.src = "assets/libra.png"
        }

        else if (currencyToSelect.value=="real"){
            currencyByName.innerHTML = "Real Brasileiro"
            currencyImageTop.src = "assets/real.png"
        }
        convertValues()
    }

currencyToSelect.addEventListener("change", changeCurrency)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

