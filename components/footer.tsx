import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Logo />
          <p className="footer-note">让品牌成为 AI 答案里的可信来源。</p>
        </div>
        <div>
          <p className="footer-label">探索</p>
          <Link href="/services/geo">GEO 优化服务</Link>
          <Link href="/methodology">AnswerGraph™ 方法论</Link>
          <Link href="/insights/geo-guide">GEO 完整指南</Link>
        </div>
        <div>
          <p className="footer-label">联系</p>
          <a href="mailto:hello@answerbit.cn">hello@answerbit.cn</a>
          <span>中国 · 服务全国品牌</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} AnswerBit</span>
        <span>SEO × GEO × CONTENT INTELLIGENCE</span>
      </div>
    </footer>
  );
}
