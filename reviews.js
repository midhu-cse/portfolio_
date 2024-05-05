let reviews = [];
function addReview(name, reviewText) {
    reviews.push({ name: name, review: reviewText });
    updateReviews();
}
function updateReviews() {
    const reviewCount = document.getElementById('count');
    const reviewContainer = document.getElementById('reviewContainer');
    reviewContainer.innerHTML = '';
    reviewCount.textContent = reviews.length;
    reviews.forEach((review, index) => {
        const div = document.createElement('div');
        div.classList.add('review');
        div.innerHTML = `<strong>${review.name}:</strong> ${review.review}`;
        reviewContainer.appendChild(div);
    });
}
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    addReview(name, review);
    document.getElementById('name').value = '';
    document.getElementById('review').value = '';
});
updateReviews();
