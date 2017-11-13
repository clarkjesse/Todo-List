//// JavaScript source code
console.log("Connected");

$('button').on('click',
    function() {
        $('div').fadeOut(1000);
        console.log("this");
    });