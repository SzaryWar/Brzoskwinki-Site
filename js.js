const reveal = () => {
    const element = document.querySelector(".songlist1");
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const scrollTop = window.pageYOffset
    console.log(windowHeight, elementTop, window.pageYOffset)

    if (scrollTop > (elementTop + (windowHeight / 2))) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  }
  
window.addEventListener("scroll", reveal);