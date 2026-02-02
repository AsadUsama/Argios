import Styles from "./contactMap.module.scss"
import IntroHeadingMain from "../common/introHeadingMain/introHeadingMain"
import Button from "../button/button"
export default function contactMap() {
    return (
        <div className="container">
            <div className="row">
                <div className={Styles.contactMapWrap}>
                    <div className={Styles.map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5406036725153!2d-0.11955374292543776!3d51.50329730475378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon%20Eye!5e0!3m2!1sen!2s!4v1762785225367!5m2!1sen!2s"
                            width={"100%"}
                            height={"100%"}
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading={"lazy"}
                            referrerPolicy={"no-referrer-when-downgrade"}
                        ></iframe>
                    </div>
                    <div className={Styles.text}>
                        <IntroHeadingMain
                            subHeading="Contact Us"
                            mainHeading="Write a Message" />

                        <form className={Styles.textForm} action="">

                            <div className={Styles.textInput}>
                                <input id="#name" type="text" placeholder="Name" />
                                <input id="#email" type="text" placeholder="Email" />
                            </div>
                            <textarea placeholder="Message" name="" id="Write a Message"></textarea>
                            <Button>Send a Message</Button>
                        </form>


                    </div>
                </div>
            </div>
        </div >
    )
}