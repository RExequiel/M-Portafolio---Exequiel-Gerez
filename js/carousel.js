function Carousel(skills) {
    let currentIndex = 0;
    let carouselImage = document.getElementById('carouselImage');
    let carouselName = document.getElementById('carouselName');
    let prevBtn = document.getElementById('prevBtn');
    let nextBtn = document.getElementById('nextBtn');
  
    function showImage() {
      let skill = skills[currentIndex];
      carouselImage.src = skill.image;
      carouselImage.alt = skill.name;
      carouselName.innerText = skill.name;
    }
  
    function handleNext() {
      currentIndex = (currentIndex + 1) % skills.length;
      showImage();
    }
  
    function handlePrev() {
      currentIndex = currentIndex === 0 ? skills.length - 1 : currentIndex - 1;
      showImage();
    }
  
    this.init = function() {
      prevBtn.addEventListener('click', handlePrev);
      nextBtn.addEventListener('click', handleNext);
      showImage();
    };
  }
  