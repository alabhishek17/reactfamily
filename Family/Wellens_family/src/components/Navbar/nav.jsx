import style from "./css_nav.module.css"

function Nav(){
    return (
        <div>
          <h2 style={{color:"pink"}}>Family Wellenss</h2>
          <h5>MASSAGE THERAPY</h5>
          <br />
          
          <section className={style.navList}>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>FAQ</li>
            <li>CONTACT</li>
          </section>
        </div>
    )
}

export default Nav;