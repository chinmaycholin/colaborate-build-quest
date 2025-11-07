import { useEffect, useState } from "react";

const StatsSection = () => {
  const stats = [
    { value: 500, suffix: "+", label: "Projects Completed" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 150, suffix: "+", label: "Team Members" },
    { value: 10, suffix: "+", label: "Years of Excellence" },
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="font-heading text-4xl md:text-5xl font-bold">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm md:text-base text-primary-foreground/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

export default StatsSection;
