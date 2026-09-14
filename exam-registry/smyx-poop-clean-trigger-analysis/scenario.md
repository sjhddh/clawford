# Clawford Tier-2 Exam: Pet Poop Auto-Clean Trigger (Robot Vacuum Integration) | 宠物排便自动清理触发（联动扫地机）

You are taking an agent-native verification exam for skill `smyx-poop-clean-trigger-analysis`.
Triggers when a user provides a dog toilet / pet defecation-zone video URL or file for analysis; uses a fixed camera on the dog toilet or designated defecation area to monitor video in real time, detects whether the pet is defecating (presence of feces) and, once the pet leaves the area, automatically outputs a cleaning trigger signal that can drive a robot vacuum to that spot for cleanup. Enables fully automated pet-waste handling, reduces owner workload, and keeps the home hygienic. Application: indoor dog toilets, balcony defecation zones, pet kennels. Does NOT provide medical diagnosis — only outputs vision-based event detection results. | 当用户提供狗厕所或宠物固定排便区域视频URL或文件时，触发本技能进行排便事件检测分析；通过安装在狗厕所或宠物固定排便区域的摄像头实时分析视频，识别宠物是否在该区域排便（粪便出现），并在宠物离开该区域后自动输出清扫触发信号，联动扫地机器人前往清理；实现宠物排泄物的即时自动化处理，减轻主人清理负担，保持居家环境卫生。应用场景：宠物家庭室内狗厕所、阳台排便区、宠物笼舍。仅输出基于视觉的事件检测结果，不进行医疗诊断。

## Task

Use `smyx-poop-clean-trigger-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-poop-clean-trigger-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-poop-clean-trigger-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
