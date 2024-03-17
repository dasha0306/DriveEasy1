document.addEventListener('DOMContentLoaded', function() {
   
    const textElement = document.querySelector('.about-para p');
    textElement.style.opacity = 0; 
    const fadeInText = () => {
       let opacity = 0;
        const intervalId = setInterval(() => {
            opacity += 0.1;
            textElement.style.opacity = opacity;
            if (opacity >= 1) {
                clearInterval(intervalId);
            }
        }, 100); 
    };

    setTimeout(fadeInText, 500);
});
document.addEventListener('DOMContentLoaded', function() {
   
    document.body.style.display = 'block';
    document.body.style.opacity = 0;

    fadeIn(document.body, 1000);

  
    function fadeIn(element, duration) {
        var opacity = 0;
        var interval = 50;
        var gap = interval / duration;

        function func() {
            opacity += gap;
            element.style.opacity = opacity;

            if(opacity >= 1) {
                clearInterval(fadeInterval);
            }
        }

        var fadeInterval = setInterval(func, interval);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    
    var featuredItems = document.querySelectorAll('.featured-item');
    featuredItems.forEach(function(item) {
        item.classList.add('animate-in');
    });
});
document.addEventListener('DOMContentLoaded', function() {
   
    var elements = document.querySelectorAll('.animate-in');

    
    elements.forEach(function(element) {
       
        element.classList.add('show');
    });
});
