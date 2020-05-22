// Select every list item element
const items = document.querySelectorAll('#timeline li');

/* The rect is the result of taking the current element and calling the getBoundingClientRect()
  function on it, which returns the size of the element and its current position relative to the viewport.
  With this information we can check whether or not the element is fully contained within the viewport and,
  if so, we return true to the 'run' function */
const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/* The run function.
  This iterates through every list item element and, for each element, calls the
  isInViewport function, which will return true or false depending on whether or not
  the current list item element is fully contained within the viewport or not.
  If the returned value is true, then the list item has the class 'show' added to it and
  if false, has the class 'show' removed from it, if it exists for that item */
const run = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
    else {
      item.classList.remove('show');
    }
  });

/* Events
  When the window is loaded, resized, or when the user scrolls on the page, call the
  'run' function */
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);
