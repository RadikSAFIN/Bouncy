function email_test(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');
        }
        if (slider.classList.contains('_gallery')) {
            //slider.data('lightGallery').destroy(true);
        }
    }
    sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let slider_about = new Swiper('.team__slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
    speed: 800,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

let slider_two = new Swiper('.testimonilas__slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
    speed: 800,
    pagination: {
        el: '.swiper-pagination--two',
        type: 'bullets',
        clickable: true,
    },
});


let slider_three = new Swiper('.blog__slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination--three',
        type: 'bullets',
        clickable: true,
    },
});

let slider_four = new Swiper('.price__plans', {
    observer: true,
    observeParents: true,
    speed: 800,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        880: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },

});


/*video*/
let blogs = document.getElementById('blog');
let video = document.getElementById('video');
let buttonPlayMain = document.querySelector('.btn-play-main');
let btnPlayPause = document.getElementById('play-pause');
let stopBtn = document.getElementById('stop');
let muteBtn = document.getElementById('mute');
let progress = document.getElementById('progress');

if (video) {
    video.addEventListener('click', function () {
        if (video.paused) {
            video.play();
            buttonPlayMain.classList.add('button-main-hidden');
            btnPlayPause.classList.add('pause');
        } else {
            video.pause();
            buttonPlayMain.classList.remove('button-main-hidden');
            btnPlayPause.classList.remove('pause');
        }
    });
}

if (buttonPlayMain) {
    buttonPlayMain.addEventListener('click', function () {
        if (video.paused) {
            video.play();
            buttonPlayMain.classList.add('button-main-hidden');
            btnPlayPause.classList.add('pause');
        }
        blogs.classList.add('noactive');
    });
}

if (btnPlayPause) {
    btnPlayPause.addEventListener('click', function () {
        if (video.paused) {
            btnPlayPause.classList.remove('play');
            btnPlayPause.classList.add('pause');
            buttonPlayMain.classList.add('button-main-hidden');
            video.play();
        } else {
            btnPlayPause.classList.remove('pause');
            btnPlayPause.classList.add('play');
            buttonPlayMain.classList.remove('button-main-hidden');
            video.pause();
        }
    });
}

if (stopBtn) {
    stopBtn.addEventListener('click', function () {
        video.pause();
        video.currentTime = 0;
        buttonPlayMain.classList.remove('button-main-hidden');
        btnPlayPause.classList.remove('pause');
    });
}

if (muteBtn) {
    muteBtn.addEventListener('click', function () {
        if (video.muted == false) {
            muteBtn.classList.remove('mute-on');
            muteBtn.classList.add('mute-off');
            video.muted = true;
        } else {
            muteBtn.classList.remove('mute-off');
            muteBtn.classList.add('mute-on');
            video.muted = false;
        }
    });
}

if (video) {
    video.ontimeupdate = progressUpdate;
}

if (progress) {
    progress.onclick = videoRewind;
}

function progressUpdate() {
    console.log(video.duration);
    console.log(video.currentTime);
    let d = video.duration;
    let c = video.currentTime;
    progress.value = c / d * 100;
}

function videoRewind() {
    let w = this.offsetWidth;
    let o = event.offsetX;
    console.log(w);
    console.log(o);
    this.value = o / w * 100;
    video.pause();
    video.currentTime = video.duration * (o / w);
    video.play();
}

var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
    ua = navigator.userAgent;
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
    return is_ie;
}
if (isIE()) {
    document.querySelector('body').classList.add('ie');
}
if (isMobile.any()) {
    document.querySelector('body').classList.add('_touch');
}
/*
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('_webp');
    } else {
        document.querySelector('body').classList.add('_no-webp');
    }
});
*/
function ibg() {
    if (isIE()) {
        let ibg = document.querySelectorAll("._ibg");
        for (var i = 0; i < ibg.length; i++) {
            if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
                ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
            }
        }
    }
}
ibg();

if (document.querySelector('.wrapper')) {
    document.querySelector('.wrapper').classList.add('_loaded');
}

let unlock = true;

//BodyLock
function body_lock(delay) {
    let body = document.querySelector("body");
    if (body.classList.contains('_lock')) {
        body_lock_remove(delay);
    } else {
        body_lock_add(delay);
    }
}
function body_lock_remove(delay) {
    let body = document.querySelector("body");
    if (unlock) {
        let lock_padding = document.querySelectorAll("._lp");
        setTimeout(() => {
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = '0px';
            }
            body.style.paddingRight = '0px';
            body.classList.remove("_lock");
        }, delay);

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, delay);
    }
}
function body_lock_add(delay) {
    let body = document.querySelector("body");
    if (unlock) {
        let lock_padding = document.querySelectorAll("._lp");
        for (let index = 0; index < lock_padding.length; index++) {
            const el = lock_padding[index];
            el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
        }
        body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
        body.classList.add("_lock");

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, delay);
    }
}
//=================


//let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
let forms = document.querySelectorAll('form');
if (forms.length > 0) {
    for (let index = 0; index < forms.length; index++) {
        const el = forms[index];
        el.addEventListener('submit', form_submit);
    }
}
function form_submit(e) {
    let btn = event.target;
    let form = btn.closest('form');
    let message = form.getAttribute('data-message');
    let error = form_validate(form);
    if (error == 0) {
        //SendForm
        form_clean(form);
        if (message) {
            popup_open('message-' + message);
            e.preventDefault();
        }
    } else {
        let form_error = form.querySelectorAll('._error');
        if (form_error && form.classList.contains('_goto-error')) {
            _goto(form_error[0], 1000, 50);
        }
        event.preventDefault();
    }
}
function form_validate(form) {
    let error = 0;
    let form_req = form.querySelectorAll('._req');
    if (form_req.length > 0) {
        for (let index = 0; index < form_req.length; index++) {
            const el = form_req[index];
            if (!_is_hidden(el)) {
                error += form_validate_input(el);
            }
        }
    }
    return error;
}
function form_validate_input(input) {
    let error = 0;
    let input_g_value = input.getAttribute('data-value');

    if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
        if (input.value != input_g_value) {
            let em = input.value.replace(" ", "");
            input.value = em;
        }
        if (email_test(input) || input.value == input_g_value) {
            form_add_error(input);
            error++;
        } else {
            form_remove_error(input);
        }
    } else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
        form_add_error(input);
        error++;
    } else {
        if (input.value == '' || input.value == input_g_value) {
            form_add_error(input);
            error++;
        } else {
            form_remove_error(input);
        }
    }
    return error;
}
function form_add_error(input) {
    input.classList.add('_error');
    input.parentElement.classList.add('_error');

    let input_error = input.parentElement.querySelector('.form__error');
    if (input_error) {
        input.parentElement.removeChild(input_error);
    }
    let input_error_text = input.getAttribute('data-error');
    if (input_error_text && input_error_text != '') {
        input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + input_error_text + '</div>');
    }
}
function form_remove_error(input) {
    input.classList.remove('_error');
    input.parentElement.classList.remove('_error');

    let input_error = input.parentElement.querySelector('.form__error');
    if (input_error) {
        input.parentElement.removeChild(input_error);
    }
}
function form_clean(form) {
    let inputs = form.querySelectorAll('input,textarea');
    for (let index = 0; index < inputs.length; index++) {
        const el = inputs[index];
        el.parentElement.classList.remove('_focus');
        el.classList.remove('_focus');
        el.value = el.getAttribute('data-value');
    }
    let checkboxes = form.querySelectorAll('.checkbox__input');
    if (checkboxes.length > 0) {
        for (let index = 0; index < checkboxes.length; index++) {
            const checkbox = checkboxes[index];
            checkbox.checked = false;
        }
    }
    let selects = form.querySelectorAll('select');
    if (selects.length > 0) {
        for (let index = 0; index < selects.length; index++) {
            const select = selects[index];
            const select_default_value = select.getAttribute('data-default');
            select.value = select_default_value;
            select_item(select);
        }
    }
}

let viewPass = document.querySelectorAll('.form__viewpass');
for (let index = 0; index < viewPass.length; index++) {
    const element = viewPass[index];
    element.addEventListener("click", function (e) {
        if (element.classList.contains('_active')) {
            element.parentElement.querySelector('input').setAttribute("type", "password");
        } else {
            element.parentElement.querySelector('input').setAttribute("type", "text");
        }
        element.classList.toggle('_active');
    });
}


//Select
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
    selects_init();
}
function selects_init() {
    for (let index = 0; index < selects.length; index++) {
        const select = selects[index];
        select_init(select);
    }
    //select_callback();
    document.addEventListener('click', function (e) {
        selects_close(e);
    });
    document.addEventListener('keydown', function (e) {
        if (e.which == 27) {
            selects_close(e);
        }
    });
}
function selects_close(e) {
    const selects = document.querySelectorAll('.select');
    if (!e.target.closest('.select')) {
        for (let index = 0; index < selects.length; index++) {
            const select = selects[index];
            const select_body_options = select.querySelector('.select__options');
            select.classList.remove('_active');
            _slideUp(select_body_options, 100);
        }
    }
}
function select_init(select) {
    const select_parent = select.parentElement;
    const select_modifikator = select.getAttribute('class');
    const select_selected_option = select.querySelector('option:checked');
    select.setAttribute('data-default', select_selected_option.value);
    select.style.display = 'none';

    select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

    let new_select = select.parentElement.querySelector('.select');
    new_select.appendChild(select);
    select_item(select);
}
function select_item(select) {
    const select_parent = select.parentElement;
    const select_items = select_parent.querySelector('.select__item');
    const select_options = select.querySelectorAll('option');
    const select_selected_option = select.querySelector('option:checked');
    const select_selected_text = select_selected_option.text;
    const select_type = select.getAttribute('data-type');

    if (select_items) {
        select_items.remove();
    }

    let select_type_content = '';
    if (select_type == 'input') {
        select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
    } else {
        select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
    }

    select_parent.insertAdjacentHTML('beforeend',
        '<div class="select__item">' +
        '<div class="select__title">' + select_type_content + '</div>' +
        '<div class="select__options">' + select_get_options(select_options) + '</div>' +
        '</div></div>');

    select_actions(select, select_parent);
}
function select_actions(original, select) {
    const select_item = select.querySelector('.select__item');
    const select_body_options = select.querySelector('.select__options');
    const select_options = select.querySelectorAll('.select__option');
    const select_type = original.getAttribute('data-type');
    const select_input = select.querySelector('.select__input');

    select_item.addEventListener('click', function () {
        let selects = document.querySelectorAll('.select');
        for (let index = 0; index < selects.length; index++) {
            const select = selects[index];
            const select_body_options = select.querySelector('.select__options');
            if (select != select_item.closest('.select')) {
                select.classList.remove('_active');
                _slideUp(select_body_options, 100);
            }
        }
        _slideToggle(select_body_options, 100);
        select.classList.toggle('_active');
    });

    for (let index = 0; index < select_options.length; index++) {
        const select_option = select_options[index];
        const select_option_value = select_option.getAttribute('data-value');
        const select_option_text = select_option.innerHTML;

        if (select_type == 'input') {
            select_input.addEventListener('keyup', select_search);
        } else {
            if (select_option.getAttribute('data-value') == original.value) {
                select_option.style.display = 'none';
            }
        }
        select_option.addEventListener('click', function () {
            for (let index = 0; index < select_options.length; index++) {
                const el = select_options[index];
                el.style.display = 'block';
            }
            if (select_type == 'input') {
                select_input.value = select_option_text;
                original.value = select_option_value;
            } else {
                select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
                original.value = select_option_value;
                select_option.style.display = 'none';
            }
        });
    }
}
function select_get_options(select_options) {
    if (select_options) {
        let select_options_content = '';
        for (let index = 0; index < select_options.length; index++) {
            const select_option = select_options[index];
            const select_option_value = select_option.value;
            if (select_option_value != '') {
                const select_option_text = select_option.text;
                select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
            }
        }
        return select_options_content;
    }
}
function select_search(e) {
    let select_block = e.target.closest('.select ').querySelector('.select__options');
    let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
    let select_search_text = e.target.value.toUpperCase();

    for (let i = 0; i < select_options.length; i++) {
        let select_option = select_options[i];
        let select_txt_value = select_option.textContent || select_option.innerText;
        if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
            select_option.style.display = "";
        } else {
            select_option.style.display = "none";
        }
    }
}
function selects_update_all() {
    let selects = document.querySelectorAll('select');
    if (selects) {
        for (let index = 0; index < selects.length; index++) {
            const select = selects[index];
            select_item(select);
        }
    }
}

//Placeholers
let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
inputs_init(inputs);

function inputs_init(inputs) {
    if (inputs.length > 0) {
        for (let index = 0; index < inputs.length; index++) {
            const input = inputs[index];
            const input_g_value = input.getAttribute('data-value');
            input_placeholder_add(input);
            if (input.value != '' && input.value != input_g_value) {
                input_focus_add(input);
            }
            input.addEventListener('focus', function (e) {
                if (input.value == input_g_value) {
                    input_focus_add(input);
                    input.value = '';
                }
                if (input.getAttribute('data-type') === "pass") {
                    input.setAttribute('type', 'password');
                }
                if (input.classList.contains('_date')) {
                    /*
                    input.classList.add('_mask');
                    Inputmask("99.99.9999", {
                        //"placeholder": '',
                        clearIncomplete: true,
                        clearMaskOnLostFocus: true,
                        onincomplete: function () {
                            input_clear_mask(input, input_g_value);
                        }
                    }).mask(input);
                    */
                }
                if (input.classList.contains('_phone')) {
                    //'+7(999) 999 9999'
                    //'+38(999) 999 9999'
                    //'+375(99)999-99-99'
                    input.classList.add('_mask');
                    Inputmask("+7 (999) 999 9999", {
                        //"placeholder": '',
                        clearIncomplete: true,
                        clearMaskOnLostFocus: true,
                        onincomplete: function () {
                            input_clear_mask(input, input_g_value);
                        }
                    }).mask(input);
                }
                if (input.classList.contains('_digital')) {
                    input.classList.add('_mask');
                    Inputmask("9{1,}", {
                        "placeholder": '',
                        clearIncomplete: true,
                        clearMaskOnLostFocus: true,
                        onincomplete: function () {
                            input_clear_mask(input, input_g_value);
                        }
                    }).mask(input);
                }
                form_remove_error(input);
            });
            input.addEventListener('blur', function (e) {
                if (input.value == '') {
                    input.value = input_g_value;
                    input_focus_remove(input);
                    if (input.classList.contains('_mask')) {
                        input_clear_mask(input, input_g_value);
                    }
                    if (input.getAttribute('data-type') === "pass") {
                        input.setAttribute('type', 'text');
                    }
                }
            });
            if (input.classList.contains('_date')) {
                datepicker(input, {
                    customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                    customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
                    formatter: (input, date, instance) => {
                        const value = date.toLocaleDateString()
                        input.value = value
                    },
                    onSelect: function (input, instance, date) {
                        input_focus_add(input.el);
                    }
                });
            }
        }
    }
}
function input_placeholder_add(input) {
    const input_g_value = input.getAttribute('data-value');
    if (input.value == '' && input_g_value != '') {
        input.value = input_g_value;
    }
}
function input_focus_add(input) {
    input.classList.add('_focus');
    input.parentElement.classList.add('_focus');
}
function input_focus_remove(input) {
    input.classList.remove('_focus');
    input.parentElement.classList.remove('_focus');
}
function input_clear_mask(input, input_g_value) {
    input.inputmask.remove();
    input.value = input_g_value;
    input_focus_remove(input);
}


let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
    for (let index = 0; index < quantityButtons.length; index++) {
        const quantityButton = quantityButtons[index];
        quantityButton.addEventListener("click", function (e) {
            let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
            if (quantityButton.classList.contains('quantity__button_plus')) {
                value++;
            } else {
                value = value - 1;
                if (value < 1) {
                    value = 1
                }
            }
            quantityButton.closest('.quantity').querySelector('input').value = value;
        });
    }
}
let scr_body = document.querySelector('body');
let scr_blocks = document.querySelectorAll('._scr-sector');
let scr_items = document.querySelectorAll('._scr-item');
let scr_fix_block = document.querySelectorAll('._side-wrapper');
let scr_min_height = 750;

let scrolling = true;
let scrolling_full = true;

let scrollDirection = 0;

//ScrollOnScroll
window.addEventListener('scroll', scroll_scroll);
function scroll_scroll() {
    //scr_body.setAttribute('data-scroll', pageYOffset);
    let src_value = pageYOffset;
    let header = document.querySelector('header.header');
    if (src_value > 10) {
        header.classList.add('_scroll');
        header.classList.add('fixed');
    } else {
        header.classList.remove('_scroll');
        header.classList.remove('fixed');
    }
    if (scr_blocks.length > 0) {
        for (let index = 0; index < scr_blocks.length; index++) {
            let block = scr_blocks[index];
            let block_offset = offset(block).top;
            let block_height = block.offsetHeight;

            if ((pageYOffset > block_offset - window.innerHeight / 1.5) && pageYOffset < (block_offset + block_height) - window.innerHeight / 5) {
                block.classList.add('_scr-sector_active');
            } else {
                if (block.classList.contains('_scr-sector_active')) {
                    block.classList.remove('_scr-sector_active');
                }
            }
            if ((pageYOffset > block_offset - window.innerHeight / 2) && pageYOffset < (block_offset + block_height) - window.innerHeight / 5) {
                if (!block.classList.contains('_scr-sector_current')) {
                    block.classList.add('_scr-sector_current');
                }
            } else {
                if (block.classList.contains('_scr-sector_current')) {
                    block.classList.remove('_scr-sector_current');
                }
            }
        }
    }
    if (scr_items.length > 0) {
        for (let index = 0; index < scr_items.length; index++) {
            let scr_item = scr_items[index];
            let scr_item_offset = offset(scr_item).top;
            let scr_item_height = scr_item.offsetHeight;


            let scr_item_point = window.innerHeight - (window.innerHeight - scr_item_height / 3);
            if (window.innerHeight > scr_item_height) {
                scr_item_point = window.innerHeight - scr_item_height / 3;
            }

            if ((src_value > scr_item_offset - scr_item_point) && src_value < (scr_item_offset + scr_item_height)) {
                scr_item.classList.add('_active');
                scroll_load_item(scr_item);
            } else {
                scr_item.classList.remove('_active');
            }
            if (((src_value > scr_item_offset - window.innerHeight))) {
                if (scr_item.querySelectorAll('._lazy').length > 0) {
                    scroll_lazy(scr_item);
                }
            }
        }
    }

    if (scr_fix_block.length > 0) {
        fix_block(scr_fix_block, src_value);
    }
    let custom_scroll_line = document.querySelector('._custom-scroll__line');
    if (custom_scroll_line) {
        let window_height = window.innerHeight;
        let content_height = document.querySelector('.wrapper').offsetHeight;
        let scr_procent = (pageYOffset / (content_height - window_height)) * 100;
        let custom_scroll_line_height = custom_scroll_line.offsetHeight;
        custom_scroll_line.style.transform = "translateY(" + (window_height - custom_scroll_line_height) / 100 * scr_procent + "px)";
    }

    if (src_value > scrollDirection) {
        // downscroll code
    } else {
        // upscroll code
    }
    scrollDirection = src_value <= 0 ? 0 : src_value;
}
setTimeout(function () {
    //document.addEventListener("DOMContentLoaded", scroll_scroll);
    scroll_scroll();
}, 100);

function scroll_lazy(scr_item) {
    let lazy_src = scr_item.querySelectorAll('*[data-src]');
    if (lazy_src.length > 0) {
        for (let index = 0; index < lazy_src.length; index++) {
            const el = lazy_src[index];
            if (!el.classList.contains('_loaded')) {
                el.setAttribute('src', el.getAttribute('data-src'));
                el.classList.add('_loaded');
            }
        }
    }
    let lazy_srcset = scr_item.querySelectorAll('*[data-srcset]');
    if (lazy_srcset.length > 0) {
        for (let index = 0; index < lazy_srcset.length; index++) {
            const el = lazy_srcset[index];
            if (!el.classList.contains('_loaded')) {
                el.setAttribute('srcset', el.getAttribute('data-srcset'));
                el.classList.add('_loaded');
            }
        }
    }
}

function scroll_load_item(scr_item) {
    if (scr_item.classList.contains('_load-map') && !scr_item.classList.contains('_loaded-map')) {
        let map_item = document.getElementById('map');
        if (map_item) {
            scr_item.classList.add('_loaded-map');
            map();
        }
    }
}

//FullScreenScroll
if (scr_blocks.length > 0 && !isMobile.any()) {
    disableScroll();
    window.addEventListener('wheel', full_scroll);
}
function full_scroll(e) {
    let viewport_height = window.innerHeight;
    if (viewport_height >= scr_min_height) {
        if (scrolling_full) {
            // ВЫЧИСЛИТЬ!!!
            let current_scroll = pageYOffset;//parseInt(scr_body.getAttribute('data-scroll'));
            //
            let current_block = document.querySelector('._scr-sector._scr-sector_current');
            let current_block_pos = offset(current_block).top;
            let current_block_height = current_block.offsetHeight;
            let current_block_next = current_block.nextElementSibling;
            let current_block_prev = current_block.previousElementSibling;
            let block_pos;
            if (e.keyCode == 40 || e.keyCode == 34 || e.deltaX > 0 || e.deltaY < 0) {
                if (current_block_prev) {
                    let current_block_prev_height = current_block_prev.offsetHeight;
                    block_pos = offset(current_block_prev).top;
                    if (current_block_height <= viewport_height) {
                        if (current_block_prev_height >= viewport_height) {
                            block_pos = block_pos + (current_block_prev_height - viewport_height);
                            full_scroll_to_sector(block_pos);
                        }
                    } else {
                        enableScroll();
                        if (current_scroll <= current_block_pos) {
                            full_scroll_to_sector(block_pos);
                        }
                    }
                } else {
                    full_scroll_pagestart();
                }
            } else if (e.keyCode == 38 || e.keyCode == 33 || e.deltaX < 0 || e.deltaY > 0) {
                if (current_block_next) {
                    block_pos = offset(current_block_next).top;
                    if (current_block_height <= viewport_height) {
                        full_scroll_to_sector(block_pos);
                    } else {
                        enableScroll();
                        if (current_scroll >= block_pos - viewport_height) {
                            full_scroll_to_sector(block_pos);
                        }
                    }
                } else {
                    full_scroll_pageend();
                }
            }
        } else {
            disableScroll();
        }
    } else {
        enableScroll();
    }
}
function full_scroll_to_sector(pos) {
    disableScroll();
    scrolling_full = false;
    _goto(pos, 800);

    let scr_pause = 500;
    if (navigator.appVersion.indexOf("Mac") != -1) {
        scr_pause = 1000;
    };
    setTimeout(function () {
        scrolling_full = true;
    }, scr_pause);
}
function full_scroll_pagestart() { }
function full_scroll_pageend() { }

//ScrollOnClick (Navigation)
let link = document.querySelectorAll('._goto-block');
if (link) {
    let blocks = [];
    for (let index = 0; index < link.length; index++) {
        let el = link[index];
        let block_name = el.getAttribute('href').replace('#', '');
        if (block_name != '' && !~blocks.indexOf(block_name)) {
            blocks.push(block_name);
        }
        el.addEventListener('click', function (e) {
            if (document.querySelector('.menu__body._active')) {
                menu_close();
                body_lock_remove(500);
            }
            let target_block_class = el.getAttribute('href').replace('#', '');
            let target_block = document.querySelector('.' + target_block_class);
            _goto(target_block, 300);
            e.preventDefault();
        })
    }

    window.addEventListener('scroll', function (el) {
        let old_current_link = document.querySelectorAll('._goto-block._active');
        if (old_current_link) {
            for (let index = 0; index < old_current_link.length; index++) {
                let el = old_current_link[index];
                el.classList.remove('_active');
            }
        }
        for (let index = 0; index < blocks.length; index++) {
            let block = blocks[index];
            let block_item = document.querySelector('.' + block);
            if (block_item) {
                let block_offset = offset(block_item).top;
                let block_height = block_item.offsetHeight;
                if ((pageYOffset > block_offset - window.innerHeight / 3) && pageYOffset < (block_offset + block_height) - window.innerHeight / 3) {
                    let current_links = document.querySelectorAll('._goto-block[href="#' + block + '"]');
                    for (let index = 0; index < current_links.length; index++) {
                        let current_link = current_links[index];
                        current_link.classList.add('_active');
                    }
                }
            }
        }
    })
}
//ScrollOnClick (Simple)
let goto_links = document.querySelectorAll('._goto');
if (goto_links) {
    for (let index = 0; index < goto_links.length; index++) {
        let goto_link = goto_links[index];
        goto_link.addEventListener('click', function (e) {
            let target_block_class = goto_link.getAttribute('href').replace('#', '');
            let target_block = document.querySelector('.' + target_block_class);
            _goto(target_block, 300);
            e.preventDefault();
        });
    }
}
function _goto(target_block, speed, offset = 0) {
    let header = '';
    //OffsetHeader
    //if (window.innerWidth < 992) {
    //	header = 'header';
    //}
    let options = {
        speedAsDuration: true,
        speed: speed,
        header: header,
        offset: offset,
        easing: 'easeOutQuad',
    };
    let scr = new SmoothScroll();
    scr.animateScroll(target_block, '', options);
}

//SameFunctions
function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
function disableScroll() {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    document.addEventListener('wheel', preventDefault, { passive: false }); // Disable scrolling in Chrome
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove = preventDefault; // mobile
    document.onkeydown = preventDefaultForScrollKeys;
}
function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    document.removeEventListener('wheel', preventDefault, { passive: false }); // Enable scrolling in Chrome
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}
function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}
function preventDefaultForScrollKeys(e) {
    /*if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }*/
}

function fix_block(scr_fix_block, scr_value) {
    let window_width = parseInt(window.innerWidth);
    let window_height = parseInt(window.innerHeight);
    let header_height = parseInt(document.querySelector('header').offsetHeight) + 15;
    for (let index = 0; index < scr_fix_block.length; index++) {
        const block = scr_fix_block[index];
        const block_width = block.getAttribute('data-width');
        const item = block.querySelector('._side-block');
        if (!block_width) { block_width = 0; }
        if (window_width > block_width) {
            if (item.offsetHeight < window_height - (header_height + 30)) {
                if (scr_value > offset(block).top - (header_height + 15)) {
                    item.style.cssText = "position:fixed;bottom:auto;top:" + header_height + "px;width:" + block.offsetWidth + "px;left:" + offset(block).left + "px;";
                } else {
                    gotoRelative(item);
                }
                if (scr_value > (block.offsetHeight + offset(block).top) - (item.offsetHeight + (header_height + 15))) {
                    block.style.cssText = "position:relative;";
                    item.style.cssText = "position:absolute;bottom:0;top:auto;left:0px;width:100%";
                }
            } else {
                gotoRelative(item);
            }
        }
    }
    function gotoRelative(item) {
        item.style.cssText = "position:relative;bottom:auto;top:0px;left:0px;";
    }
}

if (!isMobile.any()) {
    //custom_scroll();
    /*
    window.addEventListener('wheel', scroll_animate, {
        capture: true,
        passive: true
    });
    window.addEventListener('resize', custom_scroll, {
        capture: true,
        passive: true
    });
    */
}
function custom_scroll(event) {
    scr_body.style.overflow = 'hidden';
    let window_height = window.innerHeight;
    let custom_scroll_line = document.querySelector('._custom-scroll__line');
    let custom_scroll_content_height = document.querySelector('.wrapper').offsetHeight;
    let custom_cursor_height = Math.min(window_height, Math.round(window_height * (window_height / custom_scroll_content_height)));
    if (custom_scroll_content_height > window_height) {
        if (!custom_scroll_line) {
            let custom_scroll = document.createElement('div');
            custom_scroll_line = document.createElement('div');
            custom_scroll.setAttribute('class', '_custom-scroll');
            custom_scroll_line.setAttribute('class', '_custom-scroll__line');
            custom_scroll.appendChild(custom_scroll_line);
            scr_body.appendChild(custom_scroll);
        }
        custom_scroll_line.style.height = custom_cursor_height + 'px';
    }
}

let new_pos = pageYOffset;
function scroll_animate(event) {
    let window_height = window.innerHeight;
    let content_height = document.querySelector('.wrapper').offsetHeight;
    let start_position = pageYOffset;
    let pos_add = 100;

    if (event.keyCode == 40 || event.keyCode == 34 || event.deltaX > 0 || event.deltaY < 0) {
        new_pos = new_pos - pos_add;
    } else if (event.keyCode == 38 || event.keyCode == 33 || event.deltaX < 0 || event.deltaY > 0) {
        new_pos = new_pos + pos_add;
    }
    if (new_pos > (content_height - window_height)) new_pos = content_height - window_height;
    if (new_pos < 0) new_pos = 0;

    if (scrolling) {
        scrolling = false;
        _goto(new_pos, 1000);

        let scr_pause = 100;
        if (navigator.appVersion.indexOf("Mac") != -1) {
            scr_pause = scr_pause * 2;
        };
        setTimeout(function () {
            scrolling = true;
            _goto(new_pos, 1000);
        }, scr_pause);
    }
    //If native scroll
    //disableScroll();
}


$(function () {

    //Menu nav toggle 
    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });


    /* Portfolio Isotop */
    var $container = $('.portfolio__items');
    $container.imagesLoaded(function () {
        $container.isotope({
            itemSelector: '.portfolio__item',
            filter: '*',
            masonry: {
                horizontalOrder: true
            },
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
    });

    $('.portfolio__navigation a').click(function () {
        $('.portfolio__navigation .active').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 250,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });


});
function map(n) {
    google.maps.Map.prototype.setCenterWithOffset = function (latlng, offsetX, offsetY) {
        var map = this;
        var ov = new google.maps.OverlayView();
        ov.onAdd = function () {
            var proj = this.getProjection();
            var aPoint = proj.fromLatLngToContainerPixel(latlng);
            aPoint.x = aPoint.x + offsetX;
            aPoint.y = aPoint.y + offsetY;
            map.panTo(proj.fromContainerPixelToLatLng(aPoint));
            //map.setCenter(proj.fromContainerPixelToLatLng(aPoint));
        }
        ov.draw = function () { };
        ov.setMap(this);
    };
    var markers = new Array();
    var infowindow = new google.maps.InfoWindow({
        //pixelOffset: new google.maps.Size(-230,250)
    });
    var locations = [
        [new google.maps.LatLng(55.821467, 49.093593)],
        [new google.maps.LatLng(55.829930, 49.117886)],
        [new google.maps.LatLng(55.793940, 49.151049)],
        [new google.maps.LatLng(55.769554, 49.216828)],
    ]
    var options = {
        zoom: 10,
        panControl: false,
        mapTypeControl: false,
        center: locations[0][0],
        styles: [{ "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#e0efef" }] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "hue": "#1900ff" }, { "color": "#c0e8e8" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "lightness": 100 }, { "visibility": "simplified" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [{ "visibility": "on" }, { "lightness": 700 }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#7dcdcd" }] }],
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map'), options);
    var icon = {
        url: 'img/icons/map.svg',
        scaledSize: new google.maps.Size(18, 20),
        anchor: new google.maps.Point(9, 10)
    }
    for (var i = 0; i < locations.length; i++) {
        var marker = new google.maps.Marker({
            // icon: icon,
            position: locations[i][0],
            map: map,
        });
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                for (var m = 0; m < markers.length; m++) {
                    markers[m].setIcon(icon);
                }
                var cnt = i + 1;
                //infowindow.setContent($('.contacts-map-item_' + cnt).html());
                infowindow.open(map, marker);
                marker.setIcon(icon);
                map.setCenterWithOffset(marker.getPosition(), 0, 0);
                setTimeout(function () {
                    baloonstyle();
                }, 10);
            }
        })(marker, i));
        markers.push(marker);
    }

    if (n) {
        var nc = n - 1;
        setTimeout(function () {
            google.maps.event.trigger(markers[nc], 'click');
        }, 500);
    }
}

//map(1);


/* YA
function map(n) {
    ymaps.ready(init);
    function init() {
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            controls: [],
            center: [43.585525, 39.723062],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 10
        });

        let myPlacemark = new ymaps.Placemark([43.585525, 39.723062], {
        },{
            // Опции.
            //balloonContentHeader: 'Mistoun',
            //balloonContentBody: 'Москва, Николоямская 40с1',
            //balloonContentFooter: '+ 7(495) 507-54 - 90',
            //hasBalloon: true,
            //hideIconOnBalloonOpen: true,

            hasBalloon: false,
            hideIconOnBalloonOpen: false,
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icons/map.svg',
            // Размеры метки.
            iconImageSize: [40, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-20, -20],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [0, 0],
        });
        myMap.geoObjects.add(myPlacemark);

        myMap.behaviors.disable('scrollZoom');
        myMap.behaviors.disable('drag');
    }
}
*/