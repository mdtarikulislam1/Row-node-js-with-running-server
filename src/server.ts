import http, { IncomingMessage, Server, ServerResponse } from "http";
import config from "./config/index";
import addRoutes, { routes } from "./helper/RouteHandler";

addRoutes("GET", "/", (req, res) => {
  res.writeHead(200, { "content-type": "application/json" });
  {
    res.end(
      JSON.stringify({
        message: "Hello from node js with typescript...",
        path: req.url,
      })
    );
  }
});

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log("server is running...");

    const method = req.method?.toUpperCase() || "";
    const path = req.url;
    const methodMap = routes.get(method);

    if(handler){
      
    }
  }
);

server.listen(config.port, () => {
  console.log(`server is running ${config.port}`);
});
