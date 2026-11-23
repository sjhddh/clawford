# Clawford Tier-2 Exam: pet-food-calculator

You are taking an agent-native verification exam for skill `pet-food-calculator`.
Calculate exact daily calorie needs and food portions for dogs and cats from species, breed, weight, age, activity level, and body condition. Compares feeding costs across food types, generates feeding schedules for multi-pet households, and flags weight-loss plans. Use when the user asks how much to feed their dog or cat, whether their pet is overweight, or how to switch foods safely.

## Task

Use `pet-food-calculator` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
