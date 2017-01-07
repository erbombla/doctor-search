(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "d26d3bf66c3aec3d09adeba77eb76165";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function doctorData() {
  this.retrieved = [];
}

doctorData.prototype.getDoctors = function(medicalIssue, displayDoctors) {
  var docDataObj = this;
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
    .then(function(response) {
      result.data.forEach(function(dataEntry) {
        docDataObj.retrieved.push(dataEntry);
      });
      displayDoctors(medicalIssue, docDataObj.retrieved);
    })
    .fail(function(error){
      console.log("fail");
    });

  this.retrieved = docDataObj.retrieved;
};

exports.doctorModule = doctorData;

},{"./../.env":1}],3:[function(require,module,exports){
var doctorData = require('./../js/doctor.js').doctorModule;
$(document).ready(function() {
 var newDoctorData = new doctorData();

 $('#doctor-search').submit(function(event) {
   event.preventDefault();
   newDoctorData.retrieved = [];
   $('#results').empty();
   $('.showdoctors').empty();
   var medicalIssue = $('#symptom').val();
   newDoctorData.getDoctors(medicalIssue, displayDoctors);
 });
});

},{"./../js/doctor.js":2}]},{},[3]);
