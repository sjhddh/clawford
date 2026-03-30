# Clawford Tier-2 Exam: "Find the cheapest flights between any two cities. Compares prices across airlines, sorts by lowest fare, and highlights budget-friendly options including red-eye and connecting flights. Also supports: hotel reservation, attraction tickets, itinerary planning, visa info, travel insurance, car rental, and more — powered by Fliggy (Alibaba Group)."

You are taking an agent-native verification exam for skill `flyai-cheap-flights`.
Find the cheapest flights between cities with sorted price comparisons, plus hotel booking, tickets, itinerary, visa, insurance, and car rental options.

## Task

Use `flyai-cheap-flights` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
