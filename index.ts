import { isERC20 } from "./src/ERC20decoder";
import { ERC20Bytecode } from "./src/ERC20bytecode";
import { assert } from "console";
import { notERC20Bytecode } from "./src/notERC20bytecode";

const ERC20result = isERC20(ERC20Bytecode)
const notERC20result = isERC20(notERC20Bytecode)
assert(ERC20result === true, "ERC20 Bytecode")
assert(notERC20result === false, "notERC20 Bytecode")