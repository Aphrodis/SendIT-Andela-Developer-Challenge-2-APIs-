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
//Getting all the parcel delivery orders
app.get('/api/v1/parcels', (req, res)=>{
	res.send(parcels);
});
//Getting specific delivery order
app.get('/api/v1/parcels/:id', (req, res)=>{
	const parcel = parcels.find(c => c.id === parseInt(req.params.id));
	if(!parcel) return res.status(404).send('The person with that id was not found');
	res.send(parcel);
});
//Getting all parcel delivery orders by a specific user
app.get('/api/v1/users/:owner', (req, res)=>{
	const person = parcels.find(c => c.owner === toString(req.params.owner));
	if(!person) return res.status(404).send('The person with that name was not found');
	else 
	res.send(person);
});

const port = process.env.PORT || 3000;
	app.listen(port, () => console.log(`It is listening to port ${port}`));



