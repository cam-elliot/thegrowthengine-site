const metrics = [
  {
    value: "10+",
    label: "Target Retainer Clients",
    sublabel: "First 12 Months"
  },
  {
    value: "$500k",
    label: "Year One Revenue Target", 
    sublabel: "Path to $1M Year Two"
  },
  {
    value: "20+",
    label: "Years Experience",
    sublabel: "Proven Track Record"
  },
  {
    value: "5+", 
    label: "Industries Served",
    sublabel: "Cross-Sector Expertise"
  }
];

export default function Results() {
  return (
    <section id="results" className="section-padding gradient-primary text-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Driving Measurable Growth</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our outcome-oriented approach delivers tangible results that scale your business and accelerate revenue growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">{metric.value}</div>
              <div className="text-blue-100">{metric.label}</div>
              <div className="text-sm text-blue-200 mt-1">{metric.sublabel}</div>
            </div>
          ))}
        </div>

        <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=400" 
            alt="Analytics dashboard showing growth metrics" 
            className="rounded-xl w-full h-auto" 
          />
        </div>
      </div>
    </section>
  );
}
