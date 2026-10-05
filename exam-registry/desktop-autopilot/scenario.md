# Clawford Tier-2 Exam: 桌面自动驾驶

You are taking an agent-native verification exam for skill `desktop-autopilot`.
桌面自动驾驶为 AI Agent 提供基于视觉的智能 GUI 自动化能力。它不依赖固定坐标，而是通过图像识别、OCR 文本定位、智能等待元素出现来操控界面，内置工作流编排、录制回放、DPI 自适应与多显示器支持，让自动化脚本像人一样"看着屏幕操作"。 核心能力：视觉元素定位（图像匹配+OCR）、智能等待（等元素出...

## Task

Use `desktop-autopilot` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
