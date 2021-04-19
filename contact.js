const skill = document.querySelector(".progesBar"); 
const porges = document.querySelectorAll(".progres-bar"); 
   function showProgess(){ 
     porges.forEach(progressBar => {
       const valu = progressBar.dataset.progress; 
       progressBar.style.opacity = 1; 
       progressBar.style.width = `${valu}%`;

     });

   }; 

   function hideProgress(){ 
     porges.forEach(x => {
       x.style.opacity = 0;
       x.style.width = 0;
     });
   }



window.addEventListener('scroll',()=>{ 
   const  secPosition = skill.getBoundingClientRect().top; 
   const screenPos  = window.innerHeight/1; 
   if (secPosition < screenPos) {
       showProgess()
   } else {
      hideProgress()
   }


  }) 


  const sBtn = document.querySelector('#sbtn'); 
      sBtn.addEventListener('click',()=>{ 
        const article = document.querySelector('#overly'); 
          article.style.top="50px";

      })