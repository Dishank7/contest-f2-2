
const users = [
{ id: 1, name: "john", age:18,profession:"developer"},
{ id: 2, name: "jack", age:20,profession:"developer"},
{ id: 3, name: "karen", age:20, profession: "admin"}
]; 


let select = document.getElementsByTagName("select")[0];
let container = document.getElementById("container");


function filterData(profession){
    if(profession === ""){
        return users;
    }

    let userList = users.filter((users) => {
        return users.profession === profession;
    })

    return userList;
}



function addNewUser(){
  let name = document.getElementById("Name").value.trim();
  let profession = document.getElementById("profession").value.trim();
  let age = document.getElementById("Age").value.trim();

  if(name !== "" && age !== "" && profession !== ""){
    let newUser ={
        id:users[users.length - 1].id +1,
        name:name,
        age:age,
        profession:profession
    };
    users.push(newUser);
    
  }
  else{
    alert("I LOVE YOU BEBEBEEB <33");
  }
}

  
function filterUser(){
  let SelectedValue = select.value;
  let filteredUser = filterData(SelectedValue);
  container.innerText="";
  appendUser(filteredUser);
}
  
function appendUser(userlist){

  for(let i = 0; i < userlist.length; i++){
   let usercard = document.createElement("div");
   usercard.className = "user";

   let idElement = document.createElement("div");
   idElement.innerText = userlist[i].id;

   let nameElement = document.createElement("div");
   nameElement.innerText = `Name: ${userlist[i].name}`;

   let professionElement = document.createElement("div");
   professionElement.innerText = `Profession: ${userlist[i].profession}`;

   let AgeElement = document.createElement("div");
   AgeElement.innerText= `Age: ${userlist[i].age}`;
     
   usercard.append(idElement);
   usercard.append(nameElement);
   usercard.append(professionElement);
   usercard.append(AgeElement);

   container.append(usercard);
  }
}
