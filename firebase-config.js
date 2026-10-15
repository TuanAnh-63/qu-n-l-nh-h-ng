// ============================================
// CẤU HÌNH FIREBASE
// Lấy ở: Firebase Console > Project settings > Your apps > Web app (</>)
// Dán các giá trị của bạn vào bên dưới.
// ============================================
const firebaseConfig = {
    apiKey: "DÁN_API_KEY_VÀO_ĐÂY",
    authDomain: "TEN-PROJECT.firebaseapp.com",
    projectId: "TEN-PROJECT",
    storageBucket: "TEN-PROJECT.appspot.com",
    messagingSenderId: "DÁN_VÀO_ĐÂY",
    appId: "DÁN_VÀO_ĐÂY"
};

// Chỉ khởi tạo khi đã dán cấu hình thật. Nếu chưa, web chạy chế độ localStorage như cũ.
if (typeof firebase !== "undefined" && firebaseConfig.apiKey && !firebaseConfig.apiKey.startsWith("DÁN")) {
    firebase.initializeApp(firebaseConfig);
    window.db = firebase.firestore();
}
