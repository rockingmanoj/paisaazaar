// document.getElementById("sub").addEventListener("click", function() {
//   var txt = document.getElementById("textneed").textContent;
//   console.log(txt);
// });

var Sentiment = require("sentiment");
var sentiment = new Sentiment();
var qualityc = "Lets Check";

var docx = sentiment.analyze(
  "We will be very happy if you take the insurance policy.Thats Fine I think it will be really useful.Thanks"
);
console.log(docx);
console.log(docx.score);
if (docx.score > 3) {
    qualityc = "Awesome Customer Experience";
}
else if (docx.score == 2) {
    qualityc = "OK";
}
else {
    qualityc = "Need to improve";
}
console.log(qualityc)
