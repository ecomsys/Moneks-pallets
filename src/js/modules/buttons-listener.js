function buttonsListener() {
  // #popup #popupClose - для кликов, 
  // .popup--show - для отображения
  // .popup-title .popup-content - для вставки HTML


  let popButtons = document.querySelectorAll('[data-popupBtn]')

  let buttonsContent = {
    callback: '<p>Поместите код для ПЕРЕЗВОНИТЕ либо просто переадресация на другой ресурс !</p><br/><p class="grey">Неизвестно</p>',
    product: '<p>Поместите форму для ОФОРМЛЕНИЕ ЗАКАЗА !</p><br/><p class="grey">Неизвестно</p>',
    slideLink: '<p>Вместо модального окна будет переадрессация на другой сайт !</p><br/><p class="grey">Неизвестно</p>',
  }

  let overlay = document.querySelector('.service-overlay')
  let popWindow = document.querySelector('#popup')
  let popTitle = popWindow.querySelector('.popup-title')
  let popContent = popWindow.querySelector('.popup-content')

  popButtons.forEach(btn => {
    let type = btn.getAttribute('data-popupBtn')
    let typeContent = buttonsContent[type]
    btn.addEventListener('click', (event) => popupFunc(typeContent))
  })

  popClose()
  function popClose() {
    let popClose = popWindow.querySelector('#popupClose')
    popClose.addEventListener('click', (e) => {
      popWindow.classList.remove('popup--show')
      popTitle.innerHTML = '';
      popContent.innerHTML = '';
      overlay.style.left = -100 + '%';
      overlay.style.background = 'rgb(0,0,0,0)';
      e.stopPropagation()
      e.preventDefault()
    })
  }

  function popupFunc(contentHtml) {
    if (popWindow) {
      popTitle.innerHTML = '<h2>' + event.currentTarget.innerHTML + '</h2>'
      popContent.innerHTML = contentHtml
      popWindow.classList.add('popup--show')
      overlay.style.left = 0;
      overlay.style.background = 'rgb(0,0,0,0.3)';
    } else {
      console.log('Ошибка, модального окна не существует ! ');
      return;
    }
  }
}
export default buttonsListener