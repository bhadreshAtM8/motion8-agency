import { ImageResponse } from "next/og";

export const alt = "$399 Local Business Website Bundle — Website, SEO, AEO & Branding | Motion 8 Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          backgroundColor: "#160F0A",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(249, 87, 33, 0.22) 0%, transparent 50%), radial-gradient(circle at 15% 85%, rgba(255, 122, 41, 0.15) 0%, transparent 45%)",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Top Header Row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #F95721 0%, #FF7A29 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                fontWeight: 900,
                color: "#ffffff",
              }}
            >
              8
            </div>
            <div style={{ display: "flex", fontSize: "22px", fontWeight: 900, letterSpacing: "-0.02em" }}>
              MOTION 8 AGENCY
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 18px",
              borderRadius: "999px",
              background: "rgba(249, 87, 33, 0.15)",
              border: "1px solid rgba(249, 87, 33, 0.4)",
              color: "#FF7A29",
              fontSize: "14px",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Digital Launch Bundle
          </div>
        </div>

        {/* Center Hero Section */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "16px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: "52px",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.035em",
              maxWidth: "880px",
            }}
          >
            <span>Everything your business needs to show up online. One flat fee:&nbsp;</span>
            <span style={{ color: "#FF7A29" }}>$399.</span>
          </div>

          <div style={{ display: "flex", fontSize: "21px", color: "#A89A8F", maxWidth: "800px", lineHeight: 1.45 }}>
            Handcrafted Next.js website, local SEO, AEO &amp; GEO for AI search, custom vector logo &amp; free lifetime hosting.
          </div>
        </div>

        {/* Deliverables Badges Grid */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "12px" }}>
          {[
            "Custom Next.js Website",
            "Local SEO Setup",
            "AEO & GEO AI Search",
            "Custom Vector Logo",
            "Brand Guidelines",
            "GA4 & Search Console",
            "Lifetime Hosting ($0/mo)",
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "12px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                fontSize: "14px",
                fontWeight: 700,
                color: "#E2D9D2",
              }}
            >
              <span style={{ color: "#FF7A29", fontWeight: 900 }}>•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "20px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            fontSize: "14px",
            color: "#8C7E74",
          }}
        >
          <div style={{ display: "flex" }}>motion8agency.co/local-business-website-bundle</div>
          <div style={{ display: "flex", gap: "24px" }}>
            <span>One-Time Investment</span>
            <span>·</span>
            <span>7–14 Day Delivery</span>
            <span>·</span>
            <span>USA · UK · Australia Track Record</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
