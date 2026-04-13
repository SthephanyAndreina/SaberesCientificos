"use client";

import { useState, useEffect } from "react";

export default function SaberesCientificosBlog() {
  const telegramLink = "https://t.me/+D5zP8NCGARBjM2Yx";
  const chatUsbLogo = "/arbboard05_chatUSB.png";
  const logoSrc = "/artboard01_hardbackground.png";
  const usbLogoSrc = "/USB_logo.png";
  const heroBg = "/jardines.jpg";

  const [loaded, setLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredPost, setHoveredPost] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const c = {
    negro: "#0D0D0D",
    cian: "#00838F",
    naranja: "#FCA210",
    magenta: "#9C27B0",
    fuccia: "#D00487",
    verdeLima: "#DAFF21",
    amarilloLimon: "#F4FF21",
    blanco: "#FAFAFA",
    cream: "#F7F5F0",
  };

  const cards = [
    {
      title: "Orientación académica",
      text: "Dudas sobre ingreso a la universidad, vida estudiantil, carreras y decisiones académicas explicadas con lenguaje claro.",
      accent: c.cian,
      icon: "🎓",
      num: "01",
    },
    {
      title: "Investigar mejor",
      text: "Apoyo para formular preguntas, buscar fuentes confiables y desarrollar ideas propias sin depender ciegamente de la IA.",
      accent: c.naranja,
      icon: "🔬",
      num: "02",
    },
    {
      title: "Acompañamiento continuo",
      text: "Las dudas más importantes suelen aparecer después de las charlas. chatUSB mantiene el contacto cuando realmente se necesita.",
      accent: c.fuccia,
      icon: "🤝",
      num: "03",
    },
  ];

  const posts = [
    {
      title: "¿Cómo empezar una investigación escolar correctamente?",
      excerpt:
        "Una guía breve para pasar de una idea general a una pregunta clara, con fuentes útiles y criterios básicos de organización.",
      tag: "Investigación",
      color: c.magenta,
      icon: "📝",
    },
    {
      title: "¿Qué debo saber antes de entrar a la universidad?",
      excerpt:
        "Consejos sencillos sobre carreras, hábitos de estudio, adaptación académica y dudas frecuentes del paso de bachillerato a universidad.",
      tag: "Orientación",
      color: c.cian,
      icon: "🏛️",
    },
    {
      title: "Cómo usar la IA como apoyo y no como reemplazo",
      excerpt:
        "Usar herramientas digitales con criterio también es parte de aprender. Aquí mostramos cómo aprovecharlas sin perder autonomía.",
      tag: "Uso responsable de IA",
      color: c.naranja,
      icon: "🤖",
    },
  ];

  const stagger = (i) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(32px)",
    transition: `all 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${150 + i * 120}ms`,
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: c.blanco,
        color: c.negro,
        fontFamily: "'Outfit', 'Segoe UI', sans-serif",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        a { text-decoration: none; }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(2deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.08); }
        }
        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-2%, -2%); }
          30% { transform: translate(3%, 1%); }
          50% { transform: translate(-1%, 3%); }
          70% { transform: translate(2%, -3%); }
          90% { transform: translate(-3%, 2%); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .grain::before {
          content: '';
          position: absolute;
          inset: -50%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          animation: grain 6s steps(8) infinite;
          pointer-events: none;
          z-index: 0;
        }
      `}</style>

      <header
        className="grain"
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundImage: `linear-gradient(
            135deg,
            rgba(6, 14, 18, 0.78) 0%,
            rgba(8, 26, 30, 0.62) 35%,
            rgba(8, 24, 30, 0.58) 100%
          ), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          paddingBottom: "1px",
        }}
      >
        {[
          { bg: c.verdeLima, w: 280, l: "-6%", t: "10%", delay: "0s" },
          { bg: c.naranja, w: 220, l: "35%", t: "-8%", delay: "1.5s" },
          { bg: c.fuccia, w: 200, l: "70%", t: "18%", delay: "3s" },
          { bg: c.cian, w: 160, l: "85%", t: "-5%", delay: "0.8s" },
        ].map((orb, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: orb.l,
              top: orb.t,
              width: orb.w,
              height: orb.w,
              borderRadius: "50%",
              backgroundColor: orb.bg,
              opacity: 0.08,
              filter: "blur(80px)",
              animation: `pulse-glow 6s ease-in-out ${orb.delay} infinite`,
              pointerEvents: "none",
            }}
          />
        ))}

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "28px 28px 0" }}>
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
              borderRadius: 20,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              padding: "14px 22px",
              ...stagger(0),
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <img
                  src={logoSrc}
                  alt="Logo Saberes Científicos"
                  style={{
                    width: 72,
                    height: 72,
                    objectFit: "contain",
                    display: "block",
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: "0.16em",
                      color: "rgba(255,255,255,0.85)",
                      textTransform: "uppercase",
                      margin: 0,
                    }}
                  >
                    Saberes Científicos
                  </p>
                  <p
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.55)",
                      marginTop: 2,
                    }}
                  >
                    Divulgación · Orientación · Comunidad
                  </p>
                </div>
              </div>

              <img
                src={usbLogoSrc}
                alt="Logo USB"
                style={{
                  width: 56,
                  height: 56,
                  objectFit: "contain",
                  display: "block",
                  filter: "brightness(0) invert(1)",
                  background: "transparent",
                  flexShrink: 0,
                }}
              />
            </div>

            <a
              href={telegramLink}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                borderRadius: 16,
                background: "#fff",
                color: c.negro,
                padding: "10px 20px",
                fontSize: 13,
                fontWeight: 700,
                transition: "transform 0.3s, box-shadow 0.3s",
                boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.2)";
              }}
            >
              <span style={{ fontSize: 18 }}>💬</span>
              Unirme a chatUSB
            </a>
          </nav>

          <div style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 48, alignItems: "center", padding: "56px 0 64px" }}>
            <div>
              <div style={{ ...stagger(1) }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    borderRadius: 50,
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "rgba(255,255,255,0.08)",
                    padding: "8px 18px",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.85)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: c.verdeLima, display: "inline-block" }} />
                  Acercando la ciencia a la comunidad
                </span>
              </div>
              <h1
                style={{
                  marginTop: 24,
                  fontSize: "clamp(32px, 5vw, 56px)",
                  fontWeight: 900,
                  lineHeight: 1.08,
                  color: "#fff",
                  letterSpacing: "-0.02em",
                  ...stagger(2),
                }}
              >
                Un espacio para <span style={{ color: c.verdeLima }}>aprender</span>, <span style={{ color: c.naranja }}>preguntar</span> y mantener el vínculo más allá de cada charla.
              </h1>
              <p
                style={{
                  marginTop: 24,
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.75)",
                  maxWidth: 540,
                  ...stagger(3),
                }}
              >
                Saberes Científicos combina divulgación, orientación vocacional y acompañamiento académico continuo. Somos estudiantes y egresados de la
                <strong style={{ color: "#fff" }}> Universidad Simón Bolívar</strong>, queremos despertar la curiosidad científica de todos nuestros jóvenes estudiantes de educación media, atendiendo de forma directa sus dudas y guiándolos en cada paso.
              </p>
              <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 14, ...stagger(4) }}>
                <a
                  href={telegramLink}
                  style={{
                    borderRadius: 16,
                    padding: "14px 28px",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#fff",
                    background: `linear-gradient(135deg, ${c.fuccia}, ${c.magenta})`,
                    boxShadow: `0 6px 28px ${c.fuccia}55`,
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                  }}
                >
                  Entrar al grupo de Telegram →
                </a>
                <a
                  href="#publicaciones"
                  style={{
                    borderRadius: 16,
                    padding: "14px 28px",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#fff",
                    border: "1.5px solid rgba(255,255,255,0.25)",
                    background: "rgba(255,255,255,0.05)",
                    transition: "background 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  }}
                >
                  Ver contenidos
                </a>
              </div>
            </div>

            <div style={{ position: "relative", ...stagger(5) }}>
              <div
                style={{
                  position: "absolute",
                  inset: -12,
                  borderRadius: 32,
                  background: `linear-gradient(135deg, ${c.cian}88, ${c.fuccia}88, ${c.naranja}88)`,
                  filter: "blur(40px)",
                  opacity: 0.28,
                  animation: "float 8s ease-in-out infinite",
                }}
              />
              <div
                style={{
                  position: "relative",
                  borderRadius: 28,
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  padding: 32,
                  boxShadow: "0 24px 80px rgba(0,0,0,0.3)",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <img
                    src={chatUsbLogo}
                    alt="ChatUSB"
                    style={{
                      width: 120,
                      height: 120,
                      margin: "0 auto",
                      objectFit: "contain",
                    }}
                  />
                  <p style={{ marginTop: 8, fontSize: 13, color: "rgba(255,255,255,0.6)" }}>Canal de orientación en Telegram</p>
                </div>

                <div
                  style={{
                    marginTop: 24,
                    borderRadius: 20,
                    background: "#fff",
                    padding: 22,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: c.cian }} />
                    <p style={{ fontSize: 13, fontWeight: 700, color: c.cian, fontFamily: "'Space Mono', monospace" }}>Comunidad</p>
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "#444" }}>
                    Un canal complementario para atender preguntas cuando realmente surgen: después de las charlas, durante una tarea o al pensar en el futuro universitario.
                  </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 16 }}>
                  {[
                    { label: "Respuestas", value: "24h", icon: "⚡" },
                    { label: "Acceso", value: "Libre", icon: "🔓" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      style={{
                        borderRadius: 16,
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        padding: "14px 16px",
                        textAlign: "center",
                      }}
                    >
                      <p style={{ fontSize: 20 }}>{s.icon}</p>
                      <p style={{ fontSize: 18, fontWeight: 800, color: "#fff", marginTop: 4 }}>{s.value}</p>
                      <p style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            overflow: "hidden",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            padding: "12px 0",
            background: "rgba(0,0,0,0.15)",
          }}
        >
          <div style={{ display: "flex", animation: "marquee 25s linear infinite", whiteSpace: "nowrap" }}>
            {Array(2)
              .fill(
                "MICROSCOPÍA ✦ DIFRACCIÓN DE RAYOS X ✦ ORIENTACIÓN VOCACIONAL ✦ DIVULGACIÓN CIENTÍFICA ✦ CIENCIAS NATURALES ✦ INVESTIGACIÓN ESCOLAR ✦ USB ✦ "
              )
              .map((t, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    color: "rgba(255,255,255,0.35)",
                    fontFamily: "'Space Mono', monospace",
                    paddingRight: 12,
                  }}
                >
                  {t}
                </span>
              ))}
          </div>
        </div>
      </header>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 28px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 48 }}>
          <div style={{ maxWidth: 600 }}>
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: c.magenta,
                fontFamily: "'Space Mono', monospace",
              }}
            >
              Qué hacemos
            </p>
            <h2 style={{ marginTop: 12, fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              La ciencia necesita espacios{" "}
              <span style={{ background: `linear-gradient(135deg, ${c.cian}, ${c.magenta})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                cercanos y continuos
              </span>
              .
            </h2>
          </div>
          <p style={{ maxWidth: 380, fontSize: 15, lineHeight: 1.75, color: "#666" }}>
            Buscamos que estudiantes de educación media encuentren acompañamiento real para resolver dudas, comprender temas científicos y sentirse más cerca de la universidad.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {cards.map((card, i) => (
            <article
              key={card.title}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                position: "relative",
                borderRadius: 24,
                background: hoveredCard === i ? c.negro : "#fff",
                color: hoveredCard === i ? "#fff" : c.negro,
                border: `1.5px solid ${hoveredCard === i ? c.negro : "#e8e8e8"}`,
                padding: "36px 28px",
                cursor: "default",
                transition: "all 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
                transform: hoveredCard === i ? "translateY(-6px)" : "translateY(0)",
                boxShadow: hoveredCard === i ? `0 20px 60px ${card.accent}33` : "0 2px 12px rgba(0,0,0,0.04)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  background: card.accent,
                  opacity: hoveredCard === i ? 0.15 : 0.06,
                  transition: "opacity 0.4s",
                }}
              />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                  <span style={{ fontSize: 36 }}>{card.icon}</span>
                  <span
                    style={{
                      fontSize: 42,
                      fontWeight: 900,
                      fontFamily: "'Space Mono', monospace",
                      color: hoveredCard === i ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)",
                      transition: "color 0.4s",
                    }}
                  >
                    {card.num}
                  </span>
                </div>
                <div style={{ width: 40, height: 4, borderRadius: 4, background: card.accent, marginBottom: 16 }} />
                <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12 }}>{card.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: hoveredCard === i ? "rgba(255,255,255,0.7)" : "#666", transition: "color 0.4s" }}>
                  {card.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="publicaciones" style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 28px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 48 }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", color: c.naranja, fontFamily: "'Space Mono', monospace" }}>
              PUBLICACIONES SUGERIDAS
            </p>
            <h2 style={{ marginTop: 12, fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Contenido pensado para orientar.
            </h2>
          </div>
          <a
            href={telegramLink}
            style={{ fontSize: 13, fontWeight: 700, color: c.fuccia, borderBottom: `2px solid ${c.fuccia}`, paddingBottom: 2 }}
          >
            Compartir dudas en ChatUSB ↗
          </a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {posts.map((post, i) => (
            <article
              key={post.title}
              onMouseEnter={() => setHoveredPost(i)}
              onMouseLeave={() => setHoveredPost(null)}
              style={{
                borderRadius: 24,
                overflow: "hidden",
                border: "1.5px solid #e8e8e8",
                background: "#fff",
                transition: "all 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
                transform: hoveredPost === i ? "translateY(-6px)" : "translateY(0)",
                boxShadow: hoveredPost === i ? `0 20px 60px ${post.color}22` : "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              <div
                style={{
                  height: 6,
                  background: `linear-gradient(90deg, ${post.color}, ${post.color}88)`,
                  transition: "height 0.3s",
                  ...(hoveredPost === i ? { height: 8 } : {}),
                }}
              />
              <div style={{ padding: "28px 24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <span style={{ fontSize: 24 }}>{post.icon}</span>
                  <span
                    style={{
                      display: "inline-flex",
                      borderRadius: 50,
                      padding: "5px 14px",
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#fff",
                      background: post.color,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {post.tag}
                  </span>
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 800, lineHeight: 1.3, marginBottom: 12 }}>{post.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: "#666" }}>{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer
        className="grain"
        style={{
          position: "relative",
          overflow: "hidden",
          background: c.negro,
          color: "#fff",
          marginTop: 20,
        }}
      >
        <div style={{ position: "absolute", bottom: -80, left: "20%", width: 300, height: 300, borderRadius: "50%", background: c.cian, opacity: 0.05, filter: "blur(80px)" }} />
        <div style={{ position: "absolute", bottom: -60, right: "10%", width: 200, height: 200, borderRadius: "50%", background: c.fuccia, opacity: 0.05, filter: "blur(60px)" }} />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1200,
            margin: "0 auto",
            padding: "48px 28px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <img
              src={logoSrc}
              alt="Saberes Científicos"
              style={{
                width: 72,
                height: 72,
                objectFit: "contain",
                display: "block",
              }}
            />
            <div>
              <p style={{ fontWeight: 800, fontSize: 16 }}>Saberes Científicos</p>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>
                Divulgación científica · Orientación · Comunidad
              </p>
            </div>
          </div>
          <a
            href={telegramLink}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              borderRadius: 16,
              padding: "14px 24px",
              fontSize: 13,
              fontWeight: 700,
              color: "#fff",
              background: `linear-gradient(135deg, ${c.fuccia}, ${c.magenta})`,
              boxShadow: `0 4px 20px ${c.fuccia}44`,
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span style={{ fontSize: 18 }}>💬</span>
            Entrar a chatUSB
          </a>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "16px 28px", textAlign: "center" }}>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "'Space Mono', monospace" }}>
            © 2026 Saberes Científicos · Universidad Simón Bolívar · Servicio Comunitario ED-2301
          </p>
        </div>
      </footer>
    </div>
  );
}
