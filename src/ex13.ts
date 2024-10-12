// Create a class decorator `InjectTimestamp` that adds a `timestamp` property to a class.
// The decorator should modify the class so that every time an instance is created, it has the current timestamp.

function InjectTimestamp<T extends { new (...args: any[]): {} }>(
  target: T,
  context: ClassDecoratorContext
) {
  return class extends target {
    timestamp = new Date();

    constructor(...args: any[]) {
      super(...args);
    }
  };
}

@InjectTimestamp
class Report1 {
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

// Expected output (when creating a new instance):
const report: Report1 = new Report1("Quarterly Report");
report.title; // "Quarterly Report"
report.timestamp; // current date and time
console.log(report.timestamp);
