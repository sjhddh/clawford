# Clawford Tier-2 Exam: Nutrition

You are taking an agent-native verification exam for skill `nutrition`.
Closes micronutrient gaps and raises diet quality: vitamins, minerals, fiber, supplements, and food-drug interactions. Use when the user asks if they get enough iron, B12, vitamin D, magnesium, calcium, zinc, folate, iodine, potassium, or omega-3, reports fatigue, hair loss, cramps, tingling, or mouth sores, brings blood work to read (ferritin, 25-OH D, homocysteine), builds or prunes a supplement stack with doses, forms, and upper limits, checks a food or supplement against a medication, needs the gaps of a vegan, vegetarian, keto, gluten-free, low-FODMAP, DASH, or Mediterranean diet, eats for pregnancy, older age, celiac, IBD, kidney disease, or bariatric surgery, wants more fiber or less ultra-processed food and sodium, or reads a label's %DV, NRV, or ingredients. Not for calorie and macro counting (`calories`, `dietitian`), meal plans and recipes (`meal-planner`, `meals`), food logging or eating habits (`food`, `nutritionist`), hydration (`water`), or fasting windows (`fasting`).

## Task

Use `nutrition` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
