import * as anchor from "@coral-xyz/anchor";
import { BankrunProvider } from "anchor-bankrun";
import { startAnchor } from "solana-bankrun";
import { Program } from "@coral-xyz/anchor";
import { Picobook } from "../target/types/picobook";
const PicobookIDL: Picobook = require("../target/idl/picobook.json");

const PICOBOOK_PROGRAM_ID = new anchor.web3.PublicKey(
  "Cm1pi42PSyi6sVRMUJvaLyBGtU9cBNw4ciXCxNr1UPn5"
);

describe("picobook", async () => {
  let context,
    program;

  before(async () => {
    context = await startAnchor("./", [], []);
    const provider = new BankrunProvider(context);
    anchor.setProvider(provider);

    program = new anchor.Program<Picobook>(
     PicobookIDL,
     PICOBOOK_PROGRAM_ID,
     provider
    );
  });

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
