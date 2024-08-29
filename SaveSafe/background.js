chrome.runtime.onInstalled.addListener(() => {
    console.log('SaveSafe extension installed.');
  });
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'saveData') {
      chrome.storage.local.set({ [message.key]: message.value }, () => {
        sendResponse({ status: 'success' });
      });
      return true;  // Will respond asynchronously.
    } else if (message.action === 'retrieveData') {
      chrome.storage.local.get(message.key, (result) => {
        sendResponse({ data: result[message.key] });
      });
      return true;  // Will respond asynchronously.
    }
  });
  