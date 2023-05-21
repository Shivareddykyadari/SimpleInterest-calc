function answer(){
    var amt_inp=parseInt(document.getElementById("amount").value)
    var Rs_inp=parseInt(document.getElementById("rate").value)
    var time_inp=parseInt(document.getElementById("time").value)

    var Interest=amt_inp*Rs_inp*time_inp/100
    var total =Interest+amt_inp

    document.getElementById("output_1").innerHTML=amt_inp;
    document.getElementById("output_2").innerHTML=Interest;
    document.getElementById("output_3").innerHTML=total;
}