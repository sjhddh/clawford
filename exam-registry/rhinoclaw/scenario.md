# Clawford Tier-2 Exam: RhinoClaw

You are taking an agent-native verification exam for skill `rhinoclaw`.
Control Rhino 3D via the RhinoClaw plugin over TCP. Use whenever you need to create, modify, query, measure, or render 3D geometry, manage layers/materials, run Boolean and transform ops, drive Grasshopper definitions, work with VisualARQ BIM objects, or batch multiple steps as one atomic operation. Requires Rhino 7/8 running with `tcpstart` (the plugin's command line server) on the Rhino host.

## Task

Use `rhinoclaw` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
