document.getElementById('myForm').style.display="none"

setTimeout(() => {
  document.getElementById('myForm').style.display="block"
},5000);

function closeForm(){
    document.getElementById('myForm').style.display="none"
}