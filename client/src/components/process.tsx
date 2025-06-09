const processSteps = [
  {
    number: "1",
    title: "Discovery",
    description: "Understanding your current state and challenges"
  },
  {
    number: "2", 
    title: "Diagnosis",
    description: "Identifying gaps and opportunities for growth"
  },
  {
    number: "3",
    title: "Design", 
    description: "Creating tailored solutions and strategies"
  },
  {
    number: "4",
    title: "Delivery",
    description: "Implementing solutions with hands-on support"
  },
  {
    number: "5",
    title: "Debrief & Optimize",
    description: "Continuous improvement and optimization"
  }
];

export default function Process() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Proven Process</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A systematic approach to transforming your revenue operations through our proven 5D methodology.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className={`w-16 h-16 ${index === 4 ? 'bg-accent' : 'bg-primary'} rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl`}>
                {step.number}
              </div>
              <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
