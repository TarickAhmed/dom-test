console.log("DOM Testing...");

//Get the dom by id
let domStuff = document.getElementById("dom-stuff")
console.log("domStuff:", domStuff.innerHTML);

//create some html with a template
let newText = `<p id="new-text">
    Hello world
    console.log(Hello world)

</p>`

console.log("New Text:", newText);

//resets the html of domStuff to newText
domStuff.innerHTML = newText