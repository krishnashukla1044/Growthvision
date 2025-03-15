// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}


// Mobile Menu Toggle (if needed, you can add this for mobile support)
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Animate on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__fadeIn');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.portfolio-item').forEach(item => {
    observer.observe(item);
});

// Card hover effects
const cards = document.querySelectorAll('.new-card-decor-item');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});


// Countdown Timer
// Set the date we're counting down to
var countdownDate = new Date("Jan 1, 2025 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();

  // Find the time difference between now and the countdown date
  var distance = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;

  // If the countdown is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector("#countdown-clock").innerHTML = "EXPIRED";
  }
}, 1000);



  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".elementor-counter-number");

    counters.forEach((counter) => {
      const updateCounter = () => {
        const target = +counter.getAttribute("data-to-value");
        const duration = +counter.getAttribute("data-duration");
        const increment = target / (duration / 10);
        let current = +counter.getAttribute("data-from-value") || 0;

        const count = () => {
          current += increment;

          if (current < target) {
            counter.textContent = Math.floor(current);
            setTimeout(count, 10);
          } else {
            counter.textContent = target.toLocaleString(); // Format with commas
          }
        };

        count();
      };

      updateCounter();
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    // Function to animate counter
    function animateCounter(counterElement) {
        const numberElement = counterElement.querySelector(".elementor-counter-number");
        const duration = parseInt(numberElement.getAttribute("data-duration"));
        const toValue = parseInt(numberElement.getAttribute("data-to-value"));
        const fromValue = parseInt(numberElement.getAttribute("data-from-value"));
        const delimiter = numberElement.getAttribute("data-delimiter");

        let currentValue = fromValue;
        const increment = toValue / duration;

        // Animation loop
        const interval = setInterval(() => {
            if (currentValue < toValue) {
                currentValue += increment;
                numberElement.textContent = formatNumber(Math.round(currentValue), delimiter);
            } else {
                numberElement.textContent = formatNumber(toValue, delimiter);
                clearInterval(interval);
            }
        }, 1); // adjust speed with this delay
    }

    // Helper function to format the number with commas
    function formatNumber(number, delimiter) {
        return number.toLocaleString().replace(/,/g, delimiter || ',');
    }

    // Get all counters and animate them
    const counters = document.querySelectorAll(".elementor-counter");
    counters.forEach(counter => animateCounter(counter));
});
