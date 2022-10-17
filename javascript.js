let editMode=false
const tugasInput = document.getElementById("activity") 

const onSubmit = (event) => {
    event.preventDefault();
    const {activity}= event.target; 
    const uid= Math.random()
dataTabel.innerHTML += `<tr id="${uid}"> 
<td>${activity.value}</td>
<td> <button type="button" class="btn btn-outline-light" onclick="remove(${uid})">remove</button> </td>
</tr>` 

tugasInput.value=''
} 

addEventListener("submit",onSubmit); 

function remove(id) {
   if(editMode){
    return;
   }
const value = document.getElementById(id)
value.remove();
}