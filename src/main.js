import { profile } from "./data/profile.js?v=20260627-3";

const root = document.querySelector("#app");

const link = (href, label, className = "text-link", attrs = "") =>
  `<a class="${className}" href="${href}" target="_blank" rel="noopener noreferrer" ${attrs}>${label}</a>`;

function Header(data) {
  const nav = data.navigation
    .map((item) => `<a href="${item.href}" class="nav-link">${item.label}</a>`)
    .join("");

  return `
    <header class="site-header" data-header>
      <div class="container header-inner">
        <a class="brand" href="#top" aria-label="${data.name}">
          <span>${data.name}</span>
          <small>${data.specialty}</small>
        </a>
        <nav class="desktop-nav" aria-label="Navegação principal">
          ${nav}
        </nav>
        <div class="header-actions">
          <a class="button button-primary button-small" href="${data.links.appointment}" target="_blank" rel="noopener noreferrer">Marcar consulta</a>
          <button class="menu-button" type="button" aria-expanded="false" aria-controls="mobile-nav" data-menu-button>
            <span></span>
            <span></span>
            <span></span>
            <span class="sr-only">Abrir menu</span>
          </button>
        </div>
      </div>
      <nav id="mobile-nav" class="mobile-nav" aria-label="Navegação móvel" data-mobile-nav>
        ${nav}
        <a class="button button-primary" href="${data.links.appointment}" target="_blank" rel="noopener noreferrer">Marcar consulta</a>
      </nav>
    </header>
  `;
}

function Hero(data) {
  const badges = data.hero.badges.map((badge) => `<span class="badge">${badge}</span>`).join("");

  return `
    <section id="top" class="hero section">
      <div class="container hero-grid">
        <div class="hero-copy reveal">
          <p class="eyebrow">${data.hero.eyebrow}</p>
          <h1>${data.hero.title}</h1>
          <p class="subtitle">${data.subtitle}</p>
          <p class="lead">${data.hero.lead}</p>
          <div class="badge-row" aria-label="Áreas clínicas">${badges}</div>
          <div class="hero-actions">
            <a class="button button-primary" href="${data.links.appointment}" target="_blank" rel="noopener noreferrer">Marcar consulta na CUF</a>
            <a class="button button-secondary" href="#sobre">Conhecer percurso clínico</a>
          </div>
          <div class="social-row" aria-label="Links profissionais">
            ${link(data.links.linkedin, "LinkedIn")}
            ${link(data.links.instagram, "Instagram")}
          </div>
        </div>
        <figure class="portrait reveal" aria-label="Fotografia profissional">
          <img data-portrait src="${data.photo.src}" alt="${data.photo.alt}" />
          <div class="portrait-placeholder" aria-hidden="true">
            <span>${data.photo.initials}</span>
            <small>Fotografia profissional a inserir</small>
          </div>
          <figcaption>
            <strong>Endocrinologia</strong>
            <span>Ordem dos Médicos ${data.orderNumber}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  `;
}

function AboutSection(data) {
  const body = data.about.body.map((paragraph) => `<p>${paragraph}</p>`).join("");
  const facts = data.about.quickFacts
    .map(
      (fact) => `
        <li>
          <span>${fact.label}</span>
          <strong>${fact.value}</strong>
        </li>
      `,
    )
    .join("");

  return `
    <section id="sobre" class="section section-white">
      <div class="container split-layout">
        <div class="section-copy reveal">
          <p class="eyebrow">Percurso clínico</p>
          <h2>${data.about.title}</h2>
          ${body}
        </div>
        <div class="about-side reveal">
          <figure class="about-photo">
            <img src="${data.secondaryPhoto.src}" alt="${data.secondaryPhoto.alt}" loading="lazy" />
          </figure>
          <aside class="quick-facts" aria-label="Dados rápidos">
            <h3>Dados rápidos</h3>
            <ul>${facts}</ul>
          </aside>
        </div>
      </div>
    </section>
  `;
}

function EndocrinologySection(data) {
  const cards = data.endocrinology.areas
    .map(
      (area) => `
        <article class="info-card reveal">
          <h3>${area.title}</h3>
          <p>${area.text}</p>
        </article>
      `,
    )
    .join("");

  return `
    <section id="endocrinologia" class="section section-tint">
      <div class="container">
        <div class="section-heading reveal">
          <p class="eyebrow">Sistema endócrino</p>
          <h2>${data.endocrinology.title}</h2>
          <p>${data.endocrinology.intro}</p>
        </div>
        <div class="card-grid card-grid-three">${cards}</div>
        <p class="section-note reveal">${data.endocrinology.note}</p>
      </div>
    </section>
  `;
}

function EducationTimeline(data) {
  const items = data.education.items
    .map(
      (item) => `
        <article class="timeline-item reveal">
          <div class="timeline-date">${item.date}</div>
          <div class="timeline-content">
            <div class="status-pill">${item.status}</div>
            <h3>${item.title}</h3>
            <p>${item.place}</p>
          </div>
        </article>
      `,
    )
    .join("");

  return `
    <section id="formacao" class="section section-white">
      <div class="container narrow">
        <div class="section-heading reveal">
          <p class="eyebrow">Percurso académico</p>
          <h2>${data.education.title}</h2>
          <p>${data.education.intro}</p>
        </div>
        <div class="timeline">${items}</div>
      </div>
    </section>
  `;
}

function AreasSection(data) {
  const cards = data.clinicalAreas.cards
    .map(
      (card) => `
        <article class="area-card reveal">
          <h3>${card.title}</h3>
          <ul>
            ${card.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      `,
    )
    .join("");

  return `
    <section id="areas" class="section section-tint">
      <div class="container">
        <div class="section-heading reveal">
          <p class="eyebrow">Consulta</p>
          <h2>${data.clinicalAreas.title}</h2>
          <p>${data.clinicalAreas.intro}</p>
        </div>
        <div class="card-grid card-grid-three">${cards}</div>
      </div>
    </section>
  `;
}

function ClinicalActivitySection(data) {
  const cards = data.clinicalActivity.locations
    .map(
      (location) => `
        <article class="location-card reveal">
          <h3>${location.title}</h3>
          <p>${location.text}</p>
          ${link(data.links[location.hrefKey], location.cta, "button button-secondary button-inline")}
        </article>
      `,
    )
    .join("");

  return `
    <section id="atividade" class="section section-white">
      <div class="container">
        <div class="section-heading reveal">
          <p class="eyebrow">Unidades e teleconsulta</p>
          <h2>${data.clinicalActivity.title}</h2>
          <p>${data.clinicalActivity.intro}</p>
        </div>
        <div class="card-grid card-grid-three">${cards}</div>
        <p class="section-note reveal">${data.clinicalActivity.note}</p>
      </div>
    </section>
  `;
}

function PublicationsSection(data) {
  const filters = data.publications.filters
    .map(
      (filter, index) => `
        <button class="filter-button ${index === 0 ? "is-active" : ""}" type="button" data-filter="${filter.value}" aria-pressed="${index === 0}">
          ${filter.label}
        </button>
      `,
    )
    .join("");

  const items = data.publications.items
    .map(
      (item) => `
        <article class="publication reveal" data-publication="${item.type}">
          <div>
            <span class="publication-type">${item.type}</span>
            <h3>${item.title}</h3>
            <p>${item.authors}</p>
            <dl>
              <div><dt>Ano</dt><dd>${item.year}</dd></div>
              <div><dt>Área</dt><dd>${item.area}</dd></div>
              ${item.source ? `<div><dt>Fonte</dt><dd>${item.source}</dd></div>` : ""}
            </dl>
          </div>
          ${
            item.link
              ? link(item.link, "Ver publicação", "button button-secondary button-inline")
              : `<span class="link-placeholder">Link a validar</span>`
          }
        </article>
      `,
    )
    .join("");

  return `
    <section id="publicacoes" class="section section-tint">
      <div class="container narrow">
        <div class="section-heading reveal">
          <p class="eyebrow">Investigação</p>
          <h2>${data.publications.title}</h2>
          <p>${data.publications.intro}</p>
        </div>
        <div class="filters reveal" role="group" aria-label="Filtrar publicações">
          ${filters}
        </div>
        <div class="publication-list" data-publication-list>
          ${items}
        </div>
      </div>
    </section>
  `;
}

function FAQSection(data) {
  const items = data.faq.items
    .map(
      (item, index) => `
        <div class="faq-item reveal">
          <button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-${index}" data-faq-button>
            <span>${item.question}</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div id="faq-${index}" class="faq-answer" hidden>
            <p>${item.answer}</p>
          </div>
        </div>
      `,
    )
    .join("");

  return `
    <section id="faq" class="section section-white">
      <div class="container narrow">
        <div class="section-heading reveal">
          <p class="eyebrow">Informação clínica</p>
          <h2>${data.faq.title}</h2>
        </div>
        <div class="faq-list">${items}</div>
        <p class="section-note reveal">${data.faq.note}</p>
      </div>
    </section>
  `;
}

function AppointmentCTA(data) {
  return `
    <section id="marcacao" class="section cta-section">
      <div class="container cta-layout reveal">
        <div>
          <p class="eyebrow">Consulta</p>
          <h2>${data.appointment.title}</h2>
          <p>${data.appointment.text}</p>
          <p class="cta-note">${data.appointment.note}</p>
        </div>
        <div class="cta-actions" aria-label="Marcações">
          <a class="button button-primary" href="${data.links.appointment}" target="_blank" rel="noopener noreferrer">Marcar consulta na CUF</a>
          <a class="button button-secondary" href="${data.links.teleconsultation}" target="_blank" rel="noopener noreferrer">Marcar teleconsulta</a>
          <a class="button button-ghost" href="${data.links.cufProfile}" target="_blank" rel="noopener noreferrer">Ver perfil CUF</a>
        </div>
      </div>
    </section>
  `;
}

function ProfessionalLinks(data) {
  return `
    <section id="links" class="section section-white">
      <div class="container links-layout reveal">
        <div>
          <p class="eyebrow">Canais oficiais</p>
          <h2>${data.professionalLinks.title}</h2>
          <p>${data.professionalLinks.text}</p>
        </div>
        <div class="professional-links" aria-label="Links profissionais">
          ${link(data.links.cufProfile, "CUF", "button button-secondary")}
          ${link(data.links.linkedin, "LinkedIn", "button button-secondary")}
          ${link(data.links.instagram, "Instagram", "button button-secondary")}
        </div>
      </div>
    </section>
  `;
}

function Footer(data) {
  const nav = data.navigation
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join("");

  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <strong>${data.name}</strong>
          <p>${data.subtitle}</p>
        </div>
        <nav aria-label="Navegação secundária">
          ${nav}
          <a href="#marcacao">Marcar consulta</a>
        </nav>
        <p>A informação deste site tem caráter informativo e não substitui consulta médica.</p>
      </div>
      <div class="container footer-bottom">
        <span>&copy; ${data.currentYear} ${data.name}. Todos os direitos reservados.</span>
        ${link(data.sources[0].href, "Fonte institucional: CUF")}
      </div>
    </footer>
  `;
}

function App(data) {
  return `
    ${Header(data)}
    <main id="conteudo">
      ${Hero(data)}
      ${AboutSection(data)}
      ${EndocrinologySection(data)}
      ${EducationTimeline(data)}
      ${AreasSection(data)}
      ${ClinicalActivitySection(data)}
      ${PublicationsSection(data)}
      ${FAQSection(data)}
      ${AppointmentCTA(data)}
      ${ProfessionalLinks(data)}
    </main>
    ${Footer(data)}
  `;
}

root.innerHTML = App(profile);

function setupMenu() {
  const button = document.querySelector("[data-menu-button]");
  const nav = document.querySelector("[data-mobile-nav]");
  if (!button || !nav) return;

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  nav.querySelectorAll("a").forEach((item) => {
    item.addEventListener("click", () => {
      button.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    });
  });
}

function setupHeader() {
  const header = document.querySelector("[data-header]");
  if (!header) return;

  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

function setupPortrait() {
  const img = document.querySelector("[data-portrait]");
  if (!img) return;

  const portrait = img.closest(".portrait");
  img.addEventListener("load", () => portrait.classList.add("is-loaded"));
  img.addEventListener("error", () => portrait.classList.add("has-fallback"));
}

function setupFAQ() {
  document.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : event.target.parentElement;
    const button = target?.closest("[data-faq-button]");
    if (!button) return;

    const panel = document.getElementById(button.getAttribute("aria-controls"));
    if (!panel) return;

    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    panel.hidden = isOpen;
  });
}

function setupPublicationFilters() {
  document.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : event.target.parentElement;
    const button = target?.closest("[data-filter]");
    if (!button) return;

    const filter = button.dataset.filter;
    const buttons = document.querySelectorAll("[data-filter]");
    const publications = document.querySelectorAll("[data-publication]");

    buttons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    publications.forEach((publication) => {
      const shouldShow = filter === "all" || publication.dataset.publication === filter;
      publication.hidden = !shouldShow;
    });
  });
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 },
  );

  items.forEach((item) => observer.observe(item));
}

function scrollToHash() {
  const id = decodeURIComponent(window.location.hash.slice(1));
  const target = document.getElementById(id);
  if (!target) return;

  target.scrollIntoView({ block: "start" });
}

function setupInitialHashScroll() {
  if (!window.location.hash) return;

  requestAnimationFrame(scrollToHash);
  window.setTimeout(scrollToHash, 180);
  window.addEventListener("hashchange", () => requestAnimationFrame(scrollToHash));
}

setupMenu();
setupHeader();
setupPortrait();
setupFAQ();
setupPublicationFilters();
setupReveal();
setupInitialHashScroll();
