const express = require('express');
const app = express();
app.use(express.json());
app.use((req, res, next) => { res.setHeader('Content-Type', 'application/json; charset=utf-8'); next(); });

app.listen(3000, console.log('サーバーが開始されました'));


const customers = [
    { name: '田中', id: 1},
    { name: '佐藤', id: 2},
    { name: '鈴木', id: 3},
    { name: '木下', id: 4},
    { name: '安藤', id: 5}
];

app.get('/api/customers', (req, res) => {
    res.send(customers);
});

app.get("/api/customers/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  if (!customer) {
    res.status(404).send("<h2>Not Found</h2>");
  }
  res.send(customer);
});


app.post("/api/customers", (req, res) => {
  const customer = {
    
    id: customers.length + 1,
    name: req.body.name,
  };
  customers.push(customer);
  res.send(customers);
});


app.put("/api/customers/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  if (!customer) {
    res.status(404).send("<h2>Not Found</h2>");
  }
  customer.name = req.body.name;
  res.send(customer);
});

app.delete("/api/customers/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  if (!customer) {
    res.status(404).send("<h2>Not Found</h2>");
  }

  const index = customers.indexOf(customer);
  customers.splice(index, 1); 

  res.send(customer);
});