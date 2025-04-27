import styles from './nav.module.css'

type Props = {
  children: React.ReactNode
}

export default function NavCategory({ children }: Props) {
  return <p className={styles.navCategoriesOptionStyle}>{children}</p>
}
