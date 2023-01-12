
document.addEventListener('DOMContentLoaded', () => {

   const adressBtn = document.querySelectorAll('.info_panel')
   const allMap = document.querySelectorAll('.mapHidden')
   const pharmacyBlock = document.querySelector('.pharmacy_adress_block')
   const ourParmacyBtn = document.querySelector('#our_parmacy')
   let infoPanel = document.querySelectorAll('.info_panel')
   let greetingBlock = document.querySelector('.greating_block')
   let logoBtn = document.querySelector('.logo')
   let btn = document.querySelectorAll('.btn_header')
   let btnMenu = document.querySelector('.btn_header')


   // btn.forEach(btnItem => btnItem.addEventListener('click', ()=>{
   //    activOrDisable(btnItem)
   // }))
   // const activOrDisable = (btnItem) => {
   //    if(btnItem.style.background != 'rgb(147, 253, 149)') {
   //       btnItem.style.background = 'rgb(147, 253, 149)'
   //    } else if (btnItem.style.background == 'rgb(147, 253, 149)') {
   //       btnItem.style.background = 'rgba(94, 171, 96, 0.15)'
   //    }
   // }

   btn.forEach((btnItem, indexBtn) => btnItem.addEventListener('click', ()=>{
      activOrDisable(btnItem, indexBtn)
   }))
   const activOrDisable = (btnItem, indexBtn) => {
      // btn.forEach((item, index) => index != indexBtn ? item.classList.remove('btnActiv') : '')//вариант переключателя
      btn.forEach((item, index) => index != indexBtn && index != 0 ? item.classList.remove('btnActiv') : '')
      if(indexBtn === 0) {
         btnItem.classList.toggle('btnActiv')
      } else {
         btnItem.classList.add('btnActiv')
      }
      // indexBtn === 0 ? btnItem.classList.toggle('btnActiv') : '';
      // btnItem.classList.add('btnActiv')
   }

   logoBtn.addEventListener('click', () => {
      btn.forEach((item) => {
         return item.classList.remove('btnActiv'), 
         item.classList.remove('visible'), 
         item.classList.remove('smooth_menu')}
      )
      greetingBlock.classList.remove('mapHidden')
      pharmacyBlock.style.display = 'none'
      pharmacyBlock.style.opacity = 0
      infoPanel.forEach(
         function(item) {
            item.classList.remove('smooth')
      })
   })

   // Автоматический слайдер 8 влево 8 вправо
   let countSlideLeft = 1;
   let countSlideRight = 1;
   setInterval(()=>{
      if(countSlideLeft != 8) {
         rigtSlide()
         countSlideLeft++
      } else if(countSlideLeft===8 && countSlideRight!=8){
         leftSlide()
         countSlideRight++
      } else {
         countSlideLeft = 1
         countSlideRight = 1
      }
   }, 8000)

   // Автоматический слайдер 8 влево 8 вправо

   //Слайдер по клику.............................................................................................................
   const slides = document.querySelectorAll('.img_slidebar'); //выбрал все слайды
   const clickLeft = document.querySelector('.clickLeft'); //выбрал левое лого
   const clickRight = document.querySelector('.clickRight'); //выбрал правое лого

   let currentSlide = 0;
   const sliderNumber = slides.length - 1;//иначе будет +1 прокрутка из за 0 индекса

   const moveToSlide = function(slide) {
      slides.forEach((s, index) => (s.style.transform = `translateX(${(index - slide) * 100}%)`));
      //1 слайд = -100%, 2 слайд = 0%, 3 слайд = 100%, 4 слайд = 200%
   }
 
   moveToSlide(0);

   const rigtSlide = function() {
      if(currentSlide === sliderNumber) {
      currentSlide = 0;
      } else {
      currentSlide++;
      }
      moveToSlide(currentSlide);
   }
   
   const leftSlide = function() {
      if(currentSlide === 0) {
      currentSlide = sliderNumber;
      } else {
      currentSlide--;
      }
      moveToSlide(currentSlide);
   }

   clickLeft.addEventListener('click', ()=>{leftSlide(), countSlideRight!=8?countSlideRight++:countSlideRight=1}) //перемещение вплево
   clickRight.addEventListener('click', ()=>{rigtSlide(), countSlideLeft!=8?countSlideLeft++:countSlideLeft=1}) //перемещение вправо
   //Слайдер по клику.............................................................................................................
   const desktop = window.innerWidth
   // if


   //Имплементация меню
   btnMenu.onclick = () => {
      btn.forEach((item, index) => {
         if(index != 0) {
            item.classList.toggle('visible')
            setTimeout(()=>{
               item.classList.toggle('smooth_menu')
            },5)
         }
      })
   }

   ourParmacyBtn.onclick = () => {
      greetingBlock.classList.add('mapHidden') //убираю экран слайдера (или ставлю его toggle)
      // if(pharmacyBlock.style.display != 'block') {
      pharmacyBlock.style.display = 'block'
      setTimeout(()=>{
         pharmacyBlock.style.opacity = 1
         infoPanel.forEach(
            function(item) {
               item.classList.add('smooth')
            }
         )
      }, 100)
   //    } else {
   //       pharmacyBlock.style.display = 'none'
   //       pharmacyBlock.style.opacity = 0
   //       infoPanel.forEach(
   //          function(item) {
   //             item.classList.remove('smooth')
   //          }
   //       )
   //    }
   }

   const openInfoCard = (adressPanel, index) => {
      adressPanel.classList.toggle('info_panel__mod1')
      allMap[index].classList.toggle('mapHidden')
      adressPanel.scrollIntoView({
         behavior: 'smooth',
         block: 'center'
     });
   }

   adressBtn.forEach((adressPanel, index) => {adressPanel.addEventListener('click', ()=>{
      openInfoCard(adressPanel, index)
   })})

})




   // const wrapperBox = document.querySelector('.wrapper')


   // const netParmacy = [
   //    {
   //       nameParmacy: 'Аптека №16',
   //       adress: 'г. Екатеринбург, ул. Грибоедова, 25',
   //       tel: '+7 (343) 258-15-01',
   //       workTimeWorkDay: '08:00–20:00',
   //       workTimeWeekend: '10:00–17:00',
   //       head: 'Самарцева Людмила Витальевна',
   //       map: 'https://yandex.ru/map-widget/v1/-/CCUvMHd3KA'
   //    },
   //    {
   //       nameParmacy: 'Аптека №205',
   //       adress: 'г. Екатеринбург, мкр-н. Вторчермет, ул. Титова, 26',
   //       tel: '+7 (343) 297-13-52, +7 (343) 297-15-05, +7 (343) 297-14-41',
   //       workTimeWorkDay: '08:00–20:00',
   //       workTimeWeekend: '10:00–19:00',
   //       head: 'Зимановская Надежда Николаевна',
   //       map: 'https://yandex.ru/map-widget/v1/-/CCUvMXvK2D'
   //    },
   //    {
   //       nameParmacy: 'Аптека №231',
   //       adress: 'г. Екатеринбург, ул. Гагарина, 22(ул. Малышева, 113)',
   //       tel: '+7 (343) 374-14-04, +7 (343) 374-08-91, +7 (343) 374-38-18, +7 (343) 374-38-03, +7 (343) 374-14-10',
   //       workTimeWorkDay: '08:00–20:00',
   //       workTimeWeekend: '08:00–20:00 - 11:00–18:00',
   //       head: 'Климчева Валерия Владимировна',
   //       map: 'https://yandex.ru/map-widget/v1/-/CCUvMXwcKC'
   //    },
   //    {
   //       nameParmacy: 'Аптека №327',
   //       adress: 'г. Екатеринбург, мкр-н. Юго-Западный, ул. Академика Бардина, 34',
   //       tel: '+7 (343) 240-25-95',
   //       workTimeWorkDay: '08:00–20:00',
   //       workTimeWeekend: '09:00–20:00',
   //       head: 'Потапова Галина Витальевна',
   //       map: 'https://yandex.ru/map-widget/v1/-/CCUvQESe0B'
   //    },
   //    {
   //       nameParmacy: 'Аптека №421',
   //       adress: 'г. Екатеринбург, мкр-н. Втузгородок, ул. Коминтерна, 18',
   //       tel: '+7 (343) 374-41-97',
   //       workTimeWorkDay: 'Закрыто',
   //       workTimeWeekend: 'Закрыто',
   //       head: 'Орлова Евгения Васильевна',
   //       map: 'https://yandex.ru/map-widget/v1/-/CCUvQEtZKD'
   //    },
   //    {
   //       nameParmacy: 'Аптека №449',
   //       adress: 'г. Екатеринбург, мкр-н. Эльмаш, ул. Старых Большевиков, 75Б',
   //       tel: '+7 (343) 306-01-76, +7 (343) 306-01-73, +7 (343) 306-01-77',
   //       workTimeWorkDay: '08:00–20:00',
   //       workTimeWeekend: '10:00–18:00',
   //       head: 'Соколова Надежда Александровна',
   //       map: 'https://yandex.ru/map-widget/v1/-/CCUvQISTpA'
   //    }
   // ]

   // netParmacy.map((info) => {
   //    const infoPanel = `
   //    <div class="info_panel">
   //       <div class="adress">
   //          <h2>${info.nameParmacy}</h3>
   //          <h3>Адресс: ${info.adress}</h3>
   //          <h3>Время работы:</h2>
   //          <h3>пн-пт: ${info.workTimeWorkDay}</h3>
   //          <h3>сб-вс: ${info.workTimeWeekend}</h3>
   //          <h3>Телефон: ${info.tel}</h3>
   //          <h3>Телефон: ${info.head}</h3>
   //       </div>
   //       <div class="map">
   //          <iframe src=${info.map} frameBorderRadius="10px" frameBorder="0" width="100%" height="100%"></iframe>
   //       </div>
   //    </div>
   //    `
   //    wrapperBox.insertAdjacentHTML('beforeend', infoPanel)
   // })

      // let elem = ''
   // let countArr = 0
   // setInterval(()=>{
   //    if(countArr === 0) {
   //       elem = slidesArr[countArr]
   //       sliderBlock.insertAdjacentHTML('beforeend', elem)
   //       slidesArr.push(elem), 
   //       countArr++,
   //       console.log(countArr), 
   //       console.log(slidesArr)
   //    } else if(countArr === 1) {
   //       elem = slidesArr[countArr]
   //       sliderBlock.insertAdjacentHTML('beforeend', elem)
   //       slidesArr.push(elem), 
   //       countArr++,
   //       console.log(countArr),
   //       console.log(slidesArr)
   //    } else if(countArr === 2) {
   //       elem = slidesArr[countArr]
   //       sliderBlock.insertAdjacentHTML('beforeend', elem)
   //       slidesArr.push(elem), 
   //       countArr++,
   //       console.log(countArr), 
   //       console.log(slidesArr)
   //    }else if(countArr === 3) {
   //       elem = slidesArr[countArr]
   //       sliderBlock.insertAdjacentHTML('beforeend', elem)
   //       slidesArr.push(elem), 
   //       countArr = 0,
   //       slidesArr.splice(0, 4);
   //       console.log(countArr), 
   //       console.log(slidesArr)
   //    }
   // }, 2000)

   // let countSlide = 1
   // setInterval(()=>{
   //    if(countSlide === 1) {
   //       slide1.scrollIntoView({behavior: 'smooth'})
   //       countSlide++
   //    } else if(countSlide === 2) {
   //       slide2.scrollIntoView({behavior: 'smooth'})
   //       countSlide++
   //    } else if(countSlide === 3) {
   //       slide3.scrollIntoView({behavior: 'smooth'})
   //       countSlide++
   //    } else if(countSlide === 4) {
   //       slide4.scrollIntoView({behavior: 'smooth'})
   //       countSlide = 1
   //    }
   // }, 2000)

   // // setTimeout(()=>{
   // //    sliderCollection.remove(0, 4)
   // // }, 8100)

   
   // let slidesArr = [...allSlides];
   // console.log(slidesArr);
   // let elem = ''
   // let countArr = 1
   // setInterval(()=>{
   //    if(countArr === 1) {
   //       slide1.scrollIntoView({behavior: 'smooth'}), elem = slidesArr.shift(), slidesArr.push(elem), countArr++, console.log(slidesArr)
   //    } else if(countArr === 2) {
   //       slide2.scrollIntoView({behavior: 'smooth'}), elem = slidesArr.shift(), slidesArr.push(elem), countArr++, console.log(slidesArr)
   //    } else if(countArr === 3) {
   //       slide3.scrollIntoView({behavior: 'smooth'}), elem = slidesArr.shift(), slidesArr.push(elem), countArr++, console.log(slidesArr)
   //    }else if(countArr === 4) {
   //       slide4.scrollIntoView({behavior: 'smooth'}), elem = slidesArr.shift(), slidesArr.push(elem), countArr = 1, console.log(slidesArr)
   //    }
   // }, 3000)

   // let countSlide = 1;
   // setInterval(()=>{
   //    if (countSlide === 1) { slide1.scrollIntoView({behavior: 'smooth'}); countSlide++} 
   //    else if (countSlide === 2) {
   //       slide2.scrollIntoView({behavior: 'smooth'}); countSlide++
   //    }else if (countSlide === 3) {
   //       slide3.scrollIntoView({behavior: 'smooth'}); countSlide++
   //    }else if (countSlide === 4) {
   //       slide4.scrollIntoView({behavior: 'smooth'}); countSlide = 1
   //    }
   // },5000)



   // const ip1 = document.querySelector('#ip1')
   // const ip2 = document.querySelector('#ip2')
   // const ip3 = document.querySelector('#ip3')
   // const ip4 = document.querySelector('#ip4')
   // const ip5 = document.querySelector('#ip5')
   // const ip6 = document.querySelector('#ip6')
   // const map1 = document.querySelector('#map1')
   // const map2 = document.querySelector('#map2')
   // const map3 = document.querySelector('#map3')
   // const map4 = document.querySelector('#map4')
   // const map5 = document.querySelector('#map5')
   // const map6 = document.querySelector('#map6')
   // ip1.addEventListener('click', ()=>{
   //    ip1.classList.toggle('info_panel__mod1')
   //    map1.classList.toggle('mapHidden')
   //    ip1.scrollIntoView({
   //       behavior: 'smooth',
   //       block: 'center'
   //   });
   // })
   // ip2.addEventListener('click', ()=>{
   //    ip2.classList.toggle('info_panel__mod1')
   //    map2.classList.toggle('mapHidden')
   //    ip2.scrollIntoView({
   //       behavior: 'smooth'
   //   });
   // })
   // ip3.addEventListener('click', ()=>{
   //    ip3.classList.toggle('info_panel__mod1')
   //    map3.classList.toggle('mapHidden')
   //    ip3.scrollIntoView({
   //       behavior: 'smooth'
   //   });
   // })
   // ip4.addEventListener('click', ()=>{
   //    ip4.classList.toggle('info_panel__mod1')
   //    map4.classList.toggle('mapHidden')
   //    ip4.scrollIntoView({
   //       behavior: 'smooth'
   //   });
   // })
   // ip5.addEventListener('click', ()=>{
   //    ip5.classList.toggle('info_panel__mod1')
   //    map5.classList.toggle('mapHidden')
   //    ip5.scrollIntoView({
   //       behavior: 'smooth'
   //   });
   // })
   // ip6.addEventListener('click', ()=>{
   //    ip6.classList.toggle('info_panel__mod1')
   //    map6.classList.toggle('mapHidden')
   //    ip6.scrollIntoView({
   //       behavior: 'smooth'
   //   });
   // })