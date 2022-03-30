

const aliexpressScrap = async (url, browser) => {
  if (typeof url !== "string") return false;
  try{
    const page = await browser.newPage();
    await page.goto(url);
    const shipOptions = await page.$$('.sku-property-list li div span')
    console.log(shipOptions)
    Promise.all(shipOptions.map(async (option) =>{
      const text = await option.textContent()
      if(text !== 'CHINA')return null
      await option.click();
    }))
    const price = await page.textContent(".product-price-value");
    const shipping = await page.textContent(".product-shipping-price");
    const title = await page.textContent(".product-title-text");
    const imagesHTML = await page.$$(".images-view-list li div img");
    const smallImages = await Promise.all (imagesHTML.map(image => 
      image.getAttribute('src')
  ))
  const images = smallImages.map(image => image.replace('50x50', 'Q90'))
  const product = {
    title,
    shipping: parseFloat(shipping.split('ARS ')[1]),
    price: parseFloat(price.split('ARS ')[1]),
    images,
    url,
  };
  return product;
}
catch (e){
  return e
}
};

export default aliexpressScrap;
