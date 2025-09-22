import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="hero container section" aria-labelledby="hero-title">
        <div>
          <div className="eyebrow">Piscine • Spa • Bien-être</div>
          <h1 id="hero-title">SUN 7 — Piscines & Spas sur-mesure</h1>
          <p>
            Nous concevons, installons et entretenons vos espaces aquatiques avec
            savoir-faire. Portfolio, services et contact ci-dessous — images à
            venir.
          </p>

          <div className="cta-row">
            <a className="btn" href="#contact">Demandez un devis</a>
            <a href="#services" style={{ color: "var(--color-primary)", fontWeight: 700 }}>Nos services</a>
          </div>
        </div>

        <aside className="subtle-surface" style={{ padding: 20 }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <Image src="/file.svg" alt="Icône contact" width={72} height={72} />
            <div>
              <strong>Contact rapide</strong>
              <div style={{ color: "var(--color-muted)" }}>+41 79 346 32 00</div>
              <div style={{ color: "var(--color-muted)" }}>sun7h7@gmail.com</div>
            </div>
          </div>
          <div style={{ marginTop: 16, color: "var(--color-muted)" }}>
            Adresse : Esplanade des Récréations 22, 1217 Meyrin
          </div>
        </aside>
      </section>

      <section id="services" className="section container">
        <h2>Nos services</h2>
        <p>Solutions complètes — construction, rénovation, entretien et plus.</p>
        <div className="services" role="list">
          <div className="service-card" role="listitem">
            <div className="service-icon">🏊</div>
            <h3>Piscines sur-mesure</h3>
            <p>Conception, installation et finition haut de gamme.</p>
          </div>
          <div className="service-card" role="listitem">
            <div className="service-icon">🛁</div>
            <h3>Spas & Jacuzzis</h3>
            <p>Équipements premium pour détente et bien-être.</p>
          </div>
          <div className="service-card" role="listitem">
            <div className="service-icon">🔧</div>
            <h3>Entretien & Dépannage</h3>
            <p>Interventions rapides et maintenance préventive.</p>
          </div>
        </div>
      </section>

      <section id="gallery" className="section container">
        <h2>Galerie (à venir)</h2>
        <p>Exemples de réalisations — remplacez ces placeholders par vos photos.</p>
        <div className="gallery">
          <div className="placeholder-img">Photo 1</div>
          <div className="placeholder-img">Photo 2</div>
          <div className="placeholder-img">Photo 3</div>
        </div>
      </section>

      <section id="contact" className="section container">
        <h2>Contact</h2>
        <div className="contact">
          <div>
            <p>
              Pour un devis ou une visite technique, contactez-nous. Les champs
              ci-dessous sont des placeholders — remplacez par votre formulaire
              préféré.
            </p>

            <form aria-label="Formulaire de contact" style={{ display: "grid", gap: 12 }}>
              <input placeholder="Nom" />
              <input placeholder="Email" />
              <textarea placeholder="Votre message" />
              <div style={{ display: "flex", gap: 8 }}>
                <button className="btn" type="button">Envoyer</button>
                <button type="button">Appeler : +41 79 346 32 00</button>
              </div>
            </form>
          </div>

          <aside className="contact-card">
            <h3>Restez en contact</h3>
            <p style={{ color: "rgba(255,255,255,0.9)" }}>Email : sun7h7@gmail.com</p>
            <p style={{ color: "rgba(255,255,255,0.9)" }}>Instagram : @sun7_piscine</p>
            <p style={{ color: "rgba(255,255,255,0.9)" }}>Site : www.sun7piscine.com</p>
          </aside>
        </div>
      </section>
    </div>
  );
}
