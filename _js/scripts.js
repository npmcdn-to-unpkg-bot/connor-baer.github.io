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
// initialise
headroom.init();


// SMOOTHSCROLL //

smoothScroll.init({
	easing: 'easeInOutCubic', // Easing pattern to use
});