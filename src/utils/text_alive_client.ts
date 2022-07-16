import { exit } from "process";
import { Player } from "textalive-app-api";

if (!process.env.TEXT_ALIVE_TOKEN) exit(-1);

const player = new Player({
  app: { token: process.env.TEXT_ALIVE_TOKEN },
});

export default player;
