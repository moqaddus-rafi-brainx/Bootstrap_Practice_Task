
//Zoom On Hover
      const container = document.getElementById('zoomImageContainer');
      const image = container.querySelector('img');
    
      container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        const percentX = (offsetX / rect.width) * 100;
        const percentY = (offsetY / rect.height) * 100;
    
        image.style.transformOrigin = `${percentX}% ${percentY}%`;
        image.style.transform = "scale(2)";
      });
    
      container.addEventListener('mouseleave', () => {
        image.style.transform = "scale(1)";
        image.style.transformOrigin = "center center";
      });

   //Pop over

    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(el => new bootstrap.Popover(el));


//Changing Button Color on Click

function toggleButtonState(activeId, inactiveId) {
const activeBtn = document.getElementById(activeId);
const inactiveBtn = document.getElementById(inactiveId);
    
activeBtn.classList.add('background-blue');
activeBtn.classList.remove('color-blue');
activeBtn.classList.add('text-white');
activeBtn.classList.add('fw-semibold')
inactiveBtn.classList.remove('background-blue');
inactiveBtn.classList.remove('text-white');
inactiveBtn.classList.add('border-blue');
inactiveBtn.classList.add('color-blue');
inactiveBtn.classList.remove('fw-semibold')
}

//Subscription and Puchase Button
//Changing card set accordingly
        function showCards(set) {
          const set1 = document.getElementById('cardSet1');
          const set2 = document.getElementById('cardSet2');
      
          if (set === 'set1') {
            set1.classList.remove('d-none');
            set2.classList.add('d-none');
          } else {
            set2.classList.remove('d-none');
            set1.classList.add('d-none');
          }
        }


  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 5,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 5
      },
      576: {
        slidesPerView: 5
      },
      320: {
        slidesPerView: 5
      }
    }
  });

       
    