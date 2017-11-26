// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Modified by Vivek Bhookya
// Taken from background color changer extension example

/**
 * Get the current URL.
 *
 * @param {function(string)} callback called when the URL of the current tab
 *   is found.
 */
function getCurrentTabUrl(callback) {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, (tabs) => {
    // chrome.tabs.query invokes the callback with a list of tabs that match the
    // query. When the popup is opened, there is certainly a window and at least
    // one tab, so we can safely assume that |tabs| is a non-empty array.
    // A window can only have one active tab at a time, so the array consists of
    // exactly one tab.
    var tab = tabs[0];

    // A tab is a plain object that provides information about the tab.
    // See https://developer.chrome.com/extensions/tabs#type-Tab
    var url = tab.url;

    // tab.url is only available if the "activeTab" permission is declared.
    // If you want to see the URL of other tabs (e.g. after removing active:true
    // from |queryInfo|), then the "tabs" permission is required to see their
    // "url" properties.
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });

  // Most methods of the Chrome extension APIs are asynchronous. This means that
  // you CANNOT do something like this:
  //
  // var url;
  // chrome.tabs.query(queryInfo, (tabs) => {
  //   url = tabs[0].url;
  // });
  // alert(url); // Shows "undefined", because chrome.tabs.query is async.
}

/**
 * Hides the likes and video views
 */
function hideLikes() {
    chrome.tabs.executeScript(null, {file: "likefree.js"});
}


/**
 * Gets the saved like state for url.
 *
 * @param {string} url URL whose like state is to be retrieved.
 * @param {function(string)} callback called with the saved like state for
 *     the given url on success, or a falsy value if no state is retrieved.
 */
function getSavedLikeState(url, callback) {
  // See https://developer.chrome.com/apps/storage#type-StorageArea. We check
  // for chrome.runtime.lastError to ensure correctness even when the API call
  // fails.
  chrome.storage.sync.get(url, (items) => {
    callback(chrome.runtime.lastError ? null : items[url]);
  });
}

/**
 * Sets the given like state for url.
 *
 * @param {string} url URL for which like state is to be saved.
 * @param {string} color The like state to be saved.
 */
function saveLikeState(url, color) {
  var items = {};
  items[url] = state;
  // See https://developer.chrome.com/apps/storage#type-StorageArea. We omit the
  // optional callback since we don't need to perform any action once the
  // like state is saved.
  chrome.storage.sync.set(items);
}

// This extension loads the saved like state for the current tab if one
// exists. The user can the like state from the dropdown for the
// current page, and it will be saved as part of the extension's isolated
// storage. The chrome.storage API is used for this purpose. This is different
// from the window.localStorage API, which is synchronous and stores data bound
// to a document's origin. Also, using chrome.storage.sync instead of
// chrome.storage.local allows the extension data to be synced across multiple
// user devices.
document.addEventListener('DOMContentLoaded', () => {
  getCurrentTabUrl((url) => {
    hideLikes();

var container = document.getElementById('container');

    // Load the saved like state for this page
    getSavedLikeState(url, (state) => {
      if (state) {
        changeLikeState(state);
        container = state;
      }
    });

    // Ensure the like state is changed and saved when the dropdown
    // selection changes.
    container('change', () => {
      changeLikeState(container.value);
      saveLikeState(url, container.value);
    });

  });
});
