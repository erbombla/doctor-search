var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
 $('#doctor-search').submit(function(event) {
   event.preventDefault();
   var doctors = new Doctor();
   var symptom = $('#symptom').val();
   doctors.getDoctors(symptom);
 });
});


//
//    var input = $("symptom").val();
//    results.forEach(function(data) {
//      $(".showDoctors").append(data)
//    };
//  });
// });
