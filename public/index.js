
//(function(){
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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//var preobject=document.getElementById('object');
//var tno=document.getElementById('train_no');
//var tname=document.getElementById('train_name');
//var dbRefObject=firebase.database().ref().child('object');
//dbRefObject.on('value',snap=> console.log(snap.val()));
//var app = database.app;
//function writeData()
//}());
var db=firebase.firestore();


//const tNOHeader=document.querySelector("#TrainNo");
//const tNameHeader=document.querySelector("#TrainName");
const trainNo=document.querySelector("#train_no");
const irctcId=document.querySelector("#Irctc_Id");
const classty=document.querySelector("#classtype");
const tdate=document.querySelector("#Date1");
const nob=document.querySelector("#noofseats");
//const docRef=firestore.doc("users/" +trainNo);
const boardingat=document.querySelector("#from");
const to=document.querySelector("#to");
//for first adult passenger
const mn=document.querySelector("#mobileNo");
const an1=document.querySelector("#Aname1");
const as1=document.querySelector("#Asex1");
const ag1=document.querySelector("#Aage1");
const ac1=document.querySelector("#Acon1");
const ch1=document.querySelector("#choice1");
//for second adult passenger
const an2=document.querySelector("#Aname2");
const as2=document.querySelector("#Asex2");
const ag2=document.querySelector("#Aage2");
const ac2=document.querySelector("#Acon2");
const ch2=document.querySelector("#choice2");
//for third adult passenger
const an3=document.querySelector("#Aname3");
const as3=document.querySelector("#Asex3");
const ag3=document.querySelector("#Aage3");
const ac3=document.querySelector("#Acon3");
const ch3=document.querySelector("#choice3");
//for fourth adult passenger
const an4=document.querySelector("#Aname4");
const as4=document.querySelector("#Asex4");
const ag4=document.querySelector("#Aage4");
const ac4=document.querySelector("#Acon4");
const ch4=document.querySelector("#choice4");
//for fifth adult passenger
const an5=document.querySelector("#Aname5");
const as5=document.querySelector("#Asex5");
const ag5=document.querySelector("#Aage5");
const ac5=document.querySelector("#Acon5");
const ch5=document.querySelector("#choice5");
//for sixth adult passenger
const an6=document.querySelector("#Aname6");
const as6=document.querySelector("#Asex6");
const ag6=document.querySelector("#Aage6");
const ac6=document.querySelector("#Acon6");
const ch6=document.querySelector("#choice6");
//for first Children
const cn1=document.querySelector("#Cname1");
const cs1=document.querySelector("#Csex1");
const ca1=document.querySelector("#Cage1");
//for second Children
const cn2=document.querySelector("#Cname2");
const cs2=document.querySelector("#Csex2");
const ca2=document.querySelector("#Cage2");

//for pnr number
//const fourdigitsrandom = Math.floor(1000 + Math.random() * 9000);
//code is written with the help of official firebase video to ref firestore
saveButton.addEventListener("click",function(){
  /*jQuery.ajax({
    type: "POST",
    url: "~/python.py",
    data: { param: text}
  }).done(function( o ) {
     // do something
  });*/
  //const textf=document.querySelector("#data");
  //const ttp=textf.value;
  const tNo=trainNo.value;
  const iId=irctcId.value;
  const classt=classty.value;
  const t_date=tdate.value;
  const nobirth=nob.value;
  const bat=boardingat.value;
  const to_=to.value;
  const mob=mn.value;
  //fetching values from first passenger
  const ann1=an1.value;
  const ass1=as1.value;
  const agg1=ag1.value;
  const acc1=ac1.value;
  const chh1=ch1.value;
  //fetching values from second passenger
  const ann2=an2.value;
  const ass2=as2.value;
  const agg2=ag2.value;
  const acc2=ac2.value;
  const chh2=ch2.value;
  //fetching values from third passenger
  const ann3=an3.value;
  const ass3=as3.value;
  const agg3=ag3.value;
  const acc3=ac3.value;
  const chh3=ch3.value;
  //fetching values from fourth passenger
  const ann4=an4.value;
  const ass4=as4.value;
  const agg4=ag4.value;
  const acc4=ac4.value;
  const chh4=ch4.value;
  //fetching values from fifth passenger
  const ann5=an5.value;
  const ass5=as5.value;
  const agg5=ag5.value;
  const acc5=ac5.value;
  const chh5=ch5.value;
  //fetching values from sixth passenger
  const ann6=an6.value;
  const ass6=as6.value;
  const agg6=ag6.value;
  const acc6=ac6.value;
  const chh6=ch6.value;
  //fetching values from first Child
  const cnn1=cn1.value;
  const css1=cs1.value;
  const caa1=ca1.value;
  //fetching values from second Child
  const cnn2=cn2.value;
  const css2=cs2.value;
  const caa2=ca2.value;
  //document.getElementById("fourdigit").innerHTML=fourdigitsrandom;
  //window.alert("Congrats your ticket is reserverd PNR NUMBER:"+fourdigitsrandom);
  console.log("I am going to save to firestore");
  db.collection("PassengerList").doc(mob).set({
    Train_No: tNo,
    //PythonData:ttp,
    Irctc_Id:iId,
    Class_Type:classt,
    Travelling_Date:t_date,
    No_of_Birth:nobirth,
    From:bat,
    To:to_,
    Mobile_No:mob,
    passenger_1:{Name:ann1,Sex:ass1,Age:agg1,concession_Travel_authority_No:acc1,choice:chh1},
    passenger_2:{Name:ann2,Sex:ass2,Age:agg2,concession_Travel_authority_No:acc2,choice:chh2},
    passenger_3:{Name:ann3,Sex:ass3,Age:agg3,concession_Travel_authority_No:acc3,choice:chh3},
    passenger_4:{Name:ann4,Sex:ass4,Age:agg4,concession_Travel_authority_No:acc4,choice:chh4},
    passenger_5:{Name:ann5,Sex:ass5,Age:agg5,concession_Travel_authority_No:acc5,choice:chh5},
    passenger_6:{Name:ann6,Sex:ass6,Age:agg6,concession_Travel_authority_No:acc6,choice:chh6},
    Child_1:{Name:cnn1,Sex:css1,Age:caa1},
    child_2:{Name:cnn2,Sex:css2,Age:caa2}
  }).then(function(){
  console.log("status saved!");
}).catch(function (error){
  console.log("got an error:", error );
});
});


/*function write(){
  db.collection("cities").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
}*/


/*var docRef = db.collection("cities").doc("SF");

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});*/
