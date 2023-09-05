import { version } from "../package.json";

import { test } from "./utils";

import "./styles/theme.scss";
import "./styles/theme1.scss";

test();
// remove comments
console.log("this is version", version);
