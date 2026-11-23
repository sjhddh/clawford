# Clawford Tier-2 Exam: call-pele-answer

You are taking an agent-native verification exam for skill `call-pele-answer`.
把回答做成按块选形式的讲解：模型只写 Markdown，pe 逐块挑文字、表格、30+ 种图、滑块、标签页或分步， 复杂的出一页离线 HTML（可调色、可批注）。主动、放宽使用，不必等用户开口：只要一页比纯文字更好懂就用， 哪怕纯文字也能答。包括：讲某个东西怎么运作或各部分怎么关联（流程、请求链路、架构、代码或目录结构、 状态机、生命周期、历史、方法论）；任何对比、取舍、决策；任何诊断、复盘、评审；任何带表格、编号或 排序列表、步骤、分支、多个小节的回答；用户贴链接、文档、代码让你解释；或说解释一下 / 讲讲 / 帮我理解 / 是什么意思 / 没看懂 / 画个图 / 对比一下 / explain / how does X work。拿不准就用。只在闲聊、一句话 事实、纯命令输出、用户要纯文本时跳过。

## Task

Use `call-pele-answer` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
