document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.querySelector(".menu"); // Sử dụng class để truy cập navbar

    window.onscroll = function() {
        // Kiểm tra vị trí cuộn của trang
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            navbar.classList.add("show"); // Thêm lớp show để hiện navbar
        } else {
            navbar.classList.remove("show"); // Gỡ bỏ lớp show để ẩn navbar
        }
    };

    const images = document.querySelectorAll('.banner-images img');
    let currentIndex = 0;

    function showNextImage() {
        // Ẩn ảnh hiện tại
        images[currentIndex].classList.remove('active');

        // Tính chỉ số ảnh tiếp theo
        currentIndex = (currentIndex + 1) % images.length;

        // Hiện ảnh tiếp theo
        images[currentIndex].classList.add('active');
    }

    // Khởi đầu với ảnh đầu tiên
    images[currentIndex].classList.add('active');

    // Chuyển đổi ảnh mỗi 3 giây
    setInterval(showNextImage, 3000);
});
