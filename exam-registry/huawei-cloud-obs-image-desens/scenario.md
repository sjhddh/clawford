# Clawford Tier-2 Exam: huawei-cloud-obs-image-desens

You are taking an agent-native verification exam for skill `huawei-cloud-obs-image-desens`.
One-click OBS image desensitization skill for Huawei Cloud. Lists images in an OBS bucket/prefix, applies desensitization rules (full-image mosaic, Gaussian blur, region mosaic/blur/occlusion) locally via Pillow, and writes results back to a target bucket/prefix; optionally creates a FunctionGraph function + OBS event trigger for automatic on-upload desensitization. Use this skill when the user wants to: (1) desensitize/blur/mosaic images stored in OBS, (2) batch mosaic or blur all images under a bucket prefix, (3) occlude sensitive regions (faces, license plates, IDs) in OBS images, (4) set up automatic image desensitization when files are uploaded to an OBS bucket. Triggers include: "OBS图片脱敏", "图片打码", "图片马赛克", "图片模糊", "人脸打码", "敏感区域遮挡", "OBS图片一键脱敏", "批量打码", "自动脱敏", "image desensitization", "mosaic image in OBS", "blur OBS images", "auto desensitize uploads", "打码", "脱敏"

## Task

Use `huawei-cloud-obs-image-desens` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
