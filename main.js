window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.display = "flex"; // Hiện thanh menu khi kéo xuống
    } else {
        navbar.style.display = "none"; // Ẩn thanh menu khi ở trên cùng
    }
};