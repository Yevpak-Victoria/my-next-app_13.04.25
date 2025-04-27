import { Typography } from '@mui/material'
import Box from '@mui/material/Box'

export function LeftBlockHomePage(){
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <Typography
        sx={{
          fontSize: '51px',
          fontFamily: 'var(--font-unbounded), sans-serif',
          textTransform: 'uppercase',
          marginTop: '20vh',
          lineHeight: 1.3,
        }}
      >
        SEO <br />
        просування <br />
        <span
          style={{
            background:
              'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 1) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
            сайтів
          </span>
      </Typography>
      <hr style={{ width: '86%', marginTop: '2rem', marginBottom: '1rem', borderColor: '#b3b3b3' }} />
      <Typography sx={{ fontSize: '16px' }}>Надішліть заявку та отримайте пропозицію щодо просування та <br/>створення сайту</Typography>
    </Box>
  )
}