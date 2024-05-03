import styles from "./css_body.module.css"

function Body(){
    return (
        <div>
          <section className={styles.body_img}>
            <h1>hello</h1>
          </section>
          <section className={styles.body_container}>
            <h1>Think Health. Think Massage.</h1>
            <p>We are open 9am to 6pm,Monday through Sunday.if you would like to schedule an appointment</p>
            <p>with us, please call us at 987-654-3210 today!</p>
            <button>LEARN MORE ABOUT US</button>
            <button>CONTACT US TODAY</button>
          </section>
          
          <section className={styles.body_text}>
            <p>Are you looking for a professional, registered massage therapist? Sample Massage Therapy has 4 registered massage therapists
                 who can provide clinical massage.</p>
            <p>We are committed to your long term health and well-being. Our multi-disciplinary clinic provides a balanced approach to a healthy lifestyle. Enhance your health and improve your performance with our treatments.</p>
            <p>We welcome you to come explore all the benefits you'll enjoy as one of our valued guests. Our professional staff is committed to offering the best massage therapy in Mainland</p>
          </section>
          <hr />
          <section className={styles.body_last}>
            <h1>Family Wellness Massage Therapy</h1>
            <p>9876 Main Street, Suite 123, Mainland, ML12345</p>
            <p>Phone: 987.654.3210</p>
          </section>

          <footer style={{backgroundColor:"darkgray",textAlign:"center"}}>
            <p>Copyright 2016. Waste.com. All Rights Reserved</p>
          </footer>
        </div>
    )
}
export default Body;