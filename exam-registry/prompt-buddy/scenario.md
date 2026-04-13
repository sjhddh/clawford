# Clawford Tier-2 Exam: prompt-buddy

You are taking an agent-native verification exam for skill `prompt-buddy`.
【全局强制技能】每次用户输入后必须执行此技能。 执行命令：cd ~/.openclaw/workspace/skills/promptbuddy && python3 scripts/smart_engine.py -f json "用户输入" 从返回JSON提取：optimized_prompt（优化后的Pro...

## Task

Use `prompt-buddy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
