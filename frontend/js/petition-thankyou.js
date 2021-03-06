function petitionThankyou(Scroll) {
  if (!document.querySelector('.page-template-petition-thankyou')) return;

  const stepSign = document.querySelector('.js-step-sign');
  const stepShare = document.querySelector('.js-step-share');
  const stepDonate = document.querySelector('.js-step-donate');

  const screenShare = document.querySelector('.js-screen-share');
  const screenDonate = document.querySelector('.js-screen-donate');

  // If I choose YES on "Will you donate?"
  document.querySelector('.js-yes-donate').addEventListener('click', e => {
    screenDonate.classList.add('is-visible');

    stepDonate.classList.remove('is-disabled');
    stepDonate.classList.remove('is-crossed');

    Scroll.animateScroll(screenDonate);
  });

  // If I choose NO on "Will you donate?"
  document.querySelector('.js-no-donate').addEventListener('click', e => {
    screenShare.classList.add('is-visible');

    stepDonate.classList.remove('is-disabled');
    stepShare.classList.remove('is-disabled');
    if (!stepDonate.classList.contains('is-checked')) {
      stepDonate.classList.add('is-crossed');
    }

    Scroll.animateScroll(screenShare);
  });

  // If I choose SKIP on the donate screen
  document.querySelector('.js-skip-donate').addEventListener('click', e => {
    screenShare.classList.add('is-visible');

    stepShare.classList.remove('is-disabled');
    if (!stepDonate.classList.contains('is-checked')) {
      stepDonate.classList.add('is-crossed');
    }

    Scroll.animateScroll(screenShare);
  });

  // If I click any share thing on the sharing screen
  document.querySelectorAll('.js-share-fb, .js-share-email').forEach(el => {
    el.addEventListener('mousedown', e => {
      // If the user presses the main button or the middle button
      // (amiddle button click usually opens the link in a new tab)
      if (e.button === 0 || e.button === 1) {
        stepShare.classList.remove('is-crossed');
        stepShare.classList.add('is-checked');
      }
    });
  });

  // If I submit the DONATE form
  document
    .querySelector('.js-screen-donate form')
    .addEventListener('submit', e => {
      stepDonate.classList.add('is-checked');
    });
}

export default petitionThankyou;
