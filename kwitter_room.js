
const firebaseConfig = {
      apiKey: "AIzaSyBrYE9a_yjyAigvftHk8t-XgkQKkQLBkjg",
      authDomain: "kwitter-app-49f83.firebaseapp.com",
      databaseURL: "https://kwitter-app-49f83-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-49f83",
      storageBucket: "kwitter-app-49f83.appspot.com",
      messagingSenderId: "796111641647",
      appId: "1:796111641647:web:e0851a532d60d5c19b7ada"
    };
    
    firebase.initializeApp(firebaseConfig);


user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "Welcome " + user_name + "🙂🫵";

function addRoom(){
      room_name= document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}

function redirectToRoomName(name){
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}



