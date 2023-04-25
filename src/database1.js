// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
    apiKey: "AIzaSyDLNomX1dVgoak3IaaRROg13j9Z1nkg1y4",
    authDomain: "contact-5c926.firebaseapp.com",
    databaseURL: "https://contact-5c926-default-rtdb.firebaseio.com",
    projectId: "contact-5c926",
    storageBucket: "contact-5c926.appspot.com",
    messagingSenderId: "758930281018",
    appId: "1:758930281018:web:175dd84dbcd62cfaa81b03",
    measurementId: "G-07HHPFEFGV"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var twitter = getInputVal('twitter');
    var fb = getInputVal('fb');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage( name, phone, twitter, fb,gender,aadhar, occupation, uid);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function writeUserData( name, phone, twitter, fb,gender,aadhar, occupation, uid) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: name,
      phone: phone,
      twitter : twitter,
      facebook: fb,
      gender : gender,
      aadhar : aadhar,
      occupation : occupation,
      uid: uid,
    });
  }