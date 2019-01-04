// LikeFree
// likefree.js
//
// This file frees FB and IG of likes
//
// @author Vivek Bhookya

// Free da Like
main();

// Function main
// LikeFree
function main() {
  // Every 10 milliseconds lezgo
  setInterval(hide, 10);

  // Should be overkill considering the setInterval
  // On mouse move
  document.addEventListener('click', hide, false);
  document.addEventListener('mousemove', hide, false);

  // On scroll
  document.addEventListener('scroll', hide, false);
}

// Function hide
// Grabs each community element (one at a time) and removes them
// One at a time because tfw no jQuery lmao
// We use the if () statements to silence warnings in the console
function hide() {
  let postFeedback = document.getElementsByClassName('_68wo')[0];
  if (postFeedback) {
    postFeedback.remove();
  }

  let commentReaction = document.getElementsByClassName('_1lh7')[0];
  if (commentReaction) {
    commentReaction.remove();
  }

  let popupFeedback = document.getElementsByClassName('_3399 _1f6t _4_dr')[0];
  if (popupFeedback) {
    popupFeedback.remove();
  }

  let popupCommentReaction = document.getElementsByClassName('_10lo _10lp')[0];
  if (popupCommentReaction) {
    popupCommentReaction.remove();
  }
}
