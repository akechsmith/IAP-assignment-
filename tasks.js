// NAME: AKECH DAU ATEM 
//
// REGno: SCT211-0535/2022
  
document.addEventListener('DOMContentLoaded', function () {
  let submitButton = document.getElementById('submit');
  let newTaskInput = document.getElementById('task');
  let tasksList = document.getElementById('tasks');

  // Disabling the submit button by default
  submitButton.disabled = true;

  // Listen for input to be typed into the input field
  newTaskInput.addEventListener('input', function () {
    submitButton.disabled = newTaskInput.value.trim().length === 0;
  });

  // Listen for submission of the form
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    let newTaskText = newTaskInput.value.trim();

    if (newTaskText.length > 0) {
      // Create a new list item for the new task and add it to the list
      let newTaskItem = document.createElement('li');
      newTaskItem.innerText = newTaskText;
      tasksList.appendChild(newTaskItem);

      // Clear the input field and disable the submit button
      newTaskInput.value = '';
      submitButton.disabled = true;
    }
  });
});
