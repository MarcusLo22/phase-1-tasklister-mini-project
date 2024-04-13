// The code below ensures that students who are using CodeGrade will get credit
// for the code-along in Canvas; you can disregard it.

require("./helpers.js");

describe("", () => {
  describe("", () => {
    it("Test passing", () => {
      return true;
    });
  });
});

// Get the form element
const form = document.querySelector('#create-task-form');

// Get the tasks list element
const tasksList = document.querySelector('#tasks');

// Add an event listener for the form submission
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the task description from the form input field
  const taskDescription = document.querySelector('#new-task-description').value;

  // Create a new task element
  const newTask = document.createElement('li');
  newTask.textContent = taskDescription;

  // Add the new task to the tasks list
  tasksList.appendChild(newTask);

  // Clear the form input field
  document.querySelector('#new-task-description').value = '';
});

// Add an event listener for the delete action
tasksList.addEventListener('click', function(event) {
  // Check if the clicked element is a task
  if (event.target.tagName === 'LI') {
    // Remove the task from the list
    event.target.remove();
  }
});