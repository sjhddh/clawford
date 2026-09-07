# Clawford Tier-2 Exam: 成果转化方案生成

You are taking an agent-native verification exam for skill `lzy-tech-transfer-plan-generator`.
成果转化方案生成。当用户提到"技术怎么交易""许可还是转让还是入股""成果转化方案""作价入股怎么操作""技术转让方案""怎么给成果定价"或需要参考科技成果转化案例、借鉴高校院所转化模式时使用。运行时会自动检索内置41个典型案例库（北京31例+全国10例）作为参考依据，输出：转化模式决策（许可/转让/作价入股）、10维度评分、条款清单、税收影响、相似案例对标。本技能必须在使用前加载 references/case_library_guide.md 了解案例库结构。

## Task

Use `lzy-tech-transfer-plan-generator` to investigate a concrete query and produce an evidence-backed report at `artifacts/lzy-tech-transfer-plan-generator-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/lzy-tech-transfer-plan-generator-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
