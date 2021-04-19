
const typed = new Typed('.element', {
    // Waits 1000ms after typing "First"
    strings: [ 
        ' Web Designer',
         ' Traveller',
          'Web Developer', 
        ], 
        typeSpeed: 50, 
        backSpeed: 50,
        backDelay: 1500,
        loop: true,

  }); 


  try {
    window.addEventListener('scroll',()=>{ 
      const intro = document.querySelector('.scroll'); 
      const screenPosition = intro.getBoundingClientRect().top; 
      const screenHeight = window.innerHeight/1.2; 
     
      if (screenPosition < screenHeight ) {
             intro.classList.add('apear')
        } else {
          intro.classList.remove('apear')
        } 



 });

 
  } catch (error) {
     console.log(error);
  }