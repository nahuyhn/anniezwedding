window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.display = "flex"; // Hiện thanh menu khi kéo xuống
    } else {
        navbar.style.display = "none"; // Ẩn thanh menu khi ở trên cùng
    }
};

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const comment = document.querySelector('#list-comment');
const commentItem = document.querySelectorAll('#list-comment .item');
const commentHeight = 400; // Chiều cao của mỗi bình luận
var translateY = 0;
var count = 0; // Số chỉ số của bình luận hiện tại

next.addEventListener('click', function (event) {
  event.preventDefault();
  
  count++; // Tăng chỉ số bình luận hiện tại
  if (count >= commentItem.length) {
    count = 0; // Quay lại bình luận đầu tiên nếu đã đến cuối
  }
  
  translateY = -count * commentHeight; // Tính toán vị trí mới
  comment.style.transform = `translateY(${translateY}px)`;
});

prev.addEventListener('click', function (event) {
  event.preventDefault();
  
  count--; // Giảm chỉ số bình luận hiện tại
  if (count < 0) {
    count = commentItem.length - 1; // Quay lại bình luận cuối cùng nếu ở đầu
  }
  
  translateY = -count * commentHeight; // Tính toán vị trí mới
  comment.style.transform = `translateY(${translateY}px)`;
});


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


