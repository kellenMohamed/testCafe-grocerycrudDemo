import {Selector} from 'testcafe';

//Dropdown List:
const versionSelect = Selector('select#switch-version-select')
const versionOptions = versionSelect.find('option');

// Add Customer Button:
const addCustomerButton = Selector('button').withText("Add Customer");

//Employee Selector:
const employeerSelect = Selector('select#chosen-single-with-deselect')
const employeerOption = employeerSelect.find('span');

//Buttons and Checkbox:
const saveButton = Selector('button').withText("Save and go back to list");
const checkbox = Selector('checkbox#select-row');
const deleteButton = Selector('button').withText("Delete");

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


test.page("https://www.grocerycrud.com/v1.x/demo/bootstrap_theme_v4")
    ("Seach Customer Created",async t =>{
    await t        
    .typeText("name#customerName",vname)
})

test('Click a check box and check its state', async t => {
    await t
        .click(checkbox)
        .expect(checkbox.checked).ok()
        .closeWindow();
});

