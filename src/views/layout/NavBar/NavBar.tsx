import React from 'react';
import style from './navBar.module.scss';
export default class NavBar extends React.Component {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className={style['nav-bar']}>
                <div className={style['user-info']}>
                    lipeng
                </div>
            </div>
        );
    }
}
