// Read custom message from query string (optional)
const urlSearchParams = new URLSearchParams(window.location.search);
const messageCustom = urlSearchParams.get('message');

if (messageCustom) {
  const mainMessageElement = document.querySelector('#mainMessage');
  mainMessageElement.textContent = decodeURI(messageCustom);
}

// Elements
const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');

btnCloseElement.disabled = true;

btnOpenElement.addEventListener('click', () => {
  // Disable "Open" button and enable "Close" button
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;

  const coverElement = document.querySelector('.cover');
  coverElement.classList.add('open-cover');

  setTimeout(() => {
    // Hide cover after opening
    coverElement.style.zIndex = -1;

    // Open paper with message
    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('close-paper');
    paperElement.classList.add('open-paper');

    // Show heart animation
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'block';
  }, 500); // Time for the cover to open
});

btnCloseElement.addEventListener('click', () => {
  // Disable "Close" button and enable "Open" button
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  const coverElement = document.querySelector('.cover');
  const paperElement = document.querySelector('.paper');
  paperElement.classList.remove('open-paper');
  paperElement.classList.add('close-paper');

  setTimeout(() => {
    coverElement.style.zIndex = 0;
    coverElement.classList.remove('open-cover');

    // Hide heart animation
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'none';
  }, 500); // Time to close the paper
});
