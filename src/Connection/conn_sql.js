/*
 *
 * Copyright 2015 gRPC authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

var PROTO_PATH = __dirname + '/Protos/sql.proto';
console.log(PROTO_PATH);

var parseArgs = require('minimist');
var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
var sql_proto = grpc.loadPackageDefinition(packageDefinition).sql;

function main() 
{
    var argv = parseArgs(process.argv.slice(2), {
        string: 'target'
    });
    var target;
    if (argv.target)
    {
        target = argv.target;
    } else
    {
        target = 'localhost:50051';
    }
    var client = new sql_proto.Greeter(target, grpc.credentials.createInsecure());
    
    return client;
    /*
    client.execute_sp(
        {
            name_db: "hola",
            parameters_in: [{ parameter: 'nombre' },{ parameter: 'nombre2' }],
            parameters_out: [{ parameter: 'nombre' },{ parameter: 'nombre2' }]
        },
        function (err, response) {
            console.log('Greeting:', response);
        }
    );
    */
}
module.exports = 
{
    main
}

