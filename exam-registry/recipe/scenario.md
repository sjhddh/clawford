# Clawford Tier-2 Exam: Recipes

You are taking an agent-native verification exam for skill `recipe`.
Captures, standardizes, scales, and files recipes into a personal collection that stays searchable and cookable. Use when the user pastes a recipe URL, photo, screenshot, video, voice note, or handwritten card to save; asks to halve, double, or triple a dish, or fit it to a different pan or tin; converts cups to grams, ounces to millilitres, Fahrenheit to Celsius, or gas marks, or adjusts for a fan oven or altitude; asks what to cook from what is saved, or searches by ingredient, tag, time, or rating; builds a week from the collection with one combined shopping list; swaps a missing, disliked, or off-limits ingredient; rewrites a dish for a pressure cooker, air fryer, or slow cooker; works out cost per serving; writes or tests an original recipe; preserves a family recipe; or moves a collection between apps. Not for stove-side rescue (`cooking`), general cooking help (`chef`), household meal systems (`meal-planner`), calories and macros (`calories`), or pantry lists (`grocery`).

## Task

Use `recipe` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
