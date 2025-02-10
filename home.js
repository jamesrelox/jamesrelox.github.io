gsap.registerPlugin(ScrollTrigger);

gsap.to(".image", {
    scale: 1.2,
    scrollTrigger: {
        trigger: ".image",
        start: "top center",
        end: "bottom top",
        scrub: 1
    }
});

function handleScroll() {
  const sections = [
    document.querySelectorAll('.title-section'),
    document.querySelectorAll('.contact-section-text'),
    document.querySelectorAll('.socials'),
    document.querySelectorAll('.about-me-text'),
    document.querySelectorAll('.about')
  ];

  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach(section => {
    section.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < triggerBottom) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  });
}

// Event listeners
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);


// Event listeners
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);


  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);
  
  function copyEmail() {
    const email = "jamesrelox.media@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      showNotification("Email copied to clipboard!");
    }).catch(err => {
      console.error('Failed to copy Email: ', err);
    });
  }
  
  function showNotification(message) {
    // Create the notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.padding = '10px 20px';
    notification.style.backgroundColor = '#1e201e';
    notification.style.color = '#fff';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.2)';
    notification.style.fontFamily = 'inter, sans-serif';
    notification.style.fontSize = '14px';
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.6s ease';
  
    // Add the notification to the document
    document.body.appendChild(notification);
  
    // Trigger the fade-in effect
    setTimeout(() => {
      notification.style.opacity = '1';
    }, 10);
  
    // Fade out and remove after 3 seconds
    setTimeout(() => {
      notification.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 500);
    }, 3000);
  }
  
  