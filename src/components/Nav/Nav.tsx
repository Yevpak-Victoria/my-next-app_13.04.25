import styles from '@/app/page.module.css'
import Box from '@mui/material/Box'
import NavCategory from '@/components/Nav/NavCategory'
import { Button } from '@mui/material'
import CustomButton from '@/components/CustomButton'

const navCategoriesOptions: string[] = [
  '↘ Послуги',
  'Портфоліо¹¹⁴',
  'Компанія',
  'Відгуки',
  'Блог',
  'FaQ',
  'Контакти',
]

export function Nav (){
  return (
    <nav className={styles.nav}>
      {/*<p className={styles.navLogo}>Logo</p>*/}
      <p className={styles.myTitle}>
        <span className={styles.frontLogoSymbols}>
          <span className={styles.colon}>:</span>
          <span className={styles.slash}>//</span>
        </span>
        Seok
      </p>
      <Box className={styles.navMiddleItem}>
        {navCategoriesOptions.map((category) => (
          <NavCategory key={category}>{category}</NavCategory>
        ))}
      </Box>
      <CustomButton>Залишити заявку</CustomButton>
    </nav>
  )
}