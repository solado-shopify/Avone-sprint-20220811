function initCartProgress(ifCartPage,percent){
  var circle = document.querySelector('.minicartTol .progress-ring__circle');
  if(ifCartPage){
    circle = document.querySelector('.cart .progress-ring__circle');
  }
  if(circle){
    var radius = circle.r.baseVal.value;
    var circumference = radius * 2 * Math.PI;
    
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`; 
    if(percent){
      var offset = circumference - percent / 100 * circumference;
      circle.style.strokeDashoffset = offset;
    }else{
      circle.style.strokeDashoffset = `${circumference}`; 
    }
  }
}