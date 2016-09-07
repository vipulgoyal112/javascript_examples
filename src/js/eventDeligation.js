/*
 * event deligation : Advantages
 * 1. Only attach one event listener to the page, rather than five hundred (in our example)
 * 2. Dynamically created elements will still be bound to the event handler.
 * 3. 'on' in jquery event deligation based
 * 
 */




$('ul').click(function(e) {  
    if ( $(e.target).is('a') ) {  
        alert('clicked');  
    }  
});  