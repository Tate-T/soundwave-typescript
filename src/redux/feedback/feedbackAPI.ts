import axios, { Axios, AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

type FeedbackSchema = {
    id?: number;
    name: string;
    rating: number;
    descr: string;
}

type FeedbacksSchema = {
    data: FeedbackSchema[];
    total: number;
    page: string;
    limit: string;
}

export const getFeedbacks = createAsyncThunk<FeedbackSchema[], void, {rejectValue:string}>('feedbacks/getFeedbacks', async (_, thunkAPI) => {
    try {
        const response = await axios.get<FeedbacksSchema>('https://sound-wave.b.goit.study/api/feedbacks?limit=18&page=1')
        return response.data.data;
    } catch (e) {
        const err = e as Error;
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const postFeedback = createAsyncThunk<void, FeedbackSchema, {rejectValue:string}>('feedbacks/postFeedback', async (_:FeedbackSchema, thunkAPI) => {
    try {
        await axios.post('https://sound-wave.b.goit.study/api/feedbacks', _);
    } catch (e) {
        const err = e as AxiosError<{message: string}>;
        const message = err.response?.data?.message || err.message;
        return thunkAPI.rejectWithValue(message);
    }
});