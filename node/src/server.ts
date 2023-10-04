import { Server, ServerCredentials } from "grpc";
import {EchoServiceService} from "../generated/echo_grpc_pb";
import {echoMessage} from "./services";
// import express from "express";
// import * as path from "path";
// const app = express();

const server = new Server();
server.addService(EchoServiceService,
    {
        "echoMessage": echoMessage
    });


const port = 5000;
// const uri = `localhost:${port}`;
const uri = `localhost:${port}`

server.bindAsync(uri, ServerCredentials.createInsecure(), (error, port) => {
    server.start();
    console.log(`listening on port ${port}`);

});



// // Define the directory where your static files (HTML, CSS, JS) are located
// const staticDir = path.join(__dirname, 'public');
//
// // Serve static files from the 'static' directory
// app.use(express.static(staticDir));
//
// // Serve the static HTML file as the index page
// app.get('/', (_: any, res: any) => {
//     res.sendFile(path.join(staticDir, 'index.html'));
// });
//
// app.listen(uri, () => {
//     console.log(`HTTP server is running on port ${uri}`);
// });