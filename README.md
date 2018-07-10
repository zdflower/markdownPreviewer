# markdownPreviewer - 2018 update
Visor de texto codificado en markdown - Proyecto de FreeCodeCamp

Built with [React.js](https://reactjs.org/) and [Marked.js](https://github.com/markedjs/marked).

https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer

## User Stories
- [x] #1: I can see a textarea element with a corresponding id="editor".
- [x] #2: I can see an element with a corresponding id="preview".
- [x] #3: When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.
- [x] #4: When I enter GitHub flavored markdown into the #editor element, the text is rendered as HTML in the #preview element as I type.
- [x] #5: When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
- [x] #6: When my markdown previewer first loads, the default markdown in the #editor field should be rendered as HTML in the #preview element.

## Comments
To render the parsed markup with React you need to use the property [dangerouslySetInnerHTML](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml).
