var request = new XMLHttpRequest();
function call() {
    request.open('GET', 'http://localhost:8080/watch');
    request.onload = function () {
        // console.log(this.responseText);
        var data = JSON.parse(this.responseText);
        console.log(data);
        $('#voltage_data').text(data["voltage_reading"]+"V");
        $('#current_data').text(data["current_reading"]+"A");
    }
    request.send();
}
setInterval(call, 3000);