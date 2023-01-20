const countsNeeded = 10;
let counts = 0;
const stack = []
const award = ["10.000 VNĐ", "<img alt='nit' width='100px' src='https://1.bp.blogspot.com/-mWFx9AKoFI4/YK5YrLmRIhI/AAAAAAAAA5E/rtunb3NxlTk_pOeYF8yV3rnjE2DclKduwCLcBGAsYHQ/s800/con-cai-nit-nghia-la-gi.jpg'/>",
    "20.000 VNĐ", "Không được đồng nào", "Bạn phải chuyển khoản lại cho mình 20.000 VNĐ", "50.000 VNĐ", "Chúc bạn sinh nhật vui vẻ", "Chúc sớm có người yêu nha","Chúc bạn may mắn lần sau"]

const present = document.querySelector('.present');
const gift = document.querySelector('.gift');
const count = document.querySelector('.count');

present.addEventListener('click', () => {
    count.innerHTML=Number(count.innerHTML)-1>=0?Number(count.innerHTML)-1:0
    counts += 1;
    present.style.setProperty('--count', Math.ceil(counts / 2));
    present.classList.add('animate');
    setTimeout(() => {
        present.classList.remove('animate');
    }, 300);

    if (counts >= countsNeeded && localStorage.getItem('open') !== "true") {
        present.classList.add('open');
        const random = award[Math.floor(Math.random() * award.length)]
        gift.innerHTML = `
        Chúc mừng Luận đã nhận được <div style="color:red"> ${random}</div>
        `
        localStorage.setItem("open", true)
        counts=0
    }
    else
    if (counts >= countsNeeded && localStorage.getItem('open') === "true"){
        present.classList.add('open');

        gift.innerHTML=`<span style="font-size:50px,color:white">Có vẻ như bạn đã mở quà rồi</span>`
    }

});

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let width;
let height;
let lastNow;


function resize() {
    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

}




function init() {
    resize();
}

window.addEventListener('resize', resize);


init();

// url action
const stuff = ['Chúc', 'Luận', 'Sinh', 'Nhật', 'Vui', 'Vẻ', '🎁'];

function loop() {
    stuff.unshift(stuff.pop());

    window.location.hash = stuff.join();

    setTimeout(loop, 250);
}

loop();
