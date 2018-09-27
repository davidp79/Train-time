$("#add-employee-btn").on("click", function (event) {
  event.preventDefault();

  
  var trainName = $("#train-name-input")
    .val()
    .trim();
  var dest = $("#dest-input")
    .val()
    .trim();
  var freq = moment(
    $("#freq-input")
      .val()
      .trim(),
    "min"
  ).format("X");
  var nxtArr = $("#nxtArr-input")
    .val()
    .trim();
  var minAway = moment($("#minAway-input")
    .val()
    .trim();


  var newTrain = {
    train: trainName,
    dest: dest,
    freq: freq,
    nxtArr: nxtArr,
    minAway: minAway
  };

  
  database.ref().push(newTrain);

  
  console.log(newTrain.trainName);
  console.log(newTrain,dest);
  console.log(newTrain,freq);
  console.log(newTrain.nxtArr);
  console.log(newTrain,minAway)

  

  
  $("#train-name-input").val("");
  $("#dest-input").val("");
  $("#freq-input").val("");
  $("#nxtArr-input").val("");
  $("#minAway-input").val("");
});


database.ref().on("child_added", function (childSnapshot) {
  console.log(childSnapshot.val());




  
  var trainName = childSnapshot.val().train;
  var dest = childSnapshot.val().dest;
  var freq = childSnapshot.val().freq;
  var nxtArr = childSnapshot.val().nxtArr;
  var minAway = childSnapshot.val().minAway;


  console.log(trainName);
  console.log(dest);
  console.log(freq);
  console.log(nxtArr);
  console.log(minAway);

  
  var newTrain = moment.unix(newTrain).format("min");

  
  var minAway = moment().diff(moment(nxtArr, "X"), "min");
  console.log(empBilled);

  
  var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(dest),
    $("<td>").text(freq),
    $("<td>").text(nxtArr),
    $("<td>").text(minAway),
  );

  // Append the new row to the table
  $("#new-train > tbody").append(newRow);
});