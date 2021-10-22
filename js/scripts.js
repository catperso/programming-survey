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

    if (withHonor(favLang, favDate, whyDate, sweetroll)) {
      $("#results-language").text('KLINGONESE!');
      $("#gowron-info").show();
      $("body").addClass("gowron");
      $("#gowron-logo").show();
    } else if (favLang === 1) {
      $("#results-language").text('Ruby!');
      $("#results-info").text("Ruby is an object-oriented scripting language. First released in 1995, it steadily grew in popularity until mass acceptance in 2006. A large amount of its popularity comes from Ruby on Rails, a framework for building modern web applications. Some of its identifying ");
      $("#ruby-logo").show();
    } else if (favLang === 2) {
      $("#results-language").text('C#!');
      $("#results-info").text('c# lorem ipsum');
      $("#csharp-logo").show();
    } else if (favLang === 3) {
      $("#results-language").text('JavaScript!');
      $("#results-info").text('javascript lorem ipsum');
      $("#javascript-logo").show();
    } else if (favLang === 4) {
      $("#results-language").text('Go!');
      $("#results-info").text('go lorem ipsum');
      $("#go-logo").show();
    } else if (favLang === 5) {
      $("#results-language").text('Python!');
      $("#results-info").text('python lorem ipsum');
      $("#python-logo").show();
    } else if (favLang === 6) {
      $("#results-language").text('Rust!');
      $("#results-info").text('rust lorem ipsum');
      $("#rust-logo").show();
    } else if (favLang === 7) {
      $("#results-language").text('Swift!');
      $("#results-info").text('swift lorem ipsum');
      $("#swift-logo").show();
    } else {
      $("#results-language").text('JavaScript!');
      $("#results-info").text('javascript lorem ipsum');
      $("#javascript-logo").show();
    }
  });
});