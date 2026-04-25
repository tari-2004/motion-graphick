// src/utils/nav-logic.ts
export const scrollTo = (id: string, callback?: () => void) => {
  let offsetPosition = 0;

  if (id === 'top') {
    offsetPosition = 0;
  } else {
    const element = document.getElementById(id);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    offsetPosition = elementPosition + window.pageYOffset - 90;
  }

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });

  if (callback) setTimeout(callback, 500); // delay to close menu after scroll
};