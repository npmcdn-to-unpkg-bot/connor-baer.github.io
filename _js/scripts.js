// HEADROOM //

// grab an element
var hrBody = document.body;
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(hrBody, {
    // vertical offset in px before element is first unpinned
    offset: 64,
    // scroll tolerance in px before state changes for up/down scroll
    tolerance: {
        up: 10,
        down: 5
    }
});


// SMOOTHSCROLL //

// initialise
headroom.init();

smoothScroll.init({
	easing: 'easeInOutCubic', // Easing pattern to use
    offset: 32, // Integer. How far to offset the scrolling anchor location in pixels
});