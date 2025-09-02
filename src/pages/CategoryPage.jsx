import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const { name } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h1>{name.charAt(0).toUpperCase() + name.slice(1)} News</h1>
    </div>
  );
}
