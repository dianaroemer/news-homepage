# Frontend Mentor - News homepage solution

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
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop](./src/screenshots/screen-desktop.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

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



Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
