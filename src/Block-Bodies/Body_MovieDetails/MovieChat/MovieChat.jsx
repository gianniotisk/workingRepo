import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./MovieChat.module.css";

const MovieChat = ({ reviews, addReview }) => {
  const [newReview, setNewReview] = useState({
    title: "",
    reviewer: "",
    review: "",
    score: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5; // Controls how many comments they can be shown

  // Ensure there are reviews
  const totalPages = Math.ceil((reviews?.length || 0) / reviewsPerPage);
  const totalPagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Pagination displays
  const displayedReviews = (reviews || []).slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage
  );

  // Submit Reviews
  const submitReview = (e) => {
    e.preventDefault();

    if (!newReview.reviewer.trim()) {
      alert("Please enter your name.");
      return;
    }
    if (!newReview.review.trim()) {
      alert("Please enter your review.");
      return;
    }
    if (newReview.score === "") {
      alert("Please enter a score between 0 and 10.");
      return;
    }

    addReview({
      ...newReview,
      dateTime: new Date().toISOString(),
    });

    setNewReview({ title: "", reviewer: "", review: "", score: "" });
  };

  return (
    <section className={styles.chat}>
      <header className={styles.chatHeader}>User Comments</header>

      <section className={styles.chatSubmit}>
        {/* Had some trouble here with my browser displaying greek errors */}
        <form onSubmit={submitReview} noValidate>
          <input
            type="text"
            id="reviewTitle"
            placeholder="Review Title"
            value={newReview.title}
            onChange={(e) =>
              setNewReview({ ...newReview, title: e.target.value })
            }
          />
          <input
            type="text"
            id="reviewerName"
            placeholder="Your Name"
            value={newReview.reviewer}
            onChange={(e) =>
              setNewReview({ ...newReview, reviewer: e.target.value })
            }
            required
          />
          <input
            type="text"
            id="reviewText"
            placeholder="Your Review"
            value={newReview.review}
            onChange={(e) =>
              setNewReview({ ...newReview, review: e.target.value })
            }
            required
          />
          <input
            type="number"
            id="reviewScore"
            placeholder="Your Score (0-10)"
            value={newReview.score}
            min="0"
            max="10"
            onChange={(e) =>
              setNewReview({ ...newReview, score: e.target.value })
            }
            required
          />
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Pagination Controls (Top) */}
      <aside className={styles.pagination}>
        {totalPagesArray.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? styles.active : ""}
          >
            {page}
          </button>
        ))}
      </aside>

      <ul className={styles.chatItems}>
        {displayedReviews.map((review, index) => (
          <li key={index} className={styles.chatItem}>
            {review.title && <strong>Title: {review.title}</strong>}
            {review.reviewer && (
              <p>
                <em>by User:</em> {review.reviewer}
              </p>
            )}
            {review.dateTime && (
              <p>
                <em>Posted on:</em> {new Date(review.dateTime).toLocaleString()}
              </p>
            )}
            <hr />
            {review.score && (
              <p>
                <strong>Score:</strong> {review.score}
              </p>
            )}
            {review.review && <p>{review.review}</p>}
          </li>
        ))}
      </ul>

      {/* Pagination Controls (Bottom) */}
      <aside className={styles.pagination}>
        {totalPagesArray.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </button>
        ))}
      </aside>
    </section>
  );
};

// This is used to submit the information from a new review, some input are optional, others are not
MovieChat.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      reviewer: PropTypes.string.isRequired,
      review: PropTypes.string.isRequired,
      score: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      dateTime: PropTypes.string,
    })
  ).isRequired,
  addReview: PropTypes.func.isRequired,
};

export default MovieChat;
