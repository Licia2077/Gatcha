// 추후 Firebase 붙일 자리
export function saveEntry(entry) {
    // 로컬스토리지 저장 예시
    const saved = JSON.parse(localStorage.getItem("entries") || "[]");
    saved.push(entry);
    localStorage.setItem("entries", JSON.stringify(saved));
}

export function loadEntries() {
    return JSON.parse(localStorage.getItem("entries") || "[]");
}