let SHEET_ID = "1qaOoV9Isjn8Yv-4yT5coJlGrYZOr1p7pUsRjq76cruA";

/**
 * Serves the HTML form
 */


/**
 * Handles form submission from the frontend
 * @param {Object} formData - Contains name, email, and message from the form
 * @returns {string} Confirmation message
 */


function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('FormApp');
}

function handleForm(formData) {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName("Form Data");
  const row = sheet.getLastRow() + 1;

  sheet.getRange(row, 1).setValue(formData.name);
  sheet.getRange(row, 2).setValue(formData.email);
  sheet.getRange(row, 3).setValue(formData.message);
  sheet.getRange(row, 4).setValue(new Date());
  sheet.getRange(row, 5).setValue(`Thanks, ${formData.name}! We’ve received your message.`);
  sendRichEmail(formData.name,formData.email)
  return `Thanks, ${formData.name}! We’ve received your message.`;
}


function sendRichEmail(name,email) {
 
  var subject = "Successfully Submitted !!!!";
  var body = "You added your details successfully.";
  var htmlBody = `Thanks, ${name}! We’ve received your message.`;

  MailApp.sendEmail({
    to: email,
    subject: subject,
    body: body,
    htmlBody: htmlBody,
    name: `${name}`
  });
}








