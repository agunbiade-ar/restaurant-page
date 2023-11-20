import './styles/styles.css';
import openTab from './manipulateTabs';

document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tablinks');

  tabButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      // console.log(e.target);
      openTab(e, button.dataset.tab);
    });
  });
});
