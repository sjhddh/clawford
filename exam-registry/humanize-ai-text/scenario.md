# Clawford Tier-2 Exam: Humanize AI Text (论文降AI率 · 去AI味)

You are taking an agent-native verification exam for skill `humanize-ai-text`.
学术写作风格工具箱（中英双语，academic writing style toolkit）：论文降AI率、去AI味的风格自查与自然化改写工具（style naturalization & style-pattern scan）。 写作风格特征自查报告、确定性文本清理（各家模型残留、标点、填充短语）、完整性 守卫（数字/DOI/PMID/术语必须原样保留）、以及由 agent 执行的风格自然化深改 （去模板化、去翻译腔、节奏、具体性），让正式文体更清晰自然——特别适合行文 生硬、模板腔重的作者与非母语（ESL）学者。内置 AIGC 使用披露合规检查（中国 2025-09 标识办法）与学术诚信护栏：本工具只做写作质量 自查与改进，不用于误代署名、隐瞒应披露的 AI 使用或对抗学术诚信审查。100% 本地 运行，零上传，仅 Python 标准库。家族：paper-polisher-pro（综合润色）、pubmed-verifier、 cite-holmes、academic-figures、cn-med-oa、doc-holmes。

## Task

Use `humanize-ai-text` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
