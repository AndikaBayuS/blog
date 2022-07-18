interface CardProps {
  title: string;
  post: string;
  onClick: (...args: any) => any;
}

export default function Card({ title, post, onClick }: CardProps) {
  return (
    <div
      className="w-full cursor-pointer rounded-lg border bg-night-white text-night-dark shadow transition-all duration-300 hover:shadow-lg hover:shadow-night-pink/50"
      onClick={onClick}
    >
      <div className="px-4 py-5 sm:p-6">
        <div className="leading-relaxed antialiased">
          <p className="text-xl font-bold">{title}</p>
          <p className="text-base">June 22, 2022 - Tech</p>
          <p>{post}</p>
        </div>
      </div>
    </div>
  );
}
