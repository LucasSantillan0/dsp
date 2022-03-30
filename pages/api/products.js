// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { chromium } from "playwright";
import aliexpressScrap from "../../services/scrapping"

export default async function handler(req, res) {
  try{
    const browser = await chromium.launch({ headless: false });

    const urls = ["https://es.aliexpress.com/item/1005003730015967.html?gatewayAdapt=glo2esp&spm=a2g2f.b13126868.0.0.664f2e0erCWFB7", 'https://es.aliexpress.com/item/1005003534266206.html?gatewayAdapt=glo2esp&spm=a2g0o.detail.0.0.7d865dd6WYq9K8&gps-id=pcDetailBottomMoreThisSeller&scm=1007.13339.274681.0&scm_id=1007.13339.274681.0&scm-url=1007.13339.274681.0&pvid=54d29fb5-f50e-4d71-8835-fa417397d6b2&_t=gps-id:pcDetailBottomMoreThisSeller,scm-url:1007.13339.274681.0,pvid:54d29fb5-f50e-4d71-8835-fa417397d6b2,tpp_buckets:668%232846%238107%231934&pdp_ext_f=%257B%2522sku_id%2522%253A%252212000026202287400%2522%252C%2522sceneId%2522%253A%25223339%2522%257D&pdp_pi=-1%253B2919.1%253B-1%253B-1%2540salePrice%253BARS%253Brecommend-recommend']
    const products = await Promise.all(urls.map((url) => aliexpressScrap(url, browser)))
    await browser.close();
    res.json(products)
  }
  catch (error) {
    res.json({error})
  }
}
