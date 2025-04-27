import Box from '@mui/material/Box'
import RightVideoBlock from '@/components/RightVideoBlock'
import { LeftBlockHomePage } from '@/components/HomePage/LeftBlockHomePage'
import styles from '@/app/(pages)/home/home.module.css'
import { Typography } from '@mui/material'

export default function Home() {
  return (
    <>
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <LeftBlockHomePage />
        <RightVideoBlock />
      </Box>
      <Box sx={{display: 'flex', justifyContent:'center', alignItems: 'center', height: '100vh', width: '100%'}}>
        <Box className={styles.GridTable}>
          <div className={styles.title}>
            <h2>My Header</h2>
          </div>
          <div className={styles.first}>
            <a href='#'>Link 3</a>
          </div>
          <div className={styles.second}>
            <h3>Lorem Ipsum</h3>
          </div>
          <div className={styles.secondDescription}>
            <h4>Footer</h4>
          </div>
          <div className={styles.third}>
            <h4>Footer</h4>
          </div>
          <div className={styles.thirdDescription}>
            <h4>Footer</h4>
          </div>
        </Box>

      </Box>
    </>
  )
}
