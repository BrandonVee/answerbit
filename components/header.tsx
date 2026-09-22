import Link from "next/link";
import Logo from "./logo";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo-link"><Logo /></Link>
        <nav aria-label="主导航" className="desktop-nav">
          <Link href="/#why">为什么做 GEO</Link>
          <Link href="/#method">方法论</Link>
          <Link href="/services/geo">服务</Link>
          <Link href="/insights/geo-guide">GEO 指南</Link>
        </nav>
        <Link href="/#contact" className="nav-cta">
          获取品牌诊断 <ArrowUpRight size={16} strokeWidth={2.5} />
        </Link>
      </div>
    </header>
  );
}
