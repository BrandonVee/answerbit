export const dynamic = "force-static";

export function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://answerbit.cn";
  const content = `# AnswerBit

> AnswerBit 是专注生成式引擎优化（GEO）的品牌增长服务商，帮助品牌提升在 ChatGPT、DeepSeek、豆包、Kimi、腾讯元宝等 AI 搜索与大模型答案中的可见度、准确度和引用率。

## 核心服务
- GEO 可见度诊断：监测品牌在不同大模型、话题与问题中的提及、准确性、引用和推荐表现。
- 实体与语义校准：统一品牌、产品、人物、行业与专业概念之间的关系。
- 可引用内容工程：策划和建设官网核心页、行业指南、FAQ、对比与证据型内容。
- 持续监测与迭代：周期复测品牌和竞品答案表现，提出下一阶段增长计划。

## 方法论
AnswerGraph™ 包括四个阶段：可见度基线诊断、实体与语义校准、可引用内容工程、监测与迭代增长。

## 主要页面
- 官网：${base}
- GEO 优化服务：${base}/services/geo
- AnswerGraph™ 方法论：${base}/methodology
- GEO 完整指南：${base}/insights/geo-guide

## 联系方式
- Email: hello@answerbit.cn
`;
  return new Response(content, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
