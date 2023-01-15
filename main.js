const prev=document.querySelector('.prev')
const next=document.querySelector('.next')

const slides = document.querySelectorAll('.slide')
console.log(slides)
let index=0;

const nextSlide =()=>{
    index++;
    if(index>slides.length-1){
     index=0
    }
    slides.forEach(item => {
    item.style.display='none'
  });
  slides[index].style.display='flex'
}
const prevSlide =()=>{
    index--;
    if(index<0){
        index = slides.length-1
       }
    slides.forEach(item => {
    item.style.display='none'
  });
  slides[index].style.display='flex'
}


next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)
