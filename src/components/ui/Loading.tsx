const Loading = () => {
  return (
    <div className="h-dvh w-dvw fixed top-0 left-0 flex flex-col justify-center items-center bg-black/70">
      <span className="loading loading-bars loading-md"/>
      <p className="font-roboto font-thin text-xs text-[#938fd9]">Loading</p>
    </div>
  )
}
export default Loading;