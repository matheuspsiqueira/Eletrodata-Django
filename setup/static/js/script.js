document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".contador");

    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const format = counter.getAttribute("data-format");
      const duration = 2000; // duração total em ms
      const startTime = performance.now();

      // Função de easing (easeOutCubic)
      function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
      }

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1); // máx = 1
        const easedProgress = easeOutCubic(progress);
        const current = Math.round(target * easedProgress);

        if (format === "milhoes") {
          counter.textContent = current.toLocaleString();
        } else {
          counter.textContent = current;
        }

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          // Texto final personalizado, se necessário
          if (format === "milhoes") {
            counter.textContent = "4 milhões m²";
          } else {
            counter.textContent = target;
          }
        }
      }

      requestAnimationFrame(updateCounter);
    });
  });