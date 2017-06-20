var async = require('async')
//Import the mongoose module
const mongoose = require('mongoose');

const Locations = require('../models/location');

//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/smartBeings';
mongoose.connect(mongoDB);

//Get the default connection
const db = mongoose.connection;
// console.log(db);
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

function createLocations(lat, long, cb) {
    locationDetail = {
    	lat,
    	long
    };

    const location = new Locations(locationDetail);
    location.save(function(err) {
    	if(err){
          cb(err, null);
          console.log(err);
    	}
    	cb(null, location);
    });
}


//populate db
function create(){
	async.parallel([
		function(callback) {
          createLocations(13.0827, 80.2707, callback);
        },
        function(callback) {
          createLocations(17.067439, 78.237617, callback);
        }],
        function (err, result){
        	if (err){
        		console.log(err);
        	}
        	console.log('result', result);
        	//close the connection
            db.close();

        });
}
//initialize population
create();