const ScrollableComponent = ({title, className, children}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="h-[calc(100vh-64px)] flex flex-col gap-4">
      <h1 className="text-center text-md uppercase font-play font-bold mt-2 app-gradient-font">
        {title}
      </h1>
      <div className={`flex-1 overflow-y-auto ${className}`}>
        {children}
      </div>
    </div>
  )
}
export default ScrollableComponent