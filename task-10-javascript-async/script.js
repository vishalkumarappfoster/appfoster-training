async function showUsers() {
    try {
      const data = await fetch("https://gorest.co.in/public/v2/users");
      const objectData = await data.json();
      let tableData = "";
      objectData.map((values) => {
        tableData += `<tr>
          <td>${values.name}</td>
          <td><button class="btn btn-primary" data-toggle="modal" data-target="#userModal" onclick="displayDetails('${values.id}')">View More</button></td>
        </tr>`;
      });
      document.getElementById("tableBody").innerHTML = tableData;
    } catch (err) {
      console.log("error occured!", err);
    } finally {
      console.log("done fine");
    }
  }
  showUsers();
  
  async function displayDetails(id) {
    try {
      const data = await fetch("https://gorest.co.in/public/v2/users/" + id);
      const objectData = await data.json();
      document.getElementById("name").innerHTML = objectData.name;
      document.getElementById("email").innerHTML = objectData.email;
      document.getElementById("gender").innerHTML = objectData.gender;
    } catch (err) {
      console.log("error occured!", err);
    } finally {
      console.log("done fine");
    }
  }
  
 
  