const addBug = () => {
  const data = {
    problem: document.getElementById('problem').value,
    errorText: document.getElementById('errorText').value,
    commit: document.getElementById('commit').value,
    featureID: document.querySelector('input[name=features]:checked').id,
  };

  axios
    .post('/bugs', data)
    .then((response) => {
      // handle success
      console.log(response);

      document.getElementById('problem').value = '';
      document.getElementById('errorText').value = '';
      document.getElementById('commit').value = '';
      document.querySelector('input[name=features]:checked').checked = false;

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

  axios
    .get('/features')
    .then((response) => {
      // handle success
      response.data.features.forEach((feature) => {
        const featureInput = document.createElement('input');
        featureInput.type = 'radio';
        featureInput.name = 'features';
        featureInput.id = feature.id;
        featureInput.value = feature.name;

        const featureLabel = document.createElement('label');
        featureLabel.for = feature.id;
        featureLabel.innerText = feature.name;

        bugFormFeatures.appendChild(featureInput);
        bugFormFeatures.appendChild(featureLabel);
      });
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });

  const createBugButton = document.createElement('button');
  createBugButton.innerText = 'Submit';
  createBugButton.addEventListener('click', addBug);

  bugFormFeatures.appendChild(createBugButton);
});

axios
  .get('/bugs')
  .then((response) => {
    // handle success
    const bugList = document.createElement('ul');
    console.log(response.data.bugs);

    response.data.bugs.forEach((bug) => {
      const bugListItem = document.createElement('li');
      bugListItem.innerText = `${bug.problem} ${bug.error_text} ${bug.commit}`;

      bugList.appendChild(bugListItem);
    });

    document.getElementById('bugList').appendChild(bugList);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  });
