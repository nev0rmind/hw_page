const toggler = document.getElementById('toggler');

toggler.addEventListener('click', () => {
  console.log("woop woop");
  document.body.classList.toggle('bright');
})

