import $ from "jquery";
import "./styles.css";
import { CurrencyExchange } from "./../src/exchanger.js";

$(document).ready(function() {

  $("#form").submit(function(event) {
    event.preventDefault();
    const amount = $("#usd").val();
    const convertCurrency= $("#exchanger").val();

    (async () => {
      let currencyExchange = new CurrencyExchange();
      const response = await currencyExchange.getCurrency();
      getConversion(response);
    })();

    function getConversion(response) {
      if (response.result === "error") {
        $("#output").text("There has been an error, try again or try a new API Key.");
      } else if(convertCurrency === "ISK") {
        $('#output').text(`The value of ${amount} USD is ${(response.conversion_rates.ISK*amount).toFixed(2)} Króna(s)`);
      } else if (convertCurrency === "JEP") {
          $('#output').text(`The value of ${amount} USD is ${(response.conversion_rates.JEP*amount).toFixed(2)} Jersey Pound(s)`);
      } else if (convertCurrency === "JMD") {
          $('#output').text(`The value of ${amount} USD is ${(response.conversion_rates.JMD*amount).toFixed(2)} Jamaican Dollar(s) `);
      } else if (convertCurrency === "JPY") {
          $('#output').text(`The value of ${amount} USD is ${(response.conversion_rates.JPY*amount).toFixed(2)} Yen`);
      } else if (convertCurrency === "KRW") {
          $('#output').text(`The value of ${amount} USD is ${(response.conversion_rates.KRW*amount).toFixed(2)} Won`);
      } else if (convertCurrency === "MDL") {
          $('#output').text(`The value of ${amount} USD is ${(response.conversion_rates.MDL*amount).toFixed(2)} Leu(s)`);
      } else {
          $("#output").text(`Error! Please try again.`);
        }
      }
  });
});
