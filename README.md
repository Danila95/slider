# slider-for-profkom
Слайдер для профкома ТПУ

Данный слайдер усовершенствован на основе другого слайдера, который находится <a href="https://github.com/Danila95/plagin-slider-carousel">здесь</a> 
- Это плагин простого слайдера, который написан на JavaScript
- This is a simple plagin slider-carousel written in native JavaScript
<div> 
<img width="200" heigth="200" src="https://cdn-images-1.medium.com/max/1052/1*DN7ToydkJZEdVaJVK_Nhvw.png">
</div>

## Как пользоваться

скиньте файл sliderCarousel.js в ваш проект. Затем подключите его в ваш index.html  с помощью тега `script`
- `<script src="sliderCarousel.js"></script>`


## Параметры плагина
	`	// переменнная carousel, в которой описываются все параметры слайдера 
		const carousel = new SliderCarousel({
			main: '.companies-wrapper',
			wrap: '.companies-hor',
			btns:'.btns',
			position: 0,
			// стрелочки-кнопочки, которые пользователь сам создает
			// prev: '#test-left',
			// next: '#test-right',
			slidesToShow: 4,
			infinity: true,
			cycle: false, // без "infinity: true" работать не будет
			autoplay: false,
			timeToChangeSlide: 5,
			responsive: [{
				breakpoint: 1024,
				slideToShow: 3
			},
			{
				breakpoint: 768,
				slideToShow: 2
			},
			{
				breakpoint: 576,
				slideToShow: 1
			}]
		});`
    
- `main` - Главный контейнер, в котором будет отображаться слайдер;
- `wrap` - обертка слайдера;
- `btns` - обертка для кнопок пользователя или дефолтных кнопок;
- `position` - параметор в котором указывается позиция нахождения слайдера при первом запуске слайдера;
- `slidesToShow` - количество слайдов в котором будет отображаться в слайдере сразу;
- `infinity` - при параметре `true`, как только слайдер дойдет до конца последнего слайда (при нажатии на кнопку навигации), сразу же вернется в начало первого слайда. При параметре `false`, слайдер дойдет до конца и дальше двигаться (возвращаться в начало первого слайда) не будет;
- `cycle` - параметр, который включает бесконечное прокручивание слайдов. Без свойства "infinity: true" работать не будет;
- `autoplay` - параметр, который включает автоматическое перелистывание слайдов, через заданный промежуток времени;
- `timeToChangeSlide` - параметр, который указывает через сколько секунд нужно перелистывать слайды;
- `responsive` - в данный массив предназначен для адаптивной верстке, т.е. в параметре `breakpoint` указывается ширина экрана, а в `slideToShow` указывается сколько слайдов будет отображаться в слайдере сразу.
