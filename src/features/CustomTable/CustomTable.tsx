import { FC } from 'react';
import { ColumnCaptions, TableCaption } from './TableConstants';
import styles from './CustomTable.module.scss';
import { Row } from './Row';

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
            <col span={4} className={styles['table__colgroup-other']} />
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
            <Row
                requiredClass={styles['table__body__item'] || ''}
                existOutputLine={true}
                data={{
                    rowName: 'row0',
                    salary: 0,
                    equipmentCosts: 1,
                    overheads: 2,
                    estimatedProfit: 3,
                }} />
            <Row
                requiredClass={styles['table__body__item'] || ''}
                linesMask={['long']}
                existOutputLine={true}
                data={{
                    rowName: 'row1',
                    salary: 0,
                    equipmentCosts: 1,
                    overheads: 2,
                    estimatedProfit: 3,
                }} />
            <Row
                requiredClass={styles['table__body__item'] || ''}
                linesMask={['long', 'long']}
                existOutputLine={false}
                data={{
                    rowName: 'row1',
                    salary: 0,
                    equipmentCosts: 1,
                    overheads: 2,
                    estimatedProfit: 3,
                }} />
            <Row
                requiredClass={styles['table__body__item'] || ''}
                linesMask={['long', 'short']}
                existOutputLine={false}
                data={{
                    rowName: 'row1',
                    salary: 0,
                    equipmentCosts: 1,
                    overheads: 2,
                    estimatedProfit: 3,
                }} />
            <Row
                requiredClass={styles['table__body__item'] || ''}
                linesMask={['short']}
                existOutputLine={false}
                data={{
                    rowName: 'row1',
                    salary: 0,
                    equipmentCosts: 1,
                    overheads: 2,
                    estimatedProfit: 3,
                }} />
        </tbody>
    </table>
}
