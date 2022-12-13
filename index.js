import BookLibrary from './module/bookLibrary.js';
import { navItems } from './module/domSlectors.js';
import addNavSection from './module/navigation.js';

// Date in html
const dt = luxon.DateTime.now(); // eslint-disable-line
document.getElementById('show-date').innerText = dt.toLocaleString(luxon.DateTime.DATETIME_MED); // eslint-disable-line

const books = new BookLibrary();

window.onload = () => {
  books.display();
};

const putBookForm = document.getElementById('put-book');
putBookForm.addEventListener('submit', (e) => {
  books.onAddBook(e);
});

navItems.forEach((navItem) => {
  navItem.addEventListener('click', (e) => {
    navItems.forEach((n) => {
      n.classList.remove('active');
    });
    addNavSection(e);
  });
});
