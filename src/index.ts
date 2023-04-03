import jsonServer from "json-server";
import cors from "cors";
import places from "./places/places";

const server = jsonServer.create();
const router = jsonServer.router({ places });
const middleWires = jsonServer.defaults();

const PORT = process.env.PORT || 4000

server.use(cors());
server.use(middleWires);
server.use(router);
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
