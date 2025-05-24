document.getElementById("download-cv").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "../docs/beatriz_rolim_sobreira_cv_english_version.pdf";
    link.download = "beatriz_rolim_sobreira_cv_english_version.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  
  if(window.scrollY > 50) {  // Se rolou 50px ou mais para baixo
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});
