chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "closePRFiles") {
    Array.prototype.slice.call(document.getElementsByClassName("btn-octicon"))
      .filter((btn) => btn.attributes['aria-expanded']?.value === "true")
      .forEach((btn) => { btn.click() });
  }

  if (request.action === "requestReview") {
    Array.prototype.slice.call(document.querySelectorAll('.discussion-sidebar-item .octicon-file-diff'))
      .map((diffIcon) => diffIcon.closest('p')?.querySelector('button[name=re_request_reviewer_id]'))
      .forEach((btn) => { btn.click() });
  }
});
