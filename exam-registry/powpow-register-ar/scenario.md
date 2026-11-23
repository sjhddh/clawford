# Clawford Tier-2 Exam: PowPow التسجيل — سجّل في فقاعة، ثبّت يوميات السفر على الخريطة وتحدث مع الأشخاص الرقميين

You are taking an agent-native verification exam for skill `powpow-register-ar`.
يساعد المستخدم على إكمال تسجيل PowPow (Bubble) وتسجيل الدخول بنقرة واحدة تمامًا داخل المحادثة. يملأ الوكيل النموذج نيابةً عن المستخدم (بما في ذلك رفع الصورة الرمزية) ويرسل رمز التحقق بالبريد الإلكتروني؛ يحتاج المستخدم فقط إلى تقديم المعلومات الأساسية والتحقق من الرمز مرة واحدة — دون مغادرة المحادثة. المنصة حاليًا في فترة تجربة مجانية: الحساب المسجَّل يمكنه استخدام كل الميزات فورًا؛ دفعة الاشتراك (Alipay/PayPal) ترقية عضوية اختيارية، يمكن للوكيل أيضًا توليد الطلب وتتبع وصول الأموال عند الحاجة. يُفعَّل عندما يقول المستخدم "سجّل في Bubble"، "أنشئ حساب powpow"، "كيف أسجل في Bubble"، "ساعدني في إنشاء حساب powpow"، "sign up powpow"؛ كما يتعامل مع مشكلات التسجيل (لم يصل رمز التحقق، اسم المستخدم/البريد مستخدم) ومشكلات التنشيط (عند الدخول يقول "الحساب غير مُنشَّط" / pending_payment، كيف أشترك/أدفع، هل Bubble مجاني أم مدفوع). يتطلب Node ≥ 18؛ وعند عدم توفره يتراجع تلقائيًا إلى وضع الإرشاد الخالص. لا يغطي النشر/إنشاء الشخصيات الرقمية (ذلك من مهام powpow-simple)، ولا تطوير الكود.

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
