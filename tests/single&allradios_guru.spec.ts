import  {Browser, firefox, Locator, Page, test,} from "@playwright/test"
 
let page : Page

test.beforeAll("launch the GURU",async ()=> {
let browser: Browser = await firefox.launch({ headless : false})
 page  = await browser.newPage();

 ///////////////////////////////////////////
////////////single check box//////////////////
////////////////////////////////////////////
/*
await page.goto("https://demo.guru99.com/test/radio.html");
let titleguru: string = await page.title();//Radio Button & Check Box Demo
  if (titleguru==="Radio Button & Check Box Demo")
  {
    console.log("guru title verified successfully--test pass");
  }else{
    console.log("guru title not verified successfully--test fail");
  }
});

 test("chech boxes actions",async()=>{
  
   let  radioclick: Locator= await page.locator("#vfb-7-1");
   await radioclick.click();
    console.log("radiobutton click:"+radioclick);


 });
*/

await page.goto("https://demo.guru99.com/test/radio.html");

let titleofguru: string = await page.title();//Radio Button & Check Box Demo
  
  if (titleofguru==="Radio Button & Check Box Demo")
  {
    console.log("guru title verified successfully--pass");
  }else{
    console.log("guru title not verified successfully--fail");
  }

});

test("all radio buttons",async ()=>{
let allradios : Locator= await page.locator("xpath=//input[@type='radio']");
console.log("total count of allradios:"+await allradios.count());

 for (let i:number=0;i<await allradios.count();i=i+1)
 {
   await allradios.nth(i).click();


      if (await  allradios.nth(i).isChecked())
      {
        console.log("all radio buttons click successfully---pass");
      }else{
        console.log("all radio buttons not clicked successfully---fail")
      }
 }
});



test.afterAll("close browser",async ()=>{

page.close();

});