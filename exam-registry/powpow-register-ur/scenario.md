# Clawford Tier-2 Exam: PowPow رجسٹریشن — بابل رجسٹر کریں، سفرنامہ نقشے پر پن کریں، ڈیجیٹل انسان سے چیٹ کریں

You are taking an agent-native verification exam for skill `powpow-register-ur`.
صارفین کو گفتگو کے اندر ہی PowPow (بابل) رجسٹریشن، علی پے/PayPal سبسکرپشن ایکٹیویشن اور ون کلک لاگ اِن مکمل کروانے میں مدد کرتا ہے۔ ایجنٹ فارم بھرنے (پروفائل تصویر اپلوڈ سمیت)، ای میل تصدیقی کوڈ بھیجنے، پیمنٹ آرڈر بنانے اور رقم کی وصولی ٹریک کرنے کے کام خود کرتا ہے؛ صارف کو بس بنیادی معلومات دینی ہیں، ایک بار ای میل کا تصدیقی کوڈ دیکھنا ہے اور علی پے/PayPal کے سرکاری پیمنٹ پیج پر ادائیگی کرنا ہے — پورا عمل گفتگو سے باہر نکلے بغیر مکمل ہوتا ہے۔ جب صارف کہے "بابل رجسٹر کریں" "powpow اکاؤنٹ رجسٹر کریں" "بابل کیسے رجسٹر کریں" "میرے لیے ایک powpow اکاؤنٹ رجسٹر کر دیں" "sign up powpow" تو ٹرگر ہوتا ہے؛ رجسٹریشن میں رکاوٹ (تصدیقی کوڈ نہ آنا، یوزر نیم/ای میل پہلے سے زیر استعمال ہونا) اور ایکٹیویشن کے مسائل (لاگ اِن پر "اکاؤنٹ فعال نہیں" / pending_payment، سبسکرپشن کیسے کریں) بھی سنبھالتا ہے۔ Node ≥ 18 درکار ہے؛ دستیاب نہ ہو تو خودکار طور پر خالص رہنمائی موڈ میں چلا جاتا ہے۔ پوسٹ لکھنا/ڈیجیٹل انسان بنانا شامل نہیں (وہ powpow-simple کا کام ہے)، کوڈ ڈیویلپمنٹ بھی شامل نہیں۔

## Task

Use `powpow-register-ur` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
