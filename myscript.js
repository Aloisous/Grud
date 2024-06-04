var uidV, firstnameV, middlenameV, surnameV, addressV, emailaddressV;

function readFom() {
  uidV = document.getElementById("uid").value;
  firstnameV = document.getElementById("firstname").value;
  middlenameV = document.getElementById("middlename").value;
  surnameV = document.getElementById("surname").value;
  addressV = document.getElementById("address").value;
emailaddressV = document.getElementById("emailaddress").value;
  Swal.fire("Data Read Succesfully!");
  console.log(uidV, firstnameV, surnameV, middlenameV, emailaddress);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uidV)
    .set({
      rollNo: uidV,
      firstname: firstnameV,
      middlename: middlenameV,
      surname: surnameV,
      address: addressV,
      emailaddress: emailaddressV
    });
    Swal.fire("Data Inserted Succesfully!");
  document.getElementById("uid").value = "";
  document.getElementById("firstname").value = "";
  document.getElementById("middlename").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("address").value = "";
 document.getElementById("emailaddress").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uidV)
    .on("value", function (snap) {
      document.getElementById("uid").value = snap.val().rollNo;
      document.getElementById("firstname").value = snap.val().firstname;
      document.getElementById("middlename").value = snap.val().middlename;
      document.getElementById("surname").value = snap.val().surname;
      document.getElementById("address").value = snap.val().address;
document.getElementById("emailaddress").value = snap.val().emailaddress;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uidV)
    .update({
      //   rollNo: uidV,
      firstname: firstnameV,
      middlename: middlenameV,
      surname: surnameV,
      address: addressV,
      emailaddress: emailaddressV
    });
    Swal.fire("Data Updated Succesfully!");
  document.getElementById("uid").value = "";
  document.getElementById("firstname").value = "";
  document.getElementById("middlename").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("address").value = "";
document.getElementById("emailaddress").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uidV)
    .remove();
    Swal.fire("Data Deleted Succesfully!");
  document.getElementById("uid").value = "";
  document.getElementById("firstname").value = "";
  document.getElementById("middlename").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("address").value = "";
document.getElementById("emailaddress").value = "";
};
