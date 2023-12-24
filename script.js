chrome.commands.onCommand.addListener(function(command) {
  if (command === "bookmark_shortcut") {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.bookmarks.create({ title: tabs[0].title, url: tabs[0].url });
    });
  }
});
