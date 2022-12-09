let x = 1;

function result() {
    if(x < 50) {
          x += 2;
          let div1 = document.createElement("div");
          document.body.appendChild(div1);
          div1.innerHTML = x;
          result();
    }
}
result();









