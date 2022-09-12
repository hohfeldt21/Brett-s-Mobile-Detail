function check() {
    var checkBox = document.getElementById("checbox");
    var text1 = document.getElementsByClassName("text1");
    var text2 = document.getElementsByClassName("text2");
    var first = document.getElementsByClassName("first");
    var second = document.getElementsByClassName("second");
    
  
    for (var i = 0; i < text1.length; i++) {
      if (checkBox.checked == true) {
        text1[i].style.display = "block";
        text2[i].style.display = "none";
      } 
      else if (checkBox.checked == false) {
        text1[i].style.display = "none";
        text2[i].style.display = "block";
      }
    }

    for(var ie = 0; ie < first.length; ie++) {
        if(checkBox.checked == true) {
            first[ie].style.display = "block";
            second[ie].style.display = "none";
        } 
        else if (checkBox.checked == false) {
            first[ie].style.display = "none";
            second[ie].style.display = "block";
        }
    }
}
check();  