function withHonor(lang, date, why, sweetroll) {
  let fullDate = new Date();
  let today = fullDate.getFullYear()+'-'+(fullDate.getMonth()+1)+'-'+fullDate.getDate();

  if (lang===69 && date===today && why==='IT IS A GOOD DAY TO DIE!' && sweetroll==='combat') {
    return true;
  } else {
    return false;
  }
}

$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    
    const favLang = parseInt($("#surv-lang").val());
    const favDate = $("#surv-date").val();
    const whyDate = $("#surv-why").val().toUpperCase();
    const sweetroll = $("input:radio[name=action]:checked").val();
    const colour = $("#surv-colour").val();

    $("#results").show();
    $("body").removeClass();
    $(".card-img-top").hide();
    $(".results-info").hide();
    $(".jumbotron").css("background-color", colour);

    if (withHonor(favLang, favDate, whyDate, sweetroll)) {
      $("#results-language").text('KLINGONESE!');
      $("#gowron-info").show();
      $("body").addClass("gowron");
      $("#gowron-logo").show();
    } else if (favLang === 1) {
      $("#results-language").text('Ruby!');
      $("#ruby-info").show();
      $("#ruby-logo").show();
    } else if (favLang === 2) {
      $("#results-language").text('C#!');
      $("#csharp-info").show();
      $("#csharp-logo").show();
    } else if (favLang === 3) {
      $("#results-language").text('JavaScript!');
      $("#javascript-info").show();
      $("#javascript-logo").show();
    } else if (favLang === 4) {
      $("#results-language").text('Go!');
      $("#go-info").show();
      $("#go-logo").show();
    } else if (favLang === 5) {
      $("#results-language").text('Python!');
      $("#python-info").show();
      $("#python-logo").show();
    } else if (favLang === 6) {
      $("#results-language").text('Rust!');
      $("#rust-info").show();
      $("#rust-logo").show();
    } else if (favLang === 7) {
      $("#results-language").text('Swift!');
      $("#swift-info").show();
      $("#swift-logo").show();
    } else {
      $("#results-language").text('JavaScript!');
      $("#javascript-info").show();
      $("#javascript-logo").show();
    }
  });
});