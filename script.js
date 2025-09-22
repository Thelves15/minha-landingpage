// Testimonials data for columns
const testimonials = [
  {
    text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
  {
    text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Customer Support Lead",
  },
  {
    text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Our business functions improved with a user-friendly design and positive customer feedback.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];

function initTestimonialColumnsScroll() {
  const columns = document.querySelectorAll('.testimonials-column');

  columns.forEach((column, index) => {
    // Duplicate content to create seamless loop
    const originalContent = column.innerHTML;
    column.innerHTML += originalContent;

    let scrollPosition = 0;
    const scrollSpeed = 0.5 + (index * 0.1); // Slight variation in speed
    const totalHeight = column.scrollHeight / 2; // Height of one set of duplicated content

    function animateScroll() {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= totalHeight) {
        scrollPosition = 0; // Reset to loop
      }
      column.style.transform = `translateY(-${scrollPosition}px)`;
      requestAnimationFrame(animateScroll);
    }
    
    animateScroll();
  });
}

// Scroll reveal animation
function initScrollReveal() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  }, observerOptions);

  // Observe all scroll reveal elements
  const elements = document.querySelectorAll(".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right");
  elements.forEach((el) => observer.observe(el));
}

// Parallax effect
function initParallax() {
  const handleMouseMove = (e) => {
    const parallaxElements = document.querySelectorAll(".parallax");
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    parallaxElements.forEach((el, index) => {
      const speed = (index + 1) * 0.5;
      const xPos = (x - 0.5) * speed;
      const yPos = (y - 0.5) * speed;
      el.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });
  };

  window.addEventListener("mousemove", handleMouseMove);
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Button magnetic effect
function initMagneticButtons() {
  const magneticButtons = document.querySelectorAll(".btn-magnetic");

  magneticButtons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px) scale(1.02)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });
}

// Add click handlers for CTA buttons
function initCTAButtons() {
  const ctaButtons = document.querySelectorAll(".btn-primary, .btn-secondary");

  ctaButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Add your CTA logic here (e.g., open contact form, redirect to WhatsApp, etc.)
      console.log("CTA button clicked:", this.textContent.trim());

      // Example: Open WhatsApp
      if (this.textContent.includes("WhatsApp")) {
        window.open("https://wa.me/5598970005227?text=Olá! Gostaria de solicitar um orçamento.", "_blank");
      }

      // Example: Scroll to contact section or open contact form
      if (this.textContent.includes("ORÇAMENTO")) {
        // You can add your contact form logic here
        alert("Funcionalidade de orçamento será implementada aqui!");
      }
    });
  });
}

// Add hover effects to cards
function initCardHoverEffects() {
  const cards = document.querySelectorAll(".service-card, .benefit-card, .portfolio-item, .pricing-card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize testimonial columns scroll
  initTestimonialColumnsScroll();

  // Initialize all features
  initScrollReveal();
  initSmoothScrolling();
  initMagneticButtons();
  initCTAButtons();
  initCardHoverEffects();

  // Add loading animation
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
  }, 100);
});

// Performance optimization: Throttle scroll and mouse events
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Optimize parallax for better performance
const optimizedParallax = throttle((e) => {
  const parallaxElements = document.querySelectorAll(".parallax");
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  parallaxElements.forEach((el, index) => {
    const speed = (index + 1) * 0.5;
    const xPos = (x - 0.5) * speed;
    const yPos = (y - 0.5) * speed;
    el.style.transform = `translate(${xPos}px, ${yPos}px)`;
  });
}, 16); // ~60fps

// Replace the original parallax with optimized version
window.addEventListener("mousemove", optimizedParallax);
  