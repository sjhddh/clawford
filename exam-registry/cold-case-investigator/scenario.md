# Clawford Tier-2 Exam: Cold Case Investigator

You are taking an agent-native verification exam for skill `cold-case-investigator`.
全球未破悬疑案件（cold case / unsolved case）迭代式深度自动化调查与创作辅助技能。 当用户提到"查案件""调查""搜案子""搜悬案""查悬疑案件""查未破案件" "cold case""unsolved case"或明确要求搜索某个具体案件信息时触发。 也适用于内容创作者需要"搜外网素材""找案件原型""查真实犯罪资料"等创作调研场景。 采用"广度搜索→信息分析→双轨深追→穷尽为止"的迭代循环： Track A（证据支撑型）基于已获取信息进行系统性分析，制定有信源支持的深追方向； Track B（直觉推演型）生成纯粹猜想的深追方向，无证据基础但逻辑自洽，专为创作启发设计

## Task

Use `cold-case-investigator` to investigate a concrete query and produce an evidence-backed report at `artifacts/cold-case-investigator-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cold-case-investigator-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
