// IIFE -- Immediately Invoked Function Expression

// Student id:300976059
// Name:kranthi kumar G  janardhanaraj
// Date:17-FEB-2019 


(function(){

    function Start() {
        console.log(`%c App Started...`, 
        "font-size: 20px; color: blue; font-weight: bold");

        $(".btn-danger").click(function(event) {
            if(!confirm("Are you sure???")) {
                event.preventDefault();
                window.location.assign("/contact-list");
            }
        });
    }
    
    window.addEventListener("load", Start);

})();