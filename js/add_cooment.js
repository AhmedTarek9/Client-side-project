var datar=[];
var tabl = document.getElementById('contact_table_body');
document.getElementById("submit").onclick=function(e){
  e.preventDefault();
  var newRow = tabl.insertRow(tabl.length);  
let data = {
            name : document.getElementById("name1").value,
            review : document.getElementById("name2").value,
            rating : document.querySelector('input[name="rating"]:checked').value
};
datar.push(data);
console.log(datar);
let itm = JSON.stringify(datar);
localStorage.setItem("userd",itm);
let res2=JSON.parse(localStorage.getItem("userd"));

if ((localStorage.getItem("userd"))) {
    for (let i = 0; i < datar.length; i++) {
    let {name,review,rating} = datar[i];
    var datas=`
    <tr>
    <td><i class="fa fa-user-o"></i> &nbsp; ${name}</td>
    <td>${review}</td>
    <td><i class="fa fa-star"></i> &nbsp; ${rating} &nbsp; stars</td>
    </tr>
    `

  }
  tabl.innerHTML += datas; 
}
resetForm();

}

function resetForm() {
    document.getElementById("name1").value="";
    document.getElementById("name2").value="";
    document.getElementsByName("rating").value="";
    selectedRow = null;
    }



