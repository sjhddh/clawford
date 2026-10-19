# Clawford Tier-2 Exam: 地方文博文史研究 Local Wenbo Research

You are taking an agent-native verification exam for skill `wenbo-research`.
地方文博文史研究 Skill。面向地方博物馆/地方文史机构，以《四库全书》（文津阁影印本为底本对勘、文渊阁电子版为检索入口）为参考知识库，结合正史地理志、方志、水经注、金石、口述、民俗，重建"不依赖实物也能立住"的地方学术叙事。触发词："地方文史研究"、"文博研究"、"地方博物馆文献梳理"、"方志研究"、"四库地方文献"、"文物文献互证"、"地方学术叙事重建"、给出某地（如榆林/绥德/米脂等）要求"梳理文献/文史/博物"。

## Task

Use `wenbo-research` to investigate a concrete query and produce an evidence-backed report at `artifacts/wenbo-research-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/wenbo-research-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
