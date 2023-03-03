function themeToggle() {
  const themeToggleButton = document.getElementById('themeToggleButton');
  const pageBody = document.getElementById('pageBody');
  const sunIcon = document.getElementById('sunIcon');
  const moonIcon = document.getElementById('moonIcon');
  const activeBlock = document.getElementById('activeBlock');
   
  let defaultTheme = 'dark';
  let positionActiveBlock;

  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', defaultTheme);
  }

  localStorage.getItem('theme') == 'light' ? positionActiveBlock = '46px' : positionActiveBlock = '4px';

  if (localStorage.getItem('theme') == 'light') {
    sunIcon.classList.add('active');
    moonIcon.classList.remove('active');
  } else {
    sunIcon.classList.remove('active');
    moonIcon.classList.add('active');
  }

  activeBlock.style.right = positionActiveBlock;

  pageBody.classList.add(localStorage.getItem('theme'));

  themeToggleButton.addEventListener('click', ()  => {
    if (localStorage.getItem('theme') == 'dark') {
      localStorage.setItem('theme', 'light');

      pageBody.classList.remove('dark');
      pageBody.classList.add('light');

      activeBlock.style.right = '46px';

      sunIcon.classList.add('active');
      moonIcon.classList.remove('active');
    } else {
      localStorage.setItem('theme', 'dark');

      pageBody.classList.remove('light');
      pageBody.classList.add('dark');

      activeBlock.style.right = '4px';

      sunIcon.classList.remove('active');
      moonIcon.classList.add('active');
    }
  });
}

themeToggle();
