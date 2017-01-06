Doctor = function(medicalIssue) {
  this.medicalIssue = medicalIssue;
};

Doctor.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(response) {
    $('.showDoctors').text(response.doctors.forEach(function(doctor) {
      $('.showDoctors').append("<li>" + doctor.profile + " " + "</li>");
      console.log(response);
    }));
  })
    .fail(function(error){
    $('.$showDoctors').text(error.responseJSON.message);
  });
}; 

exports.doctorModule = Doctor;
