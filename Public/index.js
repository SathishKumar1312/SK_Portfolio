console.log("Copyrights : Sathish Kumar");
console.log("Copyrights : SK");
console.log("Do you like this website?\nIf you are looking for the source code of this file, get into my github : SathishKumar1312");


const nav = document.querySelector('nav');
const crossIcon = document.querySelector('header i');
const menuBar = document.getElementById("menu-bar");

menuBar.addEventListener('click', (e) => {
    nav.classList.toggle('active');
    crossIcon.style.display = 'block';
    menuBar.classList.toggle('inactive');
});

crossIcon.addEventListener('click', (e) => {
    nav.classList.toggle('active');
    crossIcon.style.display = 'none';
    menuBar.classList.toggle('inactive');
});

function closeNav(event) {
    if (!nav.contains(event.target) && !menuBar.contains(event.target)) {
        nav.classList.remove('active');
        crossIcon.style.display = 'none';
        menuBar.classList.remove('inactive');
    }
}

document.addEventListener('click', closeNav);

let navLinks = document.querySelectorAll('.clickLink');
navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
        nav.classList.remove('active');
        crossIcon.style.display = 'none';
        menuBar.classList.remove('inactive');
    });
});

let pointNav = document.getElementById('pointNav');
let page1 = document.getElementById('page1');
let page2 = document.getElementById('page2');
let page3 = document.getElementById('page3');
let page4 = document.getElementById('page4');
let page5 = document.getElementById('page5');

const buttons = document.querySelectorAll('.icon-button');

buttons.forEach((button, i) => {
    button.addEventListener('click', () => {

        if (i == 0) {
            page1.scrollIntoView({
                behavior: "smooth"
            });
        }
        if (i == 1) {
            page2.scrollIntoView({
                behavior: "smooth"
            });
        }
        if (i == 2) {
            page3.scrollIntoView({
                behavior: "smooth"
            });
        }
        if (i == 3) {
            page4.scrollIntoView({
                behavior: "smooth"
            });
        }
        if (i == 4) {
            page5.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.color = '#4831d4';
}

let scrollPosition;
let sk = document.querySelector('#SK');
sk.style.paddingTop = '9px';
window.addEventListener('scroll', function () {
    scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // console.log("Scroll Position: ", scrollPosition);

    // Header
    if (scrollPosition > 53) {
        sk.innerHTML = 'SK';
        sk.classList.add('changeFont');
    } else {
        sk.innerHTML = 'Sathish Kumar';
        sk.classList.remove('changeFont');
    }

    // PointNavigation
    if (scrollPosition < 544) {
        updateButtons(0);
    } else if ((scrollPosition > 544) && (scrollPosition < 1167)) {
        updateButtons(1);
    } else if ((scrollPosition > 1167) && (scrollPosition < 1933)) {
        updateButtons(2);
    } else if ((scrollPosition > 1933) && (scrollPosition < 2620)) {
        updateButtons(3);
    } else if ((scrollPosition > 2620)) {
        updateButtons(4);
    }

    // Header color
    if (scrollPosition >= 1365 && scrollPosition <= 2122) {
        menuBar.innerHTML = '<svg id="menu-bar" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" viewBox="0 0 100 125" version="1.1" x="0px" y="0px" > <title>Menu</title> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage" > <g sketch:type="MSArtboardGroup" fill="#ccf381"> <rect sketch:type="MSShapeGroup" x="5" y="7" width="90.8784719" height="9.11814002" rx="7"/> <rect sketch:type="MSShapeGroup" x="5" y="32.5307921" width="68.158854" height="9.11814002" rx="7" /> <rect sketch:type="MSShapeGroup" x="5" y="58.0615841" width="90.8784719" height="9.11814002" rx="7"/></g></g></svg>';
        sk.style.color = '#ccf381';
        sk.style.paddingTop = '0px';
    } else if (scrollPosition >= 0 && scrollPosition <= 664) {
        sk.style.color = '#ccf381';
        sk.style.paddingTop = '9px';
    } else {
        menuBar.innerHTML = '<svg id="menu-bar" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" viewBox="0 0 100 125" version="1.1" x="0px" y="0px" > <title>Menu</title> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage" > <g sketch:type="MSArtboardGroup" fill="#4831d4"> <rect sketch:type="MSShapeGroup" x="5" y="7" width="90.8784719" height="9.11814002" rx="7"/> <rect sketch:type="MSShapeGroup" x="5" y="32.5307921" width="68.158854" height="9.11814002" rx="7" /> <rect sketch:type="MSShapeGroup" x="5" y="58.0615841" width="90.8784719" height="9.11814002" rx="7"/></g></g></svg>';
        sk.style.color = '#4831d4';
        sk.style.paddingTop = '0px';
    }
});

function updateButtons(indexToShow) {
    for (let i = 0; i < buttons.length; i++) {
        if (i === indexToShow) {
            buttons[i].innerHTML = '<i id="squarePoint" class="far fa-square"></i>';
            if ((scrollPosition > 851) && (scrollPosition < 1632)) {
                buttons[i].style.color = '#ccf381';
            } else {
                buttons[i].style.color = '#4831d4';
            }
        } else {
            buttons[i].innerHTML = '<i class="fas fa-diamond"></i>';
            if ((scrollPosition > 851) && (scrollPosition < 1632)) {
                buttons[i].style.color = '#ccf381';
            } else {
                buttons[i].style.color = '#4831d4';
            }
        }
    }
}

sk.addEventListener('click', () => {
    page1.scrollIntoView({
        behavior: "smooth"
    });
})

let work = document.getElementById('works');

let arrow = document.getElementById('arrowSvg');

work.addEventListener('mouseover', () => {
    arrow.setAttribute('stroke', '#4831d4');
});
work.addEventListener('mouseout', () => {
    arrow.setAttribute('stroke', '#ffffff');
});
work.addEventListener('click', () => {
    arrow.setAttribute('stroke', '#4831d4');
});
arrow.setAttribute('stroke', '#ffffff');

const labels = document.querySelectorAll('.label');
const inputs = document.querySelectorAll('.input');
const placeholders = [inputs[0].placeholder, inputs[1].placeholder, inputs[2].placeholder];

inputs.forEach((input, i) => {
    input.addEventListener('focus', () => {
        input.placeholder = '';
        labels.forEach((label, j) => {
            if (i == j) {
                label.style.color = '#4831d4';
            } else {
                label.style.color = '#111111';
            }
        });
    });

    input.addEventListener('blur', () => {

        labels.forEach((label, j) => {
            label.style.color = '#111111';
        });

        if (i == 0) {
            input.placeholder = placeholders[0];
        }
        if (i == 1) {
            input.placeholder = placeholders[1];
        }
        if (i == 2) {
            input.placeholder = placeholders[2];
        }
    });
});

let submitButton = document.querySelector('form button');

let submitsvg = document.getElementById('submitsvg');

submitButton.addEventListener('mouseover', () => {
    submitsvg.setAttribute('stroke', '#ffffff');
})
submitButton.addEventListener('mouseout', () => {
    submitsvg.setAttribute('stroke', '#4831d4');
});
submitButton.addEventListener('click', () => {
    arrow.setAttribute('stroke', '#ffffff');
});
submitsvg.setAttribute('stroke', '#4831d4');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm() {

    let success = true;

    if (nameInput.value === '') {
        success = false;
        setError(nameInput, 'Name is required');
    } else {
        setSuccess(nameInput);
    }

    if (emailInput.value === '') {
        success = false;
        setError(emailInput, 'Please enter a email address');
    } else if (!emailRegex.test(emailInput.value)) {
        success = false;
        setError(emailInput, 'Please enter a valid email address');
    } else {
        setSuccess(emailInput);
    }

    if (messageInput.value === '') {
        success = false;
        setError(messageInput, 'Please leave a message');
    } else {
        setSuccess(messageInput);
    }

    return success;
}

nameInput.oninput = ()=>{
    if (nameInput.value === '') {
        setError(nameInput, 'Name is required');
    } else {
        setSuccess(nameInput);
    }
};
emailInput.oninput = () => {
    if (emailInput.value === '') {
        setError(emailInput, 'Please enter a email address');
    } else if (!emailRegex.test(emailInput.value)) {
        setError(emailInput, 'Please enter a valid email address');
    } else {
        setSuccess(emailInput);
    }
};
messageInput.oninput = ()=>{
    if (messageInput.value === '') {
        setError(messageInput, 'Please leave a message');
    } else {
        setSuccess(messageInput);
    }
};

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    errorElement.style.color = 'red';
    element.style.borderBottom = '1px solid red';
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    element.style.borderBottom = '1px solid #4831d4';
}

const form = document.getElementById('myForm');
form.addEventListener('submit', (e) => {
    if (!validateForm()) {
        e.preventDefault();
    };
});

const elements = document.querySelectorAll('.fadeAnime');

function handleScroll() {
    let pageTop = window.scrollY;
    let pageBottom = pageTop + window.innerHeight;

    for (let i = 0; i < elements.length; i++) {
        let tag = elements[i];
        let tagTop = tag.offsetTop + tag.offsetHeight / 3;
        let tagBottom = tagTop + tag.offsetHeight;

        if ((tagTop >= pageTop && tagTop <= pageBottom) || (tagBottom >= pageTop && tagBottom <= pageBottom)) {
            tag.classList.add("visible");
        }
    }
}

window.addEventListener('load', handleScroll);

window.addEventListener('scroll', handleScroll);

handleScroll();

let profileContent = document.getElementById('profileContent');
let versatileContent = document.getElementById('versatileContent');
let screenWidth = window.innerWidth;

function updateContent() {
    let svg1 = document.getElementById('svg1');

    if (screenWidth <= 992) {
        svg1.innerHTML = '<svg id="svg1" xmlns="http://www.w3.org/2000/svg" width="935" height="701" viewBox="0 0 935 701" id="avatar-shapes" data-shape="true"><path fill="none" stroke="#4831d4" stroke-miterlimit="50" stroke-width="2" d="M165.648 352.811v0l15.343 16.136v0l15.343-16.136v0l15.341 16.136v0l15.343-16.136v0l15.343 16.136v0l15.343-16.136v0l15.344 16.136v0l15.345-16.136v0"></path><path id="square1" fill="#4831d4" d="M112.476 1.58a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM131.444 1.58a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 1.58a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM169.38 1.58a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM188.348 1.58a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM207.315 1.58a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM226.283 1.58a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM245.252 1.58a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM264.22 1.58a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM283.188 1.58a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.002 0zM302.155 1.58a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 1.58a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM112.476 20.804a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM131.444 20.804a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM150.412 20.804a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM169.38 20.804a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM188.348 20.804a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM207.315 20.804a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM226.283 20.804a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM245.252 20.804a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM264.22 20.804a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM283.188 20.804a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.002 0zM302.155 20.804a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM321.123 20.804a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM112.476 40.026a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM131.444 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM169.38 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM188.348 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM207.315 40.026a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM226.283 40.026a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM245.252 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM264.22 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM283.188 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM302.155 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM112.476 59.25a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM131.444 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM169.38 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM188.348 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM207.315 59.25a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM226.283 59.25a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM245.252 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM264.22 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM283.188 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM302.155 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM112.476 78.473a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM131.444 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM169.38 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM188.348 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM207.315 78.473a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM226.283 78.473a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM245.252 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM264.22 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM283.188 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM302.155 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM112.476 97.696a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM131.444 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM169.38 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM188.348 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM207.315 97.696a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM226.283 97.696a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM245.252 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM264.22 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM283.188 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM302.155 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM112.476 116.92a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM131.444 116.92a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .001zM150.412 116.92a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013.001.001zM169.38 116.92a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .001zM188.348 116.92a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .001zM207.315 116.92a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM226.283 116.92a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM245.252 116.92a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013.001.001zM264.22 116.92a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .001zM283.188 116.92a1.5 1.5 0 11-3.002-.002 1.5 1.5 0 013.002.001zM302.155 116.92a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .001zM321.123 116.92a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013.001.001zM112.476 136.142a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM131.444 136.142a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 136.142a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM169.38 136.142a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM188.348 136.142a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM207.315 136.142a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM226.283 136.142a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM245.252 136.142a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM264.22 136.142a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM283.188 136.142a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.002 0zM302.155 136.142a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 136.142a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM112.476 155.365a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM131.444 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM169.38 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM188.348 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM207.315 155.365a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM226.283 155.365a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM245.252 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM264.22 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM283.188 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM302.155 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM112.476 174.588a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM131.444 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM169.38 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM188.348 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM207.315 174.588a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM226.283 174.588a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM245.252 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM264.22 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM283.188 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM302.155 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM112.476 193.811a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM131.444 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM169.38 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM188.348 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM207.315 193.811a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM226.283 193.811a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM245.252 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM264.22 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM283.188 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM302.155 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path><path fill="none" stroke="#4831d4" stroke-miterlimit="50" stroke-width="2" d="M2.114 541.705v0l-.56 22.258v0l22.258-.561v0l-.56 22.259v0l22.258-.56v0l-.56 22.258v0l22.258-.56v0l-.559 22.26v0l22.26-.56v0"></path></svg>';
        menuBar.innerHTML = '<svg id="menu-bar" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" viewBox="0 0 100 125" version="1.1" x="0px" y="0px" > <title>Menu</title> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage" > <g sketch:type="MSArtboardGroup" fill="#ccf381"> <rect sketch:type="MSShapeGroup" x="5" y="7" width="90.8784719" height="9.11814002" rx="7"/> <rect sketch:type="MSShapeGroup" x="5" y="32.5307921" width="68.158854" height="9.11814002" rx="7" /> <rect sketch:type="MSShapeGroup" x="5" y="58.0615841" width="90.8784719" height="9.11814002" rx="7"/></g></g></svg>';
        window.addEventListener('scroll', smallSize);
    }
    if(screenWidth<=768){
        profileContent.innerHTML = 'Meticulous and versatile computer science graduate with foundational skills in web development and software engineering. Proficient in JavaScript, ReactJS, and Node.js, with a strong desire to learn and adapt to emerging technologies. Possess strong problem-solving and teamwork skills. Passionate about contributing technical knowledge to creative concepts.';
        versatileContent.innerHTML = '<p><i class="fa-regular fa-circle-check" style="color:#00ba00"></i> I am a skilled web developer dedicated to crafting exceptional backend apps.</p><p><i class="fa-regular fa-circle-check" style="color:#00ba00"></i> I would be able to create engaging and user-friendly interfaces that captivate and delight users.</p><p><i class="fa-regular fa-circle-check" style="color:#00ba00"></i> I am also adaptable and capable of working on software development projects, demonstrating my versatility and commitment to delivering high-quality results.</p>';
    }
}

function smallSize() {
    if (scrollPosition >= 0 && scrollPosition <= 400) {
        menuBar.innerHTML = '<svg id="menu-bar" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" viewBox="0 0 100 125" version="1.1" x="0px" y="0px" > <title>Menu</title> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage" > <g sketch:type="MSArtboardGroup" fill="#ccf381"> <rect sketch:type="MSShapeGroup" x="5" y="7" width="90.8784719" height="9.11814002" rx="7"/> <rect sketch:type="MSShapeGroup" x="5" y="32.5307921" width="68.158854" height="9.11814002" rx="7" /> <rect sketch:type="MSShapeGroup" x="5" y="58.0615841" width="90.8784719" height="9.11814002" rx="7"/></g></g></svg>';
    }
    if (scrollPosition >= 401 && scrollPosition <= 665) {
        sk.style.color = '#3841d4';
        menuBar.innerHTML = '<svg id="menu-bar" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" viewBox="0 0 100 125" version="1.1" x="0px" y="0px" > <title>Menu</title> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage" > <g sketch:type="MSArtboardGroup" fill="#3841d4"> <rect sketch:type="MSShapeGroup" x="5" y="7" width="90.8784719" height="9.11814002" rx="7"/> <rect sketch:type="MSShapeGroup" x="5" y="32.5307921" width="68.158854" height="9.11814002" rx="7" /> <rect sketch:type="MSShapeGroup" x="5" y="58.0615841" width="90.8784719" height="9.11814002" rx="7"/></g></g></svg>';
    }
}

updateContent();
smallSize();
window.addEventListener('resize', () => {
    updateContent();
    smallSize();
});