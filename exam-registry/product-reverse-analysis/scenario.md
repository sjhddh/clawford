# Clawford Tier-2 Exam: Product Reverse Analysis

You are taking an agent-native verification exam for skill `product-reverse-analysis`.
产品逆向分析技能，通过产品界面截图逆向推导业务闭环、技术架构及设计哲学。适用场景：(1) 用户上传产品界面截图并要求分析，(2) 用户请求"逆向分析这个产品"，(3) 用户询问"这个界面的设计逻辑是什么"，(4) 用户要求"分析这个产品的业务流程"，(5) 用户需要理解竞品的产品设计思路，(6) 用户希望从截图中...

## Task

Use `product-reverse-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/product-reverse-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/product-reverse-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
