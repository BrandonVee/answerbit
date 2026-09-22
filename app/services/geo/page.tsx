import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "GEO 优化服务",
  description: "AnswerBit GEO 优化服务：AI 可见度诊断、品牌实体治理、可引用内容建设、权威信号提升与多平台持续监测。",
  alternates: { canonical: "/services/geo" },
};

export default function GeoServicePage() {
  return <main id="main">
    <header className="article-hero">
      <div className="eyebrow"><span /> GEO OPTIMIZATION SERVICE</div>
      <h1>把品牌做成大模型<br />愿意引用的<em>答案源</em>。</h1>
      <p>AnswerBit 提供从诊断、策略、内容到持续监测的一站式 GEO 优化服务。目标不是制造短期提及，而是帮助品牌建立可被大模型稳定理解、验证和引用的信息基础。</p>
      <div className="article-meta"><span>SERVICE / GEO</span><span>适合：科技、消费、专业服务与出海品牌</span></div>
    </header>
    <article className="article-body">
      <p className="definition"><strong>AnswerBit 的 GEO 优化服务</strong>，是针对生成式搜索和大模型答案场景的品牌信息工程。我们将模型监测、实体治理、内容策略、技术 SEO 与权威信号建设组合为持续增长闭环。</p>
      <h2>服务包含什么？</h2>
      <h3>1. AI 可见度诊断</h3><p>先建立与品牌业务高度相关的问题集，再分别测试不同大模型的回答。诊断关注品牌是否出现、描述是否准确、被放在什么位置、引用了哪些来源，以及竞争品牌为什么被选择。</p>
      <h3>2. 品牌实体治理</h3><p>梳理品牌名称、产品、人物、资质、地域、品类和核心观点之间的关系，校准官网与外部渠道中的冲突信息，增强实体一致性。</p>
      <h3>3. 可引用内容建设</h3><p>根据问题与信息缺口，规划官网核心页、专题页、行业指南、FAQ、对比、案例和数据内容。每项内容均强调明确结论、事实证据、语义结构与可摘引表达。</p>
      <h3>4. 技术与结构化数据</h3><p>优化抓取、索引、内部链接、HTML 语义和 Schema.org 结构化数据，并配置 sitemap、robots、llms.txt 与清晰的更新时间和内容归属。</p>
      <h3>5. 持续监测和复盘</h3><p>以固定问题集周期复测，观察提及率、准确率、引用率、推荐度和竞品份额的变化，形成下一阶段优化清单。</p>
      <h2>合作流程</h2>
      <table><thead><tr><th>阶段</th><th>主要工作</th><th>核心交付</th></tr></thead><tbody>
        <tr><td>01 基线</td><td>业务访谈、问题集设计、多平台抽样</td><td>AI 可见度诊断报告</td></tr>
        <tr><td>02 策略</td><td>实体审计、竞品差距、内容机会排序</td><td>90 天 GEO 路线图</td></tr>
        <tr><td>03 建设</td><td>技术整改、页面与内容资产落地</td><td>实体底座与内容矩阵</td></tr>
        <tr><td>04 增长</td><td>平台复测、归因分析、持续迭代</td><td>周期监测与增长报告</td></tr>
      </tbody></table>
      <h2>如何判断项目有效？</h2><p>我们不以单一关键词或一次回答作为结论，而是通过固定问题集、重复采样、跨平台对比来衡量变化。常用指标包括品牌提及率、答案准确率、引用占有率、正向推荐率、核心意图覆盖度与竞品声量差距。</p>
      <div className="article-cta"><div><h2>先做一次品牌 GEO 快照</h2><p>用真实问题看看 AI 如何理解、描述和推荐你的品牌。</p></div><Link className="button button-dark" href="/#contact">预约免费诊断 <ArrowRight size={18}/></Link></div>
    </article>
  </main>;
}
