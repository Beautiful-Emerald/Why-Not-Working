//YOUR FIREBASE LINKS


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
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
like=message_data['like'];
message=message_data['message'];
name_with_tag="<h4> "+ name + "<img class='user_tick' src='tick.png'></h4>";

message_with_tag="<h4 class='message_h4'>" + message + "</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatedLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
user_name=localStorage.getItem("User_name");
room_name=localStorage.getItem("room_name");
function Send(){
msg=document.getElementById("message").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
})
}

function logout(){
      localStorage.removeItem("User_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
    }
function updatedLike(message_id){
console.log("clicked on like btn- "+message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({
like:updated_likes
})
}