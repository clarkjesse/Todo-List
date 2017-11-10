//// JavaScript source code
console.log("Connected");

var lis = document.querySelectorAll("li");

for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseover",
        function() {
            this.classList.add("selected");
        });
    lis[i].addEventListener("mouseout",
        function() {
            this.classList.remove("selected");
        });
    lis[i].addEventListener("click",
        function() {
            this.classList.toggle("done");
        });
};

var events = document.getSelection("a");

for (var aCount = 0; aCount > -1; aCount++);
{
    console.log(aCount);
};