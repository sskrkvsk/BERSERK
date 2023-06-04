
  document.addEventListener('DOMContentLoaded', function() {
    var anchors = document.querySelectorAll('a[href^="#"]');
    
    anchors.forEach(function(anchor) {
      anchor.addEventListener('click', function(event) {
        // event.preventDefault();
        
        var targetId = this.getAttribute('href').substring(1);
        var targetImage = document.getElementById(targetId);
        
        if (targetImage) {
          targetImage.classList.add('highlight-image');
          
          setTimeout(function() {
            targetImage.classList.remove('highlight-image');
          }, 1000);
        }
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    var backToTopBtn = document.getElementById('back-to-top-btn');
    
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 100) {
        backToTopBtn.style.display = 'block';
      } else {
        backToTopBtn.style.display = 'none';
      }
    });
    
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  