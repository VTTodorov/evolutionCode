function DNA(genes){
  this.genes = [];
  this.fitness = 0;
  this.max = 22;
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
      this.fitness = floor((score / target.length)*100);
    }
    if (this.fitness == 100) {
    }
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
    newGenes.forEach(function (char) {
      if (random() < 0.1) {
        if(random() < 0.0 1 )
        {
          newGenes[newGenes.indexOf(char) - 1] = newChar();
          newGenes[newGenes.indexOf(char)] = newChar();
          newGenes[newGenes.indexOf(char) + 1] = newChar();
        } else {
          char = newChar();
        }
      }
    });
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
