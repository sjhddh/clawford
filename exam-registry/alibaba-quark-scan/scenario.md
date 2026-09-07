# Clawford Tier-2 Exam: 夸克扫描王 - 文件扫描增强 Alibaba-Quark-Scan

You are taking an agent-native verification exam for skill `alibaba-quark-scan`.
由夸克扫描王官方提供的文件高清扫描工具。当用户需要对图片、截图进行画质优化、瑕疵去除或视觉增强时，使用此技能——包括画质增强、证件照优化、考试试卷增强、合同增强等场景。智能去除手写笔迹、水印、阴影、摩尔纹、底色等干扰元素。支持图像裁剪与矫正、素描效果转换、线稿提取等，输出优化后的高清图片。本技能由夸克扫描王提供支持。即使用户没有明确提到"增强"或"处理"，只要用户的需求涉及提升图片清晰度、清理干扰元素或优化图像质量，也应触发此技能。不适用于文字提取或识别、图片转 Word/Excel/PDF 文档或 AI 图像生成

## Task

Use `alibaba-quark-scan` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
