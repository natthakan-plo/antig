/**
 * PORTFOLIO JAVASCRIPT - DIGITAL BUSINESS TECHNOLOGY
 * Features: Typewriter, Theme Toggle, Project Filter, Project Modal, Contact Validation
 */

// --- Project Data Store ---
const projectsData = {
  1: {
    title: "ระบบยืม–คืนอุปกรณ์กีฬา",
    subtitle: "Sports Equipment Borrow and Return Management System",
    category: "Database & System Analysis",
    image: "assets/images/project-sports.svg",
    tags: ["Database Design", "ER Diagram", "System Analysis", "MySQL", "UI Design"],
    problem: "การจัดการข้อมูลการยืมและคืนอุปกรณ์กีฬาในรูปแบบเดิมเกิดความล่าช้า ข้อมูลตกหล่น และไม่สามารถตรวจสอบสถานะคงเหลือได้อย่างเป็นระบบ",
    solution: "ออกแบบระบบจัดการข้อมูลการยืมและคืนอุปกรณ์กีฬา พร้อมออกแบบฐานข้อมูลและ ER Diagram กำหนดโครงสร้างตารางข้อมูลตามหลักการวิเคราะห์ระบบ",
    metrics: [
      { label: "Data Accuracy", value: "100%", desc: "ความถูกต้องแม่นยำของข้อมูลการยืม–คืน" },
      { label: "Time Saved", value: "75%", desc: "ลดเวลาในการบันทึกและตรวจสอบอุปกรณ์" },
      { label: "Database Normalization", value: "3NF", desc: "โครงสร้างฐานข้อมูลได้มาตรฐานระดับ 3NF" }
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  2: {
    title: "Candle Shop – E-Commerce Website Design",
    subtitle: "ร้านค้าออนไลน์สำหรับจำหน่ายเทียนหอมแบบ Responsive",
    category: "UI/UX Design & E-Commerce",
    image: "assets/images/project-candle.svg",
    tags: ["UI/UX Design", "Web Design", "Responsive Design", "E-Commerce Design", "Figma"],
    problem: "ร้านค้าเทียนหอมต้องการขยายช่องทางจัดจำหน่ายผ่านออนไลน์ที่เข้าถึงลูกค้ารุ่นใหม่ และมีขั้นตอนการเลือกซื้อที่สะดวกสบาย",
    solution: "ออกแบบเว็บไซต์ร้านค้าออนไลน์สำหรับจำหน่ายเทียนหอม รองรับการใช้งานทั้งบนคอมพิวเตอร์และโทรศัพท์มือถือ พร้อมหน้าสินค้า ตะกร้าสินค้า และขั้นตอนการสั่งซื้อ",
    metrics: [
      { label: "Responsiveness", value: "100%", desc: "รองรับการใช้งานทั้งคอมพิวเตอร์และโทรศัพท์มือถือ" },
      { label: "Checkout Flow", value: "Smooth", desc: "ขั้นตอนการสั่งซื้อกระชับ ลดความซับซ้อน" },
      { label: "Design Tool", value: "Figma", desc: "ออกแบบ UI/UX ครบทุกส่วนของระบบร้านค้า" }
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  3: {
    title: "Automatic Air Quality Monitoring and Alert System",
    subtitle: "ระบบตรวจสอบคุณภาพอากาศและแจ้งเตือนแบบอัตโนมัติผ่านสมาร์ตโฟน",
    category: "IoT & Smart Application",
    image: "assets/images/project-airquality.svg",
    tags: ["IoT", "Arduino/ESP", "Sensor", "Smart Application", "System Development"],
    problem: "ปัญหาฝุ่นละอองและก๊าซในอากาศที่มองไม่เห็น ส่งผลเสียต่อสุขภาพ และผู้ใช้งานขาดข้อมูลแจ้งเตือนแบบทันท่วงที",
    solution: "พัฒนาระบบตรวจสอบคุณภาพอากาศและแจ้งเตือนแบบอัตโนมัติสำหรับฝุ่นละอองและก๊าซผ่านสมาร์ตโฟน เพื่อช่วยให้ผู้ใช้งานสามารถติดตามข้อมูลคุณภาพอากาศได้อย่างสะดวกและรวดเร็ว",
    metrics: [
      { label: "Detection Speed", value: "Real-time", desc: "ตรวจวัดค่าฝุ่นและก๊าซอย่างต่อเนื่อง" },
      { label: "Notification", value: "Instant", desc: "แจ้งเตือนผ่านสมาร์ตโฟนทันทีเมื่อมีค่าเกินเกณฑ์" },
      { label: "Architecture", value: "IoT + Cloud", desc: "เชื่อมต่อเซนเซอร์ตรวจวัดเข้ากับสมาร์ตโฟน" }
    ],
    liveUrl: "#",
    githubUrl: "#"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Theme Toggle
  initTheme();

  // 2. Initialize Typewriter
  initTypewriter();

  // 3. Initialize Navbar Scroll Behavior
  initNavbarScroll();

  // 4. Initialize Project Filters
  initProjectFilter();

  // 5. Initialize Project Modal Trigger
  initProjectModal();

  // 6. Initialize Contact Form Validation & Toast
  initContactForm();

  // 7. Initialize Back To Top
  initBackToTop();

  // 8. Initialize Certificate Modal Preview
  initCertModal();
});

function initCertModal() {
  const certBoxes = document.querySelectorAll(".cert-img-box");
  const modalImg = document.getElementById("certModalImg");
  const modalTitle = document.getElementById("certModalTitle");

  certBoxes.forEach(box => {
    box.addEventListener("click", () => {
      const imgSrc = box.getAttribute("data-img") || box.querySelector("img")?.src;
      const title = box.getAttribute("data-title") || "ใบประกาศนียบัตร";
      if (modalImg && imgSrc) modalImg.src = imgSrc;
      if (modalTitle) modalTitle.textContent = title;
    });
  });
}

/* -------------------------------------------------------------
 * 1. THEME SWITCHER (Dark/Light Mode)
 * ----------------------------------------------------------- */
function initTheme() {
  const themeToggleBtns = [
    document.getElementById("themeToggle"),
    document.getElementById("themeToggleMobile")
  ];
  const themeIcons = document.querySelectorAll("#themeToggle i, #themeToggleMobile i");
  
  // Check local storage or preference
  const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcons(savedTheme, themeIcons);

  themeToggleBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("portfolio-theme", newTheme);
        updateThemeIcons(newTheme, themeIcons);
      });
    }
  });
}

function updateThemeIcons(theme, iconElems) {
  iconElems.forEach(iconElem => {
    if (!iconElem) return;
    if (theme === "light") {
      iconElem.className = "bi bi-moon-stars-fill text-warning";
    } else {
      iconElem.className = "bi bi-sun-fill text-warning";
    }
  });
}

/* -------------------------------------------------------------
 * 2. TYPEWRITER EFFECT
 * ----------------------------------------------------------- */
function initTypewriter() {
  const typewriterElement = document.getElementById("typewriterText");
  if (!typewriterElement) return;

  const roles = [
    "Digital Business Technologist",
    "E-Commerce Operations Strategist",
    "Performance Marketer & Growth",
    "UI/UX & Web Experience Designer",
    "Business Intelligence & Data Analyst"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 110;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 2200; // Pause at end of text
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 500; // Pause before new word
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* -------------------------------------------------------------
 * 3. NAVBAR SCROLL EFFECT & SPY
 * ----------------------------------------------------------- */
function initNavbarScroll() {
  const navbar = document.querySelector(".custom-navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    // Background shadow on scroll
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // ScrollSpy active link highlight
    let currentSectionId = "";
    const scrollPosition = window.pageYOffset + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  });

  // Close mobile navbar on nav-link click
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const navCollapse = document.getElementById("navbarNav");
      if (navCollapse && navCollapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });
}

/* -------------------------------------------------------------
 * 4. PROJECT FILTERS
 * ----------------------------------------------------------- */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Toggle active button
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      projectItems.forEach(item => {
        const categories = item.getAttribute("data-category") || "";
        if (filterValue === "all" || categories.includes(filterValue)) {
          item.classList.remove("hide");
          item.style.opacity = "0";
          setTimeout(() => {
            item.style.opacity = "1";
          }, 50);
        } else {
          item.classList.add("hide");
        }
      });
    });
  });
}

/* -------------------------------------------------------------
 * 5. PROJECT DETAIL MODAL
 * ----------------------------------------------------------- */
function initProjectModal() {
  const modalElem = document.getElementById("projectDetailModal");
  if (!modalElem) return;

  const bsModal = new bootstrap.Modal(modalElem);
  const detailButtons = document.querySelectorAll(".btn-view-project");

  detailButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const projectId = button.getAttribute("data-id");
      const data = projectsData[projectId];

      if (!data) return;

      // Populate Modal Fields
      document.getElementById("modalProjectTitle").textContent = data.title;
      document.getElementById("modalProjectSubtitle").textContent = data.subtitle;
      document.getElementById("modalProjectCategory").textContent = data.category;
      document.getElementById("modalProjectImage").src = data.image;
      document.getElementById("modalProjectProblem").textContent = data.problem;
      document.getElementById("modalProjectSolution").textContent = data.solution;

      // Tags
      const tagsContainer = document.getElementById("modalProjectTags");
      tagsContainer.innerHTML = "";
      data.tags.forEach(tag => {
        const span = document.createElement("span");
        span.className = "tool-tag";
        span.textContent = tag;
        tagsContainer.appendChild(span);
      });

      // Metrics
      const metricsContainer = document.getElementById("modalProjectMetrics");
      metricsContainer.innerHTML = "";
      data.metrics.forEach(metric => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-3";
        col.innerHTML = `
          <div class="p-3 rounded-3 text-center" style="background: rgba(99, 102, 241, 0.08); border: 1px solid var(--border-highlight);">
            <div class="h3 fw-bold gradient-text mb-1">${metric.value}</div>
            <div class="fw-semibold text-primary-emphasis mb-1" style="font-size:0.9rem;">${metric.label}</div>
            <div class="text-secondary small">${metric.desc}</div>
          </div>
        `;
        metricsContainer.appendChild(col);
      });

      bsModal.show();
    });
  });
}

/* -------------------------------------------------------------
 * 6. CONTACT FORM VALIDATION & TOAST
 * ----------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const toastElem = document.getElementById("contactToast");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const subject = document.getElementById("contactSubject").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    if (!name || !email || !message) {
      alert("กรุณากรอกข้อมูลในช่องที่จำเป็นให้ครบถ้วนค่ะ");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("กรุณาระบุรูปแบบอีเมลที่ถูกต้องค่ะ (เช่น example@domain.com)");
      return;
    }

    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>กำลังส่งข้อความ...';
    submitBtn.disabled = true;

    // Simulate sending network request
    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      form.reset();

      // Show Toast Notification
      if (toastElem) {
        const toast = new bootstrap.Toast(toastElem);
        toast.show();
      } else {
        alert("ส่งข้อความสำเร็จ! ณัฐกานต์ได้รับข้อความของคุณแล้ว จะติดต่อกลับโดยเร็วที่สุดค่ะ");
      }
    }, 1000);
  });
}

/* -------------------------------------------------------------
 * 7. BACK TO TOP BUTTON
 * ----------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById("backToTop");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 350) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
