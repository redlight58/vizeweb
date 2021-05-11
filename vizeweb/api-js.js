// api url
const api_urls = 
      ("https://jsonplaceholder.typicode.com/albums");
      ("https://jsonplaceholder.typicode.com/users");
  
// Defining async function
async function getapi(urls) {
    
    // Storing response
    const response = await fetch(urls);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_urls);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>AlbumId</th>
          <th>AlbumTitle</th>
          <th>UserName</th>
          <th>UserEmail</th>
          <th>UserCompanyName</th>
          <th>UserWebSite</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data.list) {
        tab += `<tr> 
    <td>${r.AlbumId} </td>
    <td>${r.AlbumTitle}</td>
    <td>${r.UserName}</td>
    <td>${r.UserEmail}</td>
    <td>${r.UserCompanyName}</td>
    <td>${r.UserWebSite}</td>          
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
}