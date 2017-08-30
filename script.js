var sauce = $('p:contains("Brisket")').data().sauce;
//alert(sauce);


$("#1stbutton").on('click', function () {
    $(this).html('I got clicked!');
  });

  $('#firstList li').on('click', function () {
    $(this).remove();
  });

  $("#2ndbutton").click(function () {
    var name = $('#my-input').val();
    $("#secondList").append('<li>' + name + '</li>');
  
  });
  
  $("#secondList").on('click', 'li', function () {
    $(this).remove();
    console.log("invoked");
  });

  $('button').on('click', function() {
    var relevantInput = $(this).closest("div").find("input").val();
    alert(relevantInput);
  });

  

  