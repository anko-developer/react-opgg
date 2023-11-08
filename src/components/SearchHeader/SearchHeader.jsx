import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchHeader.module.scss";

export default function SearchHeader() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/summoner");
  };

  return (
    <header className={styles.test}>
      <h1>OP.GG: {text}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="소환사 검색"
        />
      </form>
    </header>
  );
}
