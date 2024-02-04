let btn = document.getElementById("btn1");
let btn1 = document.getElementById("btn2");
let btnIcon = document.getElementById("btnIcon");
let logo = document.getElementById("logo");
let btnIcon1 = document.getElementById("btnIcon1");

btn.onclick = function () {
 document.body.classList.toggle("dark-theme");

 if( document.body.classList.contains("dark-theme")){
  btnIcon.src ="images/Illustrations/sun.png";
  logo.src = "images/Illustrations/dark-logo.png"

 }else{
  btnIcon.src ="images/Illustrations/moon.png";
  logo.src = "images/Illustrations/light-logo.png"
 }
}
btn1.onclick = function () {
  document.body.classList.toggle("dark-theme");
 
  if( document.body.classList.contains("dark-theme")){
   btnIcon1.src ="images/Illustrations/sun.png";
   logo.src = "images/Illustrations/dark-logo.png"
 
  }else{
   btnIcon1.src ="images/Illustrations/moon.png";
   logo.src = "images/Illustrations/light-logo.png"
  }
 }
// menu button
function IconChange() {
  var element = document.getElementById("iconsClose");
  
    element.classList.toggle("btn-close");
}
  // menu close
window.addEventListener("scroll", function(){
  var header = document.querySelector(" .navigation");
  header.classList.toggle("sticky",window.scrollY > 0);

  const color = document.querySelectorAll(".text-color-nav");
for(let counter = 0; counter <= color.length; counter++){
 if (window.scrollY  > 0){
  color[counter].classList.add("scrolled");
 } else{
  color[counter].classList.remove("scrolled");
 }
}

});

window.addEventListener("scroll", function(){
const color1 = document.querySelector(".image-logo");
 if (window.scrollY  > 0){
  color1.classList.add("logoAdd") 
 } else{
  color1.classList.remove("logoAdd");
 }
});
// Education section
window.addEventListener("scroll", function(){
  const line = document.querySelector("#line");
   if (window.scrollY  > 1150){
      line.classList.add("lineEducation") 
   } else{
    line.classList.remove("lineEducation");
   }
  });
// Education section End
// skills section
// window.addEventListener("scroll", function(){
//   const html1 = document.querySelector("#htmlId");
//    if (window.scrollY  > 2280){
//     html1.classList.add("html") 
//    } else{
//     html1.classList.remove("html");
//    }
//   });
//   window.addEventListener("scroll", function(){
//     const html1 = document.querySelector("#cssId");
//      if (window.scrollY  > 2350){
//       html1.classList.add("css") 
//      } else{
//       html1.classList.remove("css");
//      }
//     });
//     window.addEventListener("scroll", function(){
//       const html1 = document.querySelector("#BootstrapId");
//        if (window.scrollY  > 2450){
//         html1.classList.add("Bootstrap") 
//        } else{
//         html1.classList.remove("Bootstrap");
//        }
//       });
//       window.addEventListener("scroll", function(){
//         const html1 = document.querySelector("#JavaScriptId");
//          if (window.scrollY  > 2280){
//           html1.classList.add("JavaScript") 
//          } else{
//           html1.classList.remove("JavaScript");
//          }
//         });
//         window.addEventListener("scroll", function(){
//           const html1 = document.querySelector("#jQueryId");
//            if (window.scrollY  > 2350){
//             html1.classList.add("jQuery") 
//            } else{
//             html1.classList.remove("jQuery");
//            }
//           });    
//           window.addEventListener("scroll", function(){
//             const html1 = document.querySelector("#ReactId");
//              if (window.scrollY  > 2450){
//               html1.classList.add("React") 
//              } else{
//               html1.classList.remove("React");
//              }
//             });    
// skills section end
// projects section
const ImageChange2 = document.querySelector('#Project-box1');
const myName = document.querySelector('#carProject');

ImageChange2.onmouseenter = function (){
  myName.style.padding = "0px";
  myName.innerHTML = ``;
};

ImageChange2.onmouseleave = function (){
  myName.style.padding = "5px 10px";
  myName.innerHTML = `Car Website`;

};

const ImageChange1 = document.querySelector('#projectCoffee');
const Project1 = document.querySelector('#Coffee-project');

ImageChange1.onmouseenter = function (){
  Project1.style.padding = "0px";
  Project1.innerHTML = ``;
};

ImageChange1.onmouseleave = function (){
  Project1.style.padding = "5px 10px";
  Project1.innerHTML = `Coffee Website`;
};

const ImageChange3 = document.querySelector('#doctorProject');
const Project2 = document.querySelector('#doctor-project');

ImageChange3.onmouseenter = function (){
  Project2.style.padding = "0px";
  Project2.innerHTML = ``;
};

ImageChange3.onmouseleave = function (){
  Project2.style.padding = "5px 10px";
  Project2.innerHTML = `Doctor Website`;
};

const ImageChange4 = document.querySelector('#E-commerceProject');
const Project3 = document.querySelector('#E-commerce-Project');

ImageChange4.onmouseenter = function (){
  Project3.style.padding = "0px";
  Project3.innerHTML = ``;
};

ImageChange4.onmouseleave = function (){
  Project3.style.padding = "5px 10px";
  Project3.innerHTML = `E-commerce Website`;
};

const ImageChange5 = document.querySelector('#FitnessProject');
const Project4 = document.querySelector('#Fitness-Project');

ImageChange5.onmouseenter = function (){
  Project4.style.padding = "0px";
  Project4.innerHTML = ``;
};

ImageChange5.onmouseleave = function (){
  Project4.style.padding = "5px 10px";
  Project4.innerHTML = `Fitness Website`;
};

const ImageChange6 = document.querySelector('#hotelproject');
const Project5 = document.querySelector('#hotel-project');

ImageChange6.onmouseenter = function (){
  Project5.style.padding = "0px";
  Project5.innerHTML = ``;
};

ImageChange6.onmouseleave = function (){
  Project5.style.padding = "5px 10px";
  Project5.innerHTML = `Hotel Website`;
};
const ImageChange7 = document.querySelector('#weddingProject');
const Project6 = document.querySelector('#wedding-project');

ImageChange7.onmouseenter = function (){
  Project6.style.padding = "0px";
  Project6.innerHTML = ``;
};

ImageChange7.onmouseleave = function (){
  Project6.style.padding = "5px 10px";
  Project6.innerHTML = `Wedding Website`;
};

const ImageChange8 = document.querySelector('#constructionProject');
const Project7 = document.querySelector('#construction-project');

ImageChange8.onmouseenter = function (){
  Project7.style.padding = "0px";
  Project7.innerHTML = ``;
};

ImageChange8.onmouseleave = function (){
  Project7.style.padding = "5px 10px";
  Project7.innerHTML = `Construction Website`;
};

const ImageChange9 = document.querySelector('#RealEstate');
const Project8 = document.querySelector('#Real-estate');

ImageChange9.onmouseenter = function (){
  Project8.style.padding = "0px";
  Project8.innerHTML = ``;
};

ImageChange9.onmouseleave = function (){
  Project8.style.padding = "5px 10px";
  Project8.innerHTML = `Real-estate Website`;
};
// scroll animation
AOS.init();
