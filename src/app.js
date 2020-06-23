import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
    
    new Vue({
        el: "#app",
        data: {
            rates: [],
            amount: "",
            firstRate: "",
            secondRate: "",
            convertedResult: ""
        },
        computed: {

        },
        mounted() {
            this.populateRates();
        },
        methods: {
            populateRates: function() {
                fetch("https://api.exchangeratesapi.io/latest")
                .then(result => result.json())
                .then(rateData => this.rates = rateData.rates);
            },

            convertCurrencies: function() {
                if (this.firstRate === "1") {
                    this.convertedResult = this.amount * this.firstRate * this.secondRate
                } else if (this.secondRate === "1") {
                    this.convertedResult = this.amount * this.secondRate / this.firstRate
                } else {
                    const amountInEuros = this.amount * (1 / this.firstRate)
                    this.convertedResult = amountInEuros * this.secondRate
                }
            },

            prettyNumber: function(number) {
                return (Math.round(number * 100) / 100).toFixed(2);
            }

        }
    })
})