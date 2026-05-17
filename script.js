// ─── Year Display ───
const yearNode = document.getElementById("year");
if (yearNode) yearNode.textContent = new Date().getFullYear();

// ─── SVG Icons ───
const icons = {
  location: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  clock: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  users: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  phone: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  arrow: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  star: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
  globe: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  check: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'
};

// ─── Branch Data (from madrasa_branches_info.md) ───
const branchesData = [
  {
    id: 1,
    name: "Al Furqan Online Madrasa",
    nameML: "അൽഫുർഖാൻ ഓൺലൈൻ മദ്രസ",
    location: "Online — Google Meet",
    type: "online",
    timingSummary: "Mon – Thu · Multiple Batches",
    classesSummary: "LKG to Adults",
    highlight: "Online classes with dedicated Huffaz via Google Meet",
    contacts: ["+91 9900001339", "+91 9656238989"],
    image: "./BASE_IMAGE.png",
    details: {
      academicYear: "2026–27 Admissions Open",
      days: "Monday, Tuesday, Wednesday, Thursday",
      timings: [
        { label: "Indian Batch", time: "5:00 PM – 6:10 PM (IST)" },
        { label: "Middle East Batch", time: "8:45 PM – 9:45 PM (IST)" }
      ],
      specialities: [
        "Expert Huffaz guidance",
        "Classes conducted via Google Meet",
        "Regular parent-teacher meetings",
        "Dedicated parents' classes",
        "Character building sessions for children",
        "Training programs from LKG to adults",
        "Malayalam language learning",
        "Noorani reading classes for KG students"
      ],
      address: "Online — Accessible from anywhere via Google Meet"
    }
  },
  {
    id: 2,
    name: "BIC Madrasa — Electronic City",
    location: "Electronic City, Bengaluru",
    type: "physical",
    timingSummary: "Evening & Sunday Batches",
    classesSummary: "Classes 1 to 4",
    highlight: "30 years of educational heritage · 500+ students",
    contacts: ["+91 9900 001 339"],
    image: "./BASE_IMAGE.png",
    details: {
      timings: [
        { label: "Evening Shift", time: "3:00 PM – 7:00 PM" },
        { label: "Sunday", time: "9:00 AM – 1:00 PM" }
      ],
      specialities: [
        "30 years of educational tradition",
        "500+ students learning online & offline",
        "Trained & experienced teaching staff",
        "Balanced curriculum with practical training",
        "Personality development & mentorship programs",
        "Special Noorani reading classes for KG",
        "Malayalam language learning facility",
        "Quran Hifz — max 15 students per class",
        "Dedicated safety & monitoring system"
      ],
      address: "Masjid-e-Abu Baker, Ahle Hadees, Site #03\nShikaripalaya Main Road, Maragonahalli\nElectronic City, Phase I, Bengaluru – 560105"
    }
  },
  {
    id: 3,
    name: "BIC Madrasa — Hegde Nagar",
    location: "Hegde Nagar, Bengaluru",
    type: "physical",
    timingSummary: "Evening & Sunday Batches",
    classesSummary: "Classes 1 to 8",
    highlight: "Comprehensive program with Quran Hifz & language training",
    contacts: ["+91 9900 001 339"],
    image: "./BASE_IMAGE.png",
    details: {
      timings: [
        { label: "Evening Shift", time: "3:00 PM – 7:00 PM" },
        { label: "Sunday", time: "9:00 AM – 1:00 PM" }
      ],
      specialities: [
        "30 years of educational tradition",
        "500+ students learning online & offline",
        "Trained & experienced teaching staff",
        "Balanced curriculum with practical training",
        "Personality development & mentorship programs",
        "Special Noorani reading classes for KG",
        "Malayalam language learning facility",
        "Quran Hifz — max 15 students per class",
        "Dedicated safety & monitoring system"
      ],
      address: "Zulnoorain Kerala Masjid\n2nd Main Rd, Agrahara Layout\nBengaluru, Karnataka – 560064"
    }
  },
  {
    id: 4,
    name: "BIC Madrasa — Okalipuram",
    location: "Okalipuram, Bengaluru",
    type: "physical",
    timingSummary: "Evening & Sunday Batches",
    classesSummary: "Classes 1 to 4",
    highlight: "Focused learning with trained educators & safety monitoring",
    contacts: ["+91 9900 001 339"],
    image: "./BASE_IMAGE.png",
    details: {
      timings: [
        { label: "Evening Shift", time: "3:00 PM – 7:00 PM" },
        { label: "Sunday", time: "9:00 AM – 1:00 PM" }
      ],
      specialities: [
        "30 years of educational tradition",
        "500+ students learning online & offline",
        "Trained & experienced teaching staff",
        "Balanced curriculum with practical training",
        "Personality development & mentorship programs",
        "Special Noorani reading classes for KG",
        "Malayalam language learning facility",
        "Quran Hifz — max 15 students per class",
        "Dedicated safety & monitoring system"
      ],
      address: "Thaheera Building #109\n3rd Main Rd, 4N Block\nRamachandra Puram, Srirampura\nBengaluru – 560021"
    }
  },
  {
    id: 5,
    name: "BIC Madrasa — Shivaji Nagar",
    location: "Shivaji Nagar, Bengaluru",
    type: "physical",
    timingSummary: "Evening & Sunday Batches",
    classesSummary: "Classes 1 to 8",
    highlight: "Located at Salafi Masjid with experienced faculty",
    contacts: ["+91 9900 001 339"],
    image: "./BASE_IMAGE.png",
    details: {
      timings: [
        { label: "Evening Shift", time: "3:00 PM – 7:00 PM" },
        { label: "Sunday", time: "9:00 AM – 1:00 PM" }
      ],
      specialities: [
        "30 years of educational tradition",
        "500+ students learning online & offline",
        "Trained & experienced teaching staff",
        "Balanced curriculum with practical training",
        "Personality development & mentorship programs",
        "Special Noorani reading classes for KG",
        "Malayalam language learning facility",
        "Quran Hifz — max 15 students per class",
        "Dedicated safety & monitoring system"
      ],
      address: "Salafi Masjid\nChandini Chowk Road\nShivaji Nagar, Bangalore – 560051"
    }
  }
];

// ─── Render Branch Cards ───
function renderBranchCards() {
  const grid = document.getElementById("branches-grid");
  if (!grid) return;

  grid.innerHTML = branchesData.map((branch, index) => `
    <article class="branch-card branch-reveal" data-branch-id="${branch.id}" style="--delay: ${index * 0.1}s" tabindex="0" role="button" aria-label="View details for ${branch.name}">
      <div class="branch-card-image">
        <img src="${branch.image}" alt="${branch.name}" loading="lazy" />
        ${branch.type === "online" ? `<span class="branch-badge">${icons.globe} Online</span>` : ""}
      </div>
      <div class="branch-card-body">
        <h3 class="branch-card-title">${branch.name}</h3>
        ${branch.nameML ? `<p class="branch-card-subtitle">${branch.nameML}</p>` : ""}
        <div class="branch-card-meta">
          <span class="branch-meta-item">${branch.type === "online" ? icons.globe : icons.location} ${branch.location}</span>
          <span class="branch-meta-item">${icons.clock} ${branch.timingSummary}</span>
          <span class="branch-meta-item">${icons.users} ${branch.classesSummary}</span>
        </div>
        <p class="branch-card-highlight">${icons.star} ${branch.highlight}</p>
        <div class="branch-card-footer">
          <span class="branch-contact">${icons.phone} ${branch.contacts[0]}</span>
          <span class="branch-cta">View Details ${icons.arrow}</span>
        </div>
      </div>
    </article>
  `).join("");

  // Attach click handlers
  grid.querySelectorAll(".branch-card").forEach(card => {
    card.addEventListener("click", () => openBranchModal(Number(card.dataset.branchId)));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openBranchModal(Number(card.dataset.branchId));
      }
    });
  });
}

// ─── Modal Logic ───
function openBranchModal(branchId) {
  const branch = branchesData.find(b => b.id === branchId);
  if (!branch) return;

  const overlay = document.getElementById("branch-modal-overlay");
  const content = document.getElementById("branch-modal-content");

  const timingsHTML = branch.details.timings.map(t =>
    `<div class="modal-timing-row"><span class="modal-timing-label">${t.label}</span><span class="modal-timing-value">${t.time}</span></div>`
  ).join("");

  const specialitiesHTML = branch.details.specialities.map(s =>
    `<li>${icons.check} <span>${s}</span></li>`
  ).join("");

  const contactsHTML = branch.contacts.map(c =>
    `<a href="tel:${c.replace(/\s/g, "")}" class="modal-contact-link">${icons.phone} ${c}</a>`
  ).join("");

  content.innerHTML = `
    <div class="modal-header">
      <div class="modal-header-image">
        <img src="${branch.image}" alt="${branch.name}" />
      </div>
      <div class="modal-header-info">
        <h3>${branch.name}</h3>
        ${branch.nameML ? `<p class="modal-name-ml">${branch.nameML}</p>` : ""}
        <span class="modal-location">${branch.type === "online" ? icons.globe : icons.location} ${branch.location}</span>
        ${branch.details.academicYear ? `<span class="modal-admission-badge">${branch.details.academicYear}</span>` : ""}
      </div>
    </div>

    <div class="modal-sections">
      <div class="modal-section">
        <h4>${icons.clock} Timings</h4>
        ${branch.details.days ? `<p class="modal-days"><strong>Days:</strong> ${branch.details.days}</p>` : ""}
        <div class="modal-timings">${timingsHTML}</div>
      </div>

      <div class="modal-section">
        <h4>${icons.star} Our Specialities</h4>
        <ul class="modal-specialities">${specialitiesHTML}</ul>
      </div>

      <div class="modal-section">
        <h4>${icons.location} Address</h4>
        <p class="modal-address">${branch.details.address.replace(/\n/g, "<br>")}</p>
      </div>

      <div class="modal-section">
        <h4>${icons.phone} Contact</h4>
        <div class="modal-contacts">${contactsHTML}</div>
      </div>

      <div class="modal-section modal-section-placeholder">
        <div class="modal-map-placeholder">
          <span>${icons.location}</span>
          <p>Map view coming soon</p>
        </div>
      </div>
    </div>
  `;

  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeBranchModal() {
  const overlay = document.getElementById("branch-modal-overlay");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

// Modal event listeners
document.addEventListener("DOMContentLoaded", () => {
  renderBranchCards();
  initScrollReveal();

  const overlay = document.getElementById("branch-modal-overlay");
  const closeBtn = document.getElementById("branch-modal-close");

  if (closeBtn) closeBtn.addEventListener("click", closeBranchModal);
  if (overlay) overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeBranchModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeBranchModal();
  });
});

// ─── Scroll Reveal Animation ───
function initScrollReveal() {
  const revealEls = document.querySelectorAll(".branch-reveal");
  if (!revealEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  revealEls.forEach(el => observer.observe(el));
}
