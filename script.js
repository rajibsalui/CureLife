const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const menu = dropdown.querySelector('.menu');
    const list = dropdown.querySelector('.menu li');
    const selected = dropdown.querySelector('.selected');


    select.addEventListener('click', () => {

        select.classList.toggle('select-clicked');
        menu.classList.toggle('menu-open');

    });

    document.querySelectorAll('.menu li').forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            selected.classList.remove('select-clicked');
            menu.classList.remove('menu-open');
            list.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });


});

let slideIndex = 1;
showSlides(slideIndex);
var n=3
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
}