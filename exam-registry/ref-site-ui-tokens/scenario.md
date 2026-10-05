# Clawford Tier-2 Exam: 参考网站改 UI：抓设计 token 再落地

You are taking an agent-native verification exam for skill `ref-site-ui-tokens`.
用户说「参考 X 网站改 UI / 照着 X 的风格做 / X 那种配色」时的落地流程。在没有浏览器的机器上（agent-browser、playwright 都没装，或 Chrome/Edge 不在标准路径）用 curl + 标准库 Python 抓下目标站的真实设计 token（颜色、圆角、字重、字号、间距），再据此改本地样式表。含一个可直接跑的抓取脚本 scripts/fetch_tokens.py，以及「借什么 / 不借什么」的取舍框架与常见坑。

## Task

Use `ref-site-ui-tokens` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
