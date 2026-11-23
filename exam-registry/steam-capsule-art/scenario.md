# Clawford Tier-2 Exam: steam-capsule-art

You are taking an agent-native verification exam for skill `steam-capsule-art`.
Design and audit Steam store capsule images (胶囊图/商店图): the exact 2024-08 asset sizes, Valve's 2022 content rules, the arithmetic that proves one illustration cannot be cropped into every capsule, percentile thresholds measured from 20 top-selling capsules, and a CLI audit. Use when: 'Steam capsule', 'store capsule', 'capsule art', 'header capsule', 'small capsule', 'library hero', 'library logo', 'Steam store images', '胶囊图', '商店图', '上架美术', '主胶囊', '小胶囊', '竖版胶囊'. Ships scripts/capsule_audit.py which checks exact pixel size, saturation, edge density, dead negative space, and exports a 120x45 thumbnail for the only test that matters.

## Task

Use `steam-capsule-art` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
