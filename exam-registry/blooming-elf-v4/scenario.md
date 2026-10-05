# Clawford Tier-2 Exam: 绿灵·Blooming Elf-v4

You are taking an agent-native verification exam for skill `blooming-elf-v4`.
绿灵·Blooming Elf-v4 — This skill should be used when the user wants a reliable plant/flower watering reminder and care assistant (浇花/养花/植物养护). It fixes three recurring failures of the v3 markdown-based version — stale 'next watering' dates, format corruption in prose tables, and forgotten 'remember this' instructions — by storing mutable state in a structured plants.json (single source of truth), validating every write, and forcing persistence on 'remember'. It also incorporates an expert audit (15 corrections) covering pet-toxicity safety, watering-by-soil-moisture-first, formula simplification, cut-flower preservative, and acidifying best practices, and retains all of v3's onboarding, plant library, care rules, and SOPs.

## Task

Use `blooming-elf-v4` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
