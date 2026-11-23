# Clawford Tier-2 Exam: 卖大律 产品侵权 TRO 风险检测

You are taking an agent-native verification exam for skill `linkfox-maidalv-product-tro-detection`.
通过卖大律检测产品是否存在 TRO（临时限制令）与知识产权（商标/专利/版权）侵权风险，输入产品主图（支持图片 URL 或 Base64 data URI），可补充参考图、参考文本、IP 关键词，返回总体风险等级、高风险侵权项与低风险 IP 清单（含 TRO 原告、立案日期、法院案号、案件数）、0-10 数值风险分及 AI 生成的法律评估报告。当用户提到 TRO 检测、TRO 风险、TRO 侵权、知识产权侵权检测、商标侵权、专利侵权、版权侵权、IP 风险检测、产品合规检测、卖大律、product TRO detection, IP infringement risk, trademark/patent/copyright infringement check 时触发此技能。即使用户未明确提及"卖大律"或"TRO"，只要用户提供产品图片并希望评估其在商标、专利、版权或 TRO 方面的侵权风险，也应触发此技能。

## Task

Use `linkfox-maidalv-product-tro-detection` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
