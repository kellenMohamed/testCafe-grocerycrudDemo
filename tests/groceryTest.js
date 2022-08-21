import {Selector} from 'testcafe';

//Dropdown List:
const versionSelect = Selector('select#switch-version-select')
const versionOptions = versionSelect.find('option');

// Add Customer Button:
const addCustomerButton = Selector('button').withText("Add Customer");

//Employee Selector:
const employeerSelect = Selector('select#chosen-single-with-deselect')
const employeerOption = employeerSelect.find('span');

// Save Button:
/*const saveButton = Selector('div')
    .child('form-group gcrud-form-group')
    .child('div')
    .child('col-sm-offset-3 col-sm-7')
    .child('button')
    .child('btn btn-secondary btn-success b10')
    .child('i')
    .child('el el-ok');
*/
const saveButton = Selector('button').withText("Save");

// Change Version App:
fixture("Change Version Fixture")
    .page("https://www.grocerycrud.com/v1.x/demo/bootstrap_theme")

let vOption = 'Bootstrap V4 Theme'    

test("Change version Test",async t =>{
    await t
        .click(versionSelect)
        .click(versionOptions.withText(vOption))
})

// Add Customer Button:
test.skip.page("https://www.grocerycrud.com/v1.x/demo/bootstrap_theme_v4")
    ("Add Customer Test",async t =>{
    await t
        .click(addCustomerButton);
})

// Fill Form:
let vname = 'Teste Sicredi'
let vLastName = 'Teste'
let vcontactFirstName = 'Kellen'
let vphone = '16991565721';
let vaddressLine1 = 'Av Assis Brasil, 3970';
let vaddressLine2 = 'Torre D';
let vcity = 'Porto Alegre';
let vstate = 'RS';
let vpostalCode = '91000-000';
let vcountry = 'Brasil';
let vcreditLimit = '200';
let vemployeer = 'Fixter';

test.page("https://www.grocerycrud.com/v1.x/demo/bootstrap_theme_v4/add")
    ("Fill New Customer Page Test",async t =>{
    await t        
    .typeText("#field-customerName",vname) 
    .typeText("#field-contactLastName",vLastName) 
    .typeText("#field-contactFirstName",vcontactFirstName)
    .typeText("#field-phone",vphone)
    .typeText("#field-addressLine1",vaddressLine1)
    .typeText("#field-addressLine2",vaddressLine2)
    .typeText("#field-city",vcity)
    .typeText("#field-state",vstate)
    .typeText("#field-postalCode",vpostalCode)
    .typeText("#field-country",vcountry)
    .typeText("#field-creditLimit",vcreditLimit)
    //.click(employeerSelect) // Needs to verify the correct element Path
    //.click(employeerOption.withText(vemployeer))
    .click(saveButton)
})

test("Assertion Test",async t =>{
    await t
        .expect('div#report-success'.value).constains('Your data has been successfully stored into the database.')
        .closeWindow()
})


