chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "closePRFiles") {
    Array.prototype.slice.call(document.getElementsByClassName("octicon-chevron-down"))
      .forEach((svg) => svg.parentNode.click());
  }

  if (request.action === "requestReview") {
    Array.prototype.slice.call(document.querySelectorAll('.discussion-sidebar-item .octicon-file-diff'))
      .map((diffIcon) => diffIcon.closest('p')?.querySelector('button[name=re_request_reviewer_id]'))
      .forEach((btn) => { btn.click() });
  }
});
