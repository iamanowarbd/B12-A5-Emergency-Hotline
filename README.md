***Question No. 01***

<br/>

*getElementById*

getElementById is used to select single element by id.
<br/>
Returns a single element.
<br/>
If no element is found, it returns null.
<br/>
<br/>

*getElementsByClassName*

getElementsByClassName selects by particular class name.
<br/>
Returns a live HTMLCollection, meaning the collection automatically updates if elements are added or removed from the DOM.
<br/>
<br/>
<br/>
*querySelector*

querySelector allows selection using any valid CSS selector
<br/>
querySelector is used to select the first single element that matches a given CSS selector.
<br/>
querySelector calls run in O(n) time and getElement calls run in O(1) time. n is the total number.
<br/>
<br/>
<br/>
*querySelectorAll*

querySelectorAll also accepts any valid CSS selector.
<br/>
querySelectorAll returns all the elements like array.
<br/>
Returns a ststic NodeList
<br/>
<br/>
***Question No. 02***

First need to find out a variable what need to put in the html. Then need to take another variable and create new element - element create(document.createElement("name of the element"))
.Then need to add inner html or any contest with the created element. At last, need to find out the position where the element need to append.
<br/>
<br/>
***Question No. 03***
 
Event Bubbling is a JavaScript and DOM mechanism where an event triggered on a nested element first triggers handlers on that element, and then "bubbles up" to its parent div to parent div upward elements in the DOM hierarchy.
<br/>
<br/>
***Question No. 04***

Event bubbling allows us to locate any element and put an event there. Delegation is a technique where we add an event listener to a parent element rather than creating an event listener.And the code is arranged and loads in the browser rapidly as a result.
<br/>
<br/>
***Question No. 05***
 
The event.preventDefault() method prevents the default behavior of an element from happening. For example, if you have a form with a submit button, and you want to prevent the form from being submitted when the button is clicked, you can use preventDefault() to cancel the default submission behavior.
<br/>

The event.stopPropagation() method prevents an event from bubbling up the event chain. This can be useful if you have a click event on a parent element, and you want to prevent that event from being triggered when a child element is clicked.

