const PDFDocument = require('pdfkit');
const fs = require('fs');

doc = new PDFDocument();

doc.pipe(fs.createWriteStream('testing_file.pdf'));  
console.log(doc.page.width);

doc.image('./greyBackground.jpg',0, 0,{height: doc.page.height ,width: doc.page.width}) //background white

doc.text('+', 20, 3);
doc.image('./inbox.png',20, 20,{height:100,width:150});
doc.text('+',doc.page.width / 1.25, 3);

doc.font('Helvetica-Bold').fontSize(8).text('Andes Property Spa', doc.page.width / 1.25, 20,{height:100,width:100});
doc.font('Helvetica').text('Neuveva Prodeinciaasdasdas', doc.page.width / 1.25, 28,{height:100,width:100});
doc.font('Helvetica').text('Abcd', doc.page.width / 1.25, 45,{height:100,width:100});
doc.font('Helvetica').text('Abcdefg', doc.page.width / 1.25, 55,{height:100,width:100});

doc.font('Helvetica-Bold').fontSize(8).text('___', 20, 130,{height:100,width:100});
doc.font('Helvetica').fontSize(7).text('Property', 20, 150,{height:100,width:100});
doc.font('Helvetica').fontSize(8).text('Santo Damingo 755, 309', 20, 160,{height:100,width:100});
doc.font('Helvetica').fontSize(8).text('Ragion De Valparasio', 20, 170,{height:100,width:100});

doc.font('Helvetica-Bold').fontSize(8).text('___', doc.page.width / 1.25, 130,{height:100,width:100});
doc.font('Helvetica').fontSize(7).text('Property', doc.page.width / 1.25, 150,{height:100,width:100});
doc.font('Helvetica').fontSize(8).text('Santo Damingo 755, 309', doc.page.width / 1.25, 160,{height:100,width:100});
doc.font('Helvetica').fontSize(8).text('Ragion De Valparasio', doc.page.width / 1.25, 170,{height:100,width:100});

doc.image('./whiteBackground.jpg',3, 200,{height: doc.page.height / 2,width: doc.page.width-8}) //background white
doc.font('Helvetica-Bold').fontSize(7).text('DESCRIPTION', 20, 210,{height:100,width:100});
doc.font('Helvetica-Bold').fontSize(7).text('SUBTOTAL', doc.page.width / 1.25, 210,{height:100,width:100});
doc.text('________________________________________________________________________________________________', doc.page.width/6, 220, {height: 100,width: doc.page.width})
doc.font('Helvetica-Bold').fontSize(7).text('Period', 20, 235,{height:100,width:100});
doc.font('Helvetica-Bold').fontSize(7).text('MONTH OF JUNE', doc.page.width / 1.25, 235,{height:100,width:100});

doc.font('Helvetica-Bold').fontSize(7).text('Rent For This Period', 20, 255,{height:100,width:100});
doc.font('Helvetica-Bold').fontSize(7).text('$300.00', doc.page.width / 1.25, 255,{height:100,width:100});

doc.font('Helvetica-Bold').fontSize(7).text('Extras For this Period', 20, 275,{height:100,width:100});
doc.font('Helvetica-Bold').fontSize(7).text('$25.781,90', doc.page.width / 1.25, 275,{height:100,width:100});

doc.font('Helvetica-Bold').fontSize(7).text('Discounts/Prepayments', 20, 295,{height:100,width:100});
doc.font('Helvetica-Bold').fontSize(7).text('$0.00', doc.page.width / 1.25, 295,{height:100,width:100});

doc.font('Helvetica-Bold').fontSize(7).text('Balance From Previous Month', 20, 315,{height:100,width:100});
doc.font('Helvetica-Bold').fontSize(7).text('$0.00', doc.page.width / 1.25, 315,{height:100,width:100});

doc.font('Helvetica-Bold').fontSize(7).text('Invoice No', doc.page.width / 1.25 - 180, 345,{height:100,width:100});
doc.font('Helvetica-Bold').fontSize(7).text('Issued By', doc.page.width / 1.25 - 120, 345,{height:100,width:100});
doc.font('Helvetica-Bold').fontSize(7).text('Due By', doc.page.width / 1.25 - 60, 345,{height:100,width:100});
doc.font('Helvetica-Bold').fontSize(7).text('Total', doc.page.width / 1.25, 345,{height:100,width:100});
doc.text('___________________________________________________________________________________________________________________________________________', 20, 350, {height: 100,width: doc.page.width})
doc.font('Helvetica-Bold').fontSize(7).text('Invoice No', doc.page.width / 1.25 - 180, 360,{height:100,width:100});
doc.font('Helvetica-Bold').fontSize(7).text('Issued By', doc.page.width / 1.25 - 120, 360,{height:100,width:100});
doc.font('Helvetica-Bold').fontSize(7).text('Due By', doc.page.width / 1.25 - 60, 360,{height:100,width:100});
doc.font('Helvetica-Bold').fontSize(7).text('Total', doc.page.width / 1.25, 360,{height:100,width:100});

doc.font('Helvetica-Bold').fontSize(7).text('Please Pay By Due to late', 204, 380,{height:100,width:100});

doc.font('Helvetica-Bold').fontSize(8).text('___', 20, 390,{height:100,width:100});
doc.font('Helvetica-Bold').fontSize(7).text('Notes', 20, 410,{height:100,width:100});

doc.font('Helvetica-Bold').fontSize(8).text('___', doc.page.width / 1.5, 390,{height:100,width:100});
doc.font('Helvetica-Bold').fontSize(7).text('Bank Transfer', doc.page.width / 1.5, 410,{height:100,width:100});

doc.font('Helvetica-Bold').fontSize(7).text('1. To Avoid late Payment', 20, 425,{height:100,width:100});
doc.font('Helvetica-Bold').fontSize(7).text('2. Rent For This Period', 20, 450,{height:100,width:100});
doc.font('Helvetica-Bold').fontSize(7).text('3. Rent For This Period', 20, 475,{height:100,width:100});

doc.font('Helvetica-Bold').fontSize(7).text('Beneficiary: ', doc.page.width / 1.5, 425,{height:100,width:100});
doc.font('Helvetica-Bold').fontSize(7).text('Bank: ', doc.page.width / 1.5, 450,{height:100,width:100});
doc.font('Helvetica-Bold').fontSize(7).text('AN: ', doc.page.width / 1.5, 475,{height:100,width:100});
doc.font('Helvetica-Bold').fontSize(7).text('RUT: ', doc.page.width / 1.5, 500,{height:100,width:100});

doc.font('Helvetica-Bold').fontSize(7).text('Andes Property', doc.page.width / 1.25, 425,{height:100,width:100});
doc.font('Helvetica-Bold').fontSize(7).text('Skotia Bank', doc.page.width / 1.25, 450,{height:100,width:100});
doc.font('Helvetica-Bold').fontSize(7).text('8712099', doc.page.width / 1.25, 475,{height:100,width:100});
doc.font('Helvetica-Bold').fontSize(7).text('7.1212121221-1', doc.page.width / 1.25, 500,{height:100,width:100});

doc.image('./paid.png',doc.page.width/4, 350,{width: doc.page.width / 2})
// doc.font('Helvetica').fontSize(7).text('Property', doc.page.width/1.25, 150,{height:100,width:100});

doc.end();
