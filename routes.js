/*
  HRouter supports method chaining
  and 'hrView' is a variable that points to
  the block-level element
  with id="hrView".
*/
var route = new HRouter();
route.on("/", function (req) {
        document.title = "Home";
        //   hrView.innerHTML = "Hello world";
        hrView.innerHTML = "Homepage - view <a href='#/user/Horlahcoded'>next</a> profile.";
    })
    .on("/user/:name", function (req) {
        var name = req.params.name;
        document.title = "User " + name;
        console.log("hello")
        //   hrView.innerHTML = name + " profile <a href='#/search?q=HRouter'>search</a>.";
        var myTemplate = document.getElementById('mainnav')
        let contentdiv = document.getElementById("maincontent");

        clearContent(contentdiv)

        // document.getElementById("hrView").remove
        contentdiv.appendChild(myTemplate.content.cloneNode(true))
        //   hrView.innerHTML = 
    })
    .on("/search", function (req) {
        var search = req.query.q;
        document.title = "Results for " + search;
        hrView.innerHTML = "Results for " + search + "<a href='/'>home</a>.";
    });

const clearContent = (element) => {
    // let node = document.getElementById("hrView")
    while (element.hasChildNodes()) {
        element.removeChild(element.lastChild);
    }
}
route.run();