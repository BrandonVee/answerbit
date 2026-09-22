import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "AnswerBit GEO 优化｜让品牌成为 AI 答案里的可信来源";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#f1efe6", color: "#121820", padding: "58px 68px", fontFamily: "sans-serif", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: -120, top: -180, width: 620, height: 620, borderRadius: "50%", border: "2px solid #121820", display: "flex" }} />
      <div style={{ position: "absolute", right: -30, top: -90, width: 440, height: 440, borderRadius: "50%", border: "2px dashed #121820", display: "flex" }} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 34, fontWeight: 800 }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 4, width: 36, height: 36 }}><span style={{width:10,height:18,background:"#121820",borderRadius:4}}/><span style={{width:10,height:36,background:"#121820",borderRadius:4}}/><span style={{width:10,height:27,background:"#ff5c35",borderRadius:4}}/></div>
          answerbit
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#ff5c35", fontSize: 18, letterSpacing: 5, fontWeight: 700, marginBottom: 20 }}>GENERATIVE ENGINE OPTIMIZATION</div>
          <div style={{ display: "flex", fontSize: 78, lineHeight: 1.15, fontWeight: 800, letterSpacing: -5 }}>让大模型准确理解并</div>
          <div style={{ display: "flex", alignItems: "center", fontSize: 78, lineHeight: 1.15, fontWeight: 800, letterSpacing: -5 }}><span style={{ color: "#ff5c35" }}>推荐</span>你的品牌<span style={{color:"#ff5c35"}}>。</span></div>
        </div>
      </div>
      <div style={{ position:"absolute",right:68,bottom:58,background:"#d9ff43",border:"2px solid #121820",padding:"16px 22px",fontSize:20,fontWeight:700,display:"flex" }}>SEO × GEO × CONTENT INTELLIGENCE</div>
    </div>,
    size
  );
}
