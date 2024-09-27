import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const TestPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);
  return <div>TestPage</div>;
};
