'use strict';

// ООП ES6
class SliderCarousel {
	constructor({
		main,
		wrap,
		btns,
		next,
		prev,
		infinity = false,
		position = 0,
		slidesToShow = 3,
		responsive = []
		}){ // конструктор задает свойства для нового создаваемого объекта из этого класса (зададим свойства, которые будет получать объект)
		if ( !main || !wrap) { // проверяем на наличие необходимых элементов
			console.warn('slider-carusel: Необходимо два свойства "main" и "wrap"! ');
		}
		this.main = document.querySelector(main);
		this.wrap = document.querySelector(wrap);
		this.btns = document.querySelector(btns);
		this.slides = document.querySelector(wrap).children;
		this.next = document.querySelector(next);
		this.prev = document.querySelector(prev);
		this.slidesToShow = slidesToShow; // сколько нужно отображать слайдов
		this.options = {
			position, // свойство, которое отслеживает положение слайдера
			infinity,
			widthSlide: Math.floor(100 / this.slidesToShow), // свойство, которое вычисляет ширину слайда
			maxPosition: this.slides.length - this.slidesToShow
		};
		this.responsive = responsive;
	}

	init() { // главный метод запускающий слайдер
		this.addGloClass()
		this.addStyle();

		if (this.prev && this.next) 
			this.controlSlider();
			else {
				this.addArrow();
				this.controlSlider();
			}
		if (this.responsive)
			this.responseInit();
	}
	addGloClass() { // метод, который добавляет свои классы
		this.main.classList.add('glo-slider');
		this.wrap.classList.add('glo-slider__wrap');
		for (const item of this.slides) {
			item.classList.add('glo-slider__item');
		}
	}
	addStyle() { // метод, который добавляет свои стили к классам из метода addGlobalClass()
		let style = document.getElementById('sliderCarusel-style');
		if (!style) {
			style = document.createElement('style');
			style.id = 'sliderCarusel-style';
		}
		style.textContent = `
			.glo-slider {
				overflow: hidden !important;
			}
			.glo-slider__wrap {
				display: flex !important;
				transition: transform 0.5s !important;
				will-change: transform !important;
			}
			.glo-slider__item {
				display: flex !important;
				align-items: center;
				justify-content: center;
				flex: 0 0 ${this.options.widthSlide}% !important;
				margin: auto !important;
			}
		`;
		document.head.appendChild(style);
	}
	controlSlider() { // метод выполняется, если пользователь передал свои кнопки
		this.prev.addEventListener('click', this.prevSlider.bind(this));
		this.next.addEventListener('click', this.nextSlider.bind(this));
	}

	prevSlider() {
		if (this.options.infinity || this.options.position > 0) {
			--this.options.position;
			console.log(this.options.position);
			if (this.options.position < 0)
				this.options.position = this.options.maxPosition;
			this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
		}
	}

	nextSlider() {
		if (this.options.infinity || this.options.position < this.options.maxPosition) {
			console.log(this.slides);
			++this.options.position;
			console.log(this.options.position);
			// здесь нужно как-то организовать перемещение dom-elements
			if (this.options.position > this.options.maxPosition) {
				// console.log('max = '+ this.options.maxPosition); // отладка
				this.options.position = 0; // это потом нужно будет убрать
				// const maxRightSlide = this.slidesToShow + this.options.position; // порядковый номер, крайнего правого
				// // след. слайда
				// console.log(this.slides[maxRightSlide]);
				// console.log('new 0 =' + this.slides[0]);
			}
			this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
		}
	}


	addArrow() { // метод, который добавляет свои стрелочки по дефолту
		this.prev = document.createElement('button');
		this.next = document.createElement('button');
		this.prev.className = 'glo-slider__prev';
		this.next.className = 'glo-slider__next';
		this.btns.appendChild(this.prev);
		this.btns.appendChild(this.next);

		const style = document.createElement('style');
		style.textContent = `
			.glo-slider__prev,
			.glo-slider__next {
				margin: 50px 10px 0 10px;
				border: 20px solid transparent;
				background: transparent;
			}
			.glo-slider__next {
				border-left-color: #80bf44;
			}
			.glo-slider__prev {
				border-right-color: #80bf44;
			}
			.glo-slider__prev:hover,
			.glo-slider__next:hover,
			.glo-slider__prev:focus,
			.glo-slider__next:focus {
				background: transparent;
				outline: transparent;
			}
			.glo-slider__prev:hover,
			.glo-slider__prev:focus{
				border-right-color: #70ac36;
			}
			.glo-slider__next:hover,
			.glo-slider__next:focus{
				border-left-color: #70ac36;
			}
		`;

		document.head.appendChild(style);
	}
	responseInit() { // функ. которая проверяет ширину браузера на данный момент
		const slidesToShowDefault = this.slidesToShow;
		const allRespone = this.responsive.map(item => item.breakpoint);
		const maxResponse = Math.max(... allRespone);

		const checkResponse = () => {
			const widthWindow = document.documentElement.clientWidth;
			const reSize = () => { // функция, которая переписывает размер слайда, а затем вызывает addStyle()
				// для принятия нового размера
				this.options.widthSlide = Math.floor(100 / this.slidesToShow);
				this.addStyle();
			}
			if (widthWindow < maxResponse) {
				for (let i = 0; i < allRespone.length; i++) {
					if (widthWindow < allRespone[i]) {
						this.slidesToShow = this.responsive[i].slideToShow;
						reSize();
					}
				}
			} else {
				this.slidesToShow = slidesToShowDefault;
				reSize();
			}
		};

		checkResponse();

		window.addEventListener('resize', checkResponse);
	}	
}