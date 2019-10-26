chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#27213C'}, function() {
    console.log('The color is yankee blue 27213C');
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {urlMatches: '/*'}
        })],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ])
  });
});
