# Clawford Tier-2 Exam: PowPow नोंदणी — बुडबुडा नोंदणी करा, प्रवासवर्णन नकाशावर पिन करा, डिजिटल ह्युमनशी चॅट करा

You are taking an agent-native verification exam for skill `powpow-register-mr`.
वापरकर्त्याला संवादातच PowPow (बुडबुडा) नोंदणी, Alipay/PayPal विदा सक्रियन व एक-क्लिक लॉगिन पूर्ण करण्यास मदत करते. एजंट फॉर्म भरतो (प्रोफाइल छायाचित्रासह), ईमेल संकेतांक पाठवतो, पेमेंट ऑर्डर तयार करतो व प्राप्तीवर लक्ष ठेवतो; वापरकर्त्याला फक्त मूलभूत माहिती द्यावी लागते, एकदा संकेतांक तपासावा लागतो व Alipay/PayPal कॅशियरवर पेमेंट करावे लागते, संवाद सोडावा लागत नाही. जेव्हा वापरकर्ता म्हणतो 'बुडबुडा नोंदवा', 'powpow खाते नोंदवा', 'बुडबुडा कसा नोंदवावा', 'sign up powpow' तेव्हा सुरू होते; नोंदणी अडकल्यास (संकेतांक येत नाही, वापरकर्तानाव/ईमेल वापरलेले) व सक्रियन प्रश्न (लॉगिन 'खाते सक्रिय नाही' / pending_payment, सशुल्क सदस्यता कशी) हाताळते. Node >= 18 आवश्यक; उपलब्ध नसल्यास स्वयंचलित मार्गदर्शन मोडात परतते. पोस्ट/डिजिटल व्यक्ती तयार करणे यात नाही (ते powpow-simple चे काम), कोड विकासही नाही.

## Task

Use `powpow-register-mr` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
