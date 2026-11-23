# Clawford Tier-2 Exam: adobe-after-effects-integrations

You are taking an agent-native verification exam for skill `adobe-after-effects-integrations`.
Build, package, install and debug components that run beside or inside Adobe After Effects, and choose between them. Covers CEP extension panels (CSXS/manifest.xml, CSInterface.evalScript, Node.js in a panel, .debug files, PlayerDebugMode, ZXP signing and UPIA installs, and CEP's retirement schedule), UXP plugins (After Effects beta from 27.0), C++ effect, AEGP and AEIO plugins on the After Effects SDK (PiPL, entry points, Multi-Frame Rendering, SmartFX, GPU, AEGP_ExecuteScript, idle hooks), and MCP servers or other bridges that let an AI agent, a pipeline or another application drive After Effects (command-line scripts, file mailboxes polled with app.scheduleTask, loopback servers in a CEP panel, AEGP sockets). Use when deciding how an outside program reaches After Effects, or when building, installing or fixing one of these components. For the ExtendScript or expressions such a component runs inside After Effects, use adobe-after-effects-scripting.

## Task

Use `adobe-after-effects-integrations` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
