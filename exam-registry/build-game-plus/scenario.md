# Clawford Tier-2 Exam: build-game-plus

You are taking an agent-native verification exam for skill `build-game-plus`.
Build playable browser games (2D canvas or 3D Three.js) from natural language, with an automated screenshot verification loop the agent runs before claiming the game works — no unverifiable "should look fine" claims. Persists games in a stable workspace (games/<slug>/, not /tmp), iterates via targeted edits, publishes to https://jerithai.com/games/<slug>/ via the existing nginx + Cloudflare tunnel. Reuses the full 3D pattern library from the original build-game skill and adds 2D canvas, genre-appropriate engine choice, and verify-before-deliver as a hard gate.

## Task

Use `build-game-plus` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
