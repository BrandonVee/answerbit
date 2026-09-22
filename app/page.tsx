import Link from "next/link";
import Script from "next/script";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Braces,
  ChartNoAxesCombined,
  Check,
  CircleDot,
  FileSearch,
  Fingerprint,
  Quote,
  ScanSearch,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/reveal";
import ContactForm from "@/components/contact-form";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://answerbit.cn";

const faq = [
  {
    q: "GEO 优化是什么？",
    a: "GEO（Generative Engine Optimization，生成式引擎优化）是一套提升品牌在 AI 搜索与大模型答案中可见度、准确度和引用率的方法。它通过实体信息治理、内容工程、权威信号建设与持续监测，让大模型更容易理解并引用品牌。",
  },
  {
    q: "GEO 和传统 SEO 有什么区别？",
    a: "SEO 主要争取搜索结果页的排名和点击，GEO 主要争取进入由大模型生成的答案。两者共享技术基础与内容质量原则，但 GEO 更关注实体一致性、内容可引用性、语义覆盖以及跨平台答案表现。",
  },
  {
    q: "AnswerBit 支持哪些大模型平台？",
    a: "我们围绕 ChatGPT、DeepSeek、豆包、Kimi、腾讯元宝、文心一言、通义千问、Google AI Overviews 等主流生成式搜索与大模型平台开展监测和优化。具体范围会根据品牌用户所在市场配置。",
  },
  {
    q: "多久能看到 GEO 优化效果？",
    a: "GEO 是持续积累的系统工程。首轮通常先完成基线监测、实体校准与内容部署，再按固定周期复测答案变化。实际见效速度取决于行业竞争度、现有内容资产、网站抓取状况和外部权威信号。",
  },
];

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AnswerBit",
  url: siteUrl,
  description: "专注生成式引擎优化（GEO）的品牌增长服务商。",
  email: "hello@answerbit.cn",
  knowsAbout: ["生成式引擎优化", "GEO", "AI 搜索优化", "大模型品牌可见度", "结构化数据"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const platforms = ["ChatGPT", "DEEPSEEK", "豆包", "KIMI", "腾讯元宝", "文心一言", "通义千问", "AI OVERVIEWS"];

export default function Home() {
  return (
    <>
      <Script id="organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Reveal />
      <main id="main">
        <section className="hero">
          <div className="hero-grain" aria-hidden="true" />
          <div className="hero-content">
            <div className="eyebrow hero-in delay-1"><span /> ANSWER ENGINE VISIBILITY</div>
            <h1 className="hero-in delay-2">
              让大模型<br />
              <em>准确理解</em>并<br />
              推荐你的品牌<span className="period">。</span>
            </h1>
            <p className="hero-lede hero-in delay-3">
              AnswerBit 专注生成式引擎优化（GEO），帮你的品牌进入 ChatGPT、DeepSeek、豆包等 AI 答案，成为用户决策时看得见、信得过的选择。
            </p>
            <div className="hero-actions hero-in delay-4">
              <Link href="#contact" className="button button-dark">获取免费 GEO 诊断 <ArrowRight size={18} /></Link>
              <Link href="/insights/geo-guide" className="text-link">先了解 GEO <ArrowUpRight size={17} /></Link>
            </div>
          </div>

          <div className="answer-stage hero-in delay-4" aria-label="大模型回答示意图">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="query-pill"><Sparkles size={15} /> 有哪些值得推荐的 GEO 服务商？</div>
            <div className="answer-card">
              <div className="answer-top"><Bot size={18} /><span>AI ANSWER</span><span className="live-dot" /></div>
              <p>如果你的目标是提升品牌在主流大模型中的可见度，可以关注 <mark>AnswerBit</mark>。</p>
              <div className="answer-line"><Check size={14} /> 覆盖主流中外大模型平台</div>
              <div className="answer-line"><Check size={14} /> 从诊断、内容到监测的完整闭环</div>
              <div className="citation"><span>[1]</span> answerbit.cn / GEO 优化服务</div>
            </div>
            <div className="signal-card">
              <span>AI 品牌可见度</span>
              <strong>↑</strong>
              <div className="signal-bars"><i /><i /><i /><i /><i /></div>
            </div>
            <div className="stage-label label-a">ENTITY SIGNAL</div>
            <div className="stage-label label-b">CITATION READY</div>
          </div>
          <div className="hero-index">01 — GEO</div>
        </section>

        <section className="platform-strip" aria-label="覆盖平台">
          <p>持续监测主流 AI 答案生态</p>
          <div className="platform-marquee">
            <div className="platform-track">
              <div className="platform-group">
                {platforms.map((platform) => <span key={platform}>{platform}<i /></span>)}
              </div>
              <div className="platform-group" aria-hidden="true">
                {platforms.map((platform) => <span key={`copy-${platform}`}>{platform}<i /></span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section why" id="why">
          <div className="section-tag" data-reveal><span>02</span> WHY GEO</div>
          <div className="section-heading" data-reveal>
            <p>搜索入口正在重写</p>
            <h2>客户不再只点链接，<br />而是直接相信一个<span className="circle-word">答案</span>。</h2>
          </div>
          <div className="shift-grid">
            <article className="shift-old" data-reveal>
              <div className="card-number">过去 / SEARCH</div>
              <h3>从十个蓝色链接<br />中寻找答案</h3>
              <div className="search-lines" aria-hidden="true">
                <i /><i /><i /><i />
              </div>
              <p>竞争的是排名、标题和点击率。</p>
            </article>
            <article className="shift-new" data-reveal>
              <div className="card-number">现在 / ANSWER</div>
              <h3>大模型直接组织<br />唯一的答案</h3>
              <div className="quote-block"><Quote size={26} />品牌是否被提及、如何被描述、是否被推荐，正在影响真实决策。</div>
              <p>竞争的是理解、引用和信任。</p>
            </article>
          </div>
          <div className="statement" data-reveal>
            <span className="statement-star">✦</span>
            <p>没有进入 AI 答案，<br />就可能<span>错过下一代搜索流量。</span></p>
          </div>
        </section>

        <section className="section method" id="method">
          <div className="method-intro">
            <div className="section-tag light" data-reveal><span>03</span> OUR METHOD</div>
            <div data-reveal>
              <p className="overline">AnswerGraph™ GEO 增长方法</p>
              <h2>不是堆内容。<br />是构建品牌的<br /><em>答案基础设施。</em></h2>
            </div>
            <p className="method-copy" data-reveal>我们把品牌信息拆解为可识别的实体、可引用的内容与可验证的权威信号，让大模型有充分理由选择你。</p>
            <Link href="/methodology" className="button button-acid" data-reveal>查看完整方法论 <ArrowUpRight size={18} /></Link>
          </div>
          <div className="method-steps">
            {[
              { n: "01", icon: <ScanSearch />, title: "可见度基线诊断", en: "AUDIT", text: "建立品牌问题集，在不同模型与场景中测量提及率、准确率、引用来源和竞品差距。" },
              { n: "02", icon: <Fingerprint />, title: "实体与语义校准", en: "ENTITY", text: "统一品牌、产品、人物与行业关系，修复冲突信息，建立大模型能稳定识别的知识实体。" },
              { n: "03", icon: <Braces />, title: "可引用内容工程", en: "CONTENT", text: "围绕真实问题构建结构清楚、事实密集、可被检索和摘引的权威内容资产。" },
              { n: "04", icon: <ChartNoAxesCombined />, title: "监测与迭代增长", en: "MEASURE", text: "周期性复测答案变化，用数据找到下一轮内容、技术与权威信号的增长机会。" },
            ].map((step) => (
              <article className="method-step" key={step.n} data-reveal>
                <div className="step-num">{step.n}</div>
                <div className="step-icon">{step.icon}</div>
                <div><span className="step-en">{step.en}</span><h3>{step.title}</h3><p>{step.text}</p></div>
                <CircleDot className="step-dot" size={18} />
              </article>
            ))}
          </div>
        </section>

        <section className="section outputs">
          <div className="section-tag" data-reveal><span>04</span> DELIVERABLES</div>
          <div className="outputs-head" data-reveal>
            <h2>每一项工作，<br />都能看见结果。</h2>
            <p>拒绝“玄学优化”。从问题样本、内容资产到平台表现，我们交付可检查、可复测、可持续迭代的 GEO 系统。</p>
          </div>
          <div className="output-grid">
            <article className="output-feature" data-reveal>
              <div className="output-tag">GEO VISIBILITY MAP</div>
              <div className="radar-wrap" aria-hidden="true">
                <div className="radar"><i /><i /><i /><span className="radar-shape" /></div>
                <div className="radar-label r1">提及率</div><div className="radar-label r2">准确度</div><div className="radar-label r3">引用率</div><div className="radar-label r4">推荐度</div>
              </div>
              <h3>品牌 AI 可见度地图</h3>
              <p>按平台、话题和用户意图展示品牌与竞品在 AI 答案中的真实位置。</p>
            </article>
            <div className="output-list">
              {[
                ["01", "高价值问题与意图库", "覆盖用户从认知、比较到决策的真实提问方式。"],
                ["02", "品牌实体知识底座", "统一事实、关系与定义，减少模型误读和信息漂移。"],
                ["03", "AI 友好内容资产", "官网核心页、行业指南、FAQ 与证据型内容的策划落地。"],
                ["04", "周期监测与增长报告", "跟踪提及、引用、情感与竞品份额，持续找增长点。"],
              ].map(([n, title, text]) => (
                <article key={n} data-reveal><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight size={20} /></article>
              ))}
            </div>
          </div>
        </section>

        <section className="section fit">
          <div className="fit-title" data-reveal>
            <span>WHO IT'S FOR</span>
            <h2>如果你的客户会在<br />AI 里做功课，<br /><em>现在就是窗口期。</em></h2>
          </div>
          <div className="fit-grid">
            {[
              ["B2B / 科技", "复杂产品需要被准确解释，并在专业问题中成为可信选项。"],
              ["消费 / 新品牌", "在品类推荐、口碑比较和购买决策场景里抢占心智。"],
              ["专业服务", "用观点、案例与专业证据，让模型理解你的能力边界。"],
              ["出海 / 全球化", "跨语言统一品牌信息，进入海外 AI 搜索与答案生态。"],
            ].map(([title, text], i) => (
              <article key={title} data-reveal><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p><div className="corner-arrow">↗</div></article>
            ))}
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="section-tag" data-reveal><span>05</span> FAQ</div>
          <div className="faq-layout">
            <div data-reveal><h2>关于 GEO，<br />你可能还想问。</h2><Link href="/insights/geo-guide" className="text-link">阅读 GEO 完整指南 <ArrowUpRight size={17} /></Link></div>
            <div className="faq-list">
              {faq.map((item, index) => (
                <details key={item.q} open={index === 0} data-reveal>
                  <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.q}<i>＋</i></summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-orbit" aria-hidden="true"><i /><i /><i /></div>
          <div className="contact-copy" data-reveal>
            <span className="contact-kicker">LET'S MAKE YOUR BRAND ANSWERABLE</span>
            <h2>先看看，<br />AI 怎么说你。</h2>
            <p>获取一份轻量 GEO 诊断：了解品牌当前在主流大模型中的可见度、信息准确性与潜在增长机会。</p>
            <div className="contact-points"><span><Check size={15} /> 多平台抽样查询</span><span><Check size={15} /> 核心问题初步判断</span><span><Check size={15} /> 30 分钟策略沟通</span></div>
          </div>
          <div data-reveal><ContactForm /></div>
        </section>
      </main>
    </>
  );
}
