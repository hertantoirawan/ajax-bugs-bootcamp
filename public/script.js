const addBug = () => {
  const data = {
    problem: document.getElementById('problem').value,
    errorText: document.getElementById('errorText').value,
    featureID: 1, // get selected feature
  };

  // Make a request to create an item
  axios
    .post('/bugs', data)
    .then((response) => {
      // handle success
      console.log(response);

      document.getElementById('problem').value = '';
      document.getElementById('errorText').value = '';

      // deselect feature

      const bugForm = document.getElementById('createBugForm');
      bugForm.style.display = 'none';

      document.getElementById('createBugButton').disabled = '';
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

const createBugFormButton = document.getElementById('createBugButton');

createBugFormButton.addEventListener('click', () => {
  document.getElementById('createBugButton').disabled = 'disabled';

  const bugForm = document.getElementById('createBugForm');
  bugForm.style.display = 'block';

  const bugFormFeatures = document.getElementById('bugFormFeatures');
  while (bugFormFeatures.lastChild) {
    bugFormFeatures.removeChild(bugFormFeatures.lastChild);
  }

  const featureInput = document.createElement('input');
  featureInput.type = 'radio';
  featureInput.name = 'features';
  featureInput.id = '1';
  featureInput.value = 'Cool Feature';

  const featureLabel = document.createElement('label');
  featureLabel.for = '1';
  featureLabel.innerText = 'Cool Feature';

  const createBugButton = document.createElement('button');
  createBugButton.innerText = 'Submit';
  createBugButton.addEventListener('click', addBug);

  bugFormFeatures.appendChild(featureInput);
  bugFormFeatures.appendChild(featureLabel);
  bugFormFeatures.appendChild(createBugButton);
});
