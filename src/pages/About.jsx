import Card from "../components/Card";

export default function About() {
  return (
    <div>
      <Card>
        <h2 className="text-2xl font-bold text-purple-700">
          About This Project
        </h2>

        <p className="mt-4 text-gray-600">
          This Employee Management System is built using React,
          Redux Toolkit, and Tailwind CSS. It allows users to
          manage employee records, add or delete employees,
          and receive real-time notifications.
        </p>
      </Card>
    </div>
  );
}
