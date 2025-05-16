const BannerAds = () => {
  const baseUrl =  import.meta.env.VITE_BASE_URL as string

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <adsgram-task
        data-block-id='task-10982'
        data-debug={baseUrl.includes("localhost")}
        className="task"
      >
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error */}
      </adsgram-task>
    </>
  )
}
export default BannerAds