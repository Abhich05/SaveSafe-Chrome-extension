chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'autofill') {
      chrome.storage.local.get('userData', (result) => {
        const data = result.userData;
        if (data) {
          document.querySelector('input[name="name"]').value = data.name;
          // Continue autofilling other fields based on the form
        }
      });
    }
  });
  