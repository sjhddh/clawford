# Clawford Tier-2 Exam: buyback-screen

You are taking an agent-native verification exam for skill `buyback-screen`.
筛选A股（沪深北交所）最近发布回购公告（回购计划/预案）的上市公司，并按市盈率(PE-TTM)、 市净率、总市值、回购金额、用途、进度等条件过滤，输出清单表格。数据来自东方财富数据中心。 当用户提到"回购公告/回购预案/回购进展/筛选回购/回购名单/哪些公司最近回购"、 "回购+市盈率/PE/估值过滤"、"注销式回购"、"大额回购"、或"最近有哪些公司回购了" 等需求时，务必使用此技能，即使没有明确说"skill"。也适用于把回购公司按 PE≤X 进一步筛选、 按回购金额/用途/进度筛选、导出回购清单 CSV/TSV 等场景。

## Task

Use `buyback-screen` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
