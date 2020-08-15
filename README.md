# Employee Directory

![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

This React application displays a table of employee data. The user can sort the data by any text column in ascending or descending order and can filter the employees to only see those whose information contains a search string.

## Table of Contents

* [Installation](#installation)

* [Demonstration](#demonstration)

* [Code Explanation](#code-explanation)

* [Technologies Used](#technologies-used)

* [Deployed Link](#deployed-link)

* [License](#license)

* [Acknowledgements](#acknowledgements)

* [Questions](#questions)


## Demonstration

![Demonstration of application](demo.gif)

## Code Explanation

The list of employees is saved in the `state` of the `App` component. The employee array contains employee objects which include information to display to the user as well as a boolean `display` property. The filtering of the employees is done with a reducer function which updates the `display` property according to whether or not the employee contains the search string. This way, employees can be hidden while preserving their data and their order. The code highlight below is the part of the `dispatch` function that filters employees. `filterBy` is a constant listing employee property names to search for the search string.

```javascript
case "search":
  const filter = action.filter.trim().toLowerCase();
  return {...state, filter: action.filter, employees: state.employees.map(employee => {
    let isMatched = false;
    for (const columnName of filterBy) {
      if (employee[columnName].toLowerCase().includes(filter)) {
        isMatched = true;
        break;
      }
    }
    return {...employee, display: isMatched};
  })};
```

## Technologies Used

* [React](https://reactjs.org/)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [Google Fonts](https://fonts.google.com/)
* [Node Package Manager (NPM)](https://www.npmjs.com/)

## Deployed Link

* [See Live Site](https://sierrachapman.github.io/employee-directory)

## License

This project is licensed under the MIT license.

## Acknowledgements

* The employee data used in this application was generated with the (Random User Generator API)[https://randomuser.me/].
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Questions

If you have any questions about the repo, open an issue or contact me directly at siechap@gmail.com. You can find more of my work at [SierraChapman](https://github.com/SierraChapman/).