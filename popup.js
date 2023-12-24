chrome.commands.onCommand.addListener(function(command) {
  if (command === 'bookmark-tab') {
    chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function(tabs) {
      var tab = tabs[0];
      chrome.bookmarks.create({ 'title': tab.title, 'url': tab.url });
    });
  }
});
