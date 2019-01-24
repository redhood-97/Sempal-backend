

// client-side

var request = new XMLHttpRequest();

function call()
{
    request.open('GET', 'http://192.168.43.249:3000');
    request.onload = function () 
    {
  
        var data = JSON.parse(this.responseText);
        $('#thedata').text(data);
    }
    request.send();
    setInterval(call,3000);
}
