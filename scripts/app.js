

  //  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var request = new XMLHttpRequest();
    function call() {
        request.open('GET', 'http://localhost:8080/watch', true);
        request.onload = function () {
        // console.log(this.responseText);
        var data = JSON.parse(this.responseText);
        console.log(data["voltage_reading"]);
        console.log(data["current_reading"]);
        console.log(data["frequency_reading"]);
        $('#voltage_log').text(data["voltage_reading"]);
        $('#current_log').text(data["current_reading"]);
        $('#frequency_log').text(data["frequency_reading"]);
    }
    request.send();
}
setInterval(call, 1000);
    


 