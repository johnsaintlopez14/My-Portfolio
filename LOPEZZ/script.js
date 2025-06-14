<script>

  const container = document.getElementById('container');

  const buttons = document.querySelectorAll('nav button');


  buttons.forEach(button => {

    button.addEventListener('click', () => {

      const targetIndex = button.getAttribute('data-target');

      container.scrollTo({

        left: window.innerWidth * targetIndex,

        behavior: 'smooth',

      });

    });

  });


  container.addEventListener('scroll', () => {

    const scrollLeft = container.scrollLeft;

    const screenWidth = window.innerWidth;

    const index = Math.round(scrollLeft / screenWidth);


    buttons.forEach((btn, i) => {

      if(i === index) {

        btn.classList.add('active');

      } else {

        btn.classList.remove('active');

      }

