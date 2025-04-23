import styles from '../../page.module.css'
import Box from '@mui/material/Box'

export default function Home() {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Лівий блок */}
      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1>Привіт</h1>
      </Box>

      {/* Правий блок з відео як фоном */}
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
          src="/HomePageBackgroundVideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: 70,
            left: 70,
            width: '60%',
            height: '60%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        />
      </Box>
    </Box>
  )
}
