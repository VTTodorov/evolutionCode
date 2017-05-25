function Population(){
  this.population = [];
  this.max = 2000;
  this.matingPool = [];
  this.newPopulation = [];

  this.generate = function (newPopulation) {
    this.population = [];
    if (newPopulation) {
      for (var i = 0; i < this.max; i++) {
        this.population.push(newPopulation[i]);
      }
    } else {
      for (var i = 0; i < this.max; i++) {
        this.population.push(new DNA());
      }
    }

  }

  this.calcFitness = function (target) {
    this.population.forEach(function (member,i) {
       member.calcFitness(target);
    });
  }

  this.show = function (paragraphs) {
    this.population.forEach(function (member,i) {
       paragraphs[i].elt.innerHTML = member.genes.join("") + " " + member.fitness;
    });
  }

  this.naturalSelection = function () {
    var n,rnd1,rnd2;
    this.matingPool = [];
    this.newPopulation = [];
    var maxFitness = 0;
    this.population.forEach(function (member) {
      if (member.fitness > maxFitness) {
        maxFitness = member.fitness;
      }
    });

    for (var i = 0; i < this.population.length; i++) {
      for (var j = 0; j < this.population[i].fitness; j++) {
        this.matingPool.push(this.population[i]);
      }
    }

    for (var i = 0; i < this.population.length; i++) {
      rnd1 = floor(random(0,this.matingPool.length));
      rnd2 = floor(random(0,this.matingPool.length));
      while (rnd2 == rnd1) {
        rnd2 = floor(random(0,this.matingPool.length));
      }
      this.newPopulation.push(new DNA(this.matingPool[rnd1].crossover(this.matingPool[rnd2])));
    }

    this.population = [];
    this.population = this.newPopulation;
  }
}
