import jsonServer from "json-server";
import cors from "cors";
import places from "./db/places/places";

const db = {
  places,
};

const server = jsonServer.create();
const router = jsonServer.router(db);
const middleWares = jsonServer.defaults({ static: __dirname + "/public" });

const PORT = process.env.PORT || 4000;

server.use(cors());
server.use(router);
server.use(middleWares);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
