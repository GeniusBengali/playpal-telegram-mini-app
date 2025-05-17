const BannerAds = ({
  debugOnly = true,
}: Readonly<{
  debugOnly?: boolean;
}>) => {
  if(import.meta.env.DEV){
    return (
      <div className="text-center">Ad Here</div>
    );
  }

  return (
    <>
      {/* @ts-ignore */}
      <adsgram-task
        data-block-id='task-10982'
        data-debug={debugOnly}
        className="task"
      >
        {/* @ts-ignore */}
      </adsgram-task>
    </>
  )
}
export default BannerAds