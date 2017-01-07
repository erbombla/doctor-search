var doctorData = require('./../js/doctor.js').doctorModule;
$(document).ready(function() {
 var newDoctorData = new doctorData();

 $('#doctor-search').submit(function(event) {
   event.preventDefault();
