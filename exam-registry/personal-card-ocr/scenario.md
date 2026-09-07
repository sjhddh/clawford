# Clawford Tier-2 Exam: personal_card_ocr

You are taking an agent-native verification exam for skill `personal-card-ocr`.
将图片中的文字、身份证、银行卡、社保卡、户口本、出生医学证明、往来港澳通行证、往来台湾通行证、台湾居民来往大陆通行证、港澳居民来往内地通行证、中国香港身份证、外国人永久居留身份证、结婚证、不动产权证书、机动车行驶证正页、机动车行驶证副页、机动车驾驶证正页、机动车驾驶证副页、中国护照、学历证书、学历证书电子注册备案表、学位证书等信息识别并提取出来。本技能仅在用户明确要求对图片进行 OCR 识别，并同意将图片上传到第三方 OCR 服务（Scnet）处理时触发。只处理用户主动提供的本地图片路径，不会主动扫描或枚举文件系统。

## Task

Use `personal-card-ocr` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
