var propertyPath = chrome.extension.getBackgroundPage().location.origin + '/property.js';

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  var applyAllSites = (localStorage.getItem('all-sites') === 'true'),
      urlPattern = localStorage.getItem('url-pattern');

  if (applyAllSites) {
    console.log('apply all: ', request.url);
    chrome.pageAction.show(parseInt(sender.tab.id, 10));
    sendResponse({ path: propertyPath });
  } else if (urlPattern != "" && request.url.match(new RegExp(urlPattern))) {
    console.log('apply pattern:', request.url);
    chrome.pageAction.show(parseInt(sender.tab.id, 10));
    sendResponse({ path: propertyPath });
  } else {
    chrome.pageAction.hide(parseInt(sender.tab.id, 10));
    sendResponse({});
  }
  return;
});
