// Challenge 1: dokümandaki tüm resimlerin üzerine mouse ile gelince(mouseenter) üzerine gelinen resme class olarak grayscale eklensin. mouse çıkınca(mouseleave) grayscale classı çıkarılsın.

const images = document.querySelectorAll('img');
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('mouseenter', (event) => {
    event.target.classList.add('grayscale');
  });
  images[i].addEventListener('mouseleave', (event) => {
    event.target.classList.remove('grayscale');
  });
}

/*
Challenge 2: sayfa aktif iken(herhangi bir yerine mouse ile tıklayınca):
- klavyedeki 1 tuşuna basınca body'e theme1, 2'ye basınca theme2, 3'e basınca theme3 classlarını eklesin.
- "Esc" tuşuna basınca classı sıfırlasın
*/

document.addEventListener('keydown', (event) => {
  const body = document.querySelector('body');
  if (event.key === '1') {
    body.setAttribute('class', 'theme1');
  } else if (event.key === '2') {
    body.setAttribute('class', 'theme2');
  } else if (event.key === '3') {
    body.setAttribute('class', 'theme3');
  } else if (event.key === 'Escape') {
    body.setAttribute('class', null);
  }
});

/*
Challenge 3: Input alanına bir şeyler yazınca(input event):
- Büyük harfe dönüştürsün
- 5 karakter'den büyük olduğunda buttonı enabled etsin. küçük ise disabled etsin.
*/
document.querySelector('input').addEventListener('input', (event) => {
  const buyukHarf = event.target.value.toUpperCase();
  event.target.value = buyukHarf;
  const button = document.querySelector('button');
  if (buyukHarf.length > 5) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});

/*
Challenge 4: Form submit edildiğinde;
- input alanındaki metni alıp, id'si submitResult olan paragrafa metin olarak "{value} başarı ile kaydedildi..." yazsın.
- input alanını sıfırlasın.
- kaydet butonunu disabled yapsın.
*/

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault;
  const input = document.querySelector('input');
  const metin = `${input.value} başarı ile kaydedildi...`;
  document.querySelector('#submitResult').textContent = metin;
  input.value = '';
  document.querySelector('button').disabled = true;
});
