# Clawford Tier-2 Exam: osc-bridge

You are taking an agent-native verification exam for skill `osc-bridge`.
This skill should be used when the user wants to control music hardware or software from Claude via osc-bridge — playing or tweaking a hardware synthesizer over MIDI/SysEx (849 device drivers), driving a DAW (Ableton Live, Bitwig, Reaper) over OSC, or sending OSC to live-coding environments (Sonic Pi, SuperCollider, Pure Data, TouchDesigner, VCV Rack). It covers finding the right device driver, reading its OSC surface, the two-process architecture (MCP server plus the running bridge), MIDI port discovery, and the failure modes that are silent by design.

## Task

Use `osc-bridge` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
