
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyDP8DTY4KPkU-9Uz_Pz-vREhAX6wF3hVM4",
  authDomain: "kwitter-4dbe9.firebaseapp.com",
  databaseURL: "https://kwitter-4dbe9-default-rtdb.firebaseio.com",
  projectId: "kwitter-4dbe9",
  storageBucket: "kwitter-4dbe9.appspot.com",
  messagingSenderId: "613946854530",
  appId: "1:613946854530:web:5372643a0ad9afae49f89b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("User_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    function add_room(){
      room_name=document.getElementById("Room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose:"Adding Room"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-"+Room_names);
      row="<div class='room_name'id="+Room_names+ " onclick='readirecttoroomname(this.id)'> #"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function readirecttoroomname(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout(){
  localStorage.removeItem("User_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
