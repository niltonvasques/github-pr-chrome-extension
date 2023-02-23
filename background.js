chrome.commands.onCommand.addListener(function(command) {
  console.log('Command:', command)
  if (command === "close-github-pr-files") {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "closePRFiles"});
    });
  }
});
