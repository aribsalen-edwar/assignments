var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var addbtn = document.getElementById("addBtn");
var siteList ;

if (localStorage.getItem("siteList") ==null) {
      siteList =[];

}else{
    siteList = JSON.parse(localStorage.getItem("siteList"));
displaySites(siteList)
}

addbtn.onclick = function addSites(){
    console.log("hello");
    var sites = {
    siteName : siteName.value,
    siteUrl : siteUrl.value,
}
siteList.push(sites); 
localStorage.setItem("siteList",JSON.stringify(siteList));
displaySites(siteList);
clearForm()
    console.log("hi",siteList);
}
function clearForm(){
    siteName.value =""
    siteUrl.value =""
}

function displaySites(sites){
    var cartona = ``;
    for (let i = 0; i < sites.length; i++) {
        cartona += `<tr>
        <td>${i+1}</td>
        <td>${sites[i].siteName}</td>
        <td>
        <button id="yb"> <a href="${sites[i].siteUrl}">vsit</a></button></td> 
        <td>  <button onclick ="deleteSite(${i})" class="bg-danger rounded-1 ">Delete</button></td>
     </tr>`
        
    }
    document.getElementById("tBody").innerHTML = cartona;
}
function deleteSite(index){
    siteList.splice(index,1);
    localStorage.setItem("siteList",JSON.stringify(siteList));

    displaySites(siteList);
}