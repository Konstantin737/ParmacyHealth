
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

   //Имплементация загрузки карт во фреймы
   const mapFrame = ['https://yandex.ru/map-widget/v1/-/CCUvMHd3KA', 'https://yandex.ru/map-widget/v1/-/CCUvMXvK2D', 'https://yandex.ru/map-widget/v1/-/CCUvMXwcKC', 'https://yandex.ru/map-widget/v1/-/CCUvQESe0B', 'https://yandex.ru/map-widget/v1/-/CCUvQEtZKD', 'https://yandex.ru/map-widget/v1/-/CCUvQISTpA'];

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

   //Создаем функцию uploadFile
   function uploadFile(file) {
      //проверка типа файла
      if(!['image/jpg', 'image/jpeg', 'image/png', 'application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/plain', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.ms-publisher'].includes(file.type)) {
         feedbackModal.classList.add('visible-flex')
         overlay.classList.add('visible')
         feedbackMessage.textContent = `Ваш файл не подходит для отправки. Разрешены файлы только с определенными расширениями`
         formFile.value = ''
         return
      }

      //проверка размера файла
      if(file.size > 2 * 1024 * 1024) {
         feedbackModal.classList.add('visible-flex')
         overlay.classList.add('visible')
         feedbackMessage.textContent = `Файл должен быть не более 2Мб`
         return
      }

      //Проверки пройдены, выводим изображение в качестве превью
      let reader = new FileReader();
      reader.onload = function(e) {
         if(e.target.result.includes('image')) {
         formPreview.innerHTML = `<img style='width: 10%; margin-bottom: 20px;' src='${e.target.result}'>`
         } else {
            formPreview.innerHTML = `<img style='width: 10%; margin-bottom: 20px;' src='./img/documentation2.png'>`
         }
      }
      reader.onerror = function(e) {
         feedbackModal.classList.add('visible-flex')
         overlay.classList.add('visible')
         feedbackMessage.textContent = `Ошибка. Пожалуйста, попробуйте еще раз.`
      }
      reader.readAsDataURL(file);
   }
   //------------------------------------------------------

   //Отправка формы обратной связи
   form.addEventListener('submit', formCheck)
   async function formCheck(e) {
      e.preventDefault();

      const data = new FormData(form);
      console.log(data);

      let response = await fetch('send_mail.php', {
         body: data,
         method: 'POST'
      })

      if(response.ok) {
         let result = await response.json()
         feedbackModal.classList.add('visible-flex')
         overlay.classList.add('visible')
         feedbackMessage.textContent = `${result.message}`
         form.reset()
         formPreview.innerHTML = ''
      } else {
         feedbackModal.classList.add('visible-flex')
         overlay.classList.add('visible')
         feedbackMessage.textContent = `Ваше сообщение не отправлено. Код ошибки: ${response.status}`
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
   year.innerText = new Date().getFullYear()
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
         autoplayTimeout: 8000,
         autoplaySpeed: 2000,
         loop:true,
      });
   });
})