import Card from "@/components/common/Card";
import Button from "@/components/common/Button";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        ALX Listing App 🚀
      </h1>
      <Card title="Test Card">
        <Button label="Click Me" />
      </Card>
    </main>
  );
}
