//copyright year

document.querySelector(".year-copy").innerText = new Date().getFullYear();

// JS para que al clickear en nav items se cierre hamburguesa

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarNav')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})


// Contador de experiencia, clientes, y satisfaccion 
// window.addEventListener("load", function() {
//     let counter1 = document.getElementById("counter1");
//     let counter2 = document.getElementById("counter2");
//     let counter3 = document.getElementById("counter3");

//     let count1 = 0;
//     let count2 = 0;
//     let count3 = 0;
//     let target1 = 30;
//     let target2 = 50;
//     let target3 = 100;

//     function updateCounter1() {
//         counter1.innerHTML = `+ ${count1}<p>Años de experiencia</p>`;
                
//         if (count1 < target1) {
//             count1++;
//         }

//     }
//     function updateCounter2() {
//         counter2.innerHTML = `+ ${count2}<p>Clientes felices</p>`;
            
//         if (count2 < target2) {
//             count2++;
//         }
  
//     }

//     function updateCounter3(){
//         counter3.innerHTML = `${count3} % <p>Satisfacción</p>`;

//      if (count3 < target3) {
//         count3++;
//       }
//     }

//     setInterval(updateCounter1, 100);
//     setInterval(updateCounter2, 60);
//     setInterval(updateCounter3, 30);
//   });
  // fin contador experiencia ------------------------



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



        // let respuestaCorrecta;

        // function generarOperacion() {
        //     const num1 = Math.floor(Math.random() * 10) + 1; // Número entero positivo entre 1 y 10
        //     const num2 = Math.floor(Math.random() * 10) + 1; // Número entero positivo entre 1 y 10
        //     const operaciones = ['+', '*', '-'];
        //     const operacion = operaciones[Math.floor(Math.random() * operaciones.length)];

        //     let resultado;
        //     switch (operacion) {
        //         case '+':
        //             resultado = num1 + num2;
        //             break;
        //         case '*':
        //             resultado = num1 * num2;
        //             break;
        //         case '-':
        //             resultado = num1 - num2;
        //             break;
        //     }

        //     respuestaCorrecta = resultado;
        //     return `${num1} ${operacion} ${num2}`;
        // }

        // function reiniciarCaptcha() {
        //     const pregunta = generarOperacion();
        //     document.getElementById('recaptcha').innerHTML = pregunta;
        //     document.getElementById('respuesta').value = ''; // Clear the input field
        // }

        // function validarRespuesta() {
        //     const respuestaUsuario = parseInt(document.getElementById('respuesta').value);
        //     const enviarButton = document.getElementById('enviar');
        //     enviarButton.disabled = isNaN(respuestaUsuario) || respuestaUsuario !== respuestaCorrecta;
        // }

        // function validarFormulario() {
        //     const respuestaUsuario = parseInt(document.getElementById('respuesta').value);
        //     if (isNaN(respuestaUsuario)) {
        //         document.getElementById('mensajeCaptcha').innerText = 'Por favor, ingresa una respuesta válida.';
        //         return false;
        //     }

        //     if (respuestaUsuario === respuestaCorrecta) {
        //         document.getElementById('mensajeCaptcha').innerText = '';
        //         alert('Enviado');
        //         return true; // Permite el envío del formulario
        //     } else {
        //         document.getElementById('mensajeCaptcha').innerText = 'Captcha incorrecto.';
        //         reiniciarCaptcha(); // Generate a new operation and clear the input field
        //         return false; // Evitar el envío del formulario
        //     }
        // }

        // window.onload = function() {
        //     reiniciarCaptcha();
        //     const respuestaInput = document.getElementById('respuesta');
        //     respuestaInput.addEventListener('input', validarRespuesta); // Add event listener for input changes in the answer
        // };

        
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

    // captcha con JS //-----------------------------------------------

    let respuestaCorrecta;

        function generarOperacion() {
            const num1 = Math.floor(Math.random() * 10) + 1; // Número entero positivo entre 1 y 10
            const num2 = Math.floor(Math.random() * 10) + 1; // Número entero positivo entre 1 y 10
            const operaciones = ['+', '*', '-'];
            const operacion = operaciones[Math.floor(Math.random() * operaciones.length)];

            let resultado;
            switch (operacion) {
                case '+':
                    resultado = num1 + num2;
                    break;
                case '*':
                    resultado = num1 * num2;
                    break;
                case '-':
                    resultado = num1 - num2;
                    break;
            }

            respuestaCorrecta = resultado;
            return `${num1} ${operacion} ${num2}`;
        }

        function reiniciarCaptcha() {
            const pregunta = generarOperacion();
            document.getElementById('recaptcha').innerHTML = pregunta;
            document.getElementById('respuesta').value = ''; // Clear the input field
        }

        function validarRespuesta() {
            const respuestaUsuario = parseInt(document.getElementById('respuesta').value);
            const enviarButton = document.getElementById('enviar');
            enviarButton.disabled = isNaN(respuestaUsuario) || respuestaUsuario !== respuestaCorrecta;
            // document.getElementById('mensajeCaptcha').innerText = 'Por favor, ingresa una respuesta válida.';
        }

        // function validarFormulario() {
        //     const respuestaUsuario = parseInt(document.getElementById('respuesta').value);
        //     if (isNaN(respuestaUsuario)) {
        //         document.getElementById('mensajeCaptcha').innerText = 'Por favor, ingresa una respuesta válida.';
        //         return false;
        //     }

        //     if (respuestaUsuario === respuestaCorrecta) {
        //         document.getElementById('mensajeCaptcha').innerText = '';
        //         alert('Enviado');
        //         return true; // Permite el envío del formulario
        //     } else {
        //         document.getElementById('mensajeCaptcha').innerText = 'Captcha incorrecto.';
        //         reiniciarCaptcha(); // Generate a new operation and clear the input field
        //         return false; // Evitar el envío del formulario
        //     }
        // }

        window.onload = function() {
            reiniciarCaptcha();
            const respuestaInput = document.getElementById('respuesta');
            respuestaInput.addEventListener('input', validarRespuesta); // Add event listener for input changes in the answer
        };
  