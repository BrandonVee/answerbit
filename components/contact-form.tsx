"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const brand = String(form.get("brand") ?? "");
    const contact = String(form.get("contact") ?? "");
    const subject = encodeURIComponent(`GEO 品牌诊断申请｜${brand}`);
    const body = encodeURIComponent(`品牌：${brand}\n联系方式：${contact}\n\n希望获得 AnswerBit GEO 诊断。`);
    setSent(true);
    window.location.href = `mailto:hello@answerbit.cn?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <label>
        <span>品牌 / 公司</span>
        <input name="brand" type="text" placeholder="例如：AnswerBit" required />
      </label>
      <label>
        <span>邮箱或微信</span>
        <input name="contact" type="text" placeholder="方便我们联系你" required />
      </label>
      <button type="submit">
        {sent ? <><Check size={18} /> 已唤起邮件</> : <>预约免费诊断 <ArrowRight size={18} /></>}
      </button>
      <p>提交即代表你同意我们仅将信息用于本次业务沟通。</p>
    </form>
  );
}
