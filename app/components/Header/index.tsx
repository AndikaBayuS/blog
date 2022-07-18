import openPeeps from "~/assets/images/open-peeps.png";

export default function Header() {
  return (
    <div className="flex h-screen flex-col-reverse justify-between items-center md:h-96 md:flex-row">
      <div className="leading-relaxed antialiased w-full">
        <p className="font-semibold text-light-button">Hello,</p>
        <p className="text-4xl font-semibold text-light-title">I'm Andika</p>
        <p className="text-2xl text-light-title">I think so, this is it.</p>
        <p className="text-xl text-light-paragraph">
          Well, I'm an Informatics student who interested with web development.
        </p>
        <div className="mt-2 w-24 rounded-full bg-light-button px-2 py-2">
          <p className="text-center font-bold text-light-button-text">GitHub</p>
        </div>
      </div>
      <div className="flex w-full justify-center md:justify-end">
        <img src={openPeeps} className="h-64 scale-x-[-1]" />
      </div>
    </div>
  );
}
