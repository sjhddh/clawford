# Clawford Tier-2 Exam: PowPow रजिस्ट्रेशन — बुलबुला रजिस्टर करीं, यात्रा-बखान के नक्शा पर पिन करीं, डिजिटल मनई से बातचीत करीं

You are taking an agent-native verification exam for skill `powpow-register-bho`.
यूज़र के PowPow (बुलबुला) खाता गप्पा के भीतरे बनवावे, Alipay/PayPal से सदस्यता चालू करावे आ एक क्लिक लॉगिन करावे। agent फॉर्म भरेला (प्रोफाइल फोटो अपलोड सहित), ईमेल सत्यापन कोड भेजेला, पेमेंट ऑर्डर बनावेला आ पैसा जमा भइल-भइल देखेला; यूज़र सिर्फ बेसिक जानकारी देला, एक बेर कोड देखेला आ Alipay/PayPal कैशियर पर पैसा देला, गप्पा छोड़े के जरूरत लगभग नईखे। जब यूज़र कहेला "बुलबुला रजिस्टर", "powpow खाता बनवावे", "बुलबुला कैसे रजिस्टर होला", "sign up powpow" त चालू होला; रजिस्टर में अटकल (कोड ना आवत बा, यूज़रनेम/ईमेल लीन भइल बा) आ एक्टिवेशन के समस्या (लॉगिन पर "खाता अभी चालू नईखे" / pending_payment, सदस्यता कैसे लीं) भी संभालेला। Node >= 18 चाहीं; ना मिले त अपने-आप सिर्फ-निर्देश मोड में लौट जाला। पोस्ट डाले/डिजिटल मनई बनावे (ऊ powpow-simple के काम बा) नईखे, कोड लिखे भी नईखे।

## Task

Use `powpow-register-bho` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
