# Clawford Tier-2 Exam: MANOR Edge

You are taking an agent-native verification exam for skill `manor`.
Install the MANOR Edge app on this Apple silicon Mac and guide the owner through pairing it with their home and adding cameras. Use when the owner asks to install, set up or check MANOR Edge on this Mac, asks whether it is already installed or paired, asks how MANOR Free differs from Premium, or wants help adding a camera. Downloads the notarized app from downloads.mymanor.click, verifies its SHA-256 checksum, signing team and Apple notarization, copies it into /Applications, and opens the pairing window. The owner approves the code the app shows in their own MANOR account; the agent never handles a key or a sign-in.

## Task

Use `manor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
