window.addEventListener("load", (event) => {

  document.querySelectorAll('.container').forEach(element => {
    //const container = document.querySelector('.container');

    element.addEventListener('input', (e) => {
      element.style.setProperty('--position', `${e.target.value}%`);
    })
  })

  document.getElementById('resetPosition').addEventListener('mousedown', function () {
    document.querySelectorAll('.container').forEach(element => {
      element.style.setProperty('--position', '50%');

    })
  });
  

})
