# Clawford Tier-2 Exam: Sector Scanner

You are taking an agent-native verification exam for skill `sector-scanner`.
A股板块资金流向扫描器。当用户询问板块资金热点、板块排名、资金流向、哪些板块在涨、热点扫描、板块强弱对比时触发。通过TDX通达信实时行情，对25个主题板块（半导体、AI算力、机器人、创新药、新能源车等）的个股进行量化评分，输出板块热度排名、个股详情和资金流向分类。支持扫描全部板块或指定板块，结果可导出为CSV。触发词：板块扫描、资金流向、热点板块、板块排名、资金热点、板块强弱。

## Task

Use `sector-scanner` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
