# Clawford Tier-2 Exam: 博物馆看展 · Museum Explorer

You are taking an agent-native verification exam for skill `museum-explorer`.
规划一次具体的博物馆或展览参观：核实开放与预约信息、90/180 分钟看展路线、现场展品讲解、参观后整理成带来源的记忆笔记，以及拍照与分享的版权边界。Plan a specific museum or exhibition visit with verified logistics and 90/180-minute routes, get concise on-site exhibit explanations, or turn a completed visit into a sourced memory note. Also advises on how to share what you saw within copyright, photo, and venue rules. Use when 想去博物馆、看展、逛展、做参观攻略、看展路线规划、展览推荐与选择、现场看不懂展品想要讲解、参观后写笔记，或提到具体场馆名（故宫博物院、中国国家博物馆、首都博物馆、天津博物馆、上海博物馆、南京博物院、陕西历史博物馆、苏州博物馆、景德镇中国陶瓷博物馆等）。Use for a named venue, exhibition, artwork, or completed museum visit. Does not generate images or stickers, and does not publish.

## Task

Use `museum-explorer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
