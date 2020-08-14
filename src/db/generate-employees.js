/*
This file contains the code that was used to
automatically generate employee data (saved as employees.json)
and download their images (saved in public/img).
It is not used by the application,
but is included to show where employee data came from.
*/

const axios = require("axios");
const fs = require("fs");
const download = require("download");

axios.get("https://randomuser.me/api/?nat=us&results=100")
  .then(response => {
    const results = response.data.results;

    const employees = []; // selected employees
    const picsUsed = {}; // keep track of pictures used to avoid doubles

    for (let i = 0; i < results.length; i++) {
      // save the employee if their picture hasn't been used
      if (!picsUsed[results[i].picture.thumbnail]) {
        // mark the employee's image as used
        picsUsed[results[i].picture.thumbnail] = true;
        // download the image
        const filename = `${results[i].name.first}-${results[i].name.last}.jpg`.toLowerCase();
        download(results[i].picture.thumbnail, "../public/img", { filename: filename });
        // add the employee to our array
        employees.push({
          "Image": filename,
          "First Name": results[i].name.first,
          "Last Name": results[i].name.last,
          "Phone": results[i].phone,
          "Email": results[i].email,
          "DOB": results[i].dob.date.slice(0, 10),
        });
      }
    }
    
    // save employee data to file
    fs.writeFile("employee.json", JSON.stringify(employees, null, 2), (err, res) => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log(employees.length + " employees saved to employee.json!");
      }
    });
  })
  .catch(error => {
    console.log(error);
  });