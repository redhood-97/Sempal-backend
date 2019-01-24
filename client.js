

// client-side

window.onload = function () {
  var url, i;

  for (i = 0; i < 2; i++) 
  {
    url = document.URL + 'inputs/' + i;
    $.getJSON(url, function (data) 
    {
      console.log('API response received');
      $('#input').append('<p>input gpio port ' + data.gpio + ' on pin ' + data.pin + ' has current value ' + data.value + '</p>');
    });
  }
};
