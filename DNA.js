function DNA(genes){
  this.genes = [];
  this.fitness = 0;
  this.max = 21;
  if (genes) {
    this.genes = genes;
  } else {
    for (var i = 0; i < this.max; i++) {
      this.genes[i] = newChar();
    }
  }



  this.calcFitness = function (target) {
    var score = 0;
    for (var i = 0; i < this.genes.length; i++) {
      if( this.genes[i] == target.charAt(i) ){
        score++;
      }
    }
    score = (score*score)/(this.max*this.max)*100;
    console.log(score);
    this.fitness = score;
    // this.fitness = floor(map(Math.pow(2,score),0,Math.pow(2,this.max),0,100));
  }

  this.crossover = function (partner) {
    var midpoint = floor(random(0,this.max));
    var newGenes = [];

    for (var i = 0; i < this.max ; i++) {
      if (i < midpoint) {
        newGenes[i] = this.genes[i];
      } else {
        newGenes[i] = partner.genes[i];
      }
    }
    //mutation
    for (var i = 0; i < newGenes.length; i++) {
      var r = random();
      if (r < 0.01) {
        // if(r < 0.005 )
        // {
        //   newGenes[newGenes.indexOf(char) - 1] = newChar();
        //   newGenes[newGenes.indexOf(char)] = newChar();
        //   newGenes[newGenes.indexOf(char) + 1] = newChar();
        // } else {
          newGenes[i] = newChar();
        // }
    }
  }
    return newGenes;
  }
}


function newChar(){
  var c = floor(random(63,122));
  if (c == 63) {
    c = 32;
  }
  if (c == 64) {
    c = 46;
  }

  return char(c);
}
