// -------------------------------------------- for main.js -----------------------------------------------------
//
// import {ImgResponsive} from './myJsClasses/wl-img-responsive.js'
//
// new ImgResponsive({
//   delay: 200,
// }).init();
//
// ------------------------------------------ SCSS --------------------------------------------------------------
//
// [attitude-img]{
// 	width: 100%;	
// 	height: auto;
// 	object-fit: cover;
// }
//
// ----------------------------------------------HTML ------------------------------------------------------------
// аттрибут [attitude-img="0.4"] где 0.4 - отношение высоты изображения к его длине
// всё это нужно для адаптивности изображений любого размера в нужный по ширине и высоте, без медизапросов
//
// <img attitude-img="0.4" src="../../images/image-1" alt="image 1"></img>
//
export class ImgResponsive {
    constructor(options) {
        this.delay = options.delay ? options.delay : 100  ;
        this.attitude = options.attitude
        this.attitudeEl = options.element
        this.listener();     
    }
    listener() {
        let timeout        
        let pause = this.delay        
        let attitude = this.attitude
        let el = this.attitudeEl
        
        resize()
        window.addEventListener('resize', resize)               
        
        function resize() {           
            let imgs = document.querySelectorAll(el)
            clearTimeout(timeout);            
            timeout = setTimeout(() => {                   
                imgs.forEach(image =>{                    
                    let imgWidth = image.offsetWidth                  
                    image.style.height = imgWidth * attitude
                })           
            }, pause)
        }
    }
    
}