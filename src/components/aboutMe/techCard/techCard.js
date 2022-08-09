function TechCard({ src, alt, title, key }) {
  return (
    <div className="tech-card-container">
      <img key={key} src={src} alt={alt} className="tech-card" />
      <p>{title}</p>
    </div>
  );
}

export default TechCard;
