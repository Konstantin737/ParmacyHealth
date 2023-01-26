
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
   const form = document.querySelector('.form')
   const feedbackModal = document.querySelector('.feedback_modal')
   const feedbackBtn = document.querySelector('.feedback_btn')
   const overlay = document.querySelector('.overlay')
   const feedbackMessage = document.querySelector('.feedback_message')
   const loading = document.querySelector('.loading')
   const loadingCube = document.querySelectorAll('.loading_cube')

   //Имплементация загрузки карт во фреймы
   const mapFrame = ['https://yandex.ru/map-widget/v1/-/CCUvMHd3KA', 'https://yandex.ru/map-widget/v1/-/CCUvMXvK2D', 'https://yandex.ru/map-widget/v1/-/CCUvMXwcKC', 'https://yandex.ru/map-widget/v1/-/CCUvQESe0B', 'https://yandex.ru/map-widget/v1/-/CCUvQEtZKD', 'https://yandex.ru/map-widget/v1/-/CCUvQISTpA', 'https://yandex.ru/map-widget/v1/?ll=60.606220%2C56.821422&mode=search&oid=1206284242&ol=biz&sctx=ZAAAAAgBEAAaKAoSCd2ZCYZzL05AEWEYsOQqbkxAEhIJtkjajT7mkz8RkBK7trdbcj8iBgABAgMEBSgKOABANkgBYitwcmljZXNfc25pcHBldHNfcmFua2luZ19tb2RlbF90aHJlc2hvbGQ9MC43YiFhZGRfc25pcHBldD10b3BvbnltX2Rpc2NvdmVyeS8xLnhiGnJhbmtpbmdfZm9ybXVsYT1sMl9kYzg1NDY1YilyZWxldl9pcnJlbF9maWx0ZXI9MS4wOmlycmVsX2RjMTEzODExX2V4cGJCcmVhcnI9c2NoZW1lX0xvY2FsL0dlby9MaXN0RGlzY292ZXJ5L0VuYWJsZURpc2NvdmVyeVRleHRSZXF1ZXN0cz0xYjpyZWFycj1zY2hlbWVfTG9jYWwvR2VvL0xpc3REaXNjb3ZlcnkvRW5hYmxlRW1wdHlSZXF1ZXN0cz0xYjpyZWFycj1zY2hlbWVfTG9jYWwvR2VvL0xpc3REaXNjb3ZlcnkvRW5hYmxlQ29tbW9uUGljTWVudT0xYjVyZWFycj1zY2hlbWVfTG9jYWwvR2VvL0xpc3REaXNjb3ZlcnkvRW5hYmxlUmVxdWVzdHM9MWIwcmVhcnI9c2NoZW1lX0xvY2FsL0dlby9Bc2tEaXNjb3ZlcnlGb3JUb3Bvbnltcz0xYjVyZWFycj1zY2hlbWVfTG9jYWwvR2VvL1Bvc3RmaWx0ZXIvSXJyZWxUaHJlc2hvbGQ9MC41NWI1cmVhcnI9c2NoZW1lX0xvY2FsL0dlby9MaXN0RGlzY292ZXJ5L0VuYWJsZVZlcnRpY2FsPTFiJ3JlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vUHJpY2VzL0VuYWJsZWQ9MWIacmFua2luZ19mb3JtdWxhPWwyX2RjODU0NjVqAnJ1nQHNzEw9oAEAqAEAvQFHVNGrwgEL0t%2BZvwSQ9cHCoQTqAQDyAQD4AQCCAibQodCw0L%2FQtdGA0L7QsiDQv9C10YAuLCAzINCw0L%2FRgtC10LrQsIoCAJICAjU0mgIMZGVza3RvcC1tYXBz&sll=60.606220%2C56.821422&sspn=0.022323%2C0.005154&text=%D0%A1%D0%B0%D0%BF%D0%B5%D1%80%D0%BE%D0%B2%20%D0%BF%D0%B5%D1%80.%2C%203%20%D0%B0%D0%BF%D1%82%D0%B5%D0%BA%D0%B0&utm_source=share&z=17', 'https://yandex.ru/map-widget/v1/?ll=60.292056%2C56.862672&mode=search&oid=1063212606&ol=biz&sctx=ZAAAAAgCEAAaKAoSCX4CKEaWIE5AEYUoX9BCbExAEhIJSQ7Y1eQp8D8RKJ6zBYTWzT8iBgABAgMEBSgKOABAmldIAWIrcHJpY2VzX3NuaXBwZXRzX3JhbmtpbmdfbW9kZWxfdGhyZXNob2xkPTAuN2IhYWRkX3NuaXBwZXQ9dG9wb255bV9kaXNjb3ZlcnkvMS54YilyZWxldl9pcnJlbF9maWx0ZXI9MS4wOmlycmVsX2RjMTEzODExX2V4cGJCcmVhcnI9c2NoZW1lX0xvY2FsL0dlby9MaXN0RGlzY292ZXJ5L0VuYWJsZURpc2NvdmVyeVRleHRSZXF1ZXN0cz0xYjpyZWFycj1zY2hlbWVfTG9jYWwvR2VvL0xpc3REaXNjb3ZlcnkvRW5hYmxlRW1wdHlSZXF1ZXN0cz0xYjpyZWFycj1zY2hlbWVfTG9jYWwvR2VvL0xpc3REaXNjb3ZlcnkvRW5hYmxlQ29tbW9uUGljTWVudT0xYjVyZWFycj1zY2hlbWVfTG9jYWwvR2VvL0xpc3REaXNjb3ZlcnkvRW5hYmxlUmVxdWVzdHM9MWIwcmVhcnI9c2NoZW1lX0xvY2FsL0dlby9Bc2tEaXNjb3ZlcnlGb3JUb3Bvbnltcz0xYjVyZWFycj1zY2hlbWVfTG9jYWwvR2VvL1Bvc3RmaWx0ZXIvSXJyZWxUaHJlc2hvbGQ9MC41NWI1cmVhcnI9c2NoZW1lX0xvY2FsL0dlby9MaXN0RGlzY292ZXJ5L0VuYWJsZVZlcnRpY2FsPTFiJ3JlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vUHJpY2VzL0VuYWJsZWQ9MWIacmFua2luZ19mb3JtdWxhPWwyX2RjODU0NjVqAnJ1nQHNzEw9oAEAqAEAvQFiH5YVwgEFvqz9%2BgPqAQDyAQD4AQCCAjbRgdC10LLQtdGA0LrQsCDQvdCw0LHQtdGA0LXQttC90YvQuSA5INC30LTQvtGA0L7QstGM0LWKAm8xODQxMDYxMDgkMTg0MTA1OTMyJDE4NDEwNjEwMCQxODQxMDYxMzIkMTg0MTA2MDE0JDUzNDM3MjYwNTU5JDE4NDEwNTk4NiQxODQxMDU5NTgkMTg0MTA1OTU2JDE4NDEwNjExNiQxODQxMDYxMzCSAgYxMjExMTCaAgxkZXNrdG9wLW1hcHM%3D&sll=60.292056%2C56.862672&sspn=0.031570%2C0.007281&text=%D1%81%D0%B5%D0%B2%D0%B5%D1%80%D0%BA%D0%B0%20%D0%BD%D0%B0%D0%B1%D0%B5%D1%80%D0%B5%D0%B6%D0%BD%D1%8B%D0%B9%209%20%D0%B7%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D1%8C%D0%B5&utm_source=share&z=16.6', 'https://yandex.ru/map-widget/v1/-/CCUvMXwcKC'];


   //Функция антмации загрузки
   let count = 0
   function load () {
      let animate = setInterval(()=>{
         if(count<=4) {
            overlay.classList.add('visible');
            loading.classList.add('visible_loading')
            loadingCube[count].classList.add('loading_cube__animate')
         count++} else {
            clearInterval(animate);
            loading.classList.remove('visible_loading');
            loadingCube.forEach(item => item.classList.remove('loading_cube__animate'));
            count = 0;
      }},200)
   }

   //Функция загрузки ссылок карт для фреймов
   const enterLinkFrame = (index) => {
      frameMap[index].src = mapFrame[index];
   }
   infoPanel.forEach((item, index) => {
      item.addEventListener('click', ()=>{
         enterLinkFrame(index)
      })
   })

   //Функция сворачивания меню и всех панелек с адресами для всех кнопок
   const hiddenMenuAndInfoPanel = (arrayBtn) => {
      arrayBtn.forEach((item) => {
         item.classList.remove('btnActiv'), 
         item.classList.remove('visible'), 
         item.classList.remove('smooth_menu')}
      )
      infoPanel.forEach(
         function(item) {
            item.classList.remove('smooth')
         }
      )
   }

   //Имплементация нажатия на любую кнопку меню
   btn.forEach((btnItem, indexBtn, arrayBtn) => btnItem.addEventListener('click', ()=>{

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
         biography.classList.remove('visible-flex', 'smooth')
         arrayBtn.forEach((item) => {
            item.classList.remove('btnActiv'), 
            item.classList.remove('visible'), 
            item.classList.remove('smooth_menu')}
         )
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
         biography.classList.remove('visible-flex', 'smooth')
         hiddenMenuAndInfoPanel(arrayBtn)
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
         biography.classList.remove('visible-flex', 'smooth')
         hiddenMenuAndInfoPanel(arrayBtn)
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
         biography.classList.remove('visible-flex', 'smooth')
         hiddenMenuAndInfoPanel(arrayBtn)
      }
      //Имплементация кнопки Наша история
      if (indexBtn === 5) {
         biography.classList.add('visible-flex')
         setTimeout(()=>{
            biography.classList.add('smooth')
         }, 100)
         greetingBlock.classList.add('hidden')
         pharmacyBlock.classList.add('novisible')
         feetback.classList.remove('visible', 'smooth')
         jobOpenings.classList.remove('visible', 'smooth')
         documentation.classList.remove('visible', 'smooth')
         hiddenMenuAndInfoPanel(arrayBtn)
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

   //Отправка файла-----------------------------------

   //Получаем input #formFile в переменную
   const formFile = document.querySelector('#formFile')

   //Получаем div #formPreview в переменную
   const formPreview = document.querySelector('#formPreview')

   //Слушаем изменения в input #formFile
   formFile.addEventListener('change', () => {
      uploadFile(formFile.files[0])
   })

   // Функция включения оверлея и модального окна
   function showModalWindow() {
      feedbackModal.classList.add('visible-flex')
      overlay.classList.add('visible')
   }

   //Создаем функцию uploadFile
   function uploadFile(file) {
      console.log(file);
      //проверка типа файла
      if(!['image/jpg', 'image/jpeg', 'image/png', 'application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/plain', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.ms-publisher','application/msword'].includes(file.type)) {
         showModalWindow()
         feedbackMessage.textContent = `Ваш файл не подходит для отправки. Разрешены файлы *.jpg, *.jpeg, *.png, *.pdf, *.doc, *.docx, *.xls, *.xlsx, *.txt, *.pptx, *.ppsx, *.pub`
         formFile.value = ''
         return
      }

      //проверка размера файла
      if(file.size > 2 * 1024 * 1024) {
         showModalWindow()
         feedbackMessage.textContent = `Файл должен быть не более 2Мб`
         return
      }

      //Проверки пройдены, выводим изображение в качестве превью
      let reader = new FileReader();
      reader.onload = function(e) {
         if(e.target.result.includes('image')) {
         formPreview.innerHTML = `<img style='width: 100%; margin-bottom: 20px;' src='${e.target.result}'>`
         } else {
            formPreview.innerHTML = `<img style='width: 100%; margin-bottom: 20px;' src='./img/documentation2.png'>`
         }
      }
      reader.onerror = function(e) {
         load ()
         showModalWindow()
         feedbackMessage.textContent = `Ошибка. Пожалуйста, попробуйте еще раз.`
      }
      reader.readAsDataURL(file);
   }
   //------------------------------------------------------

   //Отправка формы обратной связи
   form.addEventListener('submit', formCheck)
   async function formCheck(e) {
      e.preventDefault();

      load ()
      const data = new FormData(form);

      let response = await fetch('send_mail.php', {
         body: data,
         method: 'POST'
      })
      
      if(response.ok) {
         let result = await response.json()
         setTimeout(()=>{
            feedbackModal.classList.add('visible-flex');
            feedbackMessage.textContent = `${result.message}`;
         },1200);
         form.reset()
         formPreview.innerHTML = ''
      } else {
         setTimeout(()=>{
            feedbackModal.classList.add('visible-flex');
            feedbackMessage.textContent = `Ваше сообщение не отправлено. Код ошибки: ${response.status}`;
         },1200)
         form.reset()
         formPreview.innerHTML = ''
      }
   }
   //------------------------------------------------------

   //Закрыть модальное окно отправки формы кнопкой
   [feedbackBtn, overlay].forEach(item => item.addEventListener('click', () => {
      feedbackModal.classList.remove('visible-flex')
      overlay.classList.remove('visible')
   }))

   //Загрузка даты в подвал(footer)
   let year = document.querySelector("#year")
   $(document).ready(function () {
   year.innerText = `2004 - ${new Date().getFullYear()}`
   })

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
             1480:{
                 items:1
             },
             3000:{
                 items:1
             }},
      });
      $(".js-owl-carousel-2").owlCarousel({
         items:1,
         autoplay: true,
         autoplayHoverPause: true,
         autoplayTimeout: 16000,
         autoplaySpeed: 2000,
         loop:true,
      });
   });
})