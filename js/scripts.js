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

    if (withHonor(favLang, favDate, whyDate, sweetroll)) {
      $("#results-language").text('KLINGONESE!');
      $("#results-info").text("nIb quvmoH chaw nuQ pIqaD way mIQ SeHlaw tungHa' taS, ghor jatIh wanI' pab wuv qugh ghoma' jIv. Saqghom mupwI' betleH bey' ghem lupDujHom van Dub neb qaywI' loghqam van, ghob pegh noD muH run Do Qe' tlhay' chor bargh nuQ, HISlaH vIng yuQHom choba' Qol nIb mIQvaD van. SIbI' ghoma' HaD wanI' qaywI' toq roS vulqan, tlham yIt voQ Hoqra' SIm Qaw, maj 'eb qIvon HIch DIj puq poH. So qeq nuH loghqam 'ov yIt qImHa', pegh qumwI' matlh janluq pIqarD Saj ray', chor bargh to'waQvaD He pegh. taH Hurgh nem SoSbor'a' Qan lIghongan SIbI' jey' 'eSpanya Hoqra' meQ, chergh tengchaH van chergh may' Huj nagh DIr qorgh SIm. maj poQ poj woj chor bargh betleH bey' lev maj nISwI' HIch jIj, chaj Dum poQ qegh vemmoH lengwI' ghubDaQ Hurgh, neSlo' He leH ghew baQ yIt rejmorgh.");
      $("body").addClass("gowron");
      $("#gowron-logo").show();
    } else if (favLang === 1) {
      $("#results-language").text('Ruby!');
      $("#results-info").text('ruby lorem ipsum');
      $("#ruby-logo").show();
    } else if (favLang === 2) {
      $("#results-language").text('C#!');
      $("#results-info").text('c# lorem ipsum');
      $("#csharp-logo").show();
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