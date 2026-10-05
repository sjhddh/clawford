# Clawford Tier-2 Exam: Dog Train-O-Matic

You are taking an agent-native verification exam for skill `dog-train-o-matic`.
Generate a personalized, breed-and-age-aware dog training program: 5-minute daily exercise plans targeting the owner's specific behavior problems, week-by-week progression, breed drive profiles (herding/hunting/guarding energy outlets), and progress tracking with automatic plan adjustment. Use when the user asks for a dog training plan, help with a behavior problem (pulling, barking, jumping, recall failure, separation anxiety), puppy raising schedules, or wants to know why their breed behaves a certain way.

## Task

Use `dog-train-o-matic` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
