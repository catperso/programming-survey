/*
  To get today's date:
  let today = new Date();

  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  if they select today's date, this = true
  date === $("#surv-date").val();

  check why today is their favourite date = true (regardless of casing)
  $("#surv-why").val().toUpperCase === 'IT IS A GOOD DAY TO DIE!'

  if they checked the combat option = true
  $("input:radio[name=action]:checked").val() === 'combat'
*/

$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    
    const favLanguage = parseInt($("#surv-lang").val());
    const favDate = $("#surv-date").val();
    const whyDate = $("#surv-why").val();
    const sweetroll = $("input:radio[name=action]:checked").val();
  });
});