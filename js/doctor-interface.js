var doctorData = require('./../js/doctor.js').doctorModule;
$(document).ready(function() {
 $('#doctor-search').submit(function(event) {
   event.preventDefault();
   var input = $("symptom").val();
   var results = doctorData.getDoctors(input);
   results.forEach(function(data) {
     $(".showDoctors").append(data)
   };
 });
});
