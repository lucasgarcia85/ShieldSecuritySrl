//copyright year

document.querySelector(".year-copy").innerText = new Date().getFullYear();

// JS para que al clickear en nav items se cierre hamburguesa

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarNav')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})





  // contador 2 -----------------------

  let hasRun = false;
  let observer = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true && !hasRun ) {
        let counter1 = document.getElementById("counter1");
    let counter2 = document.getElementById("counter2");
    let counter3 = document.getElementById("counter3");

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let target1 = 30;
    let target2 = 50;
    let target3 = 100;

    function updateCounter1() {
        counter1.innerHTML = `+${count1}<p>Años de experiencia</p>`;
                
        if (count1 < target1) {
            count1++;
        }

    }
    function updateCounter2() {
        counter2.innerHTML = `+${count2}<p>Clientes felices</p>`;
            
        if (count2 < target2) {
            count2++;
        }
  
    }

    function updateCounter3(){
        counter3.innerHTML = `${count3}%<p>Satisfacción</p>`;

     if (count3 < target3) {
        count3++;
      }
    }

    setInterval(updateCounter1, 100);
    setInterval(updateCounter2, 60);
    setInterval(updateCounter3, 30);

    hasRun = true;
        // Resto de tu código de contador...
    }
}, { threshold: [0] });

observer.observe(document.querySelector("#activator"));


AOS.init(); 



     

        
        window.onresize = function() {
        if (window.innerWidth <= 576) {
            document.getElementById('back-to-top-id').href = "#main";
        }
    }

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        slidesPerView: 1,
        spaceBetween: 25,
        // direction: 'horizontal',
        loop: true,
        autoplay: {
        delay: 1000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
        },

      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          640: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          1200: {
            slidesPerView: 4
          },
        },
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      });

   