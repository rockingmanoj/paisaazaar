function recognize(img) {
  const worker = Tesseract.createWorker({
    logger: m => console.log(m)
  });

  (async () => {
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const {
      data: { text }
    } = await worker.recognize(img);
    console.log(text);
    document.getElementById("textdata").innerHTML = text.match((/?<=Name:).*?[\s\n](?=DOB)/))[0];
    await worker.terminate();
  })();
}
window.onload = function() {
  document.getElementById("input-image").onchange = function() {
    const file = document.getElementById("input-image").files[0];
    recognize(file);
  };
};
