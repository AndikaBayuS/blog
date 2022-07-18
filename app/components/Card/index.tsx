interface CardProps {
  title: string;
  description: string;
  onClick: (...args: any) => any;
}

export default function Card({ title, description, onClick }: CardProps) {
  return (
    <div
      className="w-full cursor-pointer rounded-lg border border-light-title shadow transition-all duration-300 hover:shadow-lg hover:rounded-none"
      onClick={onClick}
    >
      <div className="px-4 py-5 sm:p-6">
        <div className="leading-relaxed antialiased">
          <p className="text-xl font-semibold text-light-title">{title}</p>
          <p className="text-base text-light-paragraph ">{description}</p>
        </div>
      </div>
    </div>
  );
}
