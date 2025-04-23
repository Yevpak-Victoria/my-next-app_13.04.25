import styles from "@/app/page.module.css";
import {Button} from "@mui/material";

type Props = {
    children: React.ReactNode;
};


export default function CustomButton({ children }: Props) {
    return <Button variant="contained" className={styles.navButton}
    sx={{
        height: '9vh',
        borderRadius: '50px',
        width: '16vw',
        fontSize: '18px',
        fontWeight: '600',
        backgroundColor: 'white' ,
        color: 'black',
        textTransform: 'initial',
    }}
    >
        { children }
    </Button>
}