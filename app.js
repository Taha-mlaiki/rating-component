document.addEventListener("DOMContentLoaded", function () {
    let feed = document.querySelectorAll(".feed span");
    let result = document.querySelector(".box");
    
    feed.forEach(element => {
        element.addEventListener("click", function () {
            feed.forEach(e => {
                e.classList.remove("active");
            })
            element.classList.add("active");
            console.log(element)
        })
    });
    
    let button = document.querySelector("[type='submit']");
    
    button.addEventListener("click",function(){
        let selection = document.querySelector(".sel");
        let feedResult = "2";
        const activeElement = Array.from(feed).find(e => e.classList.contains("active"));
        if (activeElement) {
            feedResult = activeElement.innerHTML;
        }
        result.style.zIndex = "-1"
        selection.innerHTML = feedResult;
        console.log(feedResult)
    })
})

