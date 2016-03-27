var blogItems = [];



// create the function to insert the blog items into div's on the page //
function loadBlogItem(itemIndex) {        //name the new function //
    var numBlogItems = blogItems.length;  // check the length of the blogItems array and put in variable numBlogItems //
    if (numBlogItems < 1) {               // if the array is less than 1 (empty) then exit //
        return;
    }

    // modified from example code from https://api.jquery.com/html/ and http://api.jquery.com/attr/

    var blogItem = blogItems[itemIndex];  //create a new variable to contain the itemindex of the blogItem array //
    console.log(blogItem);  //  to check the contents of the variable in the console //
    $("#blogTitle").html(blogItem.title); //insert the blog text/images located at a specific index in the array into the specified  title div id on the webpage //
    $("#blogText").html(blogItem.text);   //insert the blog text/images located at a specific index in the array into the specified text div id on the webpage //
    $("#blogImage").attr("src", blogItem.image);  //insert the blog text/images located at a specific index in the array into the specified image div id on the webpage //

    var elements = $("#similarArticles li"); // Get all LIs that are inside the DOM element with the ID similarArticles and store them in the variable elements. created the variable to store it to be able to work with it later.

    // Loop through similarArticles... code modified from http://stackoverflow.com/questions/19680445/how-to-append-a-jquery-variable-value-inside-the-html-tag

    for (var i = 0; i < blogItem.similarArticles.length; i++) {
        // Build an anchor with the url and label.
        var link = '<a href="' + blogItem.similarArticles[i].url + '">' + blogItem.similarArticles[i].label + '</a>'
        // Inject the link into LI[i]
        $(elements[i]).html(link);
    }

    // Button state logic
    // code modified from https://api.jquery.com/addclass/

    // handle prev button
    if (itemIndex == 0) {
        //disable prev button
        $("#previous").addClass("inactiveButton");
    } else {
        //enable prev button
        $("#previous").removeClass("inactiveButton");
    }

    // handle next button
    if (itemIndex == numBlogItems-1) {
        //disable next button
        $("#next").addClass("inactiveButton");
    } else {
   
        //enable next button
        $("#next").removeClass("inactiveButton");
    }


        
}

//creating the event handler //

var currentItem = 0; // set variable currentItem to zero //

$(document).ready(function () {  // function to start immediately when the page loads //

    // JSON CODE //
    $.getJSON("/Content/blogItems.json", function (data) {
        blogItems = data;
        loadBlogItem(currentItem);   // pass the current item into the loadBlogItem function eg index 0, index 1 to see what it currently is at //
    });


    // based on code from http://api.jquery.com/click/

    $("#previous").click(function () {  // create the event to trigger the loadBlogItem function when the previous "previous" div is clicked //
        if (currentItem > 0) {          // check to see what index the currentItem is at (what item in the blogItems array is currently on the page.  If its at more than 0 that means its at the second item (index1) so there is an item at index 0 to click back to. //
            currentItem = currentItem - 1;  // change the currentItem from 1 to 0 because we have clicked (and are able to) go back to the previous item in the array //
            loadBlogItem(currentItem);   // pass the new current intem (which is now 0, so the first blog object in the array) into the loadBlogItem function which will put the attributes of blog item at index 0 in the 'blogItems' array into the related div's on the webpage.
        }
    });

    $("#next").click(function () {  // create a click event on the 'next' div to trigger the loadBlogItem function when it's clicked //
        if (currentItem + 1 < blogItems.length) {  // checks the length of the blogItems array.  if the currentItem is less than 2 after its had +1 added to it, that means currentItem is at 0 and it means there is another blog item to move onto next.
            currentItem = currentItem + 1;         // now that we know currentItem is at index 0, +1 can be added to load the blog arrtibutes at index 1 of the blogItems array.
            loadBlogItem(currentItem);             // this function loads the blog items from the currentItems index //
        }
    });

});

