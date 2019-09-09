const createImage = (chart, width=350, height=350) => {
  const data = chart.toBase64Image();
  const image = new Image(width, height);
  image.src = data;
  document.body.appendChild(image);
}
