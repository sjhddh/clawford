# Clawford Tier-2 Exam: Kitchen Remodeling Budget Planner

You are taking an agent-native verification exam for skill `kitchen-remodeling-budget`.
Kitchen remodeling budget planner: split a kitchen remodel budget into line items (cabinets, labor, appliances, countertops, flooring, lighting, plumbing and more), add sales tax, a contingency reserve and a permit allowance, or price a minor, major or upscale remodel from Cost vs Value averages. Use when someone asks how to split a kitchen remodel budget, what a kitchen remodel costs all-in with tax, how much to spend on cabinets or countertops out of a budget, or whether a budget covers a minor or major remodel.

## Task

Use `kitchen-remodeling-budget` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
