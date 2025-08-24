const Video = async ({ params }: Params) => {
  const { videoId } = await params;

  return <div className="wrapper page">Video {videoId}</div>;
};

export default Video;
