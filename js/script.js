document.addEventListener('DOMContentLoaded', () => {
    // 로드맵 탭 버튼 기능 구현
    const tabBtns = document.querySelectorAll('.tab-btn');
    const roadmapPanes = document.querySelectorAll('.roadmap-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 모든 탭 버튼과 패널의 active 클래스 제거
            tabBtns.forEach(b => b.classList.remove('active'));
            roadmapPanes.forEach(p => p.classList.remove('active'));

            // 클릭된 버튼에 active 클래스 추가
            btn.classList.add('active');

            // 클릭된 버튼의 data-target 속성값과 일치하는 ID를 가진 패널을 활성화
            const targetId = btn.getAttribute('data-target');
            const targetPane = document.getElementById(targetId);
            
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    // 커리큘럼 탭 영역 기능 구현 (마이크로디그리, 몰입형, 기타)
    const curriTabBtns = document.querySelectorAll('.curri-tab-btn');
    const curriPanes = document.querySelectorAll('.curri-pane');

    curriTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            curriTabBtns.forEach(b => b.classList.remove('active'));
            curriPanes.forEach(p => p.style.display = 'none');

            btn.classList.add('active');

            const targetId = btn.getAttribute('data-target');
            if (targetId) {
                const targetPane = document.getElementById(targetId);
                if (targetPane) {
                    targetPane.style.display = 'block';
                }
            }
        });
    });

    // 지원 신청 페이지 탭 영역 기능 구현 (apply.html)
    const applyTabBtns = document.querySelectorAll('.apply-tab');
    const applyPanes = document.querySelectorAll('.apply-pane');

    applyTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            applyTabBtns.forEach(b => b.classList.remove('active'));
            applyPanes.forEach(p => p.style.display = 'none');

            btn.classList.add('active');

            const targetId = btn.getAttribute('data-target');
            if (targetId) {
                const targetPane = document.getElementById(targetId);
                if (targetPane) {
                    targetPane.style.display = 'block';
                }
            }
        });
    });

    // ===== 로그인 모달 기능 =====
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.querySelector('.close-modal');
    const loginForm = document.getElementById('loginForm');

    if (loginBtn && loginModal) {
        // 모달 열기
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.classList.add('show');
        });

        // X 버튼으로 닫기
        closeModal.addEventListener('click', () => {
            loginModal.classList.remove('show');
        });

        // 모달 바깥 영역 클릭 시 닫기
        window.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                loginModal.classList.remove('show');
            }
        });

        // 폼 제출 이벤트 가로채기 (1111 검증 로직)
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // 기본 폼 제출 막기
            const id = document.getElementById('userId').value;
            const pw = document.getElementById('userPw').value;

            if (id === '1111' && pw === '1111') {
                alert('로그인 성공! \n나의 학생 대시보드로 이동합니다.');
                window.location.href = 'mypage.html';
            } else {
                alert('아이디 또는 비밀번호가 일치하지 않습니다.\n(테스트 계정: 1111 / 1111)');
            }
        });
    }
});
