# [Frontend Mentor - News homepage solution](https://dianaroemer.github.io/news-homepage/)

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop Screenshot at 1440x1024](https://raw.githubusercontent.com/dianaroemer/news-homepage/main/src/screenshots/screen-desktop.png)

![Mobile Screenshot at 375x667](https://raw.githubusercontent.com/dianaroemer/news-homepage/main/src/screenshots/screen-mobile.png)

![Mobile Menu Screenshot at 375x667](https://raw.githubusercontent.com/dianaroemer/news-homepage/main/src/screenshots/screen-mobile-menu.png)


### Links

- Solution URL: [Solution URL](https://github.com/dianaroemer/news-homepage)
- Live Site URL: [Live Site URL](https://dianaroemer.github.io/news-homepage/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Sass](https://sass-lang.com//) - CSS Extension Language


### What I learned

I struggled somewhat with properly implementing appropriate z-index values for multiple components. In the future, I would like to practice using z-index to see which components will draw first, then see which components can be affected by changing their z-index values, based on the order in which they are drawn by the webpage. Similarly, I learned about how z-index is overridden by adjusting a component's opactiy or by applying a transform. While I don't have a complete understanding of why that's the case, it seems to have to do with how elements with adjusted transform and opacity values are drawn differently from other, unadjusted elements. 

In addition, I learned about drawing and resizing SVG elements, or more specifically using viewBox on an SVG element to designate the area of the SVG that get's drawn, then adjusting the element's height and width in the styling 'after' the viewbox declares the size of the element to draw. Long story short, when drawing SVG's, declare their viewBox appropriately before adjusting any other styling of the SVG to ensure the browser draws the SVG appropriately, instead of clipping corners. 
    In the future, when using viewBox to scale and place SVG's, add a 
    ```css
    #menuIconSVG {
      border: 1px solid black;
    }
    ```
    to see its placement and the sizing/scaling of the SVG within the viewBox, instead of just guessing white on white or black on black. The border shows the size of your box, and you can manually adjust height, width, min-x, and min-y to place the SVG correctly, finalizing with tweaks to padding and margin once the size is set.

Ok, I'm really proud of this one. I was able to get CSS transitions to work on a rendered React component without completely redrawing the component, allowing for variable state to affect the components current transition lifetime. By drawing the component as normal, then applying variable styling using the state or props of the parent component, you can tie functionality to the true or false values of the state or props. Then, by passing that variable into the style of the rendered component and defining some transition definitions in the CSS, the transitions apply "mostly" seamlessly. Check this out - 

```js
let [view, setView] = useState(true)
return (
  <div className="modal" style={{left: view && "500px"}}>
    modal content
  </div>
)
```
and
```css
.modal {
  left: 0px;
  transition: 1s left;
}
```

As seen above, the state of the `view` variable determines whether or not the .modal component renders its style with 500px or with the CSS declared 0px. Applying a transition over changes to the left property keeps the modal rendered in the DOM and allows it to be moved freely on and off of the webpage with animations going both ways. This also applies, and works well, with the visibility property - e.g.
```js
<div className="modal" style={{left: view && "500px", visbility: none}}>
```
```css
.modal {
  left: 0px;
  visibility: visible;
  transition: 0s visibility, .5s left;
}
```

One of the problems I discovered in using this, is that when the component animates in or out, it has a tendency to stay where it was last put. While it may sound counterintuitive, I found success using setTimeout and two state management variables to move my components behind the scenes - take a look at the function handleOpenMenu in NewsHomepage.js and how it passes those state values down to MobileMenu.js at '.mobileMenuFull' and '.mobileMenuSidePane'. That problem might be resolved in the future by reversing the order in which I animate these components - instead of applying the true state to the hidden state, apply the true state to the visible state, and allow the the false state to correspond to the hidden state. For better examples, see the reference code I found here
https://blog.openreplay.com/mastering-css-transitions-with-react-18/



### Continued development

In the future, I would like to continue to explore animating modals in React. While this solution worked 'somewhat' for this project, I still feel as though there ought to be a better way to make modals animate appropriately without such an obtuse styling method. 
Additional development goals: 
 - More appropriate Semantic HTML structure
 - Adding Typescript to my React applications for safer typing
 - Learning a testing framework (Jest?)
 - Continue exploring Sass - nested styling looks very powerful
 - Improved modals in future React applications
 - Better Footer placement - see my notes in Useful Resources, effectively copied from my Interactive Rating Component
 - Practice more complex uses of Grid 

### Useful resources

- [devDocs.io](https://devdocs.io/) - Developer documentation for nearly everything I'm using, listed in one place and stored locally, so I don't have to google around to find the specific documentation relevant to whatever function I want to use (ex: does line-height use pixels or scale?)
- [Pixlr](https://pixlr.com/) - Photoshop in a browser. Useful for checking specific sizes of elements, getting exact color palettes, etc.
- [How to keep your Footer where it belongs?](https://www.freecodecamp.org/news/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c/) - A short FreeCodeCamp article about how to place a footer so that it goes where it's supposed to without ruining the rest of the document. While helpful, I still haven't quite resolved the `#content-wrap {padding-bottom: 1rem;} #footer Height` issue, in which including this line creates an additional bit of padding on the bottom the page which creates a vertical scroll bar in some environments, despite space being available for the footer. Still, quite helpful for understanding how to get better Footer placement.
 - [Mastering CSS Transitions with React 18- Modal Animations](https://blog.openreplay.com/mastering-css-transitions-with-react-18/)
  - Very useful website that gave me the framework for writing and implementing an animated modal in React for this project. Modifications were made to animate the modal responsively and prevent the modal from activing in desktop view, in addition to animating the modal from a horizontal position, rather than a vertical one. 


## Author

- Website - [Diana Roemer](https://github.com/dianaroemer)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/dominicroemer)