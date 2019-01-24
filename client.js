
// client-side

var request = new XMLHttpRequest();

function call()
{
    request.open('GET', 'http://192.168.43.249:3000/inputs');
    request.onload = function () 
    {
    	    var data = JSON.parse(this.responseText);
    		console.log(data);
            $('#thedata').text(data);
    }
    request.send();
}

setInterval(call,3000);
