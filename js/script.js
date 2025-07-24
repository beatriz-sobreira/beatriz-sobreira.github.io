// download file button

document.getElementById("download-cv").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "../docs/beatriz_rolim_sobreira_cv_english_version.pdf";
  link.download = "beatriz_rolim_sobreira_cv_english_version.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});



// shrink menu bar after scrolling

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  
  if(window.scrollY > 50) {  
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});



// menu mode: light mode and dark mode

let mode = document.getElementById('header-menu-mode');
let body = document.querySelector('body');

mode.addEventListener('click', () => {
  mode.classList.toggle('dark');
  body.classList.toggle('dark');
});
