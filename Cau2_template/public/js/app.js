function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
let operation = document.querySelector("#operation");
const game = document.querySelector("#game");
let btn = document.querySelector("#btn-start");
let score = document.querySelector("#score");
score.textContent =0;
let diem = 0;


function newGame() {
    game.innerHTML=`<div class="circle"></div>`;
    for(let i =0; i<7;i++)
{
    game.innerHTML+=`<div class="circle"></div>`;
}
    let phepTinh = getRandomIntInclusive(1,99)+" + "+getRandomIntInclusive(1,99);
// operation.textContent= phepTinh;
let mang = [];
// for (let i = 0; i < 7; i++) {
//     mang[i]= getRandomIntInclusive(-10,20)+eval(phepTinh);
//     while(mang[i]==eval(phepTinh))
//     {
//         mang[i]= getRandomIntInclusive(-10,20)+eval(phepTinh);
//     }
// }
mang[9]= +eval(phepTinh);

let viTri=0;
let circle = document.querySelectorAll(".circle");
let top = 250;
let heSotop=25;
let left = 310;
circle.forEach(element => {
    heSotop = 25*Math.floor(Math.random() * 12);
    let topp = top+heSotop;
    element.style.top = `${topp}px`;
    element.style.left = `${left}px`;
    element.textContent=mang[viTri++];
    left+=100;
});
circle.forEach(element => {
    element.addEventListener('click',function () {
        if (+this.textContent==eval(phepTinh)) {
            diem++;
            score.textContent=diem;
            newGame();
        }else{
            diem--;
            score.textContent=diem;
            newGame();
        }
    })
});
}
btn.addEventListener('click',function () {
    newGame();
})

