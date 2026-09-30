import { useState } from "react";

function Card({ nama, role, bio }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };

  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-name">{nama}</h2>
        <span className="card-role">{role}</span>
        <p className="card-bio">{bio}</p>
      </div>

      <div className="card-footer">
        <span className="like-count">
          ❤️ {likes} {likes === 1 ? "like" : "likes"}
        </span>
        <button className="btn-like" onClick={handleLike}>
          Like
        </button>
      </div>
    </div>
  );
}

export default Card;