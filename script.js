let d = document;
let btn_dropdown1 = d.querySelector("#first-btn");
let btn_dropdown2 = d.getElementById("second-btn");
let btn_dropdown3 = d.querySelector("#third-btn");
let btn_dropdown4 = d.querySelector("#fourth-btn");
let paragraph1 = d.getElementById("one");
let paragraph2 = d.getElementById("two");
let paragraph3 = d.getElementById("three");
let paragraph4 = d.getElementById("four");

d.addEventListener('click', e => {

  if(e.target === btn_dropdown1) {
        console.log("Hola");
        paragraph1.classList.toggle("hide");
        btn_dropdown1.classList.toggle("minus");
    }
  if(e.target === btn_dropdown2) {
        console.log("Hola");
        paragraph2.classList.toggle("hide");
        btn_dropdown2.classList.toggle("minus");
    }

    if(e.target === btn_dropdown3) {
          console.log("Hola");
          paragraph3.classList.toggle("hide");
          btn_dropdown3.classList.toggle("minus");
      }

      if(e.target === btn_dropdown4) {
            console.log("Hola");
            paragraph4.classList.toggle("hide");
            btn_dropdown4.classList.toggle("minus");
        }
    });
