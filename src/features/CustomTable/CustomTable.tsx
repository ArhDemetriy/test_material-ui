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
        <colgroup>
            <col className={styles['table__ui_col']}/>
            <col className={styles['table__title_col']}/>
        </colgroup>
        <thead className={styles['table__head']}>
            <tr>
                <th scope="col">{ColumnCaptions.ui}</th>
                <th scope="col">{ColumnCaptions.rowName}</th>
                <th scope="col">{ColumnCaptions.salary}</th>
                <th scope="col">{ColumnCaptions.equipmentCosts}</th>
                <th scope="col">{ColumnCaptions.overheads}</th>
                <th scope="col">{ColumnCaptions.estimatedProfit}</th>
            </tr>
        </thead>
        <tbody className={styles['table__body']}>
            <tr>
                <td>item0</td>
                <td>item1</td>
                <td>item2</td>
                <td>item3</td>
                <td>item4</td>
                <td>item5</td>
                <td>item6</td>
            </tr>
            <tr>
                <td>item0</td>
                <td>item1</td>
                <td>item2</td>
                <td>item3</td>
                <td>item4</td>
                <td>item5</td>
                <td>item6</td>
            </tr>
        </tbody>
    </table>
}
