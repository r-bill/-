var slideIndex = 0;
    showSlides();

    // 函数：显示幻灯片
    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 8000); // 每8秒切换图片
    }
    // 函数：切换幻灯片
    function plusSlides(n) {
      showSlides(slideIndex + n);
    }

    function goBack() {
      window.history.back();
    }