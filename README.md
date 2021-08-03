# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![Desktop](./images/screenshoot-dekstop-view.png)
![Mobile](./images/screenshoot-mobile-view.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/cesalistya/faq-accoridion-card)
- Live Site URL: [Add live site URL here](https://cesalistya.github.io/faq-accoridion-card/)

## My process

Mobile-view:

  - Layout questions and answers.
  - Layout images using CSS --background-image.
  - Adjust layout for different screen sizes using    media-queries.

Desktop-view:

- Change accordion layout to 'landscape' style layout.
- Display desktop-svgs using CSS syntax for multiple-backgrounds.

Hide show answers:

- Use JS to toggle CSS-class.show-text which hides/shows answer elems and applies increased font-weight to clicked-questions.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript

### What I learned

The most valuable experience I gained from this project was working with svgs and implementing them using the background-image property. Towards the end of the project while working on desktop-views for the project I discovered the CSS syntax for applying multiple background-images to a single element and this helped greatly.

To see how you can add code snippets, see below:

```html
<section id="images-card">
        <div class="bg-desktop-and-mobile"></div>
        <div class="bg-shadow"></div>
</section>
```

```css
.bg-desktop-and-mobile {
  background-image: url(./images/illustration-box-desktop.svg),
    url(./images/bg-pattern-desktop.svg),
    url(./images/illustration-woman-online-desktop.svg);
  background-repeat: no-repeat;
  background-position: left, center, center;
  background-size: 12.188rem, 30.313rem 42.813rem, 30.313rem;
  position: relative;
  top: 0;
  left: -6rem;
  width: 31.875rem;
  height: 30.313rem;
}
}
```

### Continued development

I will further improve my skills in CSS and Javascript.

### Useful resources

- [CSS Multiple Background Images (W3 Schools Website)](https://www.w3schools.com/Css/css3_backgrounds.asp) - This is a useful resource for the CSS syntax for applying multiple background-images to a single element.
- [Javascript DOM event toggle](https://www.w3schools.com/howto/howto_css_switch.asp) - This is an amazing article which helped me finally understand event toggle to manipulate HTML.

## Author

- Frontend Mentor - [@cesalistya](https://www.frontendmentor.io/profile/cesalistya)

