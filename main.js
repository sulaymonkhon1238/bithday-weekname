// let inputt = document.querySelector("input");
// let button = document.querySelector("button");
// let ul = document.querySelector("ul");

//  button.addEventListener('click' , function (e){
//     button.textContent = e.target.value;
//     e.preventDefault();
//  })

let elBtn = document.querySelector('.btn');
let elDay = document.querySelector('.sana');
let elMonth = document.querySelector('.oy');
let elYear = document.querySelector('.yil');
let elAnswer = document.querySelector('.answer');

const getUserInfo = (e) => {
    e.preventDefault();

    let day = elDay.value -0 ;
    let month = elMonth.value -0 ;
    let year = elYear.value -0;

 days (day, month, year);
  }  
  //days
const days =(day,month,year) =>{

    let weekDays = {
        0: 'Yakshanba',
        1: 'Dushanba',
        2: 'Seshanba',
        3: 'Chorshanba',
        4: 'Payshanba',
        5: 'Juma',
        6: 'Shanba'
    };

    let months = ['Yanvar', 'Fevral','Mart',
    'Aprel','May','Iyun','Iyul','August','Sentabr',
     'Oktabr', 'Noyabr', 'Dekabr'];

   let time = new Date(year, month-1, day) ;

   let weekDay = time.getDay();
   let result = weekDays[weekDay];
   elAnswer.textContent = `${day}- ${months[month - 1]} ,${year}-yil,${result}!🐣`;
   elAnswer.style.color = 'green';
// console.log(elAnswer);
}
elBtn.addEventListener('click', getUserInfo) ;