const express = require("express");
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());
const parcels = [
	{id: 1, owner: 'Aphrodice', pickup:'Rwanda', destination: 'Ghana', weight: 12, price: 14400},
	{id: 2, owner: 'Ariel', pickup:'Nigeria', destination: 'DRC', weight: 7, price: 12800},
	{id: 3, owner: 'Emile', pickup:'Tanzania', destination: 'Eritrea', weight: 23, price: 19700},
	{id: 4, owner: 'Honorine', pickup:'South Africa', destination: 'Zambia', weight: 18, price: 16200},
	{id: 5, owner: 'Jesca', pickup:'Egypt', destination: 'Rwanda', weight: 32, price: 21000}
];
app.put('/api/v5/parcels/cancel/:id', (req, res)=>{
	const newOrders = parcels.find(c=> c.id === parseInt(req.params.id));
	if(!newOrders) return res.status(404).send('The parcel with that Id was not found');

	const { error } = validateCourse(req.body);//result.error
	if(error) return res.status(400).send(error.details[0].message);
	
	newOrders.name = req.body.name;
	res.send(newOrders);
});	