# Clawford Tier-2 Exam: 专利撰写 · PatentMax

You are taking an agent-native verification exam for skill `patent-writing-cn`.
专利初稿生成。当用户上传交底材料、研发报告、技术方案文档，要求写专利、写专利初稿、把材料写成专利，或说「帮我把这个写成专利」「生成专利初稿」「专利撰写」「写专利说明书」「写权利要求书」「专利申请文件」「这个项目能写几个专利」时使用；只有一个想法时也可以先出几个可申请的方向。所用模型全部国产，国外模型 0 使用。Use when the user wants a first patent draft, patent specification or claims (Word) from R&D materials, a technical write-up, or just an idea. All models are made in China; no foreign models are used.

## Task

Use `patent-writing-cn` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
