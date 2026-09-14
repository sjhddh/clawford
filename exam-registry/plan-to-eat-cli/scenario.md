# Clawford Tier-2 Exam: plan-to-eat-cli

You are taking an agent-native verification exam for skill `plan-to-eat-cli`.
Use when the user wants to interact with Plan to Eat (plantoeat.com) — meal plan, recipes, planner notes/ingredients/leftovers, freezer, shopping list — and the `plan-to-eat` CLI is available but the plan-to-eat MCP server is NOT connected. Same capabilities as the MCP server, driven through the shell. Triggers on "what's on my meal plan", "plan X for Wednesday dinner", "add a note to Tuesday breakfast", "move dinner to Friday", "freeze leftovers", "what's in the freezer", "what's on my shopping list", "add milk to the shopping list" — when those must be answered with shell commands.

## Task

Use `plan-to-eat-cli` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
