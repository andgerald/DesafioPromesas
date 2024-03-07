const getDatos = async () => {
  const url = "https://jsonplaceholder.typicode.com/photos";
  try {
    const response = await fetch(url);
    if (response.status !== 404) {
      const datos = await response.json();
      datos.forEach((element) => {
        if (element.id <= 20) {
          console.log(element);
        }
      });
    } else {
      throw new Error("404");
    }
  } catch (err) {
    console.log(err);
  }
};
getDatos();

const time = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Información Enviada.");
  }, 3000);
});
Promise.race([time]).then((response) => {
  console.log(response);
});
