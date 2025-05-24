document.querySelector('.container').addEventListener('mouseover', () => {
  const skills = document.querySelectorAll('.skill');
  skills.forEach((skill, index) => {
    skill.style.transitionDelay = `${index * 0.1}s`;
  });
});

document.querySelector('.container').addEventListener('mouseout', () => {
  const skills = document.querySelectorAll('.skill');
  skills.forEach(skill => {
    skill.style.transitionDelay = '0s';
  });
});
