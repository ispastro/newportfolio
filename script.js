// Skill cycle for Hero section
const skills = ["Code", "Innovate", "Design", "Build", "Solve"];
let skillIndex = 0;
const skillElement = document.querySelector(".skill-cycle");

function cycleSkills() {
    skillElement.textContent = skills[skillIndex];
    skillIndex = (skillIndex + 1) % skills.length;
}

setInterval(cycleSkills, 1500);
cycleSkills();

// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Form submission (placeholder)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
    this.reset();
});