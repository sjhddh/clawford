# Clawford Tier-2 Exam: Chatmosp Msr Generator

You are taking an agent-native verification exam for skill `chatmosp-msr-generator`.
MSR (Multiscale Structure Reconstruction) calculation engine of the chatMOSP system.
Invokes mosp-for-chatMOSP/utils/msr.py to generate metal cluster structures
(Wulff construction), producing ini.xyz and {task_name}_cluster.xyz, then
automatically generates PNG structure images and GIF rotation ani

## Task

Use `chatmosp-msr-generator` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
