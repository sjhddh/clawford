# Clawford Tier-2 Exam: Auto Paper Writer

You are taking an agent-native verification exam for skill `auto-paper-writer`.
自动撰写科研论文的完整 AI pipeline。当用户说"撰写[方向]论文"、"自动写论文"、"生成论文"时触发。功能包括：(1) 搜索 ArXiv 最新论文并下载原始 PDF；(2) 总结现有工作局限性；(3) 设计创新模型框架；(4) 撰写双栏 LaTeX 论文（IEEEtran格式）；(5) 生成科研级 m...

## Task

Use `auto-paper-writer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
