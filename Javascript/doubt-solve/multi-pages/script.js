const darkBtn = document.querySelector('#dark-toggle');

window.addEventListener('load', () => {
  //   let currentTheme = document.body.style.getPropertyValue('--theme-color');
  //   console.log(currentTheme);

  //   document.body.style.setProperty('--theme-color', currentTheme);
  if (window.localStorage.getItem('isDarkMode') == 'true') {
    toggleDarkMode();
  }
});

darkBtn.addEventListener('click', () => {
  toggleDarkMode();
  changeDarkModeStatus();
});

function toggleDarkMode() {
  //   document.body.classList.toggle('dark-mode-active');

  if (
    getComputedStyle(document.body).getPropertyValue('--theme-color') ==
    '#24252e'
  ) {
    document.body.style.setProperty('--theme-color', '#ffffff');
  } else {
    document.body.style.setProperty('--theme-color', '#24252e');
  }
}

function changeDarkModeStatus() {
  let currentMode = window.localStorage.getItem('isDarkMode');
  if (currentMode == 'true') {
    window.localStorage.setItem('isDarkMode', false);
  } else {
    window.localStorage.setItem('isDarkMode', true);
  }
}
