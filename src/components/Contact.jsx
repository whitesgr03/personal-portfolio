import Icon from "@mdi/react";
import { mdiEmailOutline } from "@mdi/js";

const Contact = () => {
	return (
		<div className="contact">
			<h2>Contact me</h2>
			<p>
				Please get in touch if you think our work could be mutually
				beneficial!
			</p>
			<address>
				<Icon path={mdiEmailOutline} />
				<p>whitesgr03@gmail.com</p>
			</address>
		</div>
	);
};

export default Contact;
