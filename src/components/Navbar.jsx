export default function Navbar() {
  return (
    <>
      <nav className=" w-full bg-emerald-100   h-20 border-b-slate-900 border flex justify-between items-center   px-8 font-semibold     rounded-t-3xl ">
        <ul className="flex gap-8">
          <a href="">Home</a>
          <a href="">Work</a>
          <a href="">About Me</a>
          <a href="">Tech Stack</a>
        </ul>
        <div>
          <button className="bg-emerald-400 rounded-2xl px-4 p-2 font-semibold">
            Download my resume
          </button>
        </div>
      </nav>
    </>
  );
}
