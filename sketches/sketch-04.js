const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const columns = 12;
    const rows = 12;
    const noOfCells = columns * rows;

    const gridWidth = width * 0.8;
    const gridHeight = height * 0.8;
    const cellWidth = gridWidth / columns;
    const cellHeight = gridHeight / rows;
    const marginX = (width - gridHeight) * 0.5;
    const marginY = (height - gridHeight) * 0.5;

    for (let i = 0; i < noOfCells; i++) {
      const col = i % columns;
      const row = Math.floor(i / columns);

      const x = col * cellWidth;
      const y = row * cellHeight;
      const w = cellWidth * 0.8;
      const h = cellHeight * 0.8;

      context.save();
      context.translate(x, y);
      context.translate(marginX, marginY);
      context.translate(cellWidth * 0.5, cellHeight * 0.5);

      context.lineWidth = 4;

      context.beginPath();
      context.moveTo(w * -0.5, 0);
      context.lineTo(w * 0.5, 0);
      context.stroke();

      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
