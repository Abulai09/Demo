import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header=(props) =>{
    return(
        <header>
            <div className={s.wrapper}>
                <h2>Social post</h2>
                <nav className={s.nav}>
                    <div className={s.link}><NavLink to="/" activeClassName={s.active}>Profile</NavLink></div>
                    <div className={s.link}><NavLink to="/Diologs" activeClassName={s.active}>Messages</NavLink></div>
                    <div className={s.link}><NavLink to="/News" activeClassName={s.active}>News</NavLink></div>
                    <div className={s.link}><NavLink to="/Users" activeClassName={s.active}>Users</NavLink></div>
                </nav>
                {
                    props.isAuth ?
                     <span>{props.email}</span> 
                    : <nav className={s.Nav}>
                            <div className={s.Link}><a href="/login" className={`${s.btn} ${s.btn_b}`}>Login</a></div>
                            <div className={s.Link}><a href="/" className={s.btn}>Register</a></div>
                    </nav>
                }
                <div className={s.Link}><button onClick={props.logOut} className={`${s.btn} ${s.btn_b}`}>Logout</button></div>
            </div>
      </header>
    )
}
export default Header