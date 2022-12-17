import { FC } from 'react';
import { IncludeClassName } from '../../types/reactTypes';
import styles from './ControlsItem.module.scss';

export interface ControlsItemProps{
    readonly level?: 0 | 1 | 2
    readonly existNextItem?: boolean
}
export const ControlsItem: FC<IncludeClassName<ControlsItemProps>> = p => {
    return <td className={`${p.requiredClass} ${styles['controls_item'] ?? ''}`}>
        {p.level ?? 0}
        {p.existNextItem ? '+' : '-'}
    </td>
}