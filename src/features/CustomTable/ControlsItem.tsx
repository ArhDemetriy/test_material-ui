import { FC } from 'react';
import { IncludeClassName } from '../../types/reactTypes';
import styles from './ControlsItem.module.scss';
import folder1 from "./ico/folder1.svg";
import folder2 from "./ico/folder2.svg";
import doc from "./ico/doc.svg";

export interface ControlsProps{
    readonly level?: 0 | 1 | 2
    readonly existNextItem?: boolean
}
export const Controls: FC<IncludeClassName<ControlsProps>> = p => {

    let icoSrc = folder1
    if (p.level === 1)
        icoSrc = folder2
    else if (p.level === 2)
        icoSrc = doc

    return <td className={`${p.requiredClass} ${styles['controls'] ?? ''}`}>
        <div className={styles['controls']}>
            <div/>
            <img src={icoSrc} alt="" />
        </div>
        {p.existNextItem ? '+' : '-'}
    </td>
}