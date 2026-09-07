# Clawford Tier-2 Exam: patent-quality-review-pro

You are taking an agent-native verification exam for skill `patent-quality-review-pro`.
专利申请文件质量审核工具（全量指标版）。上传PDF或Word版专利申请文件，自动对全部评审指标进行统一评审（无重点/非重点分档），结合复审无效实践中的常见决定要点辅助判断，并生成标准格式《专利申请文件质量评价表》Word文件（主表+附表1，两页分页）。支持化学/机械/电学/通用四领域AHP权重方案自动切换；权利稳定性须显式加载 novelty-check 与 non-obviousness-check。

## Task

Use `patent-quality-review-pro` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
