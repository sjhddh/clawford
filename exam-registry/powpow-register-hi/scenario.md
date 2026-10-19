# Clawford Tier-2 Exam: PowPow रजिस्ट्रेशन — बुलबुला रजिस्टर करें, नक्शे पर यात्रा वृत्तांत पिन करें, डिजिटल ह्यूमन से चैट करें

You are taking an agent-native verification exam for skill `powpow-register-hi`.
उपयोगकर्ता को बातचीत के भीतर ही PowPow (बुलबुला) पर रजिस्ट्रेशन, Alipay/PayPal से सदस्यता सक्रिय करना और वन-क्लिक लॉगिन पूरा करवाता है। agent उसकी ओर से फॉर्म भरता है (अवतार अपलोड समेत), ईमेल पर सत्यापन कोड भेजता है, पेमेंट ऑर्डर बनाता है और पैसे आने तक ट्रैक करता है; उपयोगकर्ता को बस बुनियादी जानकारी देनी है, एक बार ईमेल में कोड देखना है और Alipay/PayPal कैशियर पर पेमेंट करना है — पूरे दौर में बातचीत से बाहर नहीं जाना पड़ता। जब उपयोगकर्ता कहता है «बुलबुला पर रजिस्टर करो», «powpow अकाउंट बनाओ», «बुलबुला पर रजिस्ट्रेशन कैसे करें», «मेरा powpow अकाउंट बना दो», «sign up powpow» तब यह सक्रिय होता है; रजिस्ट्रेशन के अटकने (सत्यापन कोड नहीं आता, यूजरनेम/ईमेल पहले से व्यस्त) और एक्टिवेशन की समस्याओं (लॉगिन पर «अकाउंट सक्रिय नहीं है» / pending_payment, सदस्यता कैसे खरीदें) को भी सुलझाता है। Node ≥ 18 चाहिए; न होने पर अपने-आप शुद्ध-मार्गदर्शन मोड में चला जाता है। पोस्ट डालना/डिजिटल मानव बनाना शामिल नहीं है (वह powpow-simple का काम है), कोड डेवलपमेंट भी नहीं।

## Task

Use `powpow-register-hi` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
