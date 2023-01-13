
document.addEventListener('DOMContentLoaded', () => {

   const adressBtn = document.querySelectorAll('.info_panel')
   const allMap = document.querySelectorAll('.hidden')
   const pharmacyBlock = document.querySelector('.pharmacy_adress_block')
   const infoPanel = document.querySelectorAll('.info_panel')
   const greetingBlock = document.querySelector('.greating_block')
   const logoBtn = document.querySelector('.logo')
   const btn = document.querySelectorAll('.btn_header')
   const feetback = document.querySelector('.feedback')
   const jobOpenings = document.querySelector('.job_openings')
   const documentation = document.querySelector('.documentation')
   const biography = document.querySelector('.biography')
   const frameMap = document.querySelectorAll('.frameMap')
   

   //Имплементация загрузки карт во фреймы
   const mapFrame = ['https://yandex.ru/map-widget/v1/-/CCUvMHd3KA', 'https://yandex.ru/map-widget/v1/-/CCUvMXvK2D', 'https://yandex.ru/map-widget/v1/-/CCUvMXwcKC', 'https://yandex.ru/map-widget/v1/-/CCUvQESe0B', 'https://yandex.ru/map-widget/v1/-/CCUvQEtZKD', 'https://yandex.ru/map-widget/v1/-/CCUvQISTpA'];

   const enterLinkFrame = (index) => {
      frameMap[index].src = mapFrame[index];
   }

   infoPanel.forEach((item, index) => {
      item.addEventListener('click', ()=>{
         enterLinkFrame(index)
      })
   })

   //Имплементация нажатия на любую кнопку меню
   btn.forEach((btnItem, indexBtn) => btnItem.addEventListener('click', ()=>{
      //Имплементация кнопки МЕНЮ(открыть закрыть)
      if(indexBtn === 0) {
         btn.forEach((btnItem, indexBtn) => {
            if(indexBtn != 0) {
               btnItem.classList.toggle('visible')
               setTimeout(()=>{
                  btnItem.classList.toggle('smooth_menu')
               },5)
            }
         })
      }
      //Имплементация кнопки НАШИ АПТЕКИ
      if (indexBtn === 1) {
         greetingBlock.classList.add('hidden') //убираю экран слайдера (или ставлю его toggle)
         pharmacyBlock.classList.remove('novisible')
         feetback.classList.remove('visible', 'smooth')
         jobOpenings.classList.remove('visible', 'smooth')
         documentation.classList.remove('visible', 'smooth')
         biography.classList.remove('visible', 'smooth')
         setTimeout(()=>{
            pharmacyBlock.style.opacity = 1
            infoPanel.forEach(
               function(item) {
                  item.classList.add('smooth')
               }
            )
         }, 100)
      }
      //Имплементация кнопки ОБРАТНАЯ СВЯЗЬ
      if (indexBtn === 2) {
         feetback.classList.add('visible')
         setTimeout(()=>{
            feetback.classList.add('smooth')
         }, 100)
         greetingBlock.classList.add('hidden')
         pharmacyBlock.classList.add('novisible')
         jobOpenings.classList.remove('visible', 'smooth')
         documentation.classList.remove('visible', 'smooth')
         biography.classList.remove('visible', 'smooth')
         infoPanel.forEach(
            function(item) {
               item.classList.remove('smooth')
            }
         )
      }
      //Имплементация кнопки ВАКАНСИИ
      if (indexBtn === 3) {
         jobOpenings.classList.add('visible')
         setTimeout(()=>{
            jobOpenings.classList.add('smooth')
         }, 100)
         greetingBlock.classList.add('hidden')
         pharmacyBlock.classList.add('novisible')
         feetback.classList.remove('visible', 'smooth')
         documentation.classList.remove('visible', 'smooth')
         biography.classList.remove('visible', 'smooth')
         infoPanel.forEach(
            function(item) {
               item.classList.remove('smooth')
            }
         )
      }
      //Имплементация кнопки ДОКУМЕНТАЦИЯ
      if (indexBtn === 4) {
         documentation.classList.add('visible')
         setTimeout(()=>{
            documentation.classList.add('smooth')
         }, 100)
         greetingBlock.classList.add('hidden')
         pharmacyBlock.classList.add('novisible')
         feetback.classList.remove('visible', 'smooth')
         jobOpenings.classList.remove('visible', 'smooth')
         biography.classList.remove('visible', 'smooth')
         infoPanel.forEach(
            function(item) {
               item.classList.remove('smooth')
            }
         )
      }
      //Имплементация кнопки БИОГРАФИЯ
      if (indexBtn === 5) {
         biography.classList.add('visible')
         setTimeout(()=>{
            biography.classList.add('smooth')
         }, 100)
         greetingBlock.classList.add('hidden')
         pharmacyBlock.classList.add('novisible')
         feetback.classList.remove('visible', 'smooth')
         jobOpenings.classList.remove('visible', 'smooth')
         documentation.classList.remove('visible', 'smooth')
         infoPanel.forEach(
            function(item) {
               item.classList.remove('smooth')
            }
         )
      }

      activOrDisable(btnItem, indexBtn)//функция выделения активной клавиши
   }))


   const activOrDisable = (btnItem, indexBtn) => {
      btn.forEach((item, index) => index != indexBtn && index != 0 ? item.classList.remove('btnActiv') : '')
      if(indexBtn === 0) {
         btnItem.classList.toggle('btnActiv')
      } else {
         btnItem.classList.add('btnActiv')
      }
   }

   logoBtn.addEventListener('click', () => {
      btn.forEach((item) => {
         item.classList.remove('btnActiv'), 
         item.classList.remove('visible'), 
         item.classList.remove('smooth_menu')}
      )
      greetingBlock.classList.remove('hidden')
      pharmacyBlock.classList.add('novisible')
      feetback.classList.remove('visible', 'smooth')
      jobOpenings.classList.remove('visible', 'smooth')
      documentation.classList.remove('visible', 'smooth')
      biography.classList.remove('visible', 'smooth')
      pharmacyBlock.style.opacity = 0
      infoPanel.forEach(
         function(item) {
            item.classList.remove('smooth')
      })
   })

   const openInfoCard = (adressPanel, index) => {
      adressPanel.classList.toggle('info_panel__mod1')
      allMap[index].classList.toggle('hidden')
      adressPanel.scrollIntoView({
         behavior: 'smooth',
         block: 'center'
     });
   }

   adressBtn.forEach((adressPanel, index) => {adressPanel.addEventListener('click', ()=>{
      openInfoCard(adressPanel, index)
   })})

   //Импелементация карусели со свайпом
   $(document).ready(function(){
      $(".js-owl-carousel-1").owlCarousel({
         items:1,//количество видимых элементов
         autoplay: true,
         // autoHeight:true, //авто выравнивание по высоте
         // autoWidth:true, //авто выравнивание по ширине
         autoplayTimeout: 12000, //скорость замирания слайда
         autoplaySpeed: 4000, //скорость перелистывания слайда слайда
         autoplayHoverPause: true, //остановка слайда при наведении мыши
         loop:true, //закольцевать картинки
         margin:20,
         // nav:true,
         responsive:{ //количество элементов показываемых на определенной ширине поля
             0:{
                 items:1
             },
             1530:{
                 items:2
             },
             3000:{
                 items:3
             }},
      });
      $(".js-owl-carousel-2").owlCarousel({
         items:1,
         autoplay: true,
         autoplayHoverPause: true,
         autoplayTimeout: 8000,
         autoplaySpeed: 4000,
         loop:true,
      });
   });
})
