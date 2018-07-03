// LikeFree
// @Author Vivek Bhookya
// The scripts that remove the likes
// TODO:

// Run script whenever user scrolls....
// Instagram's list for their feed is dynamic.
// A post that once had its likes removed will regain them if scrolled
//  too far after it. .scroll() and .mousemove() ensures that my script will match
//  Instagram's loading scripts
$(document).ready(function () {
  // chrome.runtime.setUninstallURL('https://docs.google.com/forms/d/e/1FAIpQLSdzaT3XlrWHJfnzKjUzrNTCFZJBk9HIO0LskHhu4YNH7z_hOQ/viewform?usp=sf_link');

  hide();
  setInterval(hide, 30);

  // Covering all the bases lmao jquery is too OP
  // For when you can't scroll,
  $(document).mousemove(hide);

  // For when you scroll for extended periods of time but
  //  don't use your mouse,
  $(document).scroll(hide);
});

// Helper function
// NO TAG LEFT BEHIND 😼
// Randomly-generated IDs that change over time will leave old .remove()s useless,
//  hence the incredible amount of tags we are accounting for :/
function hide()
{
    // Remove photo likes and video views
    //  by calling the container ids
    // Yes, this assumes that the container IDs are not
    //  going to be the same between IG and FB ;)
           // --- INSTAGRAM --- //
           $(".y9v3U").remove();                            // Photos
           $("._9Ytll").remove();                            // Videos
           $(".uk0Yc").remove();                             // The tiny heart notification
           // $("._5ugh").remove();    // Goodbye notifications

           // --- FACEBOOK --- //
           $("._4_dr").remove();                             // "Liked by"
           $("UFIRow UFILikeSentence _4204 _4_dr").remove(); // "Like bar" under posts
           $("._hly").remove();                              // Reaction number in comments
           $(".UFICommentLikeButton").remove();              // Reaction icon in comments
           $(".UFIShareRow").remove();                       // "Times shared" row
           $("._10lp").remove();                             // Like/reactions white bubble under comments
           $("._1g5v.js_b4").remove();
           $("._1vaq").remove();
           $("._1t6k").remove();

           // $("#notificationsCountValue").remove();
           // $("#mercurymessagesCountValue").remove();
           // $("#requestsCountValue").remove();

           // When FACEBOOK posts fill the screen
           $("._ipn").remove();    // Reaction number (1/2)
           $("._1g5v").remove();   // Reaction count (2/2)
           $(".js_1kz").remove();  // "Liked by"
           $("._50f8").remove();   // View count
           $("._2x4v").remove();   // Reaction number in comments
           $(".rfloat _ohf").remove();


}
