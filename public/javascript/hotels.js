document.addEventListener("DOMContentLoaded", hotelLoad);

async function hotelLoad(event){
  const result = await fetch("/hotel-load")
  .then(onPass,onFail);
};

  async function onPass(res){
    const text = await res.text();
    console.table(text);
  };

  function onFail(err){
    console.log("Error: "+err);
  };
