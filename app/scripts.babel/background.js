'use strict';

const jsonContentTypeString = 'application/json';

const iconOn = 'images/icon.png';
const iconOff = 'images/icon-disabled.png';

const renderView = 'render.html';

var tabToMimeType = {};

chrome.webRequest.onHeadersReceived.addListener(function (details) {
  console.log(details);
  if (details.tabId !== -1) {
    var header = getHeaderFromHeaders(details.responseHeaders, 'content-type');
    if (details.url.startsWith('https://raw.githubusercontent.com/') && details.url.endsWith('.json')) {
      header.value = jsonContentTypeString;
    }
    tabToMimeType[details.tabId] = header && header.value.split(';', 1)[0];
  }
}, {
    urls: ['*://*/*'],
    types: ['main_frame']
  }, ['responseHeaders']);

chrome.browserAction.onClicked.addListener(function (tab) {
  if (tabToMimeType[tab.id] === jsonContentTypeString) {
    window.open(renderView, 'extension_popup', 'width=500,height=400,status=no,scrollbars=yes,resizable=no');
  }
});

chrome.tabs.onUpdated.addListener(function (tabId, change, tab) {
  updateIcon(tabId);
});

chrome.tabs.onActivated.addListener(function (info) {
  chrome.tabs.get(info.tabId, function (change) {
    updateIcon(change.id);
  });
});

function updateIcon(tabId) {
  if (tabToMimeType[tabId] === jsonContentTypeString) {
    chrome.browserAction.setPopup({ tabId: tabId, popup: renderView });
    chrome.browserAction.setIcon({ path: iconOn, tabId: tabId });
  } else {
    chrome.browserAction.setPopup({ tabId: tabId, popup: '' });
    chrome.browserAction.setIcon({ path: iconOff, tabId: tabId });
  }
}

function getHeaderFromHeaders(headers, headerName) {
  for (var i = 0; i < headers.length; ++i) {
    var header = headers[i];
    if (header.name.toLowerCase() === headerName) {
      return header;
    }
  }
}
