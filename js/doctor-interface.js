var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
 var currentDoctorObject = new Doctor();
 $('.showDoctors').hide();
 $('#results').hide();
 $('#search').click(function() {
   event.preventDefault();
   $('.showDoctors').empty();

   var symptom = $('#symptom').val();
   $('#symptom').val("");

   currentDoctorObject.getDoctors(symptom);

   $('.showDoctors').show();
   $('#results').show();
 });
});
