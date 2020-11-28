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
if ((localStorage.getItem("userd"))) {
    for (let i = 0; i < datar.length; i++) {
    // let {name,review,rating} = datar[i];
    let res2=JSON.parse(localStorage.getItem("userd"));
    var datas=`
    <tr>
    <td><i class="fa fa-user-o"></i> &nbsp; ${JSON.parse(localStorage.getItem("userd"))[i].name}</td>
    <td>${JSON.parse(localStorage.getItem("userd"))[i].review}</td>
    <td><i class="fa fa-star"></i> &nbsp; ${JSON.parse(localStorage.getItem("userd"))[i].rating} &nbsp; stars</td>
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



