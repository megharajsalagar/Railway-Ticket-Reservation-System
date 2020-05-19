var firebaseConfig = {
  apiKey: "AIzaSyDvRB20ANtmbTfF9KDx3P-05vXDOb-JeQ4",
  authDomain: "ticket-system-835d2.firebaseapp.com",
  databaseURL: "https://ticket-system-835d2.firebaseio.com",
  projectId: "ticket-system-835d2",
  storageBucket: "ticket-system-835d2.appspot.com",
  messagingSenderId: "949018338428",
  appId: "1:949018338428:web:18c78e19f4644f735395f9",
  measurementId: "G-DRHG2FDYY0"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db=firebase.firestore();

const mobileNo=document.querySelector("#mobileNumber");

viewButton.addEventListener("click",function(){
  const mNo=mobileNo.value;
  if(mNo=="")
  {
    window.alert("Please Enter Mobile Number");
  }
  else
  {

var docRef = db.collection("PassengerList").doc(mobileNo);

docRef.get().then(function(doc) {
    if (doc.exists) {
        //console.log("Document data:", doc.data());
        reservedTicket.innerHTML+="<div><p>Class:" + doc.data().Class_Type + "</p><p>Train No:" + doc.data().Train_No +"</p><p>No Of Seats:" + doc.data().No_of_Birth +"</p><p>From:" + doc.data().From +"</p><p>To:" + doc.data().To +"</p>Date of journey:" + doc.data().Travelling_Date +"</p></div>"
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
}
});

cancelButton.addEventListener("click",function(){
  const mNo1=mobileNo.value;
  if(mNo1.length==0)
  {
    window.alert("Please Enter PNR NUMBER");
  }
  else
  {
  window.alert("Are you sure you want to cancel the ticket ?");
db.collection("PassengerList").doc(mNo1).delete().then(function() {
    console.log("Document successfully deleted!");
    window.alert("Deleted");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
}
});
