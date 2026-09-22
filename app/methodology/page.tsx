import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AnswerGraph™ GEO 方法论",
  description: "了解 AnswerBit 的 AnswerGraph GEO 方法论：从问题图谱、实体图谱、证据内容到答案监测，系统提升品牌 AI 可见度。",
  alternates: { canonical: "/methodology" },
};

export default function MethodologyPage() {
  return <main id="main">
    <header className="article-hero">
      <div className="eyebrow"><span /> ANSWERGRAPH™ FRAMEWORK</div>
      <h1>让每条品牌信息，<br />都能进入正确的<em>答案路径</em>。</h1>
      <p>AnswerGraph™ 是 AnswerBit 的 GEO 工作框架。它连接用户问题、品牌实体、内容证据与模型答案，帮助团队持续发现：品牌应当回答什么、模型目前相信什么、下一步需要补充什么。</p>
      <div className="article-meta"><span>FRAMEWORK / V1.0</span><span>四层模型 · 持续迭代</span></div>
    </header>
    <article className="article-body">
      <p className="definition">AnswerGraph™ 将 GEO 拆分为四个彼此连接的层：<strong>问题层、实体层、证据层、答案层</strong>。优化不是孤立发布文章，而是持续增强四层之间的一致性。</p>
      <h2>01｜问题层：理解用户如何提问</h2><p>同一个需求可能被表达为“推荐”“哪个好”“怎么选”“是否适合”或“有哪些替代”。我们按照认知、比较、验证和决策阶段建立问题图谱，并标注业务价值、回答类型和目标平台。</p>
      <h2>02｜实体层：让品牌身份稳定清晰</h2><p>大模型需要理解“你是谁、提供什么、与谁相关、凭什么可信”。实体层统一品牌基础事实、产品边界、人物关系、专业领域与差异化属性，减少名称歧义、过时资料和渠道冲突。</p>
      <h2>03｜证据层：提供可验证、可引用的信息</h2><p>主张需要证据。证据可以来自产品资料、公开数据、方法说明、客户案例、第三方评价与行业研究。我们将证据放入适合检索和引用的内容结构，并明确来源、时间和适用边界。</p>
      <h2>04｜答案层：持续观察模型输出</h2><p>不同模型、不同时间和不同问法可能产生不同回答。答案层使用固定样本与重复测试追踪变化，记录提及、位置、描述、引用、情感和竞品，并将问题重新反馈给前三层。</p>
      <h2>AnswerGraph 的增长循环</h2>
      <table><thead><tr><th>动作</th><th>关键问题</th><th>结果</th></tr></thead><tbody>
        <tr><td>Observe</td><td>模型现在如何回答？</td><td>真实基线与差距</td></tr>
        <tr><td>Structure</td><td>模型缺少哪些关系和事实？</td><td>实体与证据结构</td></tr>
        <tr><td>Publish</td><td>什么内容最值得优先建设？</td><td>高价值内容资产</td></tr>
        <tr><td>Validate</td><td>答案是否发生稳定变化？</td><td>增长数据与新机会</td></tr>
      </tbody></table>
      <div className="article-cta"><div><h2>把方法用到你的品牌上</h2><p>从一组高价值问题开始，建立你的 AnswerGraph。</p></div><Link className="button button-dark" href="/#contact">开始 GEO 诊断 <ArrowRight size={18}/></Link></div>
    </article>
  </main>;
}
