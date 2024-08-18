//Function to only read this script when the entire html file has been loaded
$(document).ready(function(){

let amountIn = "";
let amountOut = "";
let currencyFrom = "";
let currencyTo = "";

    $(".converter_button").click(function(){
        amountIn = $("#converter_amount").val();
        currencyFrom = $("#converter_select-in").val();
        currencyTo = $("#converter_select-out").val();

        converterAPI();
    })

    function converterAPI(){
    // set endpoint and your API key
    endpoint = 'convert';
    access_key = 'API_KEY';

    // define from currency, to currency, and amount
    from = currencyFrom;
    to = currencyTo;
    amount = amountIn;

    // execute the conversion using the "convert" endpoint:
        $.ajax({
            url: 'https://api.currencylayer.com/' + endpoint + '?access_key=' + access_key +'&from=' + from + '&to=' + to + '&amount=' + amount,
            dataType: 'jsonp',
            success: function(json) {

                // access the conversion result in json.result
                amountOut = parseFloat(json.result).toFixed(2); // Format to 2 decimal places
                $("#converter_result").text(amountOut);
            }
        })
    };
});