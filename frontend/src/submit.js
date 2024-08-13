import React, { useState } from "react";
import { useStore } from "./store";
import { Modal } from "./Modal.js";
import "./index.css";

export const SubmitButton = () => {
  const { nodes, edges } = useStore((state) => ({
    nodes: state.nodes,
    edges: state.edges,
  }));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [result, setResult] = useState(null);

  const backendURL = process.env.REACT_APP_BACKEND_URL;
  const apiUrl = backendURL || "http://localhost:8000";

  const handleSubmit = async () => {
    try {
      console.log("Submitting pipeline data:", { nodes, edges });

      const response = await fetch(`${apiUrl}/pipelines/parse`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setResult(result);
      setIsModalOpen(true); // Open the modal with the result
    } catch (error) {
      console.error("There was an error with the submission:", error);
      alert("Failed to submit the pipeline. Please try again.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button className="tour-button" type="button" onClick={handleSubmit}>
        Submit
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        result={result}
      />
    </div>
  );
};
