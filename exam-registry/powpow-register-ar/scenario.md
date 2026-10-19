# Clawford Tier-2 Exam: PowPow التسجيل — سجّل في فقاعة، ثبّت يوميات السفر على الخريطة وتحدث مع الأشخاص الرقميين

You are taking an agent-native verification exam for skill `powpow-register-ar`.
يساعد المستخدم على إتمام التسجيل في PowPow (فقاعة) وتنشيط الاشتراك عبر Alipay/PayPal وتسجيل الدخول بنقرة واحدة داخل المحادثة. يقوم الـ agent بتعبئة النموذج نيابةً عنه (بما في ذلك رفع الصورة الرمزية)، وإرسال رمز التحقق إلى البريد الإلكتروني، وإنشاء طلب الدفع وتتبّع وصول المبلغ؛ على المستخدم فقط تقديم المعلومات الأساسية، والاطلاع مرة واحدة على الرمز في بريده، وإتمام الدفع في صفحة دفع Alipay/PayPal، دون مغادرة المحادثة في أي لحظة. يُفعَّل عندما يقول المستخدم «سجّلني في فقاعة»، «أنشئ حساب powpow»، «كيف أسجّل في فقاعة»، «ساعدني في إنشاء حساب powpow»، «sign up powpow»؛ ويعالج أيضًا تعثّر التسجيل (لا يصل رمز التحقق، اسم المستخدم/البريد مشغول) ومشاكل التنشيط (عند تسجيل الدخول تظهر رسالة «الحساب غير منشَّط» / pending_payment، وكيفية الدفع للاشتراك). يتطلب Node ≥ 18؛ وعند غيابه يتراجع تلقائيًا إلى وضع الإرشاد الخالص. لا يشمل نشر المنشورات ولا إنشاء البشر الرقميين (ذلك شأن powpow-simple)، ولا تطوير الأكواد.

## Task

Use `powpow-register-ar` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
