function equalHeight(){
  if(window.innerWidth > 768){
    let x = document.querySelectorAll('.row-eq-height');
    for(let z = 0; z < x.length; z++){
      let y = x[z].children;
      let height = [];
      for(let i = 0; i < y.length; i++){
        let e = y[i].offsetHeight;
        height.push(y[i].offsetHeight);
      }
      Array.max = function( array ){
        return Math.max.apply( Math, array );
      };
      let maxHeight = Array.max(height);
      for(let j = 0; j < y.length; j++){
        y[j].style.height = maxHeight + 'px';
      }
    }
  }
}

//resize
equalHeight();
window.onresize = function(){
  let x = document.querySelectorAll('.row-eq-height');
  for(let z = 0; z < x.length; z++){
    let y = x[z].children;
    for(let i = 0; i < y.length; i++){
      y[i].style.height = 'auto';
    }
  }
  equalHeight();
};
