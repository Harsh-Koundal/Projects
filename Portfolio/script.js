function animateSkillsBars(){
  const barContainers = document.querySelectorAll('.skills-bar-container');
  const bars = document.querySelectorAll('.skills-bar');
  bars.forEach((bar , idx)=>{
    const target =   parseInt(bar.getAttribute('data-percentage'));
    let count = 0;
    function animateBar(){
      if(count <= target){
        bar.style.width = count + "%";
        barContainers[idx].setAttribute('data-count' , count + "%");
        count++;
        setTimeout(animateBar ,15);
      }
    } 
    animateBar();
  })
}
const skillsSection = document.querySelector('.skills');
const observer = new IntersectionObserver((entries , observer)=>{
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      animateSkillsBars();
      observer.unobserve(entry.target);
    }
  });
},{
  threshold:0.5
});
observer.observe(skillsSection);

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.leftSection, .about__img, .skills-subtitle, .skills-text');
sr.reveal('.rightSection img,.skill-container, .skills-image , .about-para, .about__subtitle, .about-text , .services , .contact', { delay: 400 });
sr.reveal('.btn', { interval: 200 });
sr.reveal('.vertical, .work__img, .contact__input ', { interval: 200 });

