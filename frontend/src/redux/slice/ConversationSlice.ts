import { createSlice } from '@reduxjs/toolkit';
import { IFUserInSideBar } from '../../models/userInSideBar';

interface conversationState {
	selectedConversation: IFUserInSideBar | null;
	messages: [];
	loading: boolean;
}

const initialState: conversationState = {
	selectedConversation: null,
	messages: [],
	loading: false,
};

const ConversationSlice = createSlice({
	name: 'conversation',
	initialState,
	reducers: {
		setSelectedConversation: (state, action) => {
			state.selectedConversation = action.payload;
		},
		setMessages: (state, action) => {
			state.messages = action.payload;
			state.loading = false;
		},
		startSendMessage: (state) => {
			console.log('startSendMessage');
			state.loading = true;
		},
		successSendMessage: (state) => {
			console.log('successSendMessage');
			state.loading = false;
		},
	},
});

export const {
	setSelectedConversation,
	setMessages,
	startSendMessage,
	successSendMessage,
} = ConversationSlice.actions;

export default ConversationSlice.reducer;
