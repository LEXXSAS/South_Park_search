let main = document.querySelector('.main');
let maintwo = document.querySelector('.maintwo');

const availableScreenWidth = window.screen.availWidth
const availableScreenHeight = window.screen.availHeight

const windowInnerWidth = window.innerWidth
const windowInnerHeight = window.innerHeight

main.innerHTML = `ScreenWidth: ${availableScreenWidth} and ScreenHeight: ${availableScreenHeight}`;
maintwo.innerHTML = `InnerWidth: ${windowInnerWidth} and InnerHeight: ${windowInnerHeight}`;
