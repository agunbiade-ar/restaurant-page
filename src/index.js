import './styles/styles.css';

function openTab(e, tabName) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  console.log(tabName);
  document.querySelector(`#${tabName}`).style.display = 'block';
  e.currentTarget.className += ' active';
}

document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tablinks');

  tabButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      // console.log(e.target);
      openTab(e, button.dataset.tab);
    });
  });
});
