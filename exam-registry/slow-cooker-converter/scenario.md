# Clawford Tier-2 Exam: slow-cooker-converter

You are taking an agent-native verification exam for skill `slow-cooker-converter`.
Use when you want to cook a regular stovetop/oven recipe in a slow cooker or Instant Pot (or vice versa) — converts cooking times across 7 appliance modes with the physics of WHY (collagen→gelatin at 60-70°C, milk curdles at 2h+, rice liquid ratios change in sealed pots), checks capacity fill (half-full min, two-thirds max), detects ingredients that must be added late or omitted entirely (dairy, pasta, fresh herbs, thickening), and produces a step-rewritten recipe with an insert-at-mark timeline.

## Task

Use `slow-cooker-converter` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
