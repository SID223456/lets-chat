
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration

var firebaseConfig = {

      apiKey: "AIzaSyA4GfWiPB7QJ6afgEczRCAe6dzXayCeP4k",
  
      authDomain: "letschat-hi.firebaseapp.com",
  
      databaseURL: "https://letschat-hi-default-rtdb.firebaseio.com",
  
      projectId: "letschat-hi",
  
      storageBucket: "letschat-hi.appspot.com",
  
      messagingSenderId: "245365770340",
  
      appId: "1:245365770340:web:688a4379e7145e2c6af771"
  
    };
  
    // Initialize Firebase
  
    firebase.initializeApp(firebaseConfig);
  

    Username = localStorage.getItem("username_stored");
document.getElementById("username").innerHTML= "Welcome " + Username;
function add_room(){
room_name = document.getElementById("roomname").value;      
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "div class=room_name'id=" + Room_names +" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
//End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log("name");
      localStorage.setItem("room_name", name);
      window.location= "kwitter_room.html";
};