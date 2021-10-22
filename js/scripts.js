/*
  To get today's date:
  let fullDate = new Date();

  let today = fullDate.getFullYear()+'-'+(fullDate.getMonth()+1)+'-'+fullDate.getDate();

  if they select today's date, this = true
  today === $("#surv-date").val();

  check why today is their favourite date = true (regardless of casing)
  $("#surv-why").val().toUpperCase === 'IT IS A GOOD DAY TO DIE!'

  if they checked the combat option = true
  $("input:radio[name=action]:checked").val() === 'combat'
*/

function withHonor(lang, date, why, sweetroll) {
  return false;
}

$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    
    const favLang = parseInt($("#surv-lang").val());
    const favDate = $("#surv-date").val();
    const whyDate = $("#surv-why").val();
    const sweetroll = $("input:radio[name=action]:checked").val();
    const colour = $("#surv-colour").val();

    $("#results").show();

    if (withHonor(favLang, favDate, whyDate, sweetroll)) {
      $("#results-language").text('KLINGON!');
      $("#results-info").text('klingon lorem ipsum');
      $("body").addClass("gowron");
    } else if (favLang === 1) {
      $("#results-language").text('Ruby!');
      $("#results-info").text('ruby lorem ipsum');
    } else if (favLang === 2) {
      $("#results-language").text('C#!');
      $("#results-info").text('c# lorem ipsum');
    } else if (favLang === 4) {
      $("#results-language").text('Go!');
      $("#results-info").text('go lorem ipsum');
    } else if (favLang === 5) {
      $("#results-language").text('Python!');
      $("#results-info").text('python lorem ipsum');
    } else if (favLang === 6) {
      $("#results-language").text('Rust!');
      $("#results-info").text('rust lorem ipsum');
    } else if (favLang === 7) {
      $("#results-language").text('Swift!');
      $("#results-info").text('swift lorem ipsum');
    } else {
      $("#results-language").text('JavaScript!');
      $("#results-info").text('javascript lorem ipsum');
    }
  });
});