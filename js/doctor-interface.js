// you need to use jQuery to capture the value of the form input and store it in a variable. Then you will need to instantiate a new instance of the doctor object and call your .getDoctors() prototype on that method. So you need something like this:

// var symptom = use jQuery to get form input var doc = create new doctor object doc.getDoctors(symptom)

var apiKey = require('./../.env').apiKey;
var doctorData = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
 $('#doctor-search').submit(function(event) {
   event.preventDefault();
   var doctorData = new Doctor();
   var symptom = $('#symptom').val();
   doctorData.getDoctors(symptom);
   $('.unhide').show();
   $('#results').show();

//
//    var input = $("symptom").val();
//    results.forEach(function(data) {
//      $(".showDoctors").append(data)
//    };
//  });
// });
