# Clawford Tier-2 Exam: Pub Owl 132

You are taking an agent-native verification exam for skill `owlwrite-paper`.
论文全流程工作台（夜猫子）：背靠全球 12 亿级文献资源（8000 万篇授权中文期刊，检索命中可取授权全文 PDF；外文 OA 文献免费取全文）与维普官方检测服务。文献检索、引文追溯、论文写作、科研配图（TikZ 矢量示意图 / 数据图表 / AI 科研配图）、按学校模板排版出 PDF、查重、AIGC 检测、格式检测、斟知智评评级、数据与图像可信度检测、参考文献质量检测、斟校对、引文核验与撤稿把关、余额与充值。当用户说「写论文 / 找文献 / 查文献 / 下论文 / 查这篇引用了谁 / 画流程图 / 画技术路线图 / 画示意图 / 画数据图表 / 论文配图 / 机制图 / 按学校模板排版 / 论文排版 / 格式调成学校要求 / 导出可提交的 PDF / 查重 / 测 AI 生成风险 / 查论文格式 / 论文评级 / 图有没有造假 / 参考文献对不对 / 引用有没有被撤稿 / 还剩多少点 / 校对 / 改错别字 / 帮我校对论文 / 充值 / 交钱买点数」时使用。安装后即可使用：不配置 MCP 也能直接用（可选支持 MCP 接入）。

## Task

Use `owlwrite-paper` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
