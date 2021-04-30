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
            height: 1000, // высота контейнера в котором находится картинка (картин. подстраивается под высоту контейнера),
            titleImg: false,
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
- `position` - параметр в котором указывается позиция нахождения слайдера при первом запуске слайдера;
- `slidesToShow` - количество слайдов в котором будет отображаться в слайдере сразу;
- `height` - параметр, который устанавливает высоту класса .slider .slider-hor-item в котором находится картинка (картин. подстраивается под высоту контейнера). Этот параметр напрямую зависит от параметра `slidesToShow`, поэтому, чтобы настроить слайды по своему усмотрению, необходимо поиграться с параметрами `height` и `slidesToShow`;
- `titleImg` - параметр устанавливает подписи к картинкам;
- `infinity` - при параметре `true`, как только слайдер дойдет до конца последнего слайда (при нажатии на кнопку навигации), сразу же вернется в начало первого слайда. При параметре `false`, слайдер дойдет до конца и дальше двигаться (возвращаться в начало первого слайда) не будет;
- `cycle` - параметр, который включает бесконечное прокручивание слайдов. Без свойства "infinity: true" работать не будет;
- `autoplay` - параметр, который включает автоматическое перелистывание слайдов, через заданный промежуток времени;
- `timeToChangeSlide` - параметр, который указывает через сколько секунд нужно перелистывать слайды;
- `responsive` - в данный массив предназначен для адаптивной верстке, т.е. в параметре `breakpoint` указывается ширина экрана, а в `slideToShow` указывается сколько слайдов будет отображаться в слайдере сразу.

## Параметры плагина модального окна modal.js
    `   // переменная modal, в которой описываются все параметры слайдера
        const modal = winModal({ // создание объекта на основе функции
        title: 'title modal window',
        closable: true,
        content: '
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
        ',
        width: '400px',
        footerButtons: [ //массив в котором описываются параметры кнопок, которые будут находиться в footer
            {text: 'Ok', type: 'primary', handler() {
            console.log('Primary btn clicked');
            modal.close();
            }},
            {text: 'Cancel', type: 'danger', handler() {
                console.log('Danger btn clicked');
                modal.close();
            }}
        ]
    });`

- `title` - параметр в котором указывается заголовок модального окна;
- `closable` - при параметре `true`, в модальном окне появляется крестик в правом верхнем углу, при `false` исчезает;
- `content` - параметр отвечает за вставляемую информацию, который вводит пользователь. Также работает с html;
- `width` - параметр, который устанавливает размер модального окна;
- `footerButtons` - массив описывает параметры кнопок, которые будут находиться в footer;