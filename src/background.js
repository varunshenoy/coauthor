'use strict';

chrome.runtime.onInstalled.addListener((tab) => {
  chrome.contextMenus.create({
    id: 'convert',
    title: "Convert to LaTeX",
    contexts: ["selection"],
    documentUrlPatterns: ["*://*.overleaf.com/project/*"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if ('convert' === info.menuItemId && info.selectionText) {
    // get selected text
    var selectedText = info.selectionText;
    console.log(selectedText);
    console.log(info);
    if (info.editable) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          type: 'INSERT',
          payload: {
            message: selectedText,
          },
        }, function (response) { });
      });
    }
  }
});
