import { FC } from 'react';
import { IncludeClassName } from '../../types/reactTypes';
import styles from './Controls.module.scss';
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

    return <td className={p.requiredClass}>
        <div className={styles['controls']}>
            <div className={`${styles['controls__wrapper']} ${styles['controls__wrapper-left']}`}>
                <div className={styles['controls__wrapper']}>
                    <div className={`${styles['controls__line']} ${styles['controls__line-horizontal']}`} />
                </div>
                <div className={`${styles['controls__wrapper']} ${styles['controls__wrapper-bottom']}`}>
                    <div className={styles['controls__wrapper']}>
                        <div className={`${styles['controls__line']} ${styles['controls__line-vertical']}`} />
                    </div>
                    <img src={icoSrc} className={styles['controls__image']} alt="" />
                </div>
            </div>
        </div>
    </td>
}