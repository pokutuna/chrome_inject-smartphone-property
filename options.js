
var restoreOptions = function() {
  console.log('restore');
  if (localStorage.getItem('all-sites') === 'true') {
    document.getElementById('all-sites').checked = true;
  }
  document.getElementById('url-pattern').value = localStorage.getItem('url-pattern');
};

var saveOptions = function() {
  console.log('save');
  localStorage.setItem('all-sites', document.getElementById('all-sites').checked);
  localStorage.setItem('url-pattern', document.getElementById('url-pattern').value);
};


document.addEventListener('DOMContentLoaded', function() {

  document.getElementById('all-sites').addEventListener('click', function(ev) {
    if (ev.target.checked) {
      document.getElementById('url-pattern').disabled = true;
    } else {
      document.getElementById('url-pattern').disabled = false;
    };
  }, false);

  document.getElementById('save').addEventListener('click', function() {
    saveOptions();
  }, false);

  restoreOptions();
}, false);
