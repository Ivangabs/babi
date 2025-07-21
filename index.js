// Initialize Swiper
const swiperWrapper = $(".swiper-wrapper");
const messages = [
    "I love looking at your eyes, and how expressive they are.",
    "I love how your nose looks.",
    "I love how you do your makeup."
];

var startingPoint = 2;
var randHex;
for (const message of messages) {
    randHex = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    $(swiperWrapper).append(
        `<div class='swiper-slide' style='background-color:${randHex}'><span>${message}</span></div>`
    );
}