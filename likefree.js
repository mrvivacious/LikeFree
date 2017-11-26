// @Author Vivek Bhookya

// Helper function
function hide()
{
    // Remove photo likes and video views
    //  by calling the container ids
    // Yes, this assumes that the container IDs are not
    //  going to be the same between IG and FB ;)
    $(document).ready(function () {
      // --- INSTAGRAM --- //
      $("._nt9ow").remove();  // Photos
      $("._sokb7").remove();  // Videos
      $("._nlmjy").remove();  // Photo pop-ups on profile

      // --- FACEBOOK --- //
      $("._4_dr").remove();   // "Liked by"
      $("UFIRow UFILikeSentence _4204 _4_dr").remove(); // "Like bar" under posts
      $("._hly").remove();    // Reaction number in comments
      $(".UFICommentLikeButton").remove(); // Reaction icon in comments
      $(".UFIShareRow").remove(); // "Times shared" row

      // When FACEBOOK posts fill the screen
      $("._ipn").remove();    // Reaction number (1/2)
      $("._1g5v").remove();   // Reaction count (2/2)
      $(".js_1kz").remove();  // "Liked by"
      $("._50f8").remove();   // View count
      $("._2x4v").remove();   // Reaction number in comments
      $(".rfloat _ohf").remove();



    });
}

// Run script whenever user scrolls....
// Instagram's list for their feed is dynamic.
// A post that once had its likes removed will regain them if scrolled
//  too far after it. .scroll() ensures that my script will match
//  Instagram's loading scripts
$(document).ready(function () {
  //Initial remove on load
  $("._nt9ow").remove();
  $("._sokb7").remove();
  $("._nlmjy").remove();
  $("UFIRow UFILikeSentence _4204 _4_dr").remove();
  $("._hly").remove();
  $(".UFICommentLikeButton").remove();
  $(".UFIShareRow").remove();

  $(document).scroll(hide);
});
