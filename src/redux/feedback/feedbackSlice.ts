import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFeedbacks, postFeedback } from "./feedbackAPI";
import { toast, Bounce } from 'react-toastify';

type FeedbackSchema = {
    id?: number;
    name: string;
    rating: number;
    descr: string;
}

const initialState: { reviews: FeedbackSchema[] } = {
    reviews: []
};

const FeedbacksSlice = createSlice({
    name: 'feedbacks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFeedbacks.fulfilled, (state, action: PayloadAction<FeedbackSchema[]>) => {
            state.reviews = action.payload;
        });
        builder.addCase(postFeedback.fulfilled, (state) => {
            toast.success('Feedback was successfully posted', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });
        });
        builder.addCase(postFeedback.rejected, (_, action) => {
            toast.error("Feedback wasn't successfully posted (Try to write longer comment)", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });
        });
    },
});

export const feedbacksReducer = FeedbacksSlice.reducer;