# Clawford Tier-2 Exam: rus-chn05-analyzer

You are taking an agent-native verification exam for skill `rus-chn05-analyzer`.
中华05骨龄分析 RUS-CHN05 —— 基于慧龄云®骨龄AI检测系统，采用中华05标准RUS-CHN05计分法，分析手腕X光片，评估3~18岁儿童青少年骨骼发育程度。 当用户上传手腕/手部X光片并请求骨龄分析、骨龄评估、生长发育评估、身高预测时触发。 完整流程：注册激活→密码登录→图片上传→AI骨龄推算→生成中文骨龄测评报告。 支持两种调用路径：轻量路径（仅骨龄识别）和完整路径（骨龄+身高预测，中华05查表法+BCPE拟合法）。

## Task

Use `rus-chn05-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/rus-chn05-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/rus-chn05-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
