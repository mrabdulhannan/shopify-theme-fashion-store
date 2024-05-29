// assets/custom-section.js

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#update-section');
  
  // Check if button exists
  if (button) {
    button.addEventListener('click', () => {
      console.log('Button clicked'); // Debugging step
      fetch('/?section_id=custom-section-one')
        .then(response => response.text())
        .then(data => {
          console.log('Fetch successful'); // Debugging step
          console.log("data", data);
          const parser = new DOMParser();
          const doc = parser.parseFromString(data, 'text/html');
          const newContent = doc.querySelector('#custom-section').innerHTML;
          document.querySelector('#custom-section').innerHTML = newContent;
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Error performing action. Please try again.');
        });
    });
  } else {
    console.error('Button not found'); // Debugging step
  }
});
