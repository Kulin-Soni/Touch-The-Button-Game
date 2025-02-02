const hovOb = document.getElementById("objectj"),
  locateE = document.getElementById("location");
let xPo;
let yPo;
alert("Touch the white button if you can!")
const moveButton = ()=>{
  xPo = Math.floor(Math.random() * ((document.querySelector("#box").offsetWidth - hovOb.offsetWidth) + 1) + 1);
  yPo = Math.floor(Math.random() * ((document.querySelector("#box").offsetHeight - hovOb.offsetHeight) + 1) + 1);
  hovOb.style.top = `${yPo}px`;
  hovOb.style.left = `${xPo}px`;
}
let r = setInterval(() => {
 moveButton()
}, 100)

hovOb.addEventListener("click", () => {
  clearInterval(r);
  hovOb.style.cssText = "background: #33FF06; box-shadow: 0 0 50px 0 #33FF06;";
  alert("Reload the website to try again");
  hovOb.style.top = `${yPo}px`;
  hovOb.style.left = `${xPo}px`;
})
