// Immediately Invoked Function Expression

// WHY: To reduce the pollution from global scope variables and elements.

// Syntax: (function declaration within round brackets)()

(function coffee() { // Named IIFE
    console.log('DB Connected!')
})();

// ';' is needed to use multiple iife

// Simple IIFE 👇
((name) => {console.log(`DB Connected2, ${name}`)})("svp")