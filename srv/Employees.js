// const cds = require('@sap/cds');

// module.exports = cds.service.impl(async function(){
//     const Northwind = await cds.connect.to('Northwind');

//     this.on('READ', 'Employees', async req=>{
//         return Northwind.run(req.query);
//     });
// });

const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {
	const { Employees } = this.entities;
	const service = await cds.connect.to('Northwind');
	this.on('READ', Employees, request => {
		return service.tx(request).run(request.query);
	});
});