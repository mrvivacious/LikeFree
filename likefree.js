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

  // Mouse and scroll events
  document.addEventListener('click', hide, false);
  document.addEventListener('mousemove', hide, false);
  document.addEventListener('scroll', hide, false);
}

// Function hide
// Grabs each community element (one at a time) and removes them
// One at a time because tfw no jQuery lmao
// We use the if () statements to silence warnings in the console
function hide() {
  // Facebook
  let postFeedback = document.getElementsByClassName('bp9cbjyn m9osqain j83agx80 jq4qci2q bkfpd7mw a3bd9o3v kvgmc6g5 wkznzc2l oygrvhab dhix69tm jktsbyx5 rz4wbd8a osnr6wyh a8nywdso s1tcr66n')[0];
  if (postFeedback) {
    postFeedback.remove();
  }

  let commentReaction = document.getElementsByClassName('_1lh7')[0];
  if (commentReaction) {
    commentReaction.remove();
  }

  let reactionsOnPicturePopup = document.getElementsByClassName('_6cuq')[0];
  if (reactionsOnPicturePopup) {
    reactionsOnPicturePopup.remove();
  }

  let reactionsInSearchFeed = document.getElementsByClassName('n1l5q3vz bp9cbjyn m9osqain j83agx80 jq4qci2q a3bd9o3v enqfppq2');
  for (let i = 0; reactionsInSearchFeed[i]; i++) {
    reactionsInSearchFeed[i].remove();
  }

  let popupFeedback = document.getElementsByClassName('_3399 _1f6t _4_dr')[0];
  if (popupFeedback) {
    popupFeedback.remove();
  }

  let popupCommentReaction = document.getElementsByClassName('_10lo _10lp')[0];
  if (popupCommentReaction) {
    popupCommentReaction.remove();
  }

  // Instagram
  let pictureFeedback = document.getElementsByClassName('EDfFK ygqzn')[0];
  if (pictureFeedback) {
    pictureFeedback.remove();
  }

  let pictureHover = document.getElementsByClassName('qn-0x')[0];
  if (pictureHover) {
    // .remove() breaks Instagram, hence:
    pictureHover.style.visibility = 'hidden';
  }
}
