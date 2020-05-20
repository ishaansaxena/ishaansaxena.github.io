function setBackground(url) {
    document.getElementById('main').style.background = 'rgba(0, 0, 0, 0)';
    document.body.style.backgroundImage = `url(${url})`;
    document.getElementById('main').style.background = 'rgba(0, 0, 0, 0.95)';
}

(function() {

    // Nav Link Handling
    navLinks = document.getElementsByClassName('nav-link');
    navOpen = false;
    navPrev = '';
    // For each link to a page
    for (var i = 0; i < navLinks.length; i++) {
        var el = navLinks[i];
        
        // Preload background image
        var image = new Image();
        image.src = el.getAttribute('background');
        
        // Add listeners
        el.addEventListener('mouseenter', function() {
            setBackground(this.getAttribute('background'));
        }, false);

        el.addEventListener('mouseleave', function() {
            if (!navOpen)
                setBackground('');
            else
                setBackground(navPrev);
        }, false);

        el.addEventListener('mousedown', function(e) {
            navPrev = this.getAttribute('background');
            navOpen = true;
            setBackground(navPrev);
        }, false);

        // Heading Listeners
        heading = document.getElementById('title');
        heading.addEventListener('mousedown', function(e) {
            navPrev = '';
            navOpen = false;
            setBackground('');
        }, false);

    }

})();