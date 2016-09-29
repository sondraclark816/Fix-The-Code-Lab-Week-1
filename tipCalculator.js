(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7";
    }(document, 'script', 'facebook-jssdk'));


$(function  () {
    $('#calculate').on('click', function () {
    var billTotal = $('#bill').val();
    var select = $('#selectIt').val();
    var people = $('#numPeople').val();
    var tip = select * billTotal;
    var billPlusTip = billTotal/1 + tip;
    var split = billPlusTip  / people;
    
    console.log("You rated the service: " + select);
    console.log("You're tip is " + "$" + tip);
    console.log('Total people in party = ' + people);
    console.log("Bill Total w/ tip is " + "$" + billPlusTip);
    console.log("Bill split = " + "$" + split);

    $('#tip').html('<div><u>Tip: ' + tip.toFixed(2) + '</u></div>');
    $('#billTot').html('<div><u>Total Bill w/ Tip: ' + billPlusTip.toFixed(2) + '</u></div>' );
    $('#split').html('<div><u>Bill Split: ' + split.toFixed(2) + '</u></div>');
    

    
})
})

function resetForm() {
    document.getElementById("getTip").reset();
}




   





