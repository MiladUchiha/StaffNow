'use client'


import React from "react";

const FormEvent = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onClick={handleSubmit}>
      <input type="text" placeholder="Email address" />
      <button>Skicka</button>
    </form>
  );
};

export default FormEvent;
