chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "closePRFiles") {
    Array.prototype.slice.call(document.getElementsByClassName("btn-octicon"))
      .filter((btn) => btn.attributes['aria-expanded']?.value === "true")
      .forEach((btn) => { btn.click() });
  }
});
