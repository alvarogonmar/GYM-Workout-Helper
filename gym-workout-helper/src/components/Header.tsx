export default function Header() {
  return (
    <header className="bg-gray-700 ">
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-32" src="/arm.png" alt="logo" />
          </div>
          <nav></nav>
        </div>
      </div>
    </header>
  );
}
