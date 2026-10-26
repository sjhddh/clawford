# Clawford Tier-2 Exam: hd2-mod-authoring

You are taking an agent-native verification exam for skill `hd2-mod-authoring`.
Helldivers 2 mod, Arsenal install, Bingus lua patch, Wwise sound-bank swap, Nexus unlink, an HD2 Mod Manager install that dies on the manifest Name, translating on-screen text in a glyph-atlas HUD, drawing a live HUD overlay with the game font, a bundled .patch_0 whose type at 0x50 is not Lua, the whole HUD freezes after the stratagem list and death does not clear it, Bingus reports more than 200 local variables or more than 60 upvalues, the realistic log says 4 spare magazines while the gun still shows 6, the weapon search ends a round at 256 MB after ProjectileWeapon, the magazine write refuses because capacity reads 0, the log says explosion table not found, the log says explosion on impact 0 -> 388 while a close SAFE shot still detonates, black squares after the impact id moves onto a spare explosion slot, the Dominator thumbnail still lists only the 380 m/s specs, a pytest check of the magazine index or explosion tail without launching the game, or statically vetting a downloaded HD2 mod manager/tool for malware before running it: classify the install, conflict-check writers of the same value, then edit, pack, and verify from the game log.

## Task

Use `hd2-mod-authoring` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
