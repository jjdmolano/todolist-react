# To-Do List App made for Calibr8 Digital Exam

This app was made as an exercise for my application as a junior full stack developer.


**Enter `npm start` in the CLI or terminal to start the app.**

**Make sure that the Node app is also running for the login to work.**

In order to access the todo list, the user must login first. The login function is connected to a basic Node app to authenticate the user. If the user tries to access the page directly through the URL without logging in, the list will not show and will have a button to redirect them back to the login page.

**Username is `User` and Password is `password`. Any other entered username or password will not work.**

The app uses React Router to navigate between the pages. Instead of Redux, the app uses the React hooks useState and useContext to manage states.

This app can create, update, delete, and mark a todo as done.
To add a todo, press the '+' button on the right side of the input field.
To update a todo, press the pen button on the right side of the item to toggle the input field. When finished, press the green pen to update the todo or the 'x' button to cancel the edit.
To delete a todo, press the red trash button.
To mark a todo as done, press the green check mark on the left side of the todo.