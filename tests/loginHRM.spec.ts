import  {Browser, chromium, expect, firefox, Page, test,} from "@playwright/test"

let page : Page
let browser: Browser

test.beforeAll("launch",async ()=>{
  
    browser = await firefox.launch({headless : false})
    page = await  browser.newPage();
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    ////////title Page///////////////////
let title: string = await page.title();//OrangeHRM - New Level of HR Management
 
 if(title === "OrangeHRM - New Level of HR Management")
    {
  console.log("title page verified successfully--pass:"+title);
   }else{
   console.log("title page not verified successfully--fail:"+title);
   }
   
});

 ////////Username&Password/////////////////////////
 test("login",async()=>{
   await page.locator("xpath=//input[@name='txtUserName']").fill("malli@123");
   await page.locator("xpath=//input[@name='txtPassword']").fill("malli@123");;
    await page.locator("xpath=//input[@name='Submit']").click();
   let welcometext : string | null= await page.getByText("Welcome malli@123").textContent();

await expect(welcometext).toBe("Welcome malli@123");

 });

//  test("verify welcome page",async ()=> {


//   if(welcometext === "Welcome malli@123")
//   {
//    console.log("welcomepage verified successfully--pass" )
//   }else{
// console.log("welcomepage not verified successfully--fail" )
//   }
test("Admin-Locations",async()=>{

  await page.locator("xpath=//span[text()='Admin']").hover();
  await page.locator("xpath=//span[text()='Company Info']").hover();
  await page.locator("xpath=//span[text()='Locations']").click();
  await page.frameLocator("xpath=//iframe[@id='rightMenu']");


});


//  });



test.afterAll("logout",async ()=>{
await page.getByText("Logout").click();
await page.close();

});
