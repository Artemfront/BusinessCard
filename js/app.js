let modal = document.getElementById("my_modal");
let btn = document.getElementById("btn_modal_window");
let span = document.getElementsByClassName("close_modal_window")[0];
let nam = document.querySelector('.name'),
email = document.querySelector('.email'),
tel = document.querySelector('.tel'),
btn_modal = document.querySelector(".btn__modal");
 

// modal menu
window.onload = function() {
   btn.addEventListener('click', () => {
      modal.style.display = 'block';
   });

   span.addEventListener('click', () => {
      modal.style.display = "none";
      nam.value = "";
      email.value = "";
      tel.value = "";
   });

   window.addEventListener('click', function(e){
      if(e.target == modal) {
         modal.style.display = "none";
         nam.value = "";
         email.value = "";
         tel.value = "";
      };
   });
};


// input
btn_modal.addEventListener('click', () => {
   if (nam.value == "" || tel.value == "" || email.value == "") {
      alert("Заполните все поля!");
   } else {
      modal.style.display = "none";
      alert("Заявка отправлена!");
      nam.value = "";
      email.value = "";
      tel.value = "";
   }
});








