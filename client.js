var search = document.querySelector('[type=search]');
var button = document.querySelector('button');
var code = document.querySelector('div#results');

var search_func = function() {
  var xhr = new XMLHttpRequest;
  var _search = document.querySelector('[type=search]');
  code.innerHTML = '<div class="alert alert-info"><img src="loader.gif" width=75 style="padding:10px;">Retrieving agent status ...</div>';
  xhr.open('POST', 'ocrize');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
    if (4 == xhr.readyState) {
      code.innerHTML = format_html(xhr.responseText);
    }
  };
  var jsonData = { "url": _search };
  console.log(jsonData);
  xhr.send(JSON.stringify(jsonData));
};

if (button.addEventListener) {
  button.addEventListener('click', search_func, false);
} else if (button.attachEvent) {
  button.attachEvent('onclick', search_func);
}

var searchf = document.querySelector('[id=search_field]');
if (searchf.addEventListener) {
  searchf.addEventListener('keypress', function(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code === 13) {
      search_func();
    }
  });
} else if (button.attachEvent) {
  searchf.attachEvent('keypress', function(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code === 13) {
      search_func();
    }
  });

}

function format_html(textin) {
  var res = JSON.parse(textin);
  if (res.success) {
    var html = '<div class="panel panel-info">';
    html += '<div class="panel-heading">' + res.node_name + '</div>';
    html += '<div class="panel-body"><p>OpenView Agent Status</p></div>';
    html += '<table class="table table-striped">';
    var items = res.items; // Because of IE
    for (var i = 0; i < items.length; i++) {
      html += "<tr><td>" + items[i].name + "</td><td>" + items[i].status + "</td></tr>";
    }
    html += "</table></div>";
    return html;
  } else {
    var html = '<div class="panel panel-warning">';
    html += '<div class="panel-heading">' + res.node_name + '</div>';
    html += '<div class="panel-body"><p>Could not get OpenView Agent Status<p>';
    html += res.err_msg + '</div>';
    html += '</div>';
    return html;
  }
}