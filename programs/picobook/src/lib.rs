use anchor_lang::prelude::*;

declare_id!("Cm1pi42PSyi6sVRMUJvaLyBGtU9cBNw4ciXCxNr1UPn5");

#[program]
pub mod picobook {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
