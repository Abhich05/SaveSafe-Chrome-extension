document.getElementById('saveButton').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const familyDetails = document.getElementById('familyDetails').value;
    const studies = document.getElementById('studies').value;
    const currentStatus = document.getElementById('currentStatus').value;
  
    chrome.runtime.sendMessage({
      action: 'saveData',
      key: 'userData',
      value: { name, familyDetails, studies, currentStatus }
    }, (response) => {
      if (response.status === 'success') {
        alert('Data saved successfully!');
      }
    });
  });
  