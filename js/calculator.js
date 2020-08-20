document.getElementById('add').onclick= function addnumbers() {
   const num1 = parseInt(document.getElementById("num1").value)
   const num2 = parseInt(document.getElementById("num2").value)
   const result= num1 + num2
   console.log (result)
   document.getElementById("result").innerText= result
}
document.getElementById('subtract').onclick= function subtractNumbers() {
   const num1 = parseInt(document.getElementById("num1").value)
   const num2 = parseInt(document.getElementById("num2").value)
   const result= num1 - num2
   console.log (result)
   document.getElementById("result").innerText= result
}
document.getElementById('multi').onclick= function multiNumbers() {
   const num1 = parseInt(document.getElementById("num1").value)
   const num2 = parseInt(document.getElementById("num2").value)
   const result= num1 * num2
   console.log (result)
   document.getElementById("result").innerText= result
}
document.getElementById('divide').onclick= function divideNumbers() {
   const num1 = parseInt(document.getElementById("num1").value)
   const num2 = parseInt(document.getElementById("num2").value)
   const result= num1 / num2
   console.log (result)
   document.getElementById("result").innerText= result
}
