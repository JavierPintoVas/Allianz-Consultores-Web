document.addEventListener("DOMContentLoaded", function () {
  // Animación de desplazamiento suave para los enlaces de navegación
  var scrollLinks = document.querySelectorAll('a[href^="#"]');
  for (var i = 0; i < scrollLinks.length; i++) {
    scrollLinks[i].addEventListener("click", function (e) {
      e.preventDefault();
      var targetId = this.getAttribute("href").slice(1);
      var targetElement = document.getElementById(targetId);
      if (targetElement) {
        var targetPosition = targetElement.getBoundingClientRect().top;
        var startPosition = window.pageYOffset;
        var distance = targetPosition - startPosition;
        var duration = 1000;
        var startTime = null;

        function animation(currentTime) {
          if (startTime === null) startTime = currentTime;
          var timeElapsed = currentTime - startTime;
          var run = ease(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return (c / 2) * t * t + b;
          t--;
          return (-c / 2) * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
      }
    });
  }
});
