import  {Browser, BrowserContext, firefox, Locator, Page, test,}from "@playwright/test";

let page: Page;
test.beforeAll("launch the Application",async ()=>{
let browser: Browser = await firefox.launch({headless : false})
let context : BrowserContext = await browser.newContext();
 page = await context.newPage();
await page.goto("https://jqueryui.com/resources/demos/droppable/default.html")
let titlepage: string= await page.title();//jQuery UI Droppable - Default functionality
   if (titlepage==="jQuery UI Droppable - Default functionality")
   {
    console.log("title verified successfully---pass");
   }else{
    console.log("title not verified successfully---fail");
   }

});

test("Drag and Drop",async()=>{
  let drag: Locator = await page.locator("xpath=//div[@id='draggable']");
  let drop : Locator = await page.locator("xpath=//div[@id='droppable']");
  await drag.dragTo(drop);

  let droptext : string | null= await page.locator("xpath=//div[@id='droppable']/p").textContent();
console.log("droped messsage:"+droptext)

   if(droptext==="Dropped!")
   {
    console.log("successfully droped the text--pass");
   }else{
    console.log("successfully not droped the text--fail");
   }
  




});

test("dran and drop actions",async ()=> {



})


test.beforeAll("close the Application",async ()=>{

    
});