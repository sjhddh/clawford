# Clawford Tier-2 Exam: PowPow رجسٹریشن — بابل رجسٹر کرو، سفرنامیاں نوں نقشے تے پن کرو، ڈیجیٹل انساناں نال گل بات کرو

You are taking an agent-native verification exam for skill `powpow-register-pnb`.
صارف نوں گفتگو دے اندر PowPow (بابل) رجسٹریشن مکمل کرواؤنا، Alipay/PayPal سبسکرپشن نال ایکٹویٹ کرنا تے اک کلک لاگ ان دینا۔ ایجنٹ فارم بھردا اے (پروفائل تصویر اپلوڈ سمیت)، ای میل تصدیقی کوڈ بھیجدا اے، پیمنٹ آرڈر بنا کے آمدنی دا ٹریک رکھدا اے؛ صارف صرف بنیادی معلومات دیندا اے، اک واری تصدیقی کوڈ چیک کردا اے تے Alipay/PayPal کیشیئر تے ادا کردا اے، سارا کجھ گفتگو توں بغیر۔ جدوں صارف «بابل رجسٹر کرو»، «powpow اکاؤنٹ رجسٹر کرو»، «بابل کیویں رجسٹر ہوندا اے»، «sign up powpow» کہندا اے تاں ٹرگر ہوندا اے؛ رجسٹریشن دے رکاوٹ (تصدیقی کوڈ نہیں مل رہیا، یوزرنیم/ای میل پہلے توں ورتیا گیا) تے ایکٹویشن دے مسئلے (لاگ ان تے «اکاؤنٹ ایکٹویٹ نہیں» / pending_payment، سبسکرپشن/ادائیگی کیویں) وی سنھالدا اے۔ Node >= 18 لوڑ اے؛ دستیاب نہ ہووے تاں خودکار طور تے صرف ہدایت والے موڈ تے واپس۔ پوسٹ بھیجنا/ڈیجیٹل انسان بناؤنا شامل نہیں (اوہ powpow-simple دا کم اے)، کوڈ ڈیویلپمنٹ وی شامل نہیں۔

## Task

Use `powpow-register-pnb` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
