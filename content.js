var inject = function(path) {
  console.log('InjectSmartphoneProperty');
  document.addEventListener('DOMContentLoaded', function () {
    appendScriptFile(document.head, path);
    appendScriptRaw(document.head, path);
  });
};

var appendScriptFile = function(target, path) {
  var elem = document.createElement('script');
  elem.type = 'text/javascript';
  elem.src = path;
  target.insertBefore(elem, target.firstChild);
};

var appendScriptRaw = function(target) {
  var elem = document.createElement('script'),
      code = generateCode(properties);
  elem.type = 'text/javascript';
  elem.text = code;
  target.appendChild(elem);
};

var generateCode = function (prop) {
    var code = '';
    for (var p in prop) {
        code += p + '||(' + p + '=' + prop[p] + '); ';
    }
    return code;
};

var properties = {
    'window.ontouchstart': null,
    'window.ontouchmove' : null,
    'window.ontouchend'  : null,
    'window.orientation' : 0
};

var messageCallback = function(event) {
  if (event.path) inject(event.path);
};

chrome.extension.sendRequest({ url: location.href }, messageCallback);
