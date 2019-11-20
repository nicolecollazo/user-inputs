
  $(document).ready(function() {
      $("#submit").click(function() {
        var number = $("#age").val();
        var result = parseInt(number) + 42;
        var friendlyResult = "You will be " + result + " when Halley's Comet orbits the Earth again.";
        $(".result").text(friendlyResult);
      });
  });
