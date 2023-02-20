$(document).ready(function () {
  async function showUsers() {
    try {
      const data = await fetch("https://gorest.co.in/public/v2/users");
      const objectData = await data.json();
      let tableData = "";
      objectData.map((values) => {
        tableData += `<tr>
          <td>${values.name}</td>
          <td><button class="btn btn-primary view-more-detail-btn" data-id="${values.id}" data-toggle="modal" data-target="#userModal">View More</button></td>
        </tr>`;
      });
      $("#tableBody").html(tableData);
    } catch (err) {
      console.log("error occured!", err);
    } finally {
      console.log("done fine");
    }
  }
  async function displayDetails(id) {
    try {
      const data = await fetch(`https://gorest.co.in/public/v2/users/${id}`);
      const objectData = await data.json();
      $("#name").html(objectData.name);
      $("#email").html(objectData.email);
      $("#gender").html(objectData.gender);
    } catch (err) {
      console.log("error occured!", err);
    } finally {
      console.log("done fine");
    }
  }

  $(document).on("click", ".view-more-detail-btn", function () {
    const userId = $(this).data("id");
    displayDetails(userId);
  });

  showUsers();
});
