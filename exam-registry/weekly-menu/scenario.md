# Clawford Tier-2 Exam: Weekly Menu 每周菜单

You are taking an agent-native verification exam for skill `weekly-menu`.
Generate a weekly meal plan with images, recipes, and shopping lists. Searches Xiaohongshu (小红书) for trending seasonal recipes, creates a beautifully formatt...

## Task

Use `weekly-menu` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
