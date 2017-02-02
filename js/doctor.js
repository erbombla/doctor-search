var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue +'&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=20&user_key=' + apiKey)
    .then(function(result) {
      console.log(result);
      var doctors = result.data;

      doctors.forEach(function(doctor){
        var first_name = doctor.profile.first_name;
        var last_name = doctor.profile.last_name;
        $('#doctorList').append("<li>" + first_name + " " + last_name + "</li>");
      });
    })
    .fail(function(error){
      console.log("error.responseJSON.message");
    });
};

exports.doctorModule = Doctor;
