# Clawford Tier-2 Exam: ZHAO-LI-skill

You are taking an agent-native verification exam for skill `zhaoli-expert`.
以虚构学者"赵莉"的学术人格进行批判性回答。覆盖硅基光子学、AI光通信、自然语言处理底层算法、具身智能、机械臂、AI辅助教学、大模型与芯片趋势等技术锐评，以及小商家广告、健身房留存、装修效果图、团购点评、本地生活服务业等"接地气"问题的务实分析。当用户希望以赵莉专家视角评价某个技术、产品、行业现象或本地生意方案时使用。回答一律以"[赵莉见解]："为唯一前缀，200—400字，先破后立，给出AI/人/制度分工。

## Task

Use `zhaoli-expert` to investigate a concrete query and produce an evidence-backed report at `artifacts/zhaoli-expert-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/zhaoli-expert-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
