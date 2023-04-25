const firebaseConfig = {
    apiKey: "AIzaSyA7e0vLqwFMiMluQ6-FIIsl7NXDXv0xjo4",
    authDomain: "projekatadi.firebaseapp.com",
    databaseURL: "https://projekatadi-default-rtdb.firebaseio.com",
    projectId: "projekatadi",
    storageBucket: "projekatadi.appspot.com",
    messagingSenderId: "52269012864",
    appId: "1:52269012864:web:7fe34b1a19590cdf119365",
    measurementId: "G-PVYB81J1V6"
  };
  
    
    
    firebase.initializeApp(firebaseConfig);
    
    // Kolekcija referentnih poruka
    var messagesRef = firebase.database().ref('messages');
    
    // submitanje forme
    document.getElementById('contactForm').addEventListener('submit', submitForm);
    
    // Submit forma
    function submitForm(e){
      e.preventDefault();
    
      // vrijednosti
      var name = getInputVal('name');
      var company = getInputVal('company');
      var email = getInputVal('email');
      var phone = getInputVal('phone');
      var message = getInputVal('message');
    
      // Spasi poruku
      saveMessage(name, company, email, phone, message);
    
      // obavjestenje
      document.querySelector('.alert').style.display = 'block';
    
      // nakon 3s sakrij obavjestenje
      setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
      },3000);
    
      // Clear screen
      document.getElementById('contactForm').reset();
    }
    
    // funkcija za dobijanje vrijednosti forme
    function getInputVal(id){
      return document.getElementById(id).value;
    }
    
    // spasi prouku za firebase
    function saveMessage(name, company, email, phone, message){
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
        name: name,
        company:company,
        email:email,
        phone:phone,
        message:message
      });
    }


