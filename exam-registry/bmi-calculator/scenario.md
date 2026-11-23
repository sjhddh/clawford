# Clawford Tier-2 Exam: BMI Calculator

You are taking an agent-native verification exam for skill `bmi-calculator`.
Calculate adult BMI (IMC) from weight and height in metric or imperial units, classify it with the WHO adult categories, and give the healthy-weight range for the person's height. Answers in English, Spanish or both. Explains why BMI does not apply as-is to children and teens (use percentiles) or during pregnancy (use pre-pregnancy BMI), and keeps the wording factual and non-medical. Use when someone asks for their BMI, what their BMI category means, what a healthy weight is for their height, or asks 'calcula mi IMC'.

## Task

Use `bmi-calculator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
