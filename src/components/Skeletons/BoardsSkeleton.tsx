export const BoardsSkeleton = () => {
  return (
    <div className="w-full h-screen p-4 gap-5">
      <div className="h-full w-full flex py-5 gap-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex h-fit bg-black/30 rounded dark:bg-white/10 w-80 flex-col p-2 gap-2">
            <div className=" h-10 bg-colOff-off animate-pulse rounded"></div>
            <div className=" h-80 bg-colOff-off animate-pulse rounded"></div>
            <div className=" h-32 bg-colOff-off animate-pulse rounded"></div>
          </div>
        ))}
      </div>
    </div>
    // <Box width="100%" overflow="hidden">
    //   <Box display="flex" gap={5} height="100vh" width="max-content" px={5}>
    //     {[...Array(5)].map((_, i) => (
    //       <Box key={i} display="flex" flexDirection="column" width={240} height="83vh" p={2} borderRadius={2} boxShadow={3} bgcolor="background.paper">
    //         <Skeleton variant="rectangular" width="100%" height={30} />
    //         <Skeleton variant="rectangular" width="100%" height={150} sx={{ my: 2 }} />
    //         <Skeleton variant="rectangular" width="100%" height={100} />
    //       </Box>
    //     ))}
    //   </Box>
    // </Box>
  );
};
