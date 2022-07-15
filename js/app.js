// Variable de taille de la grille
var gridSize = 8;

// Récupérer l'élément dans lequel on veut insérer la grille
var gridEl = document.getElementById('invader');

// Boucler pour générer les rows
for (var rows = 0; rows < gridSize; rows++) {
  var rowEl = document.createElement('div');
  rowEl.classList.add('row');
  gridEl.appendChild(rowEl);

  for (var pixel = 0; pixel < gridSize; pixel++) {
    var pixelEl = document.createElement('div');
    pixelEl.classList.add('pixel');
    rowEl.appendChild(pixelEl);
  }
}
