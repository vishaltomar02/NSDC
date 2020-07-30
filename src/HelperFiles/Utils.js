export const scrollToElement = (elementId, duration) =>
{
  let element = document.getElementById(elementId);
  let elemPosition = element.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  let distance = elemPosition - startPosition;
  let startTime = null;

  function scrollAnimation(currentTime) {
    if(!startTime) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let runAnimantion = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, runAnimantion);
    if(timeElapsed < duration) requestAnimationFrame(scrollAnimation);
  }
  function ease(t, b, c, d)
  {
    t /= d/2;
    if(t < 1) return c/2 * t * t + b;
    t--;
    return -c/2 * (t * ( t-2 ) - 1) + b;
  }

  requestAnimationFrame(scrollAnimation);
}