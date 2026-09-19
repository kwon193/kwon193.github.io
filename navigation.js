// navigation.js

document.addEventListener("DOMContentLoaded", () => {
  // 1. 현재 활성화된 페이지 파일명 추출 (예: 'research.html')
  const path = window.location.pathname;
  const page = path.split("/").pop() || "index.html";

  // 2. 공통 상단바(Top Bar + Header) HTML 템플릿 정의
  const headerTemplate = `
    <!-- 상단 소속 바 -->
    <div class="top-bar">
      <div class="container top-bar-content">
        <span>홍익대학교 AID융합과학기술대학 조선해양모빌리티공학과</span>
        <a href="contact.html">오시는 길 / Contact</a>
      </div>
    </div>

    <!-- 네비게이션 헤더 -->
    <header>
      <div class="container nav-container">
        <a href="index.html" class="logo-area">
          <img 
            src="assets/images/lab_logo_long.png" 
            alt="AI & Computational Mechanics Laboratory Logo" 
            class="header-logo-img"
            onerror="this.onerror=null; this.style.display='none'; document.getElementById('logo-fallback-text').style.display='block';"
          />
          <!-- 원본 로고 이미지가 없을 경우 깨지지 않고 글씨로 대체해 주는 보조 장치 -->
          <div id="logo-fallback-text" class="logo-text-only" style="display: none;">
            <h1>CML</h1>
            <span>Articial Intelligence & Computational Mechanics Lab</span>
          </div>
        </a>
        <button class="mobile-toggle" id="menuToggle">☰</button>
        <ul class="nav-links" id="navLinks">
          <li><a href="index.html" class="${page === 'index.html' ? 'active' : ''}">Home</a></li>
          <li><a href="research.html" class="${page === 'research.html' ? 'active' : ''}">Research</a></li>
          <li><a href="publications.html" class="${page === 'publications.html' ? 'active' : ''}">Publications</a></li>
          <li><a href="team.html" class="${page === 'team.html' ? 'active' : ''}">People</a></li>
          <li><a href="contact.html" class="${page === 'contact.html' ? 'active' : ''}">Contact</a></li>
        </ul>
      </div>
    </header>
  `;

  // 3. 공통 하단바(Footer) HTML 템플릿 정의
  const footerTemplate = `
    <footer>
      <div class="container">
        <div class="footer-grid">
          <div>
            <h4>Artificial Intelligence & Computational Mechanics (AICM) Lab</h4>
            <p>Hongik University, Department of Naval Architecture, Ocean & Mobility Engineering</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <p>
              <a href="research.html" style="color: #cbd5e1;">Research</a> | 
              <a href="publications.html" style="color: #cbd5e1;">Publications</a> | 
              <a href="team.html" style="color: #cbd5e1;">Team</a>
            </p>
          </div>
        </div>
        <div class="copyright">Copyright © 2026 AICM Lab. All Rights Reserved.</div>
      </div>
    </footer>
  `;

  // 4. 페이지 안의 placeholder 요소에 동적 삽입
  const headerPlaceholder = document.getElementById("common-header");
  const footerPlaceholder = document.getElementById("common-footer");

  if (headerPlaceholder) {
    headerPlaceholder.innerHTML = headerTemplate;

    // 모바일 햄버거 메뉴 토글 이벤트 연결
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    if (menuToggle && navLinks) {
      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
      });
    }
  }

  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerTemplate;
  }
});
