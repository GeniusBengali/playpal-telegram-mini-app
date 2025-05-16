const Loading = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <span className="loading loading-bars loading-md"/>
      <p className="font-roboto font-thin text-xs text-[#938fd9]">Loading</p>
    </div>
  )
}
export default Loading;