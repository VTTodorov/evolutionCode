var population;
var paragraphs = [];
var topScore = 0;
var topParagraph;

function setup() {
  population = new Population();
  population.generate();
  topParagraph = createP();
  for (var i = 0; i < 1000; i++) {
    paragraphs.push(createP());
  }
}

function draw() {

  population.calcFitness("I am evolving code");
  population.naturalSelection();
  population.calcFitness("I am evolving code");
  population.population.forEach(function (member) {
    if (member.fitness > topScore) {
    topScore = member.fitness;
    topParagraph.elt.innerHTML = member.genes.join("");
    }
    if (member.fitness == 100) {
       topParagraph.elt.innerHTML = member.genes.join("");
    }
  })

  population.show(paragraphs);
  population.population.forEach(function (member) {
    if (member.fitness == 100) {
      noLoop();
    }
  })
}
