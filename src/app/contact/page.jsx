import styles from './contact.module.css'
import Image from 'next/image'

export const metadata = {
    title: 'Contact page',
    description: 'contact page of our app',
}

const ContactPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src='/contact.png' fill alt='' className={styles.img} />
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <input type='text' placeholder='Name and Surname' />
                    <input type='email' placeholder='Email Address' />
                    <input type='text' placeholder='Phone Number (Optional)' />
                    <textarea name='' id='' cols='30' rows='10' placeholder='Message'></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage
