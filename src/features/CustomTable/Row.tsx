import { FC } from 'react';
import { IncludeClassName } from '../../types/reactTypes';
import { ControlsItem, ControlsItemProps } from './ControlsItem';
import styles from './Row.module.scss';

interface RowProps extends ControlsItemProps {
    readonly data: {
        // ui = 'Уровень',
        readonly rowName: string
        readonly salary: number
        readonly equipmentCosts: number
        readonly overheads: number
        readonly estimatedProfit: number
    }
}

export const Row: FC<IncludeClassName<RowProps>> = p => {
    return <tr className={`${p.requiredClass} ${styles['row']}`}>
        <ControlsItem level={p.level} existNextItem={p.existNextItem} requiredClass={`${p.requiredClass}__item ${styles['row__item']}`} />
        <td className={`${p.requiredClass}__item ${styles['row__item']}`}>{}</td>
        <td className={`${p.requiredClass}__item ${styles['row__item']}`}>{p.data.rowName}</td>
        <td className={`${p.requiredClass}__item ${styles['row__item']}`}>{p.data.salary}</td>
        <td className={`${p.requiredClass}__item ${styles['row__item']}`}>{p.data.equipmentCosts}</td>
        <td className={`${p.requiredClass}__item ${styles['row__item']}`}>{p.data.overheads}</td>
        <td className={`${p.requiredClass}__item ${styles['row__item']}`}>{p.data.estimatedProfit}</td>
    </tr>
}