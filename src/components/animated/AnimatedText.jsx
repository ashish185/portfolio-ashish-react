import "./animatedText.scss";

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div>
      <h1 className={className}>
        {text.split(" ").map((word, index) => (
          <span
            key={word + "_" + index}
            className="animated-word inline-block text-left"
            style={{ animationDelay: `${0.5 + index * 0.4}s` }}
          >
            {word}&nbsp;
          </span>
        ))}
      </h1>
    </div>
  );
};

export default AnimatedText;
