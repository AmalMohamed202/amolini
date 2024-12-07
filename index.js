const figureNo = document.getElementById("answer-no-figure");
const figureYes = document.getElementById("answer-yes-figure");

const answerNoImg = document.getElementById("answer-no-img");


figureNo.addEventListener('mouseenter', () => {

  const rect = figureNo.getBoundingClientRect();
  if (figureNo.style.position !== 'absolute') {
    figureNo.style.position = 'absolute';
    figureNo.style.left = `${rect.left}px`;
    figureNo.style.top = `${rect.top}px`;
  }

  const vpWidth = window.innerWidth;
  const vpHeight = window.innerHeight;

  const x = Math.random() * (vpWidth - figureNo.offsetWidth);
  const y = Math.random() * (vpHeight - figureNo.offsetHeight);

  const curX = rect.left;

  figureNo.style.position = 'absolute';
  figureNo.style.left = `${x}px`;
  figureNo.style.top = `${y}px`;
  
  (x > curX) ?
    answerNoImg.style.transform = 'scaleX(1)'
  : answerNoImg.style.transform = 'scaleX(-1)';

});

figureYes.addEventListener('click', function() {
    const sound = document.getElementById('cow-moo');
    sound.play();
});

