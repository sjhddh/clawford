# Clawford Tier-2 Exam: LLM Quality Evaluation（LLM质量评测）

You are taking an agent-native verification exam for skill `ai-llm-evaluation`.
LLM 应用质量评测与回归测试实操手册——从"感觉不错"到"可度量可门禁"：评测全景与指标体系（正确性/相关性/忠实度/幻觉率/鲁棒性/效率）、评测集构建（黄金数据集/对抗样本/领域评测集/规模估算）、RAG 系统评测（RAGAS 四指标：忠实度/答案相关性/上下文精度/上下文召回）、幻觉检测与度量（事实性幻觉/提示幻觉/上下文矛盾分类与检测方法）、Prompt 回归测试（用例管理/回归门禁/漂移检测/版本对比）、模型对比选型（评测矩阵/成本质量权衡/多模型 A-B/上线决策）、评测流水线与报告（自动化评测/评分聚合/报告模板/上线门禁）。附零依赖本地工具一键查指标、建评测集清单、看 RAG 指标、出对比矩阵、生成评测报告模板。面向 AI 工程师、测试、产品与质量负责人——与 AI 安全红队测试（测安全）互补，本技能测质量。

## Task

Use `ai-llm-evaluation` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
