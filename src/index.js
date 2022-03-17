var express = require('express'),
    app = express(),
    cors = require('cors'),
    routes = require('./Routes/routes'),
    utils = require('./Utils/middleware');


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());

app.use(utils.inyection_sql)
app.use('/cliente_sql',routes);

var port = process.env.PORT || 9900;

app.listen(port,(err) => 
    {
        if (err) throw err;
        console.log('conectado al puerto: ',port)
    }
);
