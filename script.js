const STORAGE_KEY = "margarita_projects_v3";

const defaultProjects = [
  {
    id: "speaker-rgb-2v1",
    title: "Портативная колонка 2в1",
    platform: "WB",
    short: "Полный комплект карточки товара с инфографикой",
    description:
      "Карточка для портативной колонки: обложка, преимущества, защита IPX5, сравнение с конкурентами и блок управления. Визуал собран под высокую читаемость в мобильной выдаче.",
    chart: "bars",
    metrics: [
      { label: "Слайдов", value: "6" },
      { label: "Bluetooth", value: "5.3" }
    ],
    meta: [
      { label: "Категория", value: "Портативная акустика" },
      { label: "Формат", value: "Обложка + 5 инфо-слайдов" },
      { label: "Площадка", value: "Wildberries / Ozon" },
      { label: "Особенности", value: "RGB, IPX5, 25W, 1800mAh" }
    ],
    images: [
      "assets/speaker-1.png",
      "assets/speaker-2.png",
      "assets/speaker-3.png",
      "assets/speaker-4.png",
      "assets/speaker-5.png",
      "assets/speaker-6.png"
    ]
  },
  {
    id: "gamepad-gale-wireless",
    title: "Беспроводной геймпад GALE",
    platform: "WB",
    short: "Обложка + 6 слайдов для карточки геймпада",
    description:
      "Карточка для игрового геймпада: блок про батарею и док-станцию, вибрацию 256 уровней, доп.кнопки M1/M2, датчики Холла и визуальный блок качества исполнения.",
    chart: "ring",
    ringValue: 86,
    metrics: [
      { label: "Слайдов", value: "6" },
      { label: "Вибрация", value: "256 уровней" }
    ],
    meta: [
      { label: "Категория", value: "Игровые аксессуары" },
      { label: "Формат", value: "Обложка + 5 инфо-слайдов" },
      { label: "Площадка", value: "Wildberries / Ozon" },
      { label: "Особенности", value: "2.4 ГГц, Hall, 10000mAh, док-станция" }
    ],
    images: [
      "assets/gamepad-5.png",
      "assets/gamepad-2.png",
      "assets/gamepad-1.png",
      "assets/gamepad-4.png",
      "assets/gamepad-3.png",
      "assets/gamepad-6.png"
    ]
  },
  {
    id: "headphones-wireless-hi-fi",
    title: "Беспроводные наушники Hi‑Fi",
    platform: "WB",
    short: "Полный комплект карточки товара для наушников",
    description:
      "Карточка для беспроводных наушников: дальность 10 м, до 40 часов работы, Bluetooth 5.3, удобное кнопочное управление и универсальные сценарии подключения.",
    chart: "donut",
    metrics: [
      { label: "Автономность", value: "до 40 ч" },
      { label: "Bluetooth", value: "5.3" }
    ],
    meta: [
      { label: "Категория", value: "Беспроводные наушники" },
      { label: "Формат", value: "Обложка + 5 инфо-слайдов" },
      { label: "Площадка", value: "Wildberries / Ozon" },
      { label: "Особенности", value: "10 м, Hi‑Fi, Type‑C, TF/AUX" }
    ],
    images: [
      "assets/headphones-1.png",
      "assets/headphones-2.png",
      "assets/headphones-3.png",
      "assets/headphones-4.png",
      "assets/headphones-5.png",
      "assets/headphones-6.png"
    ]
  },
  {
    id: "shaver-3in1-green",
    title: "Многофункциональная бритва 3в1",
    platform: "WB",
    short: "Обложка + 6 слайдов с инфографикой преимуществ",
    description:
      "Карточка для электробритвы 3в1: быстрая зарядка, сухое и влажное бритье, откидная головка, плавающие ножи, сменные насадки и акцент на немецком качестве.",
    chart: "ring",
    ringValue: 90,
    metrics: [
      { label: "Автономность", value: "до 90 ч" },
      { label: "Зарядка", value: "60 мин" }
    ],
    meta: [
      { label: "Категория", value: "Электробритвы / груминг" },
      { label: "Формат", value: "Обложка + 5 инфо-слайдов" },
      { label: "Площадка", value: "Wildberries / Ozon" },
      { label: "Особенности", value: "3 насадки, 3D-головки, влажное/сухое бритье" }
    ],
    images: [
      "assets/shaver-1.png",
      "assets/shaver-2.png",
      "assets/shaver-3.png",
      "assets/shaver-4.png",
      "assets/shaver-5.png",
      "assets/shaver-6.png"
    ]
  },
  {
    id: "airpods-pro2-white",
    title: "Наушники Air Pro 2",
    platform: "WB",
    short: "Обложка + 7 слайдов для карточки товара",
    description:
      "Карточка для беспроводных наушников Air Pro 2: кейс, комплектация, оригинальная анимация подключения, сенсорное управление, защита IPX4 и акцент на чистом звучании.",
    chart: "ring",
    ringValue: 88,
    metrics: [
      { label: "Слайдов", value: "7" },
      { label: "Радиус", value: "до 15 м" }
    ],
    meta: [
      { label: "Категория", value: "TWS-наушники" },
      { label: "Формат", value: "Обложка + 6 инфо-слайдов" },
      { label: "Площадка", value: "Wildberries / Ozon" },
      { label: "Особенности", value: "IPX4, сенсор, анимация iPhone, Premium sound" }
    ],
    images: [
      "assets/airpods-5.png",
      "assets/airpods-1.png",
      "assets/airpods-2.png",
      "assets/airpods-3.png",
      "assets/airpods-4.png",
      "assets/airpods-6.png",
      "assets/airpods-7.png"
    ]
  },
  {
    id: "curler-pink-auto",
    title: "Автоматическая плойка для локонов",
    platform: "WB",
    short: "Обложка + 5 продающих слайдов",
    description:
      "Карточка для автоматической плойки: акцент на быструю укладку, 3 режима нагрева, керамический стержень с турмалином, безопасность и удобное управление.",
    chart: "ring",
    ringValue: 84,
    metrics: [
      { label: "Слайдов", value: "5" },
      { label: "Нагрев", value: "до 200°C" }
    ],
    meta: [
      { label: "Категория", value: "Техника для укладки волос" },
      { label: "Формат", value: "Обложка + 4 инфо-слайда" },
      { label: "Площадка", value: "Wildberries / Ozon" },
      { label: "Особенности", value: "3 режима, турмалин, авто-вращение, защита" }
    ],
    images: [
      "assets/curler-1.png",
      "assets/curler-2.png",
      "assets/curler-3.png",
      "assets/curler-4.png",
      "assets/curler-5.png"
    ]
  }
];

const deepClone = (data) => JSON.parse(JSON.stringify(data));
const REMOVED_PROJECT_IDS = new Set([
  "wb-cosmetics",
  "ozon-home",
  "wb-fashion",
  "ozon-kids",
  "wb-sports",
  "ozon-pets"
]);

const loadProjects = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return deepClone(defaultProjects);
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || !parsed.length) {
      return deepClone(defaultProjects);
    }

    const sanitized = parsed.filter((project) => !REMOVED_PROJECT_IDS.has(project.id));
    if (!sanitized.length) {
      return deepClone(defaultProjects);
    }

    const missingDefaults = defaultProjects.filter(
      (project) => !sanitized.some((storedProject) => storedProject.id === project.id)
    );

    if (missingDefaults.length) {
      return [...deepClone(missingDefaults), ...sanitized];
    }

    return sanitized;
  } catch (error) {
    return deepClone(defaultProjects);
  }
};

let projects = loadProjects();

const saveProjects = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
};

const getProjectById = (id) => projects.find((project) => project.id === id);

const body = document.body;
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-links a");

const setActiveNav = () => {
  const pathSegments = window.location.pathname.split("/").filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1] || "";
  const page = lastSegment.includes(".") ? lastSegment : "index.html";
  const onHome = page === "index.html" || page === "";
  const onProjectsHash = window.location.hash === "#projects";

  navLinks.forEach((link) => {
    const key = link.dataset.nav;
    link.classList.remove("is-active");

    if (page === "about.html" && key === "about") {
      link.classList.add("is-active");
    }

    if (onHome && !onProjectsHash && key === "home") {
      link.classList.add("is-active");
    }

    if (onHome && onProjectsHash && key === "projects") {
      link.classList.add("is-active");
    }
  });
};

setActiveNav();
window.addEventListener("hashchange", setActiveNav);

if (header && navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = header.dataset.open === "true";
    header.dataset.open = String(!isOpen);
    navToggle.setAttribute("aria-expanded", String(!isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      header.dataset.open = "false";
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const projectsGrid = document.getElementById("projects-grid");

const renderProjects = () => {
  if (!projectsGrid) {
    return;
  }

  projectsGrid.innerHTML = projects
    .map((project) => {
      const cover = project.images?.[0] || "assets/banner.png";

      return `
        <article class="project-card reveal" data-project-id="${project.id}" tabindex="0" role="button" aria-label="Открыть кейс ${project.title}">
          <div class="project-cover">
            <img src="${cover}" alt="Превью кейса ${project.title}" loading="lazy" />
          </div>

          <header>
            <h3>${project.title}</h3>
            <span class="project-platform">${project.platform}</span>
          </header>

          <p class="project-short">${project.short}</p>

          <button class="card-open" type="button">Открыть кейс</button>
        </article>
      `;
    })
    .join("");

  initReveal();
  bindProjectEvents();
};

const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalTag = document.getElementById("modal-tag");
const modalDescription = document.getElementById("modal-description");
const modalMeta = document.getElementById("modal-meta");
const modalThumbs = document.getElementById("modal-thumbs");
const modalMainImage = document.getElementById("modal-main-image");

let lastFocusedCard = null;
let currentModalProjectId = null;

const setMainModalImage = (imageSrc) => {
  modalMainImage.src = imageSrc;
};

const renderModalImages = (images = []) => {
  const safeImages = images.length ? images : ["assets/banner.png"];
  setMainModalImage(safeImages[0]);

  modalThumbs.innerHTML = safeImages
    .map(
      (src, index) => `
      <button class="modal-thumb ${index === 0 ? "is-active" : ""}" type="button" data-image-src="${src}" aria-label="Показать изображение ${index + 1}">
        <img src="${src}" alt="Миниатюра ${index + 1}" loading="lazy" />
      </button>
    `
    )
    .join("");

  modalThumbs.querySelectorAll(".modal-thumb").forEach((button) => {
    button.addEventListener("click", () => {
      modalThumbs.querySelectorAll(".modal-thumb").forEach((thumb) => thumb.classList.remove("is-active"));
      button.classList.add("is-active");
      setMainModalImage(button.dataset.imageSrc);
    });
  });
};

const openModal = (projectId, sourceCard) => {
  if (!modal) {
    return;
  }

  const project = getProjectById(projectId);
  if (!project) {
    return;
  }

  currentModalProjectId = project.id;
  lastFocusedCard = sourceCard || null;

  modalTag.textContent = project.platform;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;

  modalMeta.innerHTML = (project.meta || [])
    .map(
      (item) => `
      <article>
        <h4>${item.label}</h4>
        <p>${item.value}</p>
      </article>
    `
    )
    .join("");

  renderModalImages(project.images || []);

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  body.classList.add("modal-open");

  modal.querySelector(".modal-close")?.focus();
};

const closeModal = () => {
  if (!modal) {
    return;
  }

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  body.classList.remove("modal-open");

  if (lastFocusedCard) {
    lastFocusedCard.focus();
  }

  lastFocusedCard = null;
  currentModalProjectId = null;
};

const bindProjectEvents = () => {
  document.querySelectorAll(".project-card[data-project-id]").forEach((card) => {
    card.addEventListener("click", () => {
      openModal(card.dataset.projectId, card);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(card.dataset.projectId, card);
      }
    });
  });
};

if (modal) {
  modal.querySelectorAll("[data-modal-close]").forEach((node) => {
    node.addEventListener("click", closeModal);
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (modal?.classList.contains("is-open")) {
      closeModal();
    }

    if (adminDrawer?.classList.contains("is-open")) {
      closeAdmin();
    }
  }
});

let revealObserver = null;

const initReveal = () => {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );
  }

  document.querySelectorAll(".reveal:not(.is-visible)").forEach((el, index) => {
    el.style.transitionDelay = `${Math.min(index * 45, 300)}ms`;
    revealObserver.observe(el);
  });
};

const adminOpenButton = document.getElementById("admin-open");
const adminDrawer = document.getElementById("admin-drawer");
const adminProjectSelect = document.getElementById("admin-project-select");
const adminTitleInput = document.getElementById("admin-title-input");
const adminPlatformInput = document.getElementById("admin-platform-input");
const adminShortInput = document.getElementById("admin-short-input");
const adminChartInput = document.getElementById("admin-chart-input");
const adminDescriptionInput = document.getElementById("admin-description-input");
const adminMetric1Label = document.getElementById("admin-metric1-label");
const adminMetric1Value = document.getElementById("admin-metric1-value");
const adminMetric2Label = document.getElementById("admin-metric2-label");
const adminMetric2Value = document.getElementById("admin-metric2-value");
const adminMetaInput = document.getElementById("admin-meta-input");
const adminImageUrlInput = document.getElementById("admin-image-url");
const adminImageFilesInput = document.getElementById("admin-image-files");
const adminImagesList = document.getElementById("admin-images-list");
const adminAddUrlButton = document.getElementById("admin-add-url");
const adminSaveButton = document.getElementById("admin-save");
const adminResetButton = document.getElementById("admin-reset");
const adminAddProjectButton = document.getElementById("admin-add-project");
const adminDeleteProjectButton = document.getElementById("admin-delete-project");

let activeAdminProjectId = null;

const openAdmin = () => {
  if (!adminDrawer) {
    return;
  }

  body.classList.add("admin-open");
  adminDrawer.classList.add("is-open");
  adminDrawer.setAttribute("aria-hidden", "false");
  populateAdminProjects();
  adminProjectSelect?.focus();
};

const closeAdmin = () => {
  if (!adminDrawer) {
    return;
  }

  body.classList.remove("admin-open");
  adminDrawer.classList.remove("is-open");
  adminDrawer.setAttribute("aria-hidden", "true");
};

const populateAdminProjects = () => {
  if (!adminProjectSelect) {
    return;
  }

  adminProjectSelect.innerHTML = projects
    .map((project) => `<option value="${project.id}">${project.title}</option>`)
    .join("");

  if (!projects.length) {
    activeAdminProjectId = null;
    adminProjectSelect.value = "";
    clearAdminForm();
    return;
  }

  if (!activeAdminProjectId || !getProjectById(activeAdminProjectId)) {
    activeAdminProjectId = projects[0].id;
  }

  adminProjectSelect.value = activeAdminProjectId;
  fillAdminForm(activeAdminProjectId);
};

const clearAdminForm = () => {
  [
    adminTitleInput,
    adminPlatformInput,
    adminShortInput,
    adminDescriptionInput,
    adminMetric1Label,
    adminMetric1Value,
    adminMetric2Label,
    adminMetric2Value,
    adminMetaInput,
    adminImageUrlInput
  ].forEach((field) => {
    if (field) {
      field.value = "";
    }
  });

  if (adminChartInput) {
    adminChartInput.value = "ring";
  }

  if (adminImagesList) {
    adminImagesList.innerHTML = "";
  }
};

const fillAdminForm = (projectId) => {
  const project = getProjectById(projectId);
  if (!project) {
    clearAdminForm();
    return;
  }

  activeAdminProjectId = project.id;

  adminTitleInput.value = project.title || "";
  adminPlatformInput.value = project.platform || "";
  adminShortInput.value = project.short || "";
  adminDescriptionInput.value = project.description || "";
  adminChartInput.value = project.chart || "ring";

  adminMetric1Label.value = project.metrics?.[0]?.label || "";
  adminMetric1Value.value = project.metrics?.[0]?.value || "";
  adminMetric2Label.value = project.metrics?.[1]?.label || "";
  adminMetric2Value.value = project.metrics?.[1]?.value || "";

  adminMetaInput.value = (project.meta || []).map((item) => `${item.label}|${item.value}`).join("\n");

  renderAdminImages(project.images || []);
};

const renderAdminImages = (images) => {
  if (!adminImagesList) {
    return;
  }

  if (!images.length) {
    adminImagesList.innerHTML = '<p class="admin-hint">У проекта пока нет изображений.</p>';
    return;
  }

  adminImagesList.innerHTML = images
    .map(
      (src, index) => `
      <div class="admin-image-item">
        <img src="${src}" alt="image-${index + 1}" loading="lazy" />
        <code>${src}</code>
        <button type="button" class="admin-remove-image" data-remove-image-index="${index}">Удалить</button>
      </div>
    `
    )
    .join("");

  adminImagesList.querySelectorAll("[data-remove-image-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const project = getProjectById(activeAdminProjectId);
      if (!project) {
        return;
      }

      const index = Number(button.dataset.removeImageIndex);
      project.images = (project.images || []).filter((_, itemIndex) => itemIndex !== index);
      renderAdminImages(project.images);
    });
  });
};

const readFilesAsDataUrls = async (files) => {
  const readFile = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  return Promise.all(Array.from(files).map((file) => readFile(file)));
};

const applyAdminChanges = () => {
  const project = getProjectById(activeAdminProjectId);
  if (!project) {
    return;
  }

  project.title = adminTitleInput.value.trim() || project.title;
  project.platform = adminPlatformInput.value.trim() || project.platform;
  project.short = adminShortInput.value.trim() || project.short;
  project.chart = adminChartInput.value;
  project.description = adminDescriptionInput.value.trim() || project.description;

  project.metrics = [
    {
      label: adminMetric1Label.value.trim() || "Метрика",
      value: adminMetric1Value.value.trim() || "-"
    },
    {
      label: adminMetric2Label.value.trim() || "Метрика",
      value: adminMetric2Value.value.trim() || "-"
    }
  ];

  project.meta = adminMetaInput.value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [label, ...valueParts] = line.split("|");
      return {
        label: (label || "Параметр").trim(),
        value: (valueParts.join("|") || "-").trim()
      };
    });

  if (!project.meta.length) {
    project.meta = [
      { label: "Формат", value: "Не указан" },
      { label: "Срок", value: "Не указан" }
    ];
  }

  if (!project.images || !project.images.length) {
    project.images = ["assets/banner.png"];
  }

  saveProjects();
  renderProjects();
  populateAdminProjects();

  if (currentModalProjectId === project.id && modal?.classList.contains("is-open")) {
    openModal(project.id);
  }
};

if (adminOpenButton && adminDrawer) {
  adminOpenButton.addEventListener("click", openAdmin);

  adminDrawer.querySelectorAll("[data-admin-close]").forEach((node) => {
    node.addEventListener("click", closeAdmin);
  });

  adminProjectSelect?.addEventListener("change", (event) => {
    fillAdminForm(event.target.value);
  });

  adminAddUrlButton?.addEventListener("click", () => {
    const project = getProjectById(activeAdminProjectId);
    const url = adminImageUrlInput.value.trim();

    if (!project || !url) {
      return;
    }

    project.images = project.images || [];
    project.images.push(url);
    adminImageUrlInput.value = "";
    renderAdminImages(project.images);
  });

  adminImageFilesInput?.addEventListener("change", async (event) => {
    const project = getProjectById(activeAdminProjectId);
    const files = event.target.files;

    if (!project || !files?.length) {
      return;
    }

    try {
      const images = await readFilesAsDataUrls(files);
      project.images = project.images || [];
      project.images.push(...images);
      renderAdminImages(project.images);
    } catch (error) {
      console.error("File read error", error);
    }

    event.target.value = "";
  });

  adminSaveButton?.addEventListener("click", applyAdminChanges);

  adminResetButton?.addEventListener("click", () => {
    projects = deepClone(defaultProjects);
    saveProjects();
    renderProjects();
    populateAdminProjects();
  });

  adminAddProjectButton?.addEventListener("click", () => {
    const id = `project-${Date.now()}`;
    projects.unshift({
      id,
      title: "Новый проект",
      platform: "WB/Ozon",
      short: "Короткое описание",
      description: "Подробное описание проекта.",
      chart: "ring",
      ringValue: 72,
      metrics: [
        { label: "CTR", value: "+0%" },
        { label: "Конверсия", value: "+0%" }
      ],
      meta: [
        { label: "Формат", value: "Слайды" },
        { label: "Срок", value: "3 дня" }
      ],
      images: ["assets/banner.png"]
    });

    activeAdminProjectId = id;
    saveProjects();
    renderProjects();
    populateAdminProjects();
  });

  adminDeleteProjectButton?.addEventListener("click", () => {
    if (!activeAdminProjectId || projects.length <= 1) {
      return;
    }

    projects = projects.filter((project) => project.id !== activeAdminProjectId);
    activeAdminProjectId = projects[0]?.id || null;
    saveProjects();
    renderProjects();
    populateAdminProjects();
  });
}

renderProjects();
initReveal();
