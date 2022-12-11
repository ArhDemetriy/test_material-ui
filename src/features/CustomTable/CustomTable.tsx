import { FC } from 'react';
import styles from './CustomTable.module.scss';

interface CustomTableProps{
    caption?: string
}

export const CustomTable: FC<CustomTableProps> = p => {

    return <table className={styles['table']}>
        {!p.caption?.length ? null
            : <caption children={p.caption} />}
        <colgroup>
            <col className={styles['table__first_col']}/>
            <col span={2} />
        </colgroup>
        <thead></thead>
    </table>
}