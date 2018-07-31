var search = document.querySelector('[type=search]');
var button = document.querySelector('button');
var code = document.querySelector('div#results');

var search_func = function() {
  var xhr = new XMLHttpRequest;
  var _search = document.querySelector('[type=search]').value;
  code.innerHTML = '<div class="alert"><img src="loader.gif" width=75 style="padding:10px;">OCRizing ...</div>';
  xhr.open('POST', 'file2');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
    if (4 == xhr.readyState) {
      //console.log(xhr.responseText);
      code.innerHTML = format_html(xhr.responseText);
    }
  };
  var jsonData = { "transform": "ocrize", "url": _search, "lang": "eng", "psm": 6 };
  //console.log(jsonData);
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
    html += '<div class="panel-heading">OCR Results</div>';
    html += '<div class="panel-body"><p>Text</p></div>';
    html += '<table class="table table-striped">';
    //var items = res.text; // Because of IE
      html += "<tr><td><pre>" + res.text + "</pre></td></tr>";
    html += "</table></div>";
    return html;
  } else {
    console.log(JSON.stringify(textin));
    var html = '<div class="panel panel-warning">';
    html += '<div class="panel-heading"> Error </div>';
    html += '<div class="panel-body"><p>Could not OCR<p>';
    html += JSON.stringify(res.error) + '</div>';
    html += '</div>';
    return html;
  }
}
