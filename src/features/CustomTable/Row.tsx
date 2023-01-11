import { FC } from 'react';
import { IncludeClassName } from '../../types/reactTypes';
import { Controls, ControlsProps } from './Controls';
import styles from './Row.module.scss';

interface RowProps extends ControlsProps {
    readonly data: {
        readonly rowName: string
        readonly salary: number
        readonly equipmentCosts: number
        readonly overheads: number
        readonly estimatedProfit: number
    }
}

export const Row: FC<IncludeClassName<RowProps>> = p => {
    let tdClassName = styles['row__item'] ?? ''
    if (tdClassName.length)
        tdClassName = ' ' + tdClassName
    tdClassName = p.requiredClass + tdClassName

    return <tr className={styles['row']}>
        <td className={tdClassName}>
            <Controls linesMask={p.linesMask} existOutputLine={p.existOutputLine} /></td>
        <td className={tdClassName}>{p.data.rowName}</td>
        <td className={tdClassName}>{p.data.salary}</td>
        <td className={tdClassName}>{p.data.equipmentCosts}</td>
        <td className={tdClassName}>{p.data.overheads}</td>
        <td className={tdClassName}>{p.data.estimatedProfit}</td>
    </tr>
}