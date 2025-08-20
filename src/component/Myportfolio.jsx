
import React, { useState } from 'react';
import './Myportfolio.css';
import work1 from "../../../images/work1.png";
import work2 from "../../../images/work2.png";
import work3 from "../../../images/work3.png";

const images = [work1, work2, work3];

const Myportfolio = () => {
  const [modalImg, setModalImg] = useState(null);

  const openModal = (imgSrc) => {
    setModalImg(imgSrc);
  };

  const closeModal = () => {
    setModalImg(null);
  };

  return (
    <section id="Myportfolio">
      <h1 className="worktitle">My Portfolio</h1>
      <span className="workspace">
        Passionate about building scalable, responsive, and user-friendly
        applications using modern web and mobile technologies. Strong foundation
        in problem-solving, adaptability, and project management, with a proven
        record of high academic and professional performance.
      </span>

      <div className="worksImages workImg-row">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Portfolio ${idx + 1}`}
            className="workImg"
            onClick={() => openModal(img)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>

      {modalImg && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImg} alt="Full" className="modal-img" />
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Myportfolio;
