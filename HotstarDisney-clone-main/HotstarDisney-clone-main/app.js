let carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0;
let a = false;

const createSlide = () =>{
    if(slideIndex >= movies.length){
        slideIndex=0;
    }

    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
    let b =  document.createElement('b');
    let linebreak = document.createElement('br');
    let buttonDiv = document.createElement('div');
    let button = document.createElement('button');
    

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    b.appendChild(document.createTextNode(movies[slideIndex].type));
    button.textContent = '+ Subscribe to Watch';
    content.appendChild(h1);
    content.appendChild(p);
    content.appendChild(b);
    content.appendChild(linebreak);
    content.appendChild(buttonDiv);
    buttonDiv.appendChild(button);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);


    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    slide.className = 'slider';
    content.className = 'slider-content';
    h1.className = 'movie-title';
    p.className = 'movie-desc';
    b.className = 'movie-type';
    buttonDiv.className = 'button-div';
    button.className = 'Subscribe';

    button.addEventListener('click', () => {
        // alert('New button clicked!');
        a = !a;
        if(!a){
            button.textContent = "Subscribed";
        }else{
            button.textContent = "+ Subscribe to Watch";
        }
        
      });
    
    sliders.push(slide);

    if(sliders.length){
        sliders[0].style.marginLeft =  `calc(-${100 * (sliders.length - 2)}% - ${30 *(sliders.length - 2)}px)`; 
    }  
}

for(let i = 0; i < 6; i++){
    createSlide();
};

setInterval(()=>{
    createSlide();
}, 3000);

const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', () =>{
        let video = item.children[1];
        video.pause();
    })
})

// let cardContainers = [...document.querySelectorAll('.card-container')];
// let preBtns = [...document.querySelectorAll('.pre-btn')];
// let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

// cardContainers.forEach((item, i) =>{
//     let containerDimensions = item.getBoundingClientRect();
//     let containerWidth = containerDimensions.width;

//     nxtBtns[i].addEventListener('click',() =>{
//         item.scrollLeft += containerWidth - 100;
//     })

//     preBtns[i].addEventListener('click',() =>{
//         item.scrollLeft -= containerWidth + 100;
//     })
// })
function leftScroll() {
    const left = document.querySelector(".card-container");
    left.scrollBy(-1000, 0);
  }
  function rightScroll() {
    const right = document.querySelector(".card-container");
    right.scrollBy(1000, 0);
  }