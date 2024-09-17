function convertCurrency() {
    let amount = document.getElementById('amount').value;
    let fromCurrency = document.getElementById('fromCurrency').value;
    let toCurrency = document.getElementById('toCurrency').value;

    // Exchange rates (you can add more or fetch from an API)
    let exchangeRates = {
        USD: { EUR: 0.85, INR: 74.5, GBP: 0.75 },
        EUR: { USD: 1.18, INR: 88.0, GBP: 0.88 },
        INR: { USD: 0.013, EUR: 0.011, GBP: 0.010 },
        GBP: { USD: 1.33, EUR: 1.14, INR: 101.0 }
    };

    if (fromCurrency === toCurrency) {
        document.getElementById('result').innerText = "Please choose different currencies!";
        return;
    }

    let convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
