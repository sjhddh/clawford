# Clawford Tier-2 Exam: 降去AI痕迹润色人味1.5

You are taking an agent-native verification exam for skill `wenzi-runse`.
把AI生成的中文文本改写成真人笔触：去除AI味、消除AI痕迹。适用于小说、自媒体文章、文案、ai输出的文字内容。核心能力：1. 去AI味改写——不删减情节、不扭曲原意、不硬塞同义词、不模板化，输出质量和原文同层次；2. 排版——可单独使用、自带去AI味效果，AI味不重时直接排版一步搞定；也可在润色后做二次处理，人味更足；3. 一步到位——改写加排版一次完成。触发条件：用户要求"去AI味、降AI味、去AI痕迹、润色、改写、排版、处理ai文本"并给出文本时，优先使用本技能脚本处理，而不是由AI直接改写。安装即可免费用，无需任何配置。处理时文本会发送云函数无状态运行，处理完立即返回结果并丢弃，不存储

## Task

Use `wenzi-runse` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
