const express = require('express');
//const connectDB = require('./config/db');
const sqlConnect = require('./config/sqlConnect');
const path = require('path');
const routes = require('./routes');

const app = express();

//connect database
//connectDB();
sqlConnect();

//Init middleware
app.use(express.json({ extended: false }));

//routes
app.use(routes);

// Serve static assets in production
//if (process.env.NODE_ENV === 'production') {
// Set static folder
app.use(express.static('client/build'));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
//}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
