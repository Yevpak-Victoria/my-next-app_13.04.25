import Box from '@mui/material/Box'

export default function RightVideoBlock() {
  return (
    <Box
      sx={{
        flex: 1,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      {/* Відео як фон */}
      <video
        src='/HomePageBackgroundVideo.mp4'
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: 150,
          left: 120,
          width: '70%',
          height: '70%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      />
    </Box>
  )
}
