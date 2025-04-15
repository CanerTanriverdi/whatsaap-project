import { db } from "./firebase";
import { create } from "zustand";
import { doc, getDoc } from "firebase/firestore";
import { useUserStore } from "./userStore";

export const useChatStore = create((set) => ({
  chatId: null,
  user: null,
  isCurrentUserBlocked: false,
  isReceiverBlocked: false,
  changeChat: (chatId, user) => {
    const currentUser = useUserStore.getState().currentUser;

    // CHECK IF THE USER IS BLOCKED

    if (user.blocked.includes(currentUser.uid)) {
      set({ chatId, user: null, isCurrentUserBlocked: true, isReceiverBlocked: false });
    }

    // CHECK IF THE RECEIVER IS BLOCKED
    else if (currentUser.blocked.includes(user.uid)) {
      set({ chatId, user: user, isCurrentUserBlocked: false, isReceiverBlocked: true });
    } else {
      return set({ chatId, user, isCurrentUserBlocked: false, isReceiverBlocked: false });
    }
  },

  changeBlock: () => {
    set((state) => ({ ...state, isReceiverBlocked: !state.isReceiverBlocked }));
  },
}));
