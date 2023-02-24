function sendCommandToTab(command) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: command});
  });
}

chrome.commands.onCommand.addListener(function(command) {
  console.log('Command:', command);
  if (command === "close-github-pr-files") {
    sendCommandToTab("closePRFiles");
  }
  if (command === "re-request-review") {
    sendCommandToTab("requestReview");
  }
});
