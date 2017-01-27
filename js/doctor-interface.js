var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
 $('#doctor-search').submit(function(event) {
   event.preventDefault();
   var doctors = new Doctor();
   var symptom = $('#symptom').val();
   console.log(symptom);
   doctors.getDoctors(symptom);
   $('#doctorList').empty();
   $('#doctorList').show();
  });
});


//
//    var input = $("symptom").val();
//    results.forEach(function(data) {
//      $(".showDoctors").append(data)
//    };
//  });
// });
