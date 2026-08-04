import  {Browser, BrowserContext, firefox, Locator, Page, test,}from "@playwright/test";


let page: Page;
test.beforeAll("launch the Guru application",async ()=>{
let browser: Browser = await firefox.launch({headless : false})
let context: BrowserContext = await browser.newContext();
 page = await context.newPage();
await page.goto("https://demo.guru99.com/test/radio.html");
let gurutitle: string = await page.title();//Radio Button & Check Box Demo
   if(gurutitle==="Radio Button & Check Box Demo") 
   {
    console.log("title page successfully verified--pass");
   }else{
    console.log("title page successfully  not verified--fail");
   }

});

test("verify the checkboxes",async ()=> {
 let singlecheckbox: Locator = await page.locator("xpath=//input[@id='vfb-6-0']");
 await singlecheckbox.click();

   if(await singlecheckbox.isChecked())
   {
    console.log("successfully checked single checkbox--pass")
   }else{
    console.log("successfully not checked single checkbox--fail")
   }
});



test.afterAll("launch the Guru application",async ()=>{


});









///////////////////multiple check boxes///////////
/////////////////////////////////////////////////
/*

import  {Browser, firefox, Locator, Page, test,} from "@playwright/test";

let page: Page
test.beforeAll("launch the guru application",async()=> {
 let browser: Browser = await firefox.launch({headless : false})
 page = await browser.newPage();
await page.goto("https://demo.guru99.com/test/radio.html")
let titleofguru : string= await page.title();//Radio Button & Check Box Demo
  if(titleofguru==="Radio Button & Check Box Demo")
  {
  console.log("title of the guru application successfully--pass");
  }else{
    console.log("title of the guru application not successfully--fail");
  }

});
 /////multiple check boxes//////////
 ///////////////////////////////
test("checkboxes click and verify",async ()=>{
   
 let allcheckboxes : Locator= await page.locator("xpath=//input[@type='checkbox']");
 console.log("total check boxes count:"+await allcheckboxes.count());
        for(let i=0 ; i<await allcheckboxes.count();i=i+1)
        {
            await allcheckboxes.nth(i).click();
               if(await allcheckboxes.nth(i).isChecked())
               {
                  console.log("all checkboxes clicked successfully--pass");
               }else{
                console.log("all checkboxes not clicked successfully--fail");
               }

        }
   
 

});



test.beforeAll("logout the guru application",async()=> {
 //await page.close()

});

*/
