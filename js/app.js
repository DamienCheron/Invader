var app = {
  //Taille par défaut de la grille
  defaultGridSize: 8,
  //Taille par défaut du pixel
  defaultPixelSize: 25,

  //Couleur du pinceau (couleur "actuelle")
  currentColor: 'plain',

  gridEl: document.getElementById('invader'),

  init: function () {
    document
      .querySelector('.configuration')
      .addEventListener('submit', function (event) {
        event.preventDefault();

        var gridSizeInputEl = document.querySelector('#grid-size-input');
        var gridSize = Number(gridSizeInputEl.value);

        app.createGrid(gridSize);
      });

    app.createForm();
    app.createGrid(app.defaultGridSize);

    app.gridEl.addEventListener('click', function (event) {
      if (event.target.classList.contains('pixel')) {
        event.target.className = `pixel ${app.currentColor}`;
      }
    });

    document
      .querySelector('#colors')
      .addEventListener('click', function (event) {
        if (event.target.classList.contains('colorBtn')) {
          app.currentColor = event.target.id;
        }
      });
  },

  createGrid: function (gridSize) {
    app.gridEl.innerHTML = '';

    for (var column = 0; column < gridSize; column++) {
      var columnEl = document.createElement('div');
      columnEl.classList.add('column');
      app.gridEl.appendChild(columnEl);

      for (var pixel = 0; pixel < gridSize; pixel++) {
        var pixelEl = document.createElement('div');
        pixelEl.classList.add('pixel');

        var pixelSizeInput = document.querySelector('#pixel-size-input');
        var pixelSizeInputValue = Number(pixelSizeInput.value);

        var pixelSize = app.defaultPixelSize;
        if (pixelSizeInputValue) {
          pixelSize = pixelSizeInputValue;
        }

        app.setPixelSize(pixelEl, pixelSize);
        columnEl.appendChild(pixelEl);
      }
    }
  },

  createForm: function () {
    var formEl = document.querySelector('.configuration');

    var gridSizeInputEl = document.createElement('input');
    gridSizeInputEl.setAttribute('placeholder', 'Taille de la grille');
    gridSizeInputEl.id = 'grid-size-input';
    formEl.appendChild(gridSizeInputEl);

    var pixelSizeInputEl = document.createElement('input');
    pixelSizeInputEl.setAttribute('placeholder', 'Taille des pixels');
    pixelSizeInputEl.id = 'pixel-size-input';
    formEl.appendChild(pixelSizeInputEl);

    var buttonEl = document.createElement('button');
    buttonEl.textContent = 'Valider';
    formEl.appendChild(buttonEl);
  },

  setPixelSize: function (pixel, pixelSize) {
    pixel.style.width = pixelSize + 'px';
    pixel.style.height = pixelSize + 'px';
  },
};

//Quand le document est prêt : on initialise l'application
document.addEventListener('DOMContentLoaded', app.init);
