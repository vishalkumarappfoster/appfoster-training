async function showUsers(){
    fetch("https://gorest.co.in/public/v2/users")
    .then((data)=>{
        return data.josn();
        
    })
    .then((objectData)=>{
        let tableData="";
        objectData.map(values)=>{
            tableData=` <tr>
            <td>${values.name}</td>
            <td><button class ="btn btn-primary" data-toggle="modal" data-target="#userModal" onclick="displayDetails('${values.id}')">View more</button></td>
            
          </tr>`;
        }
    });
}