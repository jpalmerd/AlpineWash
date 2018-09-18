const functions = require('firebase-functions');
// const cors = require('cors')({ origin: true });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// const admin = require('firebase-admin');
// admin.initializeApp();

const cors = require('cors')({ origin: true });

// const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
// const SENDGRID_API_KEY = firebaseConfig.sendgrid.key;

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

exports.httpJobsEmail = functions.https.onRequest((req, res) => {
	cors(req, res, function() {
		var base64 = (req.body.content.resume) ? req.body.content.resume.$ngfDataUrl.replace(/^data:application\/[a-z]+;base64,/, '') : 'NA';
		var msg = {
      to: 'palmer@alpinewash.com',
      from: 'palmer@alpinewash.com',
      subject: 'Alpine Wash Jobs Form',
      html: '<strong>Name</strong> ' + req.body.content.name + '<br />' +
	      '<strong>Email</strong> ' + req.body.content.email + '<br />' +
	      '<strong>Phone</strong> ' + req.body.content.phone + '<br />' +
	      '<strong>Address</strong> ' + req.body.content.address + '<br />' +
	      '<strong>Address2</strong> ' + req.body.content.address2 + '<br />' +
	      '<strong>State</strong> ' + req.body.content.state + '<br />' +
	      '<strong>Zip</strong> ' + req.body.content.zip + '<br />' +
	      '<strong>Country</strong> ' + req.body.content.country + '<br />',
	  };
	  if (req.body.content.resume) {
	  	msg.attachments = [{
	      content: base64,
	      filename: req.body.filename,
	      type: req.body['Content-Type'],
	      disposition: 'attachment',
	      contentId: 'myPdf'
	    }]
	  }
		sgMail.send(msg);
		res.status(200).send('OK');
	});
});

exports.httpContactEmail = functions.https.onRequest((req, res) => {
	cors(req, res, function() {
		var msg = {
			to: 'palmer@alpinewash.com',
			from: 'palmer@alpinewash.com',
			subject: 'Alpine Wash Contact Form',
			html: '<strong>Name</strong> ' + req.body.name + '<br />' +
				'<strong>Email</strong> ' + req.body.email + '<br />' +
				'<strong>Message</strong> ' + req.body.message + '<br />'
		};
		sgMail.send(msg);
		res.status(200).send('OK');
	});
});
