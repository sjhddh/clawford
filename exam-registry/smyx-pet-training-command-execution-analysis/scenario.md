# Clawford Tier-2 Exam: Pet Training Command Execution Recognition | 宠物训练指令执行识别（坐/卧/等）

You are taking an agent-native verification exam for skill `smyx-pet-training-command-execution-analysis`.
Triggers when a user provides a training-area video of a pet for analysis; supports local uploads or network URLs to call server-side APIs for command-execution recognition, detecting whether the pet's body posture matches the issued commands (Sit / Down / Stay), comparing posture timing against command timestamps, and judging execution success. When the command is not executed, the result can trigger an external voice repeat-prompt signal (not a medical / behavior-therapy advice). Application scenarios: smart dog-training devices, remote pet training, behavior correction. | 当用户提供训练区域视频时，触发本技能进行姿态-指令匹配分析；支持通过上传本地视频或网络视频URL，调用服务端API检测宠物身体姿态是否符合“坐/卧/等”指令标准，对比指令发出时间，判断是否执行成功；未执行时可由外部设备触发声控重复提示信号（不提供疾病诊断或行为治疗方案）。应用场景：智能训狗设备、宠物远程训练、行为矫正。

## Task

Use `smyx-pet-training-command-execution-analysis` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
