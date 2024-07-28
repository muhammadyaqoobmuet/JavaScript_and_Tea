let activeTabId = null;

// Listen for tab updates to detect if the user switches to a different tab
chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    handleTabChange(tab);
  });
});

// Listen for window focus changes to detect if the user switches to a different window
chrome.windows.onFocusChanged.addListener((windowId) => {
  if (windowId === chrome.windows.WINDOW_ID_NONE) {
    // The user is switching to a different application
    handleWindowBlur();
  } else {
    // The user is switching back to Chrome
    chrome.windows.get(windowId, {populate: true}, (window) => {
      const activeTab = window.tabs.find(tab => tab.active);
      handleTabChange(activeTab);
    });
  }
});

function handleTabChange(tab) {
  if (activeTabId !== null && activeTabId !== tab.id) {
    // Pause video on the old active tab
    chrome.tabs.sendMessage(activeTabId, {action: "pauseVideo"});
  }

  if (tab.url.includes("youtube.com/watch")) {
    // Resume video on the new active tab if it's a YouTube video
    chrome.tabs.sendMessage(tab.id, {action: "resumeVideo"});
    activeTabId = tab.id;
  } else {
    activeTabId = null;
  }
}

function handleWindowBlur() {
  if (activeTabId !== null) {
    // Pause video when the user switches to a different application
    chrome.tabs.sendMessage(activeTabId, {action: "pauseVideo"});
  }
}
