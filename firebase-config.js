// ============================================
// CẤU HÌNH FIREBASE
// Lấy ở: Firebase Console > Project settings > Your apps > Web app (</>)
// Dán các giá trị của bạn vào bên dưới.
// ============================================
const firebaseConfig = {
    apiKey: "AIzaSyCDIuIEUOaBdeb8hbZ9djhC0XQ9dl6JHL4",
    authDomain: "lau4mua-dca09.firebaseapp.com",
    projectId: "lau4mua-dca09",
    storageBucket: "lau4mua-dca09.firebasestorage.app",
    messagingSenderId: "243890608402",
    appId: "1:243890608402:web:1f435a0dc9900154907bcb"
};

// Chỉ khởi tạo khi đã dán cấu hình thật. Nếu chưa, web chạy chế độ localStorage như cũ.
if (typeof firebase !== "undefined" && firebaseConfig.apiKey && !firebaseConfig.apiKey.startsWith("DÁN")) {
    firebase.initializeApp(firebaseConfig);
    window.db = firebase.firestore();
}
