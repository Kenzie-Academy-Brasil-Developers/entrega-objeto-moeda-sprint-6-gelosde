## Coin Object


Today you will practice what you've read about 
[objects in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics) 
by creating a coin object. The coin object will represent whether a single coin is 
heads or tails. You will add several *methods* (a method is a function that is a 
property of an object) to it to support flipping the coin and displaying which side 
is currently facing up.

Start from the following code template, and fill in the incomplete or missing code 
indicated by the comments:

```
const coin = {
    state: 0,
    flip: function() {
        // 1. Randomly set your coin object's "state" property to be either 
        //    0 or 1: use "this.state" to access the "state" property on this object.
    },
    toString: function() {
        // 2. Return the string "Heads" or "Tails", depending on whether
        //    "this.state" is 0 or 1.
    },
    toHTML: function() {
        const image = document.createElement('img');
        // 3. Set the properties of this image element to show either face-up
        //    or face-down, depending on whether this.state is 0 or 1.
        return image;
    }
};

function display20Flips() {
    const results = [];
    // 4. Use a loop to flip the coin 20 times, each time displaying the result 
    // of the flip as a string on the page.  After your loop completes, return an array with 
    // the result of each flip.


}

function display20Images() {
    const results = [];
    // 5. Use a loop to flip the coin 20 times, and display the results of each 
    // flip as an image on the page.  After your loop completes, return an array with result 
    // of each flip.


}
```

Note that you will need to download or create images to use to display face-up or face-down 
coins for the toHTML method. Create a folder directory named *images* in your repository to 
hold them.

Test and demonstrate that your coin object is complete doing the following:

- Write a function called *display20Flips* that uses a loop to flip the 
coin 20 times.  Each time the coin flips, display the result of each flip as a string 
on the page (make use of your toString() method) and also push the result of the flip 
to the array 'results'.  After your loop completes, return the results array.

- Write a function called *display20Images*, again using a loop to flip the 
coin 20 times...but this time instead of displaying the result as a string, display the 
result of each flip as an HTML IMG element on the page (make use of your toHTML() method). 
Also push each result to the array 'results' and return the results array after your loop 
completes.

Your HTML file should have nothing in the body except for your script tag.  
Instead of hard-coding HTML elements, create them dynamically with Javascript 
and append them to your HTML using [document.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
and [Node.appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)

