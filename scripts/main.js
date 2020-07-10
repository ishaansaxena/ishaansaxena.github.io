function setBackground(url, opacity) {
    // document.getElementById('main').style.background = 'rgba(255, 255, 255, 0)';
    document.body.style.background = `url(${url}) center center fixed`;
    document.body.style.backgroundSize = 'cover';
    document.getElementById('main').style.background = `rgba(255, 255, 255, ${opacity} )`;
}

(function() {
    
    // Nav Link Handling
    navLinks = document.getElementsByClassName('nav-link-inactive');
    navPrev = document.body.getAttribute('background');
    defOpac = 0.96;
    defLumi = 1;

    // Set body background
    setBackground(navPrev, defOpac);

    // For each link to a page
    for (var i = 0; i < navLinks.length; i++) {
        var el = navLinks[i];
        
        // Preload background image
        var image = new Image();
        image.src = el.getAttribute('background');
        
        // Add listeners
        el.addEventListener('mouseenter', function() {
            setBackground(this.getAttribute('background'), defOpac*defLumi);
        }, false);

        el.addEventListener('mouseleave', function() {
            setBackground(navPrev, defOpac);
        }, false);

    }

})();
