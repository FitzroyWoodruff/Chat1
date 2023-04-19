import {
	MultiChatSocket,
	MultiChatWindow,
	useMultiChatLogic,
} from "react-chat-engine-advanced";
import "./App.css";

const ChatsPage = (props) => {
	const chatProps = useMultiChatLogic(
		"9d8a4219-11ca-47f4-92c6-6322ac1b4b89",
		props.user.username,
		props.user.secret
	);
	return (
		<div style={{ height: "100vh" }}>
			<MultiChatSocket {...chatProps} />
			<MultiChatWindow {...chatProps} style={{ height: "100%" }} />
		</div>
	);
};

export default ChatsPage;
