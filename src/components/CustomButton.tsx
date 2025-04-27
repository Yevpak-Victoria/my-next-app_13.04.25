import styles from '@/app/page.module.css'
import { Button } from '@mui/material'

type Props = {
  children: React.ReactNode
}

export default function CustomButton({ children }: Props) {
  return (
    <Button
      variant='contained'
      className={styles.navButton}
      sx={{
        height: '60px',
        borderRadius: '50px',
        width: '18vw',
        fontSize: '18px',
        fontWeight: '500px',
        backgroundColor: 'white',
        color: 'black',
        textTransform: 'initial',
        padding: '1vh',
      }}
    >
      {children}
    </Button>
  )
}
