import { FC } from 'react';
import { ColumnCaptions, TableCaption } from './TableConstants';
import styles from './CustomTable.module.scss';

interface CustomTableProps{
    caption?: boolean
}

export const CustomTable: FC<CustomTableProps> = p => {

    return <table className={styles['table']}>
        {!p.caption ? null
            : <caption className={styles['table__caption']}>{TableCaption.value}</caption>}
        <colgroup className={styles['table__colgroup']}>
            <col className={styles['table__colgroup-ui']}/>
            <col className={styles['table__colgroup-title']}/>
            <col span={1024} className={styles['table__colgroup-other']} />
        </colgroup>
        <thead className={styles['table__head']}>
            <tr>
                <th scope="col" className={styles['table__head__item']}>{ColumnCaptions.ui}</th>
                <th scope="col" className={styles['table__head__item']}>{ColumnCaptions.rowName}</th>
                <th scope="col" className={styles['table__head__item']}>{ColumnCaptions.salary}</th>
                <th scope="col" className={styles['table__head__item']}>{ColumnCaptions.equipmentCosts}</th>
                <th scope="col" className={styles['table__head__item']}>{ColumnCaptions.overheads}</th>
                <th scope="col" className={styles['table__head__item']}>{ColumnCaptions.estimatedProfit}</th>
            </tr>
        </thead>
        <tbody className={styles['table__body']}>
            <tr>
                <td className={styles['table__body__item']}>item0</td>
                <td className={styles['table__body__item']}>item1</td>
                <td className={styles['table__body__item']}>item2</td>
                <td className={styles['table__body__item']}>item3</td>
                <td className={styles['table__body__item']}>item4</td>
                <td className={styles['table__body__item']}>item5</td>
            </tr>
            <tr>
                <td className={styles['table__body__item']}>item0</td>
                <td className={styles['table__body__item']}>item1</td>
                <td className={styles['table__body__item']}>item2</td>
                <td className={styles['table__body__item']}>item3</td>
                <td className={styles['table__body__item']}>item4</td>
                <td className={styles['table__body__item']}>item5</td>
            </tr>
        </tbody>
    </table>
}
