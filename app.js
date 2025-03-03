
function main() {

  const sections = document.querySelectorAll('section');
  const divs = document.querySelectorAll('.div1');
  const firstPage = document.querySelector('.frame');
  const calendar = document.querySelector('.calendar');
  const saat1 = document.querySelector('.saat1');
  const saat2 = document.querySelector('.saat2');
  const img = document.querySelector('.img');
  const img_txt = document.querySelector('.img-txt');
  const great1 = document.querySelector('.great1');
  const great2 = document.querySelector('.great2');
  const txt = document.querySelector('.txt2');
  const nav = document.querySelector('.nav');

  setTimeout(() => great1.classList.add('animate_great1'), 600);
  setTimeout(() => great2.classList.add('animate_great2'), 600);
  setTimeout(() => txt.classList.add('txtfoo'), 600);
  setTimeout(() => nav.classList.add('nav-animation'), 600)


  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;

    sections.forEach((item, index) => {
      let offset = item.offsetTop - 200;
      let height = item.offsetHeight;


      if (scrollPos >= offset && scrollPos < offset + height) {


        //img animation
        if (index === 1) {

          img.classList.add('img-animate1')

          setTimeout(() => {
            img_txt.classList.add('img-animate-txt')
          }, 700)

        }


        //calendar animation
        if (index === 2) {

          calendar.classList.add('cale')
          setTimeout(() => saat1.classList.add('cale'), 600)
          setTimeout(() => saat2.classList.add('cale'), 1000)

        }







        divs.forEach((div) => {

          if (div.closest('section') === item) {

          } else {

          }
        });





      }
    });
  });



}
