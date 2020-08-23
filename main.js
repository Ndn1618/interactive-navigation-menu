// "use strict";

// document.addEventListener( type : "DOMContentLoaded", listener : () => {
//   const navUl = document.querySelector( selectors : ".site-nav__ul"),
//         listItems = document.querySelectorAll( selectors : ".site-nav__li");
  
//   function removeActiveClass() {
//     listItems.forEach( callbackfn : item => {
//       item.classList.remove( tokens : "active");
//     })
//   }

//   function addActiveClass( i : number = 0 ) {
//     listItems[i].classList.add("active")
//   }

//   removeActiveClass();
//   addActiveClass();

//   navUl.addEventListener( type : "click", listener : event => {
//     event.preventDefault();

//     const target = event.target.parentElement;
    
//     if (target && target.classList.contains("site-nav__li")) {
//       listItems.forEach( callbackfn : (item : Element, index : number) => {
//         if (item == target) {
//           removeActiveClass();
//           addActiveClass(index);
//         }
//       })
//     }
//   })
// })