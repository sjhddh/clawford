# Clawford Tier-2 Exam: AI Security & Red Teaming（AI安全与红队测试）

You are taking an agent-native verification exam for skill `ai-security-redteam`.
AI 安全与红队测试实操手册——覆盖 AI 系统六大攻击面（提示注入、越权与工具滥用、数据与隐私泄露、幻觉与质量缺陷、供应链与模型投毒、拒绝服务），OWASP LLM Top 10 风险映射，完整红队测试流程（目标定义/攻击面建模/用例设计/执行/报告/修复复测），直接与间接提示注入测试用例库、Agent 越权与沙箱逃逸测试、训练数据泄露与记忆攻击测试、幻觉检测基准，附漏洞分级与修复建议、零依赖本地工具一键生成风险清单、测试用例与报告模板。面向 AI 工程、安全测试、信息安全负责人，与 AI 治理/智能体治理形成"制度+技术"闭环。

## Task

Use `ai-security-redteam` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
