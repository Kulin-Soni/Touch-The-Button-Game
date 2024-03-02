const hovOb = document.getElementById("objectj"),
  locateE = document.getElementById("location");
let xPo;
let yPo;
xPo = Math.floor(Math.random() * ((document.querySelector("#box").offsetWidth - hovOb.offsetWidth) + 1) + 1);
yPo = Math.floor(Math.random() * ((document.querySelector("#box").offsetHeight - hovOb.offsetHeight) + 1) + 1);
hovOb.style.top = `${yPo}px`;
hovOb.style.left = `${xPo}px`;

let r = setInterval(() => {
  xPo = Math.floor(Math.random() * ((document.querySelector("#box").offsetWidth - hovOb.offsetWidth) + 1) + 1);
  yPo = Math.floor(Math.random() * ((document.querySelector("#box").offsetHeight - hovOb.offsetHeight) + 1) + 1);
  hovOb.style.top = `${yPo}px`;
  hovOb.style.left = `${xPo}px`;
}, 100)

hovOb.addEventListener("click", () => {
  clearInterval(r);
  hovOb.style.cssText = "background: #33FF06; box-shadow: 0 0 50px 0 #33FF06;";
  locateE.innerHTML = `Congratulations! <a href="/">Reload To Try Again</a>`;
  hovOb.style.top = `${yPo}px`;
  hovOb.style.left = `${xPo}px`;
})