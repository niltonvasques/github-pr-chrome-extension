chrome.commands.onCommand.addListener(function(command) {
  console.log('Command:', command)
  if (command === "toggle-github-buttons") {
    console.log("GITHUB BUTTONS TOGGLE")
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "toggleButtons"});
    });
  }
});
