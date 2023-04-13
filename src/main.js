/* eslint-disable indent */
import Simon from './script.js';
import './css/styles.css';
import $ from 'jquery';

let simon = new Simon;

//Press key to start
/* green = 0, red= 1, yellow =2, blue=3 */
$(document).on("keydown", function (element) {
    if (element.keyCode === 13) {
      simon.nextSequence();
    }
  });