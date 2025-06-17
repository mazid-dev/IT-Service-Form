const scriptURL = 'https://script.google.com/macros/s/AKfycbwbTzpfoN2An7IhamU4rWdIwpMICrJuxaoN_Th3Zu9eARwy9HO269aAGRQod7tzAA8X/exec'; // Replace with your Web App URL
const form = document.getElementById('serviceForm');
const statusMsg = document.getElementById('statusMsg');
const issueSelect = document.getElementById('issueSelect');
const otherIssueGroup = document.getElementById('otherIssueGroup');

issueSelect.addEventListener('change', () => {
  otherIssueGroup.style.display = issueSelect.value === 'Others' ? 'block' : 'none';
});

form.addEventListener('submit', e => {
  e.preventDefault();
  statusMsg.innerText = 'Submitting...';

  const formData = new FormData(form);
  if (issueSelect.value === 'Others') {
    formData.set('issue', formData.get('otherIssue'));
  }

  const fileInput = form.querySelector('input[name="screenshot"]');
  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
      formData.set('screenshotBase64', event.target.result);
      sendData(formData);
    };
    reader.readAsDataURL(file);
  } else {
    sendData(formData);
  }
});

function sendData(formData) {
  fetch(scriptURL, {
    method: 'POST',
    body: formData
  })
  .then(() => {
    statusMsg.innerText = 'Request submitted successfully!';
    form.reset();
    otherIssueGroup.style.display = 'none';
  })
  .catch(error => {
    statusMsg.innerText = 'Something went wrong!';
    console.error('Error!', error.message);
  });
}
