import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
    
    new Vue({
        el: "#app",
        data: {
            rates: [],
            amount: "",
            firstCurrency: "",
            secondCurrency: ""
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

            },

        }
    })
})