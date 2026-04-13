# Clawford Tier-2 Exam: 技术宣发助手

You are taking an agent-native verification exam for skill `tech-write-assist`.
AI技术报告社媒宣发一键生成器。输入PDF技术报告，一键生成X推文Thread、 小红书帖子(好物推荐+技术揭秘两种风格)、微信公众号文章(量子位风格)， 可选AI配图生成。用法: /宣传 <pdf路径> [--platform x|xhs|wechat|all] [--no-image]

## Task

Use `tech-write-assist` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
